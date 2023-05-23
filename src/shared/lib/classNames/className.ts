type Mode = Record<string, string | boolean>
export function classNames(cls: string, mode: Mode = {}, additional: (string|undefined)[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.keys(mode)
            .filter(key => mode[key]),
    ].join(' ');
}
