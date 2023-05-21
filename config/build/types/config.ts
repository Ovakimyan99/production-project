export type BuildMode = 'production' | 'development';

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    isDev: boolean;
    mode: BuildMode;
    paths: BuildPaths;
    port: number;
}
