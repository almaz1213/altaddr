export interface Err {
    "error": {
        num: number;
        message: string;
        note?: string;
    };
}
export interface Addr {
    "url": string;
    "confirmFileName": string;
}
export interface InitOptions {
    version: number;
    requestMethod: string;
}
export declare class AltAddrLib {
    private initOptions;
    private i;
    private inited;
    private rootAddresses;
    private io;
    private tmpFun;
    constructor(io: InitOptions);
    getAvailAddr(altAddr: string, cbResult: any): void;
    private checkAddrs(addrs, startIndex, cbResult);
    jsonpCallback(data: any): void;
    private test(p);
}
