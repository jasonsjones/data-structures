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

    private flattenArgs(args: any): void {
        args.forEach(item => {
            if (Array.isArray(item)) {
                this.flattenArgs(item);
            } else {
                this.add(item);
            }
        });
    }
}

export default Set;
