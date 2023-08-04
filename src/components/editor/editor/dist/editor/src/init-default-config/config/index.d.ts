/**
 * @description 获取编辑器默认配置
 *
 */
export declare function getDefaultEditorConfig(): {
    hoverbarKeys: {
        link: {
            menuKeys: string[];
        };
        image: {
            menuKeys: string[];
        };
        'custom-paste': {
            menuKeys: string[];
        };
        video: {
            menuKeys: string[];
        };
    };
};
export declare function getSimpleEditorConfig(): {
    hoverbarKeys: {
        link: {
            menuKeys: string[];
        };
        image: {
            menuKeys: string[];
        };
        'custom-paste': {
            menuKeys: string[];
        };
        video: {
            menuKeys: string[];
        };
    };
};
export declare function getDefaultToolbarConfig(): {
    toolbarKeys: string[];
};
export declare function getSimpleToolbarConfig(): {
    toolbarKeys: (string | {
        key: string;
        title: string;
        iconSvg: string;
        menuKeys: string[];
    })[];
};
