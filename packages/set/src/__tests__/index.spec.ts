import Set from '../index';

describe('Set', () => {
    it('constructs a new Set', () => {
        const set = new Set();
        expect(set).toBeTruthy();
    });

    it('is empty when first instantiated with no args', function() {
        const set = new Set();
        expect(set.values()).toHaveLength(0);
    });
});
