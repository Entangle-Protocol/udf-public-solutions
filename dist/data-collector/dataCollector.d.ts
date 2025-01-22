import { DataCollectorFactory } from './dataCollectorFactory';
declare class DataCollector {
    private factory;
    private ticker;
    private reqPerSec;
    private isWorking;
    private fetchBinancePrice;
    private fetchBybitPrice;
    private aggregatePrices;
    start(): Promise<void>;
    stop(): void;
    constructor(factory: DataCollectorFactory, options?: {
        reqPerSec?: number;
        ticker?: string;
    });
}
export default DataCollector;
