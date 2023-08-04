/**
 * @description menu entry
 *
 */
import RedoMenu from './RedoMenu';
import UndoMenu from './UndoMenu';
export declare const undoMenuConf: {
    key: string;
    factory(): UndoMenu;
};
export declare const redoMenuConf: {
    key: string;
    factory(): RedoMenu;
};
