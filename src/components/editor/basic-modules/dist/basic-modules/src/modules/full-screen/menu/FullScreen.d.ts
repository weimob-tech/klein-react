/**
 * @description redo menu
 *
 */
import { IButtonMenu, IDomEditor } from '@klein-editor/core';
declare class FullScreen implements IButtonMenu {
    title: string;
    iconSvg: string;
    tag: string;
    alwaysEnable: boolean;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default FullScreen;
