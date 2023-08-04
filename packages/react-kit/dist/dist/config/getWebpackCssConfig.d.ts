export default function getWebpackCssConfig(projectPkg: any, config: any): (cssLoaderOpts: any, less?: string | undefined) => ({
    loader: any;
    options?: undefined;
} | {
    loader: string;
    options: any;
})[];
