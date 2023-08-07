/**
 * @description justify right menu
 *
 */
import { IDomEditor } from '@klein-editor/core';
import BaseMenu from './BaseMenu';
declare class JustifyRightMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg: any;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default JustifyRightMenu;
