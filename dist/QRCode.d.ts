declare type QRCodeOptions = {
    ecl: 'L' | 'M' | 'Q' | 'H';
    content: string;
};
export declare class QRCode {
    options: QRCodeOptions;
    private readonly qrcode;
    constructor(options: Partial<QRCodeOptions>);
    private getErrorCorrectLevel;
    private getTypeNumber;
    emptyCenter(emptySize: number, emptySizeHeight?: number): void;
    get matrix(): (boolean | null)[][];
    get size(): number;
}
export {};
