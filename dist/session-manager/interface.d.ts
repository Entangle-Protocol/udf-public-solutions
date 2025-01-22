import { DataBeforeSign } from '../types';
export interface ISessionManager {
    registry(debugMode: boolean): Promise<void>;
    sign(data: DataBeforeSign): Partial<Record<number, string>>;
}
