import { IButtonMenu, IDropPanelMenu, IModalMenu } from '../interface';
import { Dom7Array } from '../../utils/dom';
import { IBarItem } from './index';
declare abstract class BaseButton implements IBarItem {
    readonly $elem: Dom7Array;
    protected readonly $button: Dom7Array;
    menu: IButtonMenu | IDropPanelMenu | IModalMenu;
    private disabled;
    customHidePanelOrModal?: boolean;
    inGroup: boolean;
    $svg: Dom7Array | null;
    constructor(menu: IButtonMenu | IDropPanelMenu | IModalMenu, inGroup?: boolean);
    private init;
    private onBarItemSplitClick;
    private onBarItemClick;
    /**
     * 执行 menu.exec
     */
    private exec;
    abstract onButtonClick(): void;
    private setActive;
    private setColor;
    private setDisabled;
    changeMenuState(): void;
}
export default BaseButton;
