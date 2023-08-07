/**
 * @description insert divider menu
 *
 */
import { IButtonMenu, IDomEditor } from '@klein-editor/core';
declare class InsertDividerMenu implements IButtonMenu {
    readonly title: string;
    readonly iconSvg: any;
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default InsertDividerMenu;
