/**
 * @description editor image menu
 *
 */
import { Node } from 'slate';
import { IModalMenu, IDomEditor } from '@klein-editor/core';
import { DOMElement } from '../../../utils/dom';
declare class EditImage implements IModalMenu {
    readonly title: string;
    readonly iconSvg = "<svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M11.1957 1.24275C11.4495 0.988908 11.8611 0.988908 12.1149 1.24275L14.7443 3.87215C14.8662 3.99404 14.9347 4.15937 14.9347 4.33177C14.9347 4.50416 14.8662 4.66949 14.7443 4.79138L7.90786 11.6278C7.78596 11.7497 7.62063 11.8182 7.44824 11.8182H4.81884C4.45986 11.8182 4.16884 11.5272 4.16884 11.1682V8.5388C4.16884 8.36641 4.23733 8.20108 4.35922 8.07918L11.1957 1.24275ZM5.46884 8.80804V10.5182H7.179L13.3654 4.33177L11.6553 2.62161L5.46884 8.80804ZM14.8106 14.1476C14.8106 14.3133 14.6762 14.4476 14.5106 14.4476H2.48945C2.32376 14.4476 2.18945 14.3133 2.18945 14.1476V13.4476C2.18945 13.2819 2.32376 13.1476 2.48945 13.1476H14.5106C14.6762 13.1476 14.8106 13.2819 14.8106 13.4476V14.1476Z\" fill=\"#1E2226\"/></svg>";
    readonly tag = "button";
    readonly showModal = true;
    readonly modalWidth = 300;
    private $content;
    private readonly srcInputId;
    private readonly altInputId;
    private readonly hrefInputId;
    private readonly buttonId;
    getValue(editor: IDomEditor): string | boolean;
    private getImageNode;
    isActive(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
    isDisabled(editor: IDomEditor): boolean;
    getModalPositionNode(editor: IDomEditor): Node | null;
    getModalContentElem(editor: IDomEditor): DOMElement;
    private updateImage;
}
export default EditImage;
