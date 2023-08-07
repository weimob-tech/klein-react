import { IButtonMenu, IDomEditor } from '@klein-editor/editor';
import BaseMenu from './BaseMenu';
export declare class ModalMenu extends BaseMenu implements IButtonMenu {
    constructor();
    getValue(editor: IDomEditor): any;
}
declare const _default: {
    key: string;
    factory(): ModalMenu;
};
export default _default;
