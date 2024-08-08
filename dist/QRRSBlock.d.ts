export declare class QRRSBlock {
    totalCount: number;
    dataCount: number;
    constructor(totalCount: any, dataCount: any);
    static RS_BLOCK_TABLE: number[][];
    static getRSBlocks(typeNumber: any, errorCorrectLevel: any): QRRSBlock[];
    static getRsBlockTable(typeNumber: any, errorCorrectLevel: any): number[] | undefined;
}
