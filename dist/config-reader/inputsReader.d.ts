import { Config } from '../types';
export declare class InputsReader {
    private static _instance;
    private constructor();
    static instance(): InputsReader;
    private parseConfig;
    read(inputDir: string | undefined): Config;
}
