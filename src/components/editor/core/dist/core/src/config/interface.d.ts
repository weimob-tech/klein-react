/**
 * @description config interface
 *
 */
import { Range, NodeEntry, Node } from 'slate';
import { IDomEditor } from '../editor/interface';
import { IMenuGroup } from '../menus/interface';
interface IHoverbarConf {
    [key: string]: {
        match?: (editor: IDomEditor, n: Node) => boolean;
        menuKeys: string[];
    };
}
export declare type AlertType = 'success' | 'info' | 'warning' | 'error';
export interface ISingleMenuConfig {
    [key: string]: any;
}
export interface IMenuConfig {
    [key: string]: ISingleMenuConfig;
}
/**
 * editor config
 */
export interface IEditorConfig {
    customAlert: (info: string, type: AlertType) => void;
    onCreated?: (editor: IDomEditor, textareaDom?: HTMLDivElement | null) => void;
    onChange?: (editor: IDomEditor) => void;
    onDestroyed?: (editor: IDomEditor) => void;
    onMaxLength?: (editor: IDomEditor) => void;
    onFocus?: (editor: IDomEditor) => void;
    onBlur?: (editor: IDomEditor) => void;
    onEvent?: (editor: IDomEditor, params: any) => void;
    /**
     * 自定义粘贴。返回 true 则继续粘贴，返回 false 则自行实现粘贴，阻止默认粘贴
     */
    customPaste?: (editor: IDomEditor, e: ClipboardEvent) => boolean;
    scroll: boolean;
    placeholder?: string;
    readOnly: boolean;
    autoFocus: boolean;
    decorate?: (nodeEntry: NodeEntry) => Range[];
    maxLength?: number;
    h5Mode?: boolean;
    MENU_CONF?: IMenuConfig;
    hoverbarKeys?: IHoverbarConf;
    EXTEND_CONF?: any;
    containerId?: string;
    sourceEditor?: boolean;
}
/**
 * toolbar config
 */
export interface IToolbarConfig {
    toolbarKeys: Array<string | IMenuGroup>;
    insertKeys: {
        index: number;
        keys: string | Array<string | IMenuGroup>;
    };
    excludeKeys: Array<string>;
    modalAppendToBody: boolean;
    h5Mode?: boolean;
    compact?: boolean;
    containerId?: string;
}
export {};
