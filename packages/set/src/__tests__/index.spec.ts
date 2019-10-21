import Set from '../index';

describe('Set', () => {
    it('constructs a new Set', () => {
        const set = new Set();
        expect(set).toBeTruthy();
    });

    it('is empty when first instantiated with no args', () => {
        const set = new Set();
        expect(set.values()).toHaveLength(0);
    });

    it('insantiates a set of the correct size if passed an array', () => {
        const set = new Set([1, 2, 'test', 5, 'another item']);
        expect(set.size()).toEqual(5);
    });

    it('insantiates a set of the correct size if passed individual args', () => {
        const set = new Set(1, 2, 'test', 5, 'another item');
        expect(set.size()).toEqual(5);
    });

    it('insantiates a set of unique items if passed an array with duplicate items', () => {
        const set = new Set([1, 2, 'test', 5, 'test', 1]);
        expect(set.size()).toEqual(4);
    });

    it('insantiates a set of unique items if passed duplicate args', () => {
        const set = new Set(1, 2, 'test', 5, 'test', 1);
        expect(set.size()).toEqual(4);
    });

    it('adds items to the set', () => {
        const set = new Set();
        set.add('test item 1');
        set.add({ item1: 'test item 2', item2: 'test item 3' });

        expect(set.size()).toEqual(2);
    });

    it('adds unique items to the set', () => {
        const set = new Set();
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 1');

        expect(set.size()).toEqual(2);
    });

    it('determines if a set has a particular item', () => {
        const set = new Set();
        set.add('test item 1');
        set.add('test item 2');

        expect(set.has('test item 1')).toBeTruthy();
        expect(set.has('not found item')).toBeFalsy();
    });

    it('returns the correct size of the set', () => {
        const set = new Set();
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 3');
        set.add('test item 4');
        set.add('test item 5');
        expect(set.size()).toEqual(5);
    });

    it('clears the set of all items', () => {
        const set = new Set();
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 3');
        set.add('test item 4');
        set.add('test item 5');
        expect(set.size()).toEqual(5);

        set.clear();
        expect(set.size()).toEqual(0);
        expect(set.isEmpty()).toBeTruthy();
    });
});
