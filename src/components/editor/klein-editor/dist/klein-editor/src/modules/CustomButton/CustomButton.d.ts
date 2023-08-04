import { IButtonMenu, IDomEditor } from '@klein-editor/editor';
declare class CustomMenu implements IButtonMenu {
    title: string;
    tag: string;
    constructor();
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default CustomMenu;
