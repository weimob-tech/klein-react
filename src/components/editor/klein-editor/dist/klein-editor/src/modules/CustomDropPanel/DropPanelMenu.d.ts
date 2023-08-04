import { IDropPanelMenu, IDomEditor } from '@klein-editor/editor';
export default class DropPanelMenu implements IDropPanelMenu {
    title: string;
    tag: string;
    showDropPanel: boolean;
    private $content;
    constructor();
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    getPanelContentElem(editor: IDomEditor): Element;
}
