declare const Cache: any;
export declare function winPath(path: string): string;
/**
 * get route path from file-system path
 */
export declare function getRoutePathFromFsPath(fsPath: string): string;
/**
 * get range lines of markdown file
 */
export declare const getFileRangeLines: (content: string, range: string) => string;
/**
 * get file content by regular expression
 * @param content   source file content
 * @param regexp    regular expression string
 * @param filePath  source file path
 */
export declare const getFileContentByRegExp: (content: string, regexp: string, filePath: string) => string;
/**
 * parse frontmatter from code string
 */
export declare function parseCodeFrontmatter(raw: string): {
    code: string;
    frontmatter: Record<string, any> | null;
};
/**
 * get file-system cache for specific namespace
 */
declare const caches: Record<string, ReturnType<typeof Cache>>;
export declare function getCache(ns: string): (typeof caches)['0'];
/**
 * try to get father config
 */
/**
 * get root dir for monorepo project
 */
export declare function getProjectRoot(cwd: string): string;
export {};
