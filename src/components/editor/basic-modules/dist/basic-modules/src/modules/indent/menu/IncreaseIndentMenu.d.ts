/**
 * @description 增加缩进
 *
 */
import { IDomEditor } from '@klein-editor/core';
import BaseMenu from './BaseMenu';
declare class IncreaseIndentMenu extends BaseMenu {
    readonly title: string;
    readonly iconSvg: any;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default IncreaseIndentMenu;
