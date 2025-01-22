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
const web3_1 = __importStar(require("web3"));
const types_1 = require("../types");
const tee_prover_1 = __importDefault(require("./../tee-prover"));
const abi_1 = require("../abi");
class SessionManager {
    constructor(chainsInfo) {
        this.sessions = {};
        this.chainsInfo = chainsInfo;
    }
    sign(data) {
        if (!this.sessions) {
            throw new Error('No active sessions available to sign data');
        }
        data.feedKey = web3_1.utils.padRight(web3_1.utils.asciiToHex(data.feedKey), 64);
        // signing data by each active session
        const signedData = {};
        for (const chainId of Object.keys(this.sessions)) {
            const session = this.sessions[chainId];
            const encodedHexData = session.web3Instance.eth.abi.encodeParameter(types_1.DataBeforeSignAbi, data);
            const dataHash = session.web3Instance.utils.keccak256(encodedHexData);
            const abc = session.web3Instance.eth.accounts.sign(dataHash, session.sessionWallet.privateKey);
            signedData[chainId] = abc.signature;
        }
        return signedData;
    }
    // TODO: add some chain abstraction EVM / Solana / others
    async registry(debugMode) {
        for (const chain of this.chainsInfo) {
            const web3Instance = new web3_1.default(chain.rpc);
            const web3Context = new web3_1.Web3Context({
                provider: web3Instance.currentProvider,
                config: { contractDataInputFill: 'data' },
            });
            const sessionWallet = web3Instance.eth.accounts.create();
            const utilityWallet = web3Instance.eth.accounts.privateKeyToAccount(chain.utilityWalletPrivateKey);
            const dataFeedContract = new web3_1.Contract(abi_1.PULL_ORACLE_ABI, chain.dataFeedContractAddress, web3Context);
            // get tee attestation
            const teeQuote = await tee_prover_1.default.instance().getQuote(sessionWallet.address, { debugMode });
            // sending tx
            const txData = dataFeedContract.methods.initSessionKey(teeQuote.deviceCert, teeQuote.platformCert, teeQuote.sgxQuote, sessionWallet.address).encodeABI();
            const signedTx = await web3Instance.eth.accounts.signTransaction({
                from: utilityWallet.address,
                to: chain.dataFeedContractAddress,
                gasPrice: Number(await web3Instance.eth.getGasPrice()),
                data: txData,
            }, chain.utilityWalletPrivateKey);
            const receipt = await web3Instance.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(`Session registered. ChainId ${chain.chainId}, TxHash: ${receipt.transactionHash}\n`);
            // cache
            this.sessions[chain.chainId] = {
                web3Instance,
                utilityWallet,
                sessionWallet,
                dataFeedContract,
                teeQuote,
            };
        }
    }
}
;
exports.default = SessionManager;
(() => {
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbk1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2Vzc2lvbi1tYW5hZ2VyL3Nlc3Npb25NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2Q0FBMEQ7QUFDMUQsb0NBQXNFO0FBQ3RFLGlFQUE2QztBQUM3QyxnQ0FBeUM7QUFFekMsTUFBTSxjQUFjO0lBSWhCLFlBQW1CLFVBQXVCO1FBSGxDLGFBQVEsR0FBbUMsRUFBRSxDQUFDO1FBSWxELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxJQUFJLENBQUMsSUFBb0I7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBSyxDQUFDLFFBQVEsQ0FBQyxZQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVsRSxzQ0FBc0M7UUFDdEMsTUFBTSxVQUFVLEdBQTJCLEVBQUUsQ0FBQztRQUM5QyxLQUFLLE1BQU0sT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBd0IsRUFBRSxDQUFDO1lBQ3RFLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkMsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyx5QkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3RixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7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