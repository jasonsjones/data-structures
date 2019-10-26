/**
 * @fileOverview Implementation of a set data structure
 * @author Jason S. Jones
 * @license MIT
 */

class Set {
    private _items: any[];

    /**
     * Creates a new set instance and initializes the underlying data
     * structure
     *
     * @constructor
     * @param {object|string|number} args variable number of arguments to
     *        initialize the set, can be an array or individual arguments
     */
    constructor(...args: any) {
        this._items = [];

        if (args) {
            this.flattenArgs(args);
        }
    }

    /**
     * Adds an item to the set.  If the set already contains the item,
     * it is not added.
     *
     * @param {object|string|number} value the data of the item to add to
     *        the set
     * @returns {boolean} true if the item is added to the set; false
     *          otherwise
     */
    add(value: any): boolean {
        if (!this.has(value)) {
            this._items.push(value);
            return true;
        }
        return false;
    }

    /**
     * Removes an item from the set.
     *
     * @param {object|string|number} value the data of the item to remove
     *        from the set
     * @returns {object|string|number} the item that was removed from the
     *          set.  If the item is not in the set, returns null
     */
    remove(value: any): any {
        const idx = this._items.indexOf(value);
        if (idx === -1) {
            return null;
        } else {
            return this._items.splice(idx, 1)[0];
        }
    }

    /**
     * Determines of the set contains, or has, the value
     *
     * @param {object|string|number} value the value of the item to find
     *        in the set
     * @returns {boolean} true if the set has the value; false otherwise
     */
    has(value: any): boolean {
        return this._items.indexOf(value) > -1;
    }

    /**
     * Returns an array containing all the items in the set
     *
     * @returns {object} array of all the items in the set
     */
    values(): any[] {
        return this._items;
    }

    /**
     * Returns the size, or number of items in the set
     *
     * @returns {number} the number of items in the set
     */
    size(): number {
        return this._items.length;
    }

    /**
     * Clears all the items from the set
     */
    clear(): void {
        this._items = [];
    }

    /**
     * Determines if the set is empty
     *
     * @returns {boolean} true if the set is empty, false otherwise
     */
    isEmpty(): boolean {
        return this.size() === 0;
    }
    /**
     * Returns a Set that is the union of this set and the 'otherSet'.  The
     * returned set will contain all the elements from both sets, and by
     * definition, will not contain any duplicates.
     *
     * @param {object} otherSet the set to union with this
     * @returns {object} a set which is a union of this and the 'otherSet'
     *
     * @throws {TypeError} if 'otherSet' is not a Set
     */
    union(otherSet: Set): Set {
        // if the 'otherSet' is not a Set, throw TypeError
        if (!(otherSet instanceof Set)) {
            throw new TypeError('invalid parameter type; a Set is required');
        }

        // create the set to return and initialize with the values from
        // this set
        const unionSet = new Set(this.values());

        // get array of values from the fn parameter
        const argValues = otherSet.values();

        argValues.forEach(val => {
            unionSet.add(val);
        });

        return unionSet;
    }

    /**
     * Returns a Set that ts the intersection of this set and the 'otherSet',
     * The returned set will have only those items that both sets have in
     * common.
     *
     * @param {object} otherSet the set to intersect with this
     * @returns {object} a set which is an intersection of this and the 'otherSet'
     *
     * @throws {TypeError} if 'otherSet' is not a Set
     */
    intersection(otherSet: Set): Set {
        // if the 'otherSet' is not a Set, throw TypeError
        if (!(otherSet instanceof Set)) {
            throw new TypeError('invalid parameter type; a Set is required');
        }

        const intersectionSet = new Set();
        const theseValues = this.values();

        theseValues.forEach(val => {
            if (otherSet.has(val)) {
                intersectionSet.add(val);
            }
        });

        return intersectionSet;
    }

    private flattenArgs(args: any): void {
        args.forEach((item: any) => {
            if (Array.isArray(item)) {
                this.flattenArgs(item);
            } else {
                this.add(item);
            }
        });
    }
}

export default Set;
