declare abstract class AbstractComponent {
    private mvvmInstance;
    protected injectTempalte(htmlStr: string, containerSelector: string): void;
    protected newMVVMInstance(options: any): any;
    updateMVVMData(data: {
        [field: string]: any;
    }): void;
}
export default AbstractComponent;
