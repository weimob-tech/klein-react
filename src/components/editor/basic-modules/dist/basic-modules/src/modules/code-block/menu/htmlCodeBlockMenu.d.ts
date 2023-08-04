import { IButtonMenu, IDomEditor } from '@klein-editor/core';
declare class HTMLCodeBlockMenu implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.00412 3.49072C6.1244 3.60467 6.12953 3.79455 6.01558 3.91483L2.14541 8.00001L6.01558 12.0852C6.12953 12.2055 6.1244 12.3954 6.00412 12.5093L5.49595 12.9907C5.37567 13.1047 5.18579 13.0995 5.07184 12.9793L0.778167 8.44705C0.54066 8.19634 0.54066 7.80368 0.778167 7.55298L5.07184 3.02076C5.18579 2.90048 5.37567 2.89535 5.49595 3.0093L6.00412 3.49072ZM10.996 3.49072C10.8757 3.60467 10.8705 3.79455 10.9845 3.91483L14.8547 8.00001L10.9845 12.0852C10.8705 12.2055 10.8757 12.3954 10.996 12.5093L11.5041 12.9907C11.6244 13.1047 11.8143 13.0995 11.9282 12.9793L16.2219 8.44705C16.4594 8.19634 16.4594 7.80368 16.2219 7.55298L11.9282 3.02076C11.8143 2.90048 11.6244 2.89535 11.5041 3.0093L10.996 3.49072Z\" fill=\"currentColor\" ></path></svg>";
    readonly tag = "button";
    readonly key = "codeBlock";
    private getSelectCodeElem;
    /**
     * 获取语言类型
     * @param editor editor
     */
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    private changeToPlainText;
    private changeToCodeBlock;
}
export default HTMLCodeBlockMenu;
