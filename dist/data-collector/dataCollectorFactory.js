"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCollectorFactory = void 0;
const https_1 = require("https");
const dataCollector_1 = __importDefault(require("./dataCollector"));
class DataCollectorFactory {
    getHttpConfig(domain) {
        return this.requestConfig[domain];
    }
    getSessionManager() {
        return this.sessionManager;
    }
    getPublisher() {
        return this.dataPublisher;
    }
    create(options) {
        return new dataCollector_1.default(this, options);
    }
    constructor(sessionManager, dataPublisher, dataProviderApiKeys, rootCerts) {
        this.dataPublisher = dataPublisher;
        this.sessionManager = sessionManager;
        const httpsAgent = new https_1.Agent({
            rejectUnauthorized: true,
            ca: rootCerts,
        });
        this.requestConfig = {};
        for (const apiConfig of dataProviderApiKeys) {
            this.requestConfig[apiConfig.domain] = {
                httpsAgent: httpsAgent,
                headers: {
                    [apiConfig.header]: apiConfig.key,
                },
            };
        }
    }
}
exports.DataCollectorFactory = DataCollectorFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YUNvbGxlY3RvckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGF0YS1jb2xsZWN0b3IvZGF0YUNvbGxlY3RvckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUNBQThCO0FBSzlCLG9FQUE0QztBQUU1QyxNQUFhLG9CQUFvQjtJQUt0QixhQUFhLENBQUMsTUFBYztRQUMvQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLGlCQUFpQjtRQUNwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFnQjtRQUMxQixPQUFPLElBQUksdUJBQWEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFlBQW1CLGNBQThCLEVBQUUsYUFBNEIsRUFBRSxtQkFBZ0MsRUFBRSxTQUFtQjtRQUNsSSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUVyQyxNQUFNLFVBQVUsR0FBRyxJQUFJLGFBQUssQ0FBQztZQUN6QixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLEVBQUUsRUFBRSxTQUFTO1NBQ2hCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLEtBQUssTUFBTSxTQUFTLElBQUksbUJBQW1CLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRztnQkFDbkMsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLE9BQU8sRUFBRTtvQkFDVCxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRztpQkFDaEM7YUFDSixDQUFBO1FBQ0wsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQXhDRCxvREF3Q0MifQ==