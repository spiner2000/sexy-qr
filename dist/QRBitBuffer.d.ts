export declare class QRBitBuffer {
    buffer: number[];
    length: number;
    constructor();
    get(index: any): boolean;
    put(num: any, length: any): void;
    getLengthInBits(): number;
    putBit(bit: any): void;
}
