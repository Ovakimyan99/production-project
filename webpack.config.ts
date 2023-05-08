import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/webpackConfig";
import {BuildMode, BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode: BuildMode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    paths,
    mode,
    isDev
});

export default config;
