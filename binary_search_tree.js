var arr = [];
function BinarySearchTree() {
    this.root = null;
}
BinarySearchTree.prototype = {
    insert: function(data){
        var node = {
                data: data,
                left: null,
                right: null
            };

        var currentNode;

        if (this.root === null){
            this.root = node;
						arr.push({"name":node.data,"parent":null,"children":[]});
        } else {
            currentNode = this.root;

            while(true){
                if (data < currentNode.data){
                    if (currentNode.left === null){
                        currentNode.left = node;
												 arr.push({"name":data,"parent":currentNode.data,"children":[]});
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (data > currentNode.data){
                    if (currentNode.right === null){
                        currentNode.right = node;
												arr.push({"name":data,"parent":currentNode.data,"children":[]});
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    break;
                }
            }
        }
    },
		traverse: function(evaluate){
        function iterate(node){
            if (node){
                if (node.left !== null){
                    iterate(node.left);
                }

                evaluate.call(this, node);

                if (node.right !== null){
                    iterate(node.right);
                }
            }
        }
        iterate(this.root);
    },

    toArray: function(){
        var result = [];

        this.traverse(function(node){
            result.push(node.data);
        });

        return result;
    },

    toString: function(){
        return this.toArray().toString();
    }
};
function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i]["name"] === obj["parent"]) {
           return true;
       }
    }
    return false;
}
var bst = new BinarySearchTree();
bst.insert(17);
bst.insert(11);
bst.insert(43);
bst.insert(9);
bst.insert(65);
var parents = [];
for(var i = 0 ;i < arr.length;i++){
	parents.push(arr[i]["parent"]);
}

console.log(bst.toString());
