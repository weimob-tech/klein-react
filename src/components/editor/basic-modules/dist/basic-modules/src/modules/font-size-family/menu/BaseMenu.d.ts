/**
 * @description header menu
 *
 */
import { Node } from 'slate';
import { ISelectMenu, IDomEditor, IOption } from '@klein-editor/core';
declare abstract class BaseMenu implements ISelectMenu {
    abstract readonly title: string;
    abstract readonly mark: string;
    readonly wide?: boolean;
    readonly tag = "select";
    readonly setValue = true;
    readonly width = 58;
    abstract getOptions(editor: IDomEditor): IOption[];
    /**
     * 获取匹配的 node 节点
     * @param editor editor
     */
    getMatchNode(editor: IDomEditor): Node | null;
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default BaseMenu;
