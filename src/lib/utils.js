/**
* Utility functions
* @namespace utils
*/

/**
* getPath - returns the value for the given path
* @memberof utils
*
* @example
*  getPath({ foo: { id: 90 } }, 'foo.id') // 90
*
* @param  {Object} object the object to get the given path
* @param  {String} path   the path to get inside the object
* @return {Object|undefined} the value for the given path or undefined if the path does not exist
*/
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
