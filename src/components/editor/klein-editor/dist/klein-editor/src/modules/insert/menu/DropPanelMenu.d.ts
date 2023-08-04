import { IDropPanelMenu, IDomEditor } from '@klein-editor/editor';
export interface CustomEditor {
    onEvent?: (params: any) => void;
    insertLink?: (url: string, text?: string) => void;
    insertImage?: (src: string, alt?: string, href?: string) => void;
    insertVideo?: (src: string, poster?: string) => void;
    restoreSelection?: () => void;
    handleSelectemotion?: (isShow: boolean, key: string) => void;
    triggerMenu?: (key: string) => void;
}
export default class DropPanelMenu implements IDropPanelMenu {
    title: string;
    tag: string;
    iconSvg: string;
    alwaysShowTitle: boolean;
    showDropPanel: boolean;
    private $content;
    private $emojiContent;
    readonly dropPanelMinWidth = 160;
    readonly dropPanelClassName = "k-e-drop-panel-transparent";
    constructor();
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    getPanelContentElem(editor: IDomEditor): Element;
    private insertLink;
    private insertImage;
    private insertVideo;
    private restoreSelection;
    private handleSelectemotion;
    private triggerMenu;
}
