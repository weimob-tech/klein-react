/**
 * @description SelectList class
 *
 */
import { Dom7Array } from '../../utils/dom';
import { IOption, ISelectMenu } from '../interface';
import PanelAndModal from './BaseClass';
import { IDomEditor } from '../../editor/interface';
declare class SelectList extends PanelAndModal {
    type: string;
    readonly $elem: Dom7Array;
    constructor(editor: IDomEditor, width?: number, menu?: ISelectMenu);
    /**
     * 渲染 list
     * @param options select options
     */
    renderList(options: IOption[]): void;
    genSelfElem(): Dom7Array | null;
}
export default SelectList;
