declare class Observer {
    private data;
    constructor(data: any);
    private walk;
    private convert;
    private defineReactive;
}
export declare function observe(value: any): Observer;
export default Observer;
