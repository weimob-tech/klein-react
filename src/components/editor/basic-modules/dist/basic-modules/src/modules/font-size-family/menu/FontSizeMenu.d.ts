/**
 * @description font-size menu
 *
 */
import { Node } from 'slate';
import { ISelectMenu, IDomEditor, IOption } from '@klein-editor/core';
declare class FontSizeMenu implements ISelectMenu {
    readonly title: string;
    key: string;
    readonly wide?: boolean;
    readonly tag = "select";
    readonly setValue = true;
    readonly width = 58;
    getOptions(editor: IDomEditor): IOption[];
    /**
     * 获取匹配的 node 节点
     * @param editor editor
     */
    getMatchNode(editor: IDomEditor): Node | null;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    /**
     * 获取 node.fontSize 的值，默认16px，没有匹配到预设值则返回 ''
     * @param editor editor
     */
    getValue(editor: IDomEditor): string | boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default FontSizeMenu;
