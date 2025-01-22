import { AxiosRequestConfig } from 'axios';
import SessionManager from '../session-manager';
import { DataPublisher } from '../data-publisher';
import { ApiConfig } from '../types';
import DataCollector from './dataCollector';
export declare class DataCollectorFactory {
    private requestConfig;
    private dataPublisher;
    private sessionManager;
    getHttpConfig(domain: string): AxiosRequestConfig;
    getSessionManager(): SessionManager;
    getPublisher(): DataPublisher;
    create(options?: Object): DataCollector;
    constructor(sessionManager: SessionManager, dataPublisher: DataPublisher, dataProviderApiKeys: ApiConfig[], rootCerts: Buffer[]);
}
