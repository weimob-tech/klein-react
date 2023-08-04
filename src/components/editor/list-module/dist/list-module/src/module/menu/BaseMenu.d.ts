/**
 * @description base menu
 *
 */
import { IButtonMenu, IDomEditor } from '@klein-editor/core';
declare abstract class BaseMenu implements IButtonMenu {
    abstract readonly type: string;
    abstract readonly title: string;
    abstract readonly iconSvg: string;
    readonly tag = "button";
    private getListNode;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    /**
     * 获取当前选区匹配的 type 'bulleted-list' / 'numbered-list'
     * @param editor editor
     */
    private getMatchListType;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default BaseMenu;
