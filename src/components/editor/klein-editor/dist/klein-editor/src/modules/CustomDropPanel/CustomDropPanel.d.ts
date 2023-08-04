import { IDomEditor, IDropPanelMenu } from '@klein-editor/editor';
declare class MyDropPanelMenu implements IDropPanelMenu {
    title: string;
    tag: string;
    showDropPanel: boolean;
    constructor();
    isActive(editor: IDomEditor): boolean;
    getValue(editor: IDomEditor): string | boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    getPanelContentElem(editor: IDomEditor): Element;
}
export default MyDropPanelMenu;
