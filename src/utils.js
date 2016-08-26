export function getPath(object, path) {
    const paths = path.split('.');
    const currentKey = paths[0];

    if (!object) {
        return undefined;
    }

    if (currentKey === '') {
        return object;
    }

    const value = object[currentKey];
    const next = paths.splice(1).join('.');

    return getPath(value, next);
}
