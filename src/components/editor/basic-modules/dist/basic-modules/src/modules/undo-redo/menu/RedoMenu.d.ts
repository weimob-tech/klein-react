/**
 * @description redo menu
 *
 */
import { IButtonMenu, IDomEditor } from '@klein-editor/core';
declare class RedoMenu implements IButtonMenu {
    title: string;
    iconSvg: any;
    tag: string;
    key: string;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default RedoMenu;
