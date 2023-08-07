/**
 * @description italic menu
 *
 */
import BaseMenu from './BaseMenu';
declare class ItalicMenu extends BaseMenu {
    readonly mark = "italic";
    readonly title: string;
    readonly iconSvg: any;
    readonly hotkey = "mod+i";
}
export default ItalicMenu;
