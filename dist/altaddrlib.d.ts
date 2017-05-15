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
export declare class AltAddrLib {
    private i;
    private inited;
    private rootAddresses;
    private ver;
    private tmpFun;
    constructor(ver: number);
    getAvailAddr(altAddr: string, cbResult: any): void;
    private checkAddrs(addrs, startIndex, cbResult);
    jsonpCallback(data: Addr[]): void;
    private test(p);
}
