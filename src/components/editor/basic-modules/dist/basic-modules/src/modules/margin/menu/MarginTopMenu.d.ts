/**
 * @description header menu
 *
 */
import { ISelectMenu, IDomEditor, IOption } from '@klein-editor/core';
declare class MarginTopMenu implements ISelectMenu {
    readonly title: string;
    readonly iconSvg: any;
    readonly tag = "select";
    readonly wide = true;
    getOptions(editor: IDomEditor): IOption[];
    /**
     * 获取匹配的 node 节点
     * @param editor editor
     */
    private getMatchNode;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    /**
     * 选项需要回显，所以获取具体值
     */
    getValue2(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default MarginTopMenu;
