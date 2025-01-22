import { TeeQuote } from '../types';
interface ITeeProver {
    getQuote(sessionKey: string, options?: Object): Promise<Object>;
}
declare class IntelSgxProver implements ITeeProver {
    private quote;
    private teeDeviceService;
    private static _instance;
    private constructor();
    static instance(): IntelSgxProver;
    getQuote(sessionWalletAddress: string, options?: {
        debugMode?: boolean;
    }): Promise<TeeQuote>;
}
export default IntelSgxProver;
