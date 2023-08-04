/**
 * @description 自定义 element
 *
 */
import { Text } from 'slate';
export declare type TodoElement = {
    type: 'todo';
    checked: boolean;
    children: Text[];
};
