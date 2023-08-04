/**
 * @description 自定义 element
 *
 */
declare type PureText = {
    text: string;
};
export declare type PreElement = {
    type: 'pre';
    children: CodeElement[];
};
export declare type CodeElement = {
    type: 'code';
    language: string;
    children: PureText[];
};
export {};
