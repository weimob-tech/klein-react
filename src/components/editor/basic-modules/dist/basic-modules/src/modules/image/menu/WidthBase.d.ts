/**
 * @description image width base class
 *
 */
import { IButtonMenu, IDomEditor } from '@klein-editor/core';
declare abstract class ImageWidthBaseClass implements IButtonMenu {
    abstract readonly title: string;
    readonly tag = "button";
    abstract readonly value: string;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    private getSelectedNode;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default ImageWidthBaseClass;
