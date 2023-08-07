export declare function genConfig(): {
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
export declare function emojiConfig(): string[];
