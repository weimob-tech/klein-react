import MVVM from '.';
import Updater from './updater';
declare class CompileUtil extends Updater {
    constructor();
    protected text(node: any, vm: any, exp: any): void;
    protected html(node: any, vm: any, exp: any): void;
    protected class(node: any, vm: any, exp: any): void;
    protected style(node: any, vm: any, exp: any): void;
    protected model(node: any, vm: any, exp: any): void;
    protected attr(node: Element, vm: MVVM, attr: any, exp: string): void;
    protected if(node: Element, vm: MVVM, exp: string): void;
    protected no(node: Element, vm: MVVM, exp: string): void;
    protected bind(node: any, vm: any, exp: any, dir: any): void;
    protected eventHandler(node: any, vm: any, exp: any, dir: any): void;
    protected getVMVal(vm: any, exp: any): any;
    protected setVMVal(vm: any, exp: any, value: any): void;
}
export default CompileUtil;
