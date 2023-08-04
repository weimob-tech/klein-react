import React from 'react';
import { CustomEditor } from '../menu/DropPanelMenu';
import { MenuItemProps } from '../custom-types';
interface IProps {
    menuItemKeys: string[];
    menuItems: MenuItemProps[];
    editor: CustomEditor;
    uploadMode?: 'upload' | 'material';
    getPopupContainer: () => HTMLElement;
    getEmotionContainer: () => HTMLElement;
}
declare const DropPanelContent: React.FC<IProps>;
export default DropPanelContent;
