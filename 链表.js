function Node(data) {
    this.data = data;
    this.next = null;
}

function LNode() {
    this.head = new Node("head")
}

LNode.prototype = {
    get: function(number) {
        var p = this.head;
        let i = 0;
        while(i !== number && p.next !== null) {
            p = p.next;
            i++;
        }
        return p;
    },
    insert: function(newNode, number) {
        var current = new Node(newNode);
        var target = this.get(number);
        var p = target.next;
        target.next = current;
        current.next = p;
    },
    remove: function(number) {
        var target = this.get(number)
        var p = this.head;
        while(p.next !== target) {
            p = p.next;
        }
        p.next = target.next;
    }
}