/**
 * @description menu interface
 *
 */
import { Node } from 'slate';
import { IDomEditor } from '../editor/interface';
import { DOMElement } from '../utils/dom';
export interface IMenuGroup {
    key: string;
    title: string;
    iconSvg?: string;
    menuKeys: string[];
}
export interface IPositionStyle {
    top: string;
    left: string;
    right: string;
    bottom: string;
}
export interface IOption {
    value: string;
    text: string;
    selected?: boolean;
    line?: boolean;
    title?: string;
    textIsTag?: boolean;
    showSelectedIcon?: boolean;
    styleForRenderMenuList?: Partial<{
        [key: string]: string;
    }>;
}
interface IBaseMenu {
    readonly title: string;
    readonly activeTitle?: string;
    readonly iconSvg?: string;
    readonly hotkey?: string;
    readonly alwaysEnable?: boolean;
    readonly alwaysShowTitle?: boolean;
    readonly tag: string;
    readonly wide?: boolean;
    readonly width?: number;
    readonly setValue?: boolean;
    readonly key?: string;
    getValue: (editor: IDomEditor) => string | boolean;
    isActive: (editor: IDomEditor) => boolean;
    isDisabled: (editor: IDomEditor) => boolean;
    exec: (editor: IDomEditor, value: string | boolean) => void;
}
export interface IButtonMenu extends IBaseMenu {
}
export interface ISelectMenu extends IBaseMenu {
    readonly selectPanelWidth?: number;
    getOptions: (editor: IDomEditor) => IOption[];
}
export interface IDropPanelMenu extends IBaseMenu {
    readonly showDropPanel: boolean;
    readonly dropPanelMinWidth?: number;
    readonly dropPanelClassName?: string;
    getPanelContentElem: (editor: IDomEditor) => DOMElement;
}
export interface IModalMenu extends IBaseMenu {
    readonly showModal: boolean;
    readonly modalWidth: number;
    getModalContentElem: (editor: IDomEditor) => DOMElement;
    getModalPositionNode: (editor: IDomEditor) => Node | null;
}
export declare type MenuFactoryType = () => IButtonMenu | ISelectMenu | IDropPanelMenu | IModalMenu;
export interface IRegisterMenuConf {
    key: string;
    factory: MenuFactoryType;
    config?: {
        [key: string]: any;
    };
}
export declare type MenuItemFactories = {
    [key: string]: MenuFactoryType;
};
export {};
