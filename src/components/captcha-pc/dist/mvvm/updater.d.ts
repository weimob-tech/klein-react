declare class Updater {
    protected textUpdater(node: any, value: any): void;
    protected htmlUpdater(node: any, value: any): void;
    protected classUpdater(node: any, value: any, oldValue?: string | Array<string>): void;
    protected styleUpdater(node: any, value: any, oldValue?: string | Array<string>): void;
    modelUpdater(node: any, value: any): void;
    protected attrUpdater(node: Element, attrName: string, attrValue: string): void;
    protected ifUpdater(node: any, value: boolean): void;
    protected noUpdater(node: any, value: boolean): void;
}
export default Updater;
