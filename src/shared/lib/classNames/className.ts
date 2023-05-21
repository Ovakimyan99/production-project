type Mode = Record<string, string | boolean>
export function className(cls: string, mode: Mode, classes: string[]) {
    return [
        cls,
        ...classes,
        ...Object.keys(mode)
            .filter(key => mode[key]),
    ].join(' ');
}
