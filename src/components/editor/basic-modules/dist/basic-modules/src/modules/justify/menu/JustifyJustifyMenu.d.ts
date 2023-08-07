/**
 * @description 两端对齐
 *
 */
import { IDomEditor } from '@klein-editor/core';
import BaseMenu from './BaseMenu';
declare class JustifyJustifyMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg: any;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default JustifyJustifyMenu;
