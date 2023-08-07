import CompileUtils from './compileUtils';
declare class Compile extends CompileUtils {
    private $vm;
    private $el;
    private $fragment;
    constructor(el: any, vm: any);
    private node2Fragment;
    private init;
    private compileElement;
    private compile;
    private compileText;
    private isDirective;
    private isEventDirective;
    private isElementNode;
    private isTextNode;
}
export default Compile;
