import { QR8bitByte } from './QR8bitByte';
export declare class QRCodeModel {
    typeNumber: number;
    errorCorrectLevel: number;
    modules: (boolean | null)[][];
    moduleCount: number;
    dataCache: number[] | null;
    dataList: QR8bitByte[];
    constructor(typeNumber: any, errorCorrectLevel: any);
    addData(data: any): void;
    isDark(row: any, col: any): boolean | null;
    getModuleCount(): number;
    make(): void;
    makeImpl(test: any, maskPattern: any): void;
    setupPositionProbePattern(row: any, col: any): void;
    getBestMaskPattern(): number;
    createMovieClip(target_mc: any, instance_name: any, depth: any): any;
    setupTimingPattern(): void;
    setupPositionAdjustPattern(): void;
    setupTypeNumber(test: any): void;
    setupTypeInfo(test: any, maskPattern: any): void;
    mapData(data: any, maskPattern: any): void;
    createData(typeNumber: any, errorCorrectLevel: any, dataList: any): any[];
    createBytes(buffer: any, rsBlocks: any): any[];
}
