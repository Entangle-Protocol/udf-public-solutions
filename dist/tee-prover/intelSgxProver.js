"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const sdk_js_1 = require("@super-protocol/sdk-js");
const web3_1 = __importDefault(require("web3"));
const quote_mock_1 = require("./quote.mock");
class IntelSgxProver {
    constructor() {
        this.quote = {};
        this.teeDeviceService = null;
    }
    static instance() {
        if (!this._instance) {
            this._instance = new IntelSgxProver();
        }
        return this._instance;
    }
    async getQuote(sessionWalletAddress, options) {
        if (!this.quote[sessionWalletAddress]) {
            const debugMode = options?.debugMode ?? false;
            if (debugMode) {
                return quote_mock_1.MOCKED_QUOTE;
            }
            const { TeeDeviceService } = await Promise.resolve().then(() => __importStar(require('@super-protocol/tee-lib')));
            this.teeDeviceService = new TeeDeviceService({});
            try {
                await fs_1.promises.access('/dev/attestation/report');
            }
            catch (error) {
                throw Error(`invalid running mode, is it run in gramine / gramine? ${error}`);
            }
            const sessionHash = web3_1.default.utils.keccak256(sessionWalletAddress).slice(2);
            const rawBuffer = await this.teeDeviceService.getDataOf(Buffer.from(sessionHash, 'hex'));
            const { certificates: { device, platform }, rawHeader, report, isvEnclaveReportSignature, ecdsaAttestationKey, qeReport, qeReportSignature, qeAuthenticationData } = new sdk_js_1.TeeSgxParser().parseQuote(rawBuffer);
            this.quote[sessionWalletAddress] = {
                deviceCert: device.x509Data,
                platformCert: platform.x509Data,
                sgxQuote: {
                    header: rawHeader,
                    isvReport: report,
                    isvReportSignature: isvEnclaveReportSignature,
                    attestationKey: ecdsaAttestationKey,
                    qeReport: qeReport,
                    qeReportSignature: qeReportSignature,
                    qeAuthenticationData: qeAuthenticationData,
                }
            };
        }
        return this.quote[sessionWalletAddress];
    }
}
;
exports.default = IntelSgxProver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWxTZ3hQcm92ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVlLXByb3Zlci9pbnRlbFNneFByb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQThCO0FBQzlCLG1EQUFzRDtBQUV0RCxnREFBd0I7QUFFeEIsNkNBQTRDO0FBTTVDLE1BQU0sY0FBYztJQUtoQjtRQUpRLFVBQUssR0FBNkIsRUFBRSxDQUFDO1FBQ3JDLHFCQUFnQixHQUE2QixJQUFJLENBQUM7SUFHbkMsQ0FBQztJQUVqQixNQUFNLENBQUMsUUFBUTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSxLQUFLLENBQUMsUUFBUSxDQUFDLG9CQUE0QixFQUFFLE9BQWlDO1FBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQztZQUNwQyxNQUFNLFNBQVMsR0FBRyxPQUFPLEVBQUUsU0FBUyxJQUFJLEtBQUssQ0FBQztZQUU5QyxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUNaLE9BQU8seUJBQVksQ0FBQztZQUN4QixDQUFDO1lBRUQsTUFBTSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsd0RBQWEseUJBQXlCLEdBQUMsQ0FBQztZQUVyRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUM7Z0JBQ0QsTUFBTSxhQUFRLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDckQsQ0FBQztZQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7Z0JBQ2IsTUFBTSxLQUFLLENBQUMseURBQXlELEtBQUssRUFBRSxDQUFDLENBQUM7WUFDbEYsQ0FBQztZQUVELE1BQU0sV0FBVyxHQUFHLGNBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3pGLE1BQU0sRUFDRixZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQ2xDLFNBQVMsRUFDVCxNQUFNLEVBQ04seUJBQXlCLEVBQ3pCLG1CQUFtQixFQUNuQixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUN2QixHQUFHLElBQUkscUJBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUc7Z0JBQy9CLFVBQVUsRUFBRSxNQUFNLENBQUMsUUFBUTtnQkFDM0IsWUFBWSxFQUFFLFFBQVEsQ0FBQyxRQUFRO2dCQUMvQixRQUFRLEVBQUU7b0JBQ04sTUFBTSxFQUFFLFNBQVM7b0JBQ2pCLFNBQVMsRUFBRSxNQUFNO29CQUNqQixrQkFBa0IsRUFBRSx5QkFBeUI7b0JBQzdDLGNBQWMsRUFBRSxtQkFBbUI7b0JBQ25DLFFBQVEsRUFBRSxRQUFRO29CQUNsQixpQkFBaUIsRUFBRSxpQkFBaUI7b0JBQ3BDLG9CQUFvQixFQUFFLG9CQUFvQjtpQkFDN0M7YUFDSixDQUFBO1FBQ0wsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDSjtBQUFBLENBQUM7QUFFRixrQkFBZSxjQUFjLENBQUMifQ==