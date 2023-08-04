/**
 * @description view image link menu
 *
 */
import { IButtonMenu, IDomEditor } from '@klein-editor/core';
declare class ViewImageLink implements IButtonMenu {
    readonly title: string;
    readonly iconSvg = "<svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.85 2.99998C1.85 2.08871 2.58873 1.34998 3.5 1.34998H7.5V2.64998H3.5C3.3067 2.64998 3.15 2.80668 3.15 2.99998L3.15 13C3.15 13.1933 3.3067 13.35 3.5 13.35H13.5C13.6933 13.35 13.85 13.1933 13.85 13V8.99998H15.15V13C15.15 13.9112 14.4113 14.65 13.5 14.65H3.5C2.58873 14.65 1.85 13.9112 1.85 13L1.85 2.99998ZM12.4308 3.14998H9.5V1.84998H14C14.359 1.84998 14.65 2.14099 14.65 2.49998V6.99998H13.35V4.06921L7.95962 9.4596L7.04038 8.54036L12.4308 3.14998Z\" fill=\"#1E2226\"/></svg>";
    readonly tag = "button";
    getValue(editor: IDomEditor): string | boolean;
    isActive(editor: IDomEditor): boolean;
    isDisabled(editor: IDomEditor): boolean;
    exec(editor: IDomEditor, value: string | boolean): void;
}
export default ViewImageLink;
