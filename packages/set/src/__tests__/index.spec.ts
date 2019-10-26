import Set from '../index';

describe('Set', () => {
    it('constructs a new Set', () => {
        const set = new Set();
        expect(set).toBeTruthy();
    });

    it('is empty when first instantiated with no args', () => {
        const set = new Set();
        expect(set.size()).toEqual(0);
    });

    it('insantiates a set of the correct size if passed an array', () => {
        const set = new Set([1, 2, 3, 4, 5]);
        expect(set.size()).toEqual(5);
    });

    it('insantiates a set of the correct size if passed individual args', () => {
        const set = new Set(1, 2, 3, 4, 5);
        expect(set.size()).toEqual(5);
    });

    it('insantiates a set of unique items if passed an array with duplicate items', () => {
        const set = new Set([1, 2, 3, 5, 3, 1]);
        expect(set.size()).toEqual(4);
    });

    it('insantiates a set of unique items if passed duplicate args', () => {
        const set = new Set(1, 2, 3, 5, 3, 1, 2);
        expect(set.size()).toEqual(4);
    });

    it('adds items to the set', () => {
        const set = new Set<string>();
        set.add('test item 1');
        set.add('test item 2');
        expect(set.size()).toEqual(2);
    });

    it('adds unique items to the set', () => {
        const set = new Set<string>();
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 1');
        expect(set.size()).toEqual(2);
    });

    it('determines if a set has a particular item', () => {
        const set = new Set<string>();
        set.add('test item 1');
        set.add('test item 2');
        expect(set.has('test item 1')).toBeTruthy();
        expect(set.has('not found item')).toBeFalsy();
    });

    it('returns the correct size of the set', () => {
        const set = new Set<string>();
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 3');
        set.add('test item 4');
        set.add('test item 5');
        expect(set.size()).toEqual(5);
    });

    it('clears the set of all items', () => {
        const set = new Set<string>();
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

    it('removes an item from the set', () => {
        const set = new Set<string>();
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 3');
        const removedItem = set.remove('test item 2');
        expect(removedItem).toEqual('test item 2');
        expect(set.size()).toEqual(2);
    });

    it('returns null if removed item is not in the set', () => {
        const set = new Set<string>();
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 3');
        const removedItem = set.remove('not found...');
        expect(removedItem).toBeNull();
        expect(set.size()).toEqual(3);
    });

    it('returns an array of all items in the set', () => {
        const set = new Set<string>();
        set.add('test item 1');
        set.add('test item 2');
        set.add('test item 3');
        const values = set.values();
        expect(Array.isArray(values)).toBe(true);
        expect(values).toHaveLength(3);
        expect(values).toContain('test item 1');
        expect(values).toContain('test item 3');
    });

    it('returns a Set that is the union of two other sets', () => {
        const setA = new Set([1, 2, 3, 4]);
        const setB = new Set([4, 5, 6, 7]);
        const setC = setA.union(setB);
        expect(setC.size()).toEqual(7);
        expect(Array.isArray(setC.values())).toBe(true);
        expect(setC.values()).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it('throws an error if union is called with a non-set parameter', () => {
        const setA = new Set([1, 2, 3, 4]);
        expect(() => {
            setA.union('this should throw error' as any);
        }).toThrowError();
    });

    it('returns the intersection of two sets', () => {
        const setA = new Set([1, 2, 3, 4]);
        const setB = new Set([4, 2, 6, 3]);
        const setC = setA.intersection(setB);
        expect(setC.size()).toEqual(3);
        expect(Array.isArray(setC.values())).toBe(true);
        expect(setC.values()).toEqual([2, 3, 4]);
    });

    it('throws an error if intersection is called with a non-set parameter', () => {
        const setA = new Set([1, 2, 3, 4]);
        expect(() => {
            setA.intersection('this should throw error' as any);
        }).toThrowError();
    });
});
