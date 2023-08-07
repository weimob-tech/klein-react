/**
 * @description 减少缩进
 *
 */
import { IDomEditor } from '@klein-editor/core';
import BaseMenu from './BaseMenu';
declare class DecreaseIndentMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg: any;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default DecreaseIndentMenu;
