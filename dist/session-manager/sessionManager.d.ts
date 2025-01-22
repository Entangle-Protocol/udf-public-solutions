import { ChainInfo } from "../types";
import { ISessionManager } from "./interface";
import { DataBeforeSign } from '../types';
declare class SessionManager implements ISessionManager {
    private sessions;
    private chainsInfo;
    constructor(chainsInfo: [ChainInfo]);
    sign(data: DataBeforeSign): Record<number, string>;
    registry(debugMode: boolean): Promise<void>;
}
export default SessionManager;
