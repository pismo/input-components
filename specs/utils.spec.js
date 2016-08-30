import * as utils from '../src/lib/utils';

describe('utils', () => {
    describe('#getPath', () => {
        const { getPath } = utils;

        it('returns the value in the given path for the given object', () => {
            const data = { id: 32 };
            expect(getPath(data, 'id')).toEqual(32);
        });

        it('accepts nested properties', () => {
            const data = { test: { foo: { id: 'Random ID' } } };
            expect(getPath(data, 'test.foo.id')).toEqual('Random ID');
        });

        it('returns undefined when the path does not exist', () => {
            const data = { test: { foo: { bar: 32 } } };
            expect(getPath(data, 'test.foo.id')).toEqual(undefined);
        });
    });
});
