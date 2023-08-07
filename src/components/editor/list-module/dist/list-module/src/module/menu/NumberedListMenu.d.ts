/**
 * @description numbered list menu
 *
 */
import BaseMenu from './BaseMenu';
declare class NumberedListMenu extends BaseMenu {
    readonly type = "numbered-list";
    readonly title: string;
    readonly iconSvg: any;
}
export default NumberedListMenu;
