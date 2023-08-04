/**
 * @description bar item
 *
 */
import { Dom7Array } from '../../utils/dom';
import { IButtonMenu, ISelectMenu, IDropPanelMenu, IModalMenu, IMenuGroup } from '../interface';
import { IDomEditor } from '../../editor/interface';
import GroupButton from './GroupButton';
declare type MenuType = IButtonMenu | ISelectMenu | IDropPanelMenu | IModalMenu;
export interface IBarItem {
    $elem: Dom7Array;
    menu: MenuType;
    changeMenuState: () => void;
}
export declare function getEditorInstance(item: IBarItem): IDomEditor;
/**
 * 创建 bar button/select
 * @param menu menu
 * @param inGroup 在 groupButton 中
 */
export declare function createBarItem(menu: MenuType, inGroup?: boolean): IBarItem;
export declare function createBarItemGroup(menu: IMenuGroup): GroupButton;
export {};
