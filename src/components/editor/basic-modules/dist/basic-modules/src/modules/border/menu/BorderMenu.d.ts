/**
 * @description header menu
 *
 */
import { IDomEditor, IButtonMenu } from '@klein-editor/core';
declare class BorderTopMenu implements IButtonMenu {
    readonly title: string;
    readonly iconSvg: any;
    readonly tag = "button";
    readonly mark = "border";
    /**
     * 获取匹配的 node 节点
     * @param editor editor
     */
    private getMatchNode;
    isEmptyText(editor: IDomEditor): boolean;
    /**
     * 选项需要回显，所以获取具体值
     */
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value?: string | boolean): void;
}
export default BorderTopMenu;
