(function() {

    /**************************************************
     * Linked list node object
     *
     * Internal private class to represent a node within
     * a linked list.  Each node has a 'data' property and
     * a pointer the the next node in the list.
     *
     ***************************************************/
    function Node(data) {
        this.data = data || null;
        this.next = null;
    }

    Node.prototype = {

        hasNext: function() {
            return (this.next != null);
        },

        getData: function() {
            return this.data;
        },

        toString: function() {
            if (typeof this.data === 'object') {
                return JSON.stringify(this.data);
            } else {
                return this.data;
            }
        }
    };


    /**************************************************
     * Linked list object
     *
     *
     ***************************************************/
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    LinkedList.prototype = {

        getHeadNode: function() {
            return this.head;
        },

        getTailNode: function() {
            return this.tail;
        },

        isEmpty: function() {
            return (this.size === 0);
        },

        getSize: function() {
            return this.size;
        },

        add: function(data) {
            var newNode = new Node(data);
            if (this.isEmpty()) {
                this.head = this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.size += 1;
        },

        addFirst: function(data) {
            if (this.isEmpty()) {
                this.add(data);
            } else {
                var newNode = new Node(data);
                newNode.next = this.getHeadNode();
                this.head = newNode;
                this.size += 1;
            }
        },

        remove: function() {
            if (this.isEmpty()) {
                return null;
            }

            var nodeToRemove = this.getTailNode();
            if (this.getSize() === 1) {
                this.head = null;
                this.tail = null;
            } else {
                var current = this.getHeadNode();
                while (current != null) {
                    if (current.next === this.tail) {
                        this.tail = current;
                        current.next = null;
                    }
                    current = current.next;
                }
            }
            this.size -= 1;

            return nodeToRemove;
        },

        removeFirst: function() {
            if (this.isEmpty()) {
                return null;
            }
            var nodeToRemove = this.getHeadNode();
            this.head = this.head.next;
            this.size -= 1;

            return nodeToRemove;
        },

        findNode: function(nodeData) {
            var current = this.getHeadNode();
            while (current != null) {
                if (current.getData() === nodeData) {
                   return current;
                }
                current = current.next;
            }

            return -1;
        },

        getNodeBefore: function (nodeData) {
            if (this.isEmpty() || this.getSize() === 1) {
                return -1;
            } else {

                var current = this.getHeadNode();
                while (current.next != null) {
                    if (current.next.getData() === nodeData) {
                        return current;
                    }
                    current = current.next;
                }
                return -1;
            }
        },

        printList: function() {
            var current = this.getHeadNode();
            while (current != null) {
                console.log(current.toString());
                current = current.next;
            }
        }

    };
    module.exports = LinkedList;
})();
