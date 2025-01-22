"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_reader_1 = require("./config-reader");
const session_manager_1 = __importDefault(require("./session-manager"));
const data_collector_1 = require("./data-collector");
const utils_1 = require("./utils");
const data_publisher_1 = require("./data-publisher");
async function main() {
    const config = config_reader_1.InputsReader.instance().read(process.env.INPUT_DATA_FOLDER);
    const dataPublisher = new data_publisher_1.DataPublisher(config.publisher.jwt, config.publisher.endpoint);
    const onChainTeeSessionManager = new session_manager_1.default(config.chains); // for EVM chains
    await onChainTeeSessionManager.registry(config.debugMode);
    const dataCollectorFactory = new data_collector_1.DataCollectorFactory(onChainTeeSessionManager, dataPublisher, config.dataProviderApiKeys, config.rootCerts);
    const btcUsdtCollectorService = dataCollectorFactory.create({ ticker: 'BTCUSDT', reqPerSec: 3 });
    btcUsdtCollectorService.start();
}
main().catch(async (err) => {
    console.log((0, utils_1.getErrorMessage)(err));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxtREFBK0Q7QUFDL0Qsd0VBQStDO0FBQy9DLHFEQUF3RDtBQUV4RCxtQ0FBMEM7QUFDMUMscURBQWlEO0FBRWpELEtBQUssVUFBVSxJQUFJO0lBQ2YsTUFBTSxNQUFNLEdBQUcsNEJBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRTNFLE1BQU0sYUFBYSxHQUFHLElBQUksOEJBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXpGLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSx5QkFBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtJQUNyRixNQUFNLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFMUQsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLHFDQUFvQixDQUNqRCx3QkFBd0IsRUFDeEIsYUFBYSxFQUNiLE1BQU0sQ0FBQyxtQkFBbUIsRUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FDbkIsQ0FBQztJQUVGLE1BQU0sdUJBQXVCLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBRUQsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFVLEVBQUUsRUFBRTtJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUEsdUJBQWUsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQyxDQUFDIn0=