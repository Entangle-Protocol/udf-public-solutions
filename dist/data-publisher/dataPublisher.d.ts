export declare class DataPublisher {
    private endpoint;
    private config;
    constructor(jwt: string, endpoint: string);
    post(data: any): Promise<void>;
}
