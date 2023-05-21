import {BuildOptions} from "./types/config";
import {buildPlugins} from "./plugins";
import {buildLoaders} from "./loaders";
import {buildResolvers} from "./resolvers";
import {devServer} from "./devServer";

export function buildWebpackConfig(options: BuildOptions) {
    const { paths, mode, isDev } = options;

    const getValueIsDev = (v: any) => isDev ? v : undefined;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: getValueIsDev('inline-source-map'),
        devServer: getValueIsDev(devServer(options)),
    };
}
