/**
 * @description bold menu
 *
 */
import BaseMenu from './BaseMenu';
declare class BoldMenu extends BaseMenu {
    readonly mark = "bold";
    readonly title: string;
    readonly iconSvg: any;
    readonly hotkey = "mod+b";
}
export default BoldMenu;
