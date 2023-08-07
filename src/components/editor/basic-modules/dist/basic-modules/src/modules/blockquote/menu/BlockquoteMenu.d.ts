/**
 * @description blockquote menu class
 *
 */
import { IButtonMenu, IDomEditor } from '@klein-editor/core';
declare class BlockquoteMenu implements IButtonMenu {
    readonly title: string;
    readonly iconSvg: any;
    readonly tag = "button";
    readonly usableTypes: string[];
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    /**
     * 执行命令
     * @param editor editor
     * @param value node.type
     */
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default BlockquoteMenu;
