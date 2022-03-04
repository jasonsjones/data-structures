import ListNode from '../lib/list-node';

describe('List Node', () => {
    it.each([null, undefined, '', 'test data', 42])('exists when instantiated with %s', (data) => {
        const node = new ListNode(data);
        expect(node).toBeTruthy();
    });

    it.each( [
        {
            data: 'test data',
            type: 'string'
        },
        {
            data: 42,
            type: 'number'
        },
        {
            data: null,
            type: 'object'
        }
    ])('returns the correct $type data for $data', (input) => {
            let node = new ListNode(input.data);
            let data = node.getData();
            expect(typeof data).toEqual(input.type);
            expect(data).toEqual(input.data);
    });

    it('returns the correct (object) data', () => {
        const node = new ListNode({
            name: 'test item',
            number: 1
        });
        const data = node.getData();
        expect(typeof data).toEqual('object');
        expect(node.toString()).toEqual('{"name":"test item","number":1}');
    });

    it('returns true if node has a next node', () => {
        const firstNode = new ListNode('first node');
        const secondNode = new ListNode('second node');
        firstNode.next = secondNode;
        expect(firstNode.hasNext()).toBeTruthy();
    });

    it('returns false if node does NOT have a next node', () => {
        const firstNode = new ListNode('first node');
        expect(firstNode.hasNext()).toBeFalsy();
    });

    it.each([
        {
            data: { name: 'test item', number: 1 },
            expected: '{"name":"test item","number":1}'
        },
        {
            data: 'string data',
            expected: 'string data'
        },
        {
            data: 42,
            expected: '42'
        }
    ])('returns a proper string for json data', (input) => {
        const node = new ListNode(input.data);
        expect(node.toString()).toEqual(input.expected);
    });
});

