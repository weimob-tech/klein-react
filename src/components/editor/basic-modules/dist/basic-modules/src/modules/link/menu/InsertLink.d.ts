/**
 * @description insert link menu
 *
 */
import { Node } from 'slate';
import { IModalMenu, IDomEditor } from '@klein-editor/core';
import { DOMElement } from '../../../utils/dom';
declare class InsertLinkMenu implements IModalMenu {
    readonly title: string;
    readonly iconSvg: any;
    readonly tag = "button";
    readonly showModal = true;
    readonly modalWidth = 300;
    private $content;
    private readonly textInputId;
    private readonly urlInputId;
    private readonly buttonId;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    isDisabled(editor: IDomEditor): boolean;
    getModalPositionNode(editor: IDomEditor): Node | null;
    getModalContentElem(editor: IDomEditor): DOMElement;
}
export default InsertLinkMenu;
