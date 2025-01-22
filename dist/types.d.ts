import Web3, { Contract, Web3BaseWalletAccount } from 'web3';
import { PULL_ORACLE_ABI } from './abi';
export interface Config {
    debugMode: boolean;
    publisher: {
        jwt: string;
        endpoint: string;
    };
    chains: [ChainInfo];
    dataProviderApiKeys: ApiConfig[];
    rootCerts: Buffer[];
}
export type AllowedProvidersDomain = 'bybit.com' | 'binance.com';
export type ChainInfo = {
    utilityWalletPrivateKey: string;
    dataFeedContractAddress: string;
    chainId: number;
    rpc: string;
};
export type ApiConfig = {
    domain: AllowedProvidersDomain;
    header: string;
    key: string;
};
export type SgxQuote = {
    header: Uint8Array;
    isvReport: Uint8Array;
    isvReportSignature: Uint8Array;
    attestationKey: Uint8Array;
    qeReport: Uint8Array;
    qeReportSignature: Uint8Array;
    qeAuthenticationData: Uint8Array;
};
export type TeeQuote = {
    deviceCert: X509Cert;
    platformCert: X509Cert;
    sgxQuote: SgxQuote;
};
type X509Cert = {
    bodyPartOne: string;
    publicKey: string;
    bodyPartTwo: string;
    signature: string;
};
export type Session = {
    web3Instance: Web3;
    utilityWallet: Web3BaseWalletAccount;
    sessionWallet: Web3BaseWalletAccount;
    dataFeedContract: Contract<typeof PULL_ORACLE_ABI>;
    teeQuote: Object;
};
export type DataBeforeSign = {
    feedKey: string;
    amount: bigint;
    timestampMs: number;
};
export declare const DataBeforeSignAbi: {
    DataBeforeSign: {
        feedKey: string;
        amount: string;
        timestampMs: string;
    };
};
export {};
