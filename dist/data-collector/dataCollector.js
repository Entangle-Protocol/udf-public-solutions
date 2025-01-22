"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class DataCollector {
    async fetchBinancePrice() {
        const binanceUrl = `https://data-api.binance.vision/api/v3/ticker/price?symbol=${this.ticker}`;
        try {
            const response = await axios_1.default.get(binanceUrl, this.factory.getHttpConfig('binance.com'));
            return parseFloat(response.data.price);
        }
        catch (error) {
            console.error('Error fetching price from Binance:', error);
            return null;
        }
    }
    async fetchBybitPrice() {
        const bybitUrl = `https://api.bybit.com/v5/market/tickers?symbol=${this.ticker}&category=spot`;
        try {
            const response = await axios_1.default.get(bybitUrl, this.factory.getHttpConfig('bybit.com'));
            const lastPrice = response.data.result?.list[0].lastPrice;
            if (!lastPrice)
                return null;
            return parseFloat(lastPrice);
        }
        catch (error) {
            console.error('Error fetching price from Bybit:', error);
            return null;
        }
    }
    aggregatePrices(prices) {
        let sum = 0;
        let validCount = 0;
        for (const price of prices) {
            if (price !== null) {
                sum += price;
                validCount++;
            }
        }
        if (validCount === 0) {
            return null;
        }
        let average = sum / validCount;
        const [, fractionalPart = ''] = average.toString().split('.');
        average *= 10 ** fractionalPart.length;
        const nominator = BigInt(average) * BigInt(10 ** (18 - fractionalPart.length));
        return nominator;
    }
    async start() {
        console.log('Starting price aggregation...');
        const callFrequencyMs = Math.round(1000 / this.reqPerSec);
        const sessionManager = this.factory.getSessionManager();
        const dataPublisher = this.factory.getPublisher();
        const fetchPrices = async (lastCallTimestamp) => {
            let callTimestamp;
            try {
                const [binancePrice, bybitPrice] = await Promise.all([
                    this.fetchBinancePrice(),
                    this.fetchBybitPrice(),
                ]);
                const aggregatedPrices = this.aggregatePrices([
                    binancePrice,
                    bybitPrice,
                ]);
                console.log('Aggregated Prices:', aggregatedPrices);
                callTimestamp = Date.now();
                if (aggregatedPrices) {
                    const dataToSign = {
                        amount: aggregatedPrices,
                        timestampMs: callTimestamp,
                        feedKey: this.ticker,
                    };
                    const signatures = sessionManager.sign(dataToSign);
                    dataPublisher.post({
                        timestamp: dataToSign.timestampMs,
                        amount: dataToSign.amount,
                        feed_key: dataToSign.feedKey,
                        signatures,
                    });
                }
            }
            catch (e) {
                callTimestamp = Date.now();
            }
            let nextDelayMs = lastCallTimestamp + callFrequencyMs - callTimestamp;
            nextDelayMs = nextDelayMs < 0 ? 0 : nextDelayMs;
            if (this.isWorking) {
                setTimeout(() => fetchPrices(callTimestamp), nextDelayMs);
            }
        };
        const lastCallTimestamp = Date.now();
        this.isWorking = true;
        fetchPrices(lastCallTimestamp);
    }
    stop() {
        this.isWorking = false;
    }
    constructor(factory, options = { reqPerSec: 1, ticker: 'BTCUSDT' }) {
        this.isWorking = false;
        this.factory = factory;
        this.ticker = options.ticker;
        this.reqPerSec = options.reqPerSec;
    }
}
exports.default = DataCollector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YUNvbGxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhLWNvbGxlY3Rvci9kYXRhQ29sbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBRzFCLE1BQU0sYUFBYTtJQU1QLEtBQUssQ0FBQyxpQkFBaUI7UUFDM0IsTUFBTSxVQUFVLEdBQUcsOERBQThELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvRixJQUFJLENBQUM7WUFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDeEYsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBRU8sS0FBSyxDQUFDLGVBQWU7UUFDekIsTUFBTSxRQUFRLEdBQUcsa0RBQWtELElBQUksQ0FBQyxNQUFNLGdCQUFnQixDQUFDO1FBQy9GLElBQUksQ0FBQztZQUNELE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwRixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQzFELElBQUksQ0FBQyxTQUFTO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBQzVCLE9BQU8sVUFBVSxDQUFDLFNB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