/**
 * @description slate 插件 - selection 相关
 *
 */
import { IDomEditor } from '../interface';
export declare const withSelection: <T extends import("slate").BaseEditor>(editor: T) => T & IDomEditor;
