/**
 * @description header menu
 *
 */
import { ISelectMenu, IDomEditor, IOption } from '@klein-editor/core';
declare class JustifySelectMenu implements ISelectMenu {
    readonly title: string;
    readonly iconSvg: any;
    readonly tag = "select";
    readonly selectPanelWidth = 88;
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
export default JustifySelectMenu;
