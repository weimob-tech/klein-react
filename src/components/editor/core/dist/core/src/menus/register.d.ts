/**
 * @description register menu
 *
 */
import { IRegisterMenuConf, MenuItemFactories } from './interface';
export declare const MENU_ITEM_FACTORIES: MenuItemFactories;
/**
 * 注册菜单配置
 * @param registerMenuConf { key, factory, config } ，各个 menu key 不能重复
 * @param customConfig 自定义 menu config
 */
export declare function registerMenu(registerMenuConf: IRegisterMenuConf, customConfig?: {
    [key: string]: any;
}): void;
