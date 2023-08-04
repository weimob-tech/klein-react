/**
 * @description header menu
 *
 */
import { ISelectMenu, IDomEditor, IOption } from '@klein-editor/core';
declare class HeaderSelectMenu implements ISelectMenu {
    readonly title: string;
    readonly tag = "select";
    readonly width = 58;
    readonly selectPanelWidth = 160;
    readonly wide = true;
    readonly setValue = true;
    getOptions(editor: IDomEditor): IOption[];
    isActive(editor: IDomEditor): boolean;
    /**
     * 获取选中节点的 node.type
     * @param editor editor
     */
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    /**
     * 执行命令
     * @param editor editor
     * @param value node.type
     */
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default HeaderSelectMenu;
