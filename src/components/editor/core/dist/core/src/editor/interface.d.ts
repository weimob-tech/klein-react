/**
 * @description editor interface
 *
 */
import { Editor, Location, Node, Ancestor, Element, BaseRange } from 'slate';
import { History } from 'slate-history';
import ee from 'event-emitter';
import { IEditorConfig, AlertType, ISingleMenuConfig } from '../config/interface';
import { IPositionStyle, MenuItemFactories } from '../menus/interface';
import { DOMElement } from '../utils/dom';
export declare type ElementWithId = Element & {
    id: string;
};
/**
 * 扩展 slate Editor 接口
 */
export interface IDomEditor extends Editor {
    customPasteChildren: any;
    customPasteText: string;
    customPasteHtml: string;
    insertData: (data: DataTransfer) => void;
    setFragmentData: (data: Pick<DataTransfer, 'getData' | 'setData'>) => void;
    getConfig: () => IEditorConfig;
    getMenuConfig: (menuKey: string) => ISingleMenuConfig;
    getMenuItemFactories: () => MenuItemFactories;
    getAllMenuKeys: () => string[];
    alert: (info: string, type: AlertType) => void;
    toggleSource: (sourceEditor: boolean) => IEditorConfig;
    handleTab: () => void;
    getHtml: () => string;
    getFragmentHtml: (children: any) => string;
    getText: () => string;
    getSelectionText: () => string;
    getElemsByTypePrefix: (typePrefix: string) => ElementWithId[];
    getElemsByType: (type: string, isPrefix?: boolean) => ElementWithId[];
    getParentNode: (node: Node) => Ancestor | null;
    isEmpty: () => boolean;
    clear: () => void;
    dangerouslyInsertHtml: (html: string, isRecursive?: boolean) => void;
    setHtml: (html: string) => void;
    id: string;
    isDestroyed: boolean;
    isFullScreen: boolean;
    focus: (isEnd?: boolean) => void;
    isFocused: () => boolean;
    blur: () => void;
    updateView: () => void;
    destroy: () => void;
    scrollToElem: (id: string) => void;
    showProgressBar: (progress: number) => void;
    hidePanelOrModal: () => void;
    enable: () => void;
    disable: () => void;
    isDisabled: () => boolean;
    toDOMNode: (node: Node) => HTMLElement;
    fullScreen: (zIndex?: number) => void;
    unFullScreen: () => void;
    getEditableContainer: () => DOMElement;
    select: (at: Location) => void;
    deselect: () => void;
    moveToEnd: () => void;
    restoreSelection: () => void;
    getStoreSelection: () => BaseRange | undefined;
    getSelectionPosition: () => Partial<IPositionStyle>;
    getNodePosition: (node: Node) => Partial<IPositionStyle>;
    isSelectedAll: () => boolean;
    selectAll: () => void;
    on: (type: string, listener: ee.EventListener) => void;
    off: (type: string, listener: ee.EventListener) => void;
    once: (type: string, listener: ee.EventListener) => void;
    emit: (type: string, ...args: any[]) => void;
    undo?: () => void;
    redo?: () => void;
    history?: History;
    formatBrushStatus: number;
    formatBrushStyle: any;
    formatBrush: (status: number, style: any) => void;
}
