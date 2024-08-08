import { QRCode } from './QRCode';
declare type QRSvgOptions = {
    size: number;
    radiusFactor: number;
    cornerBlockRadiusFactor?: number;
    roundOuterCorners: boolean;
    roundInnerCorners: boolean;
    cornerBlocksAsCircles: boolean;
    fill: string;
    preContent?: string | ((QRSvg: any) => string);
    postContent?: string | ((QRSvg: any) => string);
};
export declare class QRSvg {
    private options;
    private matrix;
    paths: string[];
    private readonly matrixSize;
    private lines;
    private lastUniqId;
    readonly pointSize: number;
    constructor(qrCode: QRCode, options: Partial<QRSvgOptions>);
    private detectBlocks;
    private detectLines;
    private getDir;
    private getSubPath;
    private getUniqId;
    private generatePaths;
    private svgAdditionalContent;
    get svg(): string;
}
export {};
