/**
 * @description enter menu
 *
 */
import { IButtonMenu, IDomEditor } from '@klein-editor/core';
declare class EnterMenu implements IButtonMenu {
    title: string;
    iconSvg: string;
    tag: string;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default EnterMenu;
