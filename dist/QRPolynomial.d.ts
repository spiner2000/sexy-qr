export declare class QRPolynomial {
    num: number[];
    constructor(num: any, shift: any);
    get(index: any): number;
    getLength(): number;
    multiply(e: any): QRPolynomial;
    mod(e: any): any;
}
