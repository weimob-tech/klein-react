declare class AtomAssetsParser {
    private entryDir;
    private resolveDir;
    private unresolvedFiles;
    private parser;
    private isParsing;
    private parseDeferrer;
    private watcher;
    private cbs;
    private resolveFilter;
    constructor(opts: {
        entryFile: string;
        resolveDir: string;
        resolveFilter?: AtomAssetsParser['resolveFilter'];
        unpkgHost?: string;
        watch?: boolean;
    });
    parse(): Promise<{
        components: Record<string, AtomComponentAsset>;
        functions: Record<string, AtomFunctionAsset>;
    }>;
    watch(cb: AtomAssetsParser['cbs'][number]): void;
    unwatch(cb: AtomAssetsParser['cbs'][number]): void;
    destroyWorker(): void;
}
export default AtomAssetsParser;
