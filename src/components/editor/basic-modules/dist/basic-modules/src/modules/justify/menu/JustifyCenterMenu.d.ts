/**
 * @description justify center menu
 *
 */
import { IDomEditor } from '@klein-editor/core';
import BaseMenu from './BaseMenu';
declare class JustifyCenterMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg: any;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default JustifyCenterMenu;
