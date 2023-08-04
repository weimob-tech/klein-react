export default function (pkgName: string, isDev: boolean, cssScope?: boolean | string, antdBabelImport?: boolean, kleinBabelImport?: boolean): {
    presets: (string | (string | {
        targets: {
            browsers: string[];
        };
    })[])[];
    plugins: any;
    cacheDirectory: boolean;
};
