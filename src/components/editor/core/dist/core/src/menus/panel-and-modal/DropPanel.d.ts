import { IDropPanelMenu } from '@klein-editor/editor';
/**
 * @description dropPanel class
 *
 */
import { IDomEditor } from '../../editor/interface';
import { Dom7Array } from '../../utils/dom';
import PanelAndModal from './BaseClass';
declare class DropPanel extends PanelAndModal {
    type: string;
    readonly $elem: Dom7Array;
    constructor(editor: IDomEditor, menu?: IDropPanelMenu);
    genSelfElem(): Dom7Array | null;
}
export default DropPanel;
