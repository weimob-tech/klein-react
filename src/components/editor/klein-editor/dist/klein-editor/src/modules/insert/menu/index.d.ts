import DropPanelMenu from './DropPanelMenu';
export declare const DropPanelMenuConf: {
    key: string;
    factory(): DropPanelMenu;
    config: {
        uploadMode: string;
        menuItemKeys: string[];
        menuItems: ({
            key: string;
            icon: any;
            title: string;
            children?: undefined;
        } | {
            key: string;
            icon: any;
            title: string;
            children: {
                key: string;
                title: string;
            }[];
        })[];
    };
};
