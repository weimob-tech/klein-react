/**
 * @description bulleted list menu
 *
 */
import BaseMenu from './BaseMenu';
declare class BulletedListMenu extends BaseMenu {
    readonly type = "bulleted-list";
    readonly title: string;
    readonly iconSvg: any;
}
export default BulletedListMenu;
