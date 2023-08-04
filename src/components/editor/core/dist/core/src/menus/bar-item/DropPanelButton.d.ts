/**
 * @description dropPanel button class
 *
 */
import { IDropPanelMenu } from '../interface';
import BaseButton from './BaseButton';
declare class DropPanelButton extends BaseButton {
    private dropPanel;
    menu: IDropPanelMenu;
    customHidePanelOrModal: boolean;
    constructor(menu: IDropPanelMenu, inGroup?: boolean);
    onButtonClick(): void;
    private handleDropPanel;
}
export default DropPanelButton;
