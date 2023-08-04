/**
 * @description underline menu
 *
 */
import BaseMenu from './BaseMenu';
declare class UnderlineMenu extends BaseMenu {
    readonly mark = "underline";
    readonly title: string;
    readonly iconSvg: any;
    readonly hotkey = "mod+u";
}
export default UnderlineMenu;
