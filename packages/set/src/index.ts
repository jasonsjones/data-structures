/**
 * @fileOverview Implementation of a set data structure
 * @author Jason S. Jones
 * @license MIT
 */

class Set<T> {
    private _items: T[];

    /**
     * Creates a new set instance and initializes the underlying data
     * structure
     *
     * @constructor
     * @param {T} args variable number of arguments to
     *        initialize the set, can be an array or individual arguments
     */
    constructor(...args: T[]) {
        this._items = [];

        if (args) {
            this.flattenArgs(args);
        }
    }

    /**
     * Adds an item to the set.  If the set already contains the item,
     * it is not added.
     *
     * @param {T} value the data of the item to add to
     *        the set
     * @returns {boolean} true if the item is added to the set; false
     *          otherwise
     */
    add(value: T): boolean {
        if (!this.has(value)) {
            this._items.push(value);
            return true;
        }
        return false;
    }

    /**
     * Removes an item from the set.
     *
     * @param {T} value the data of the item to remove
     *        from the set
     * @returns {T} the item that was removed from the
     *          set.  If the item is not in the set, returns null
     */
    remove(value: T): T {
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
     * @param {T} value the value of the item to find
     *        in the set
     * @returns {boolean} true if the set has the value; false otherwise
     */
    has(value: T): boolean {
        return this._items.indexOf(value) > -1;
    }

    /**
     * Returns an array containing all the items in the set
     *
     * @returns {T} array of all the items in the set
     */
    values(): T[] {
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
     * @param {Set<T>} otherSet the set to union with this
     * @returns {Set<T>} a set which is a union of this and the 'otherSet'
     *
     * @throws {TypeError} if 'otherSet' is not a Set
     */
    union(otherSet: Set<T>): Set<T> {
        // if the 'otherSet' is not a Set, throw TypeError
        if (!(otherSet instanceof Set)) {
            throw new TypeError('invalid parameter type; a Set is required');
        }

        // create the set to return and initialize with the values from
        // this set
        const unionSet = new Set<T>(...this.values());

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
     * @param {Set<T>} otherSet the set to intersect with this
     * @returns {Set<T>} a set which is an intersection of this and the 'otherSet'
     *
     * @throws {TypeError} if 'otherSet' is not a Set
     */
    intersection(otherSet: Set<T>): Set<T> {
        // if the 'otherSet' is not a Set, throw TypeError
        if (!(otherSet instanceof Set)) {
            throw new TypeError('invalid parameter type; a Set is required');
        }

        const intersectionSet = new Set<T>();
        const theseValues = this.values();

        theseValues.forEach(val => {
            if (otherSet.has(val)) {
                intersectionSet.add(val);
            }
        });

        return intersectionSet;
    }
    /**
     * Returns a Set that ts the different of this and the 'otherSet',  The
     * returned set will have those items that are contained in this set, but
     * NOT contained in the 'otherSet'.
     *
     * @param {Set<T>} otherSet the set to use to determine the difference
     * @returns {Set<T>} a set which is an difference of this and the 'otherSet'
     *
     * @throws {TypeError} if 'otherSet' is not a Set
     */
    difference(otherSet: Set<T>): Set<T> {
        // if the 'otherSet' is not a Set, throw TypeError
        if (!(otherSet instanceof Set)) {
            throw new TypeError('invalid parameter type; a Set is required');
        }

        const differenceSet = new Set<T>();
        const theseValues = this.values();

        theseValues.forEach(val => {
            if (!otherSet.has(val)) {
                differenceSet.add(val);
            }
        });

        return differenceSet;
    }
    /**
     * Returns whether or not this set is a subset of the 'otherSet'.  If all
     * items of this set are contained in the otherSet, this function returns
     * true; false otherwise.
     *
     * @param {object} otherSet the set to use to determine if this set is a subset
     * @returns {boolean} true if this set is a subset of the 'otherSet', false
     *          otherwise
     *
     * @throws {TypeError} if 'otherSet' is not a Set
     */
    subset(otherSet: Set<T>): boolean {
        // if the 'otherSet' is not a Set, throw TypeError
        if (!(otherSet instanceof Set)) {
            throw new TypeError('invalid parameter type; a Set is required');
        }

        // if the size of this set is greater than the size of the otherSet,
        // we know this cannot be a subset of the otherSet
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            return this.values().every(val => otherSet.has(val));
        }
    }

    private flattenArgs(args: T[]): void {
        args.forEach((item: T) => {
            if (Array.isArray(item)) {
                this.flattenArgs(item);
            } else {
                this.add(item);
            }
        });
    }
}

export default Set;
