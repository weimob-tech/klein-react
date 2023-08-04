declare class Depend {
    private id;
    private subs;
    target: any;
    constructor();
    addSub(sub: any): void;
    depend(): void;
    removeSub(sub: any): void;
    notify(): void;
}
export declare const Dep: Depend;
export default Depend;
