type IDumiTechStack = any;
export default class ReactTechStack implements IDumiTechStack {
    name: string;
    isSupported(...[, lang]: Parameters<IDumiTechStack['isSupported']>): boolean;
    transformCode(...[raw, opts]: Parameters<IDumiTechStack['transformCode']>): unknown;
}
export {};
