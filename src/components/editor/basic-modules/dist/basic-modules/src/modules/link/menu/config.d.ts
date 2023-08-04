/**
 * @description link menu config
 *
 */
export declare function genLinkMenuConfig(): {
    /**
     * 检查链接，支持 async fn
     * @param text link text
     * @param url link url
     */
    checkLink(text: string, url: string): boolean | string | undefined;
    /**
     * parse link url
     * @param url url
     * @returns newUrl
     */
    parseLinkUrl(url: string): string;
    linkColor: string;
};
