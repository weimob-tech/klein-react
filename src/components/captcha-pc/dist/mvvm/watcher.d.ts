declare class Watcher {
    private cb;
    private vm;
    private expOrFn;
    private depIds;
    private getter;
    private value;
    constructor(vm: any, expOrFn: any, cb: any);
    update(): void;
    private run;
    addDep(dep: any): void;
    private get;
    private parseGetter;
}
export default Watcher;
