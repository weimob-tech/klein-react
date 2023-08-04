/**
 * @description through menu
 *
 */
import BaseMenu from './BaseMenu';
declare class ThroughMenu extends BaseMenu {
    readonly mark = "through";
    readonly title: string;
    readonly iconSvg: any;
    readonly hotkey = "mod+shift+x";
}
export default ThroughMenu;
