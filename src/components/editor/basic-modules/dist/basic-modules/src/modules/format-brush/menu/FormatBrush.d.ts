/**
 * @description FormatBrush menu
 *
 */
/// <reference types="node" />
import { IButtonMenu, IDomEditor } from '@klein-editor/core';
declare class FormatBrush implements IButtonMenu {
    title: string;
    activeTitle: string;
    iconSvg: any;
    tag: string;
    timer: NodeJS.Timeout;
    delay: number;
    startTime: number;
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default FormatBrush;
