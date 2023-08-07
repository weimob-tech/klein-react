/**
 * @description 自定义 element
 *
 */
import { Text } from 'slate';
export declare type Header1Element = {
    type: 'header1';
    children: Text[];
};
export declare type Header2Element = {
    type: 'header2';
    children: Text[];
};
export declare type Header3Element = {
    type: 'header3';
    children: Text[];
};
export declare type Header4Element = {
    type: 'header4';
    children: Text[];
};
export declare type Header5Element = {
    type: 'header5';
    children: Text[];
};
export interface HeaderStyle {
    fontSize: string;
    lineHeight: string;
    margin: string;
    fontWeight: string;
    color?: string;
}
export declare type HeaderType = 'header1' | 'header2' | 'header3' | 'header4' | 'header5' | 'header6' | 'header7' | 'header8' | 'paragraph' | 'div[data-k-e-type]';
export declare type HeaderStyleMap = Partial<Record<HeaderType, HeaderStyle>>;
export declare type HeaderElement = {
    type: HeaderType;
    children: Text[];
    style?: HeaderStyle;
};
