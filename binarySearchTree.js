class TreeNode {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
    this.left = null
      this.right = null
  }

  insert(val) {
    const newNode = new TreeNode(val);
    if(!this.root) {
      this.root = newNode;
      return this.root;
    }

    let current = this.root;
    while(currnet) {
      if(value === current.value) return;
      if(value < current.value) {
        if(current.left === null) {
          current.left = newNode;
          return current;
        }

        current = current.left;
        
      } else {
        if(current.right === null) {
          current.right = newNode;
          return current;
        }
        current = curren.right;
      }
    }
  }

  find(value) {
    if(!this.root) return false;

    let current  = this.node;
    let found = false;

    while(current && !found) {
      if(value < current.value) {
        current = current.left;
      } else if ( value > current.value) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if(!found) return;
    return found;
  }

  removeNode(node, key) { 
          
    // if the root is null then tree is  
    // empty 
    if(node === null) 
        return null; 
  
    // if data to be delete is less than  
    // roots data then move to left subtree 
    else if(key < node.value) { 
      node.left = this.removeNode(node.left, key); 
      return node; 
    } 
  
    // if data to be delete is greater than  
    // roots data then move to right subtree 
    else if(key > node.value) { 
      node.right = this.removeNode(node.right, key); 
      return node; 
    } 
  
    // if data is similar to the root's data  
    // then delete this node 
    else { 
      // deleting node with no children 
      if(node.left === null && node.right === null) 
      { 
          node = null; 
          return node; 
      } 

      // deleting node with one children 
      if(node.left === null) 
      { 
          node = node.right; 
          return node; 
      } 
        
      else if(node.right === null) 
      { 
          node = node.left; 
          return node; 
      } 

      // Deleting node with two children 
      // minumum node of the rigt subtree 
      // is stored in aux 
      var aux = this.findMinNode(node.right); 
      node.value = aux.value; 

      node.right = this.removeNode(node.right, aux.value); 
      return node; 
    } 
  }
  
  findMinNode(node) { 
  // if left of a node is null 
  // then it must be minimum node 
  if(node.left === null) 
      return node; 
  else
      return this.findMinNode(node.left); 
  } 
  
  inorderTraversal(node) {
    if(node != null) {
      inorderTraversal(node.left);
      console.log(node.data);
      inorderTraversal(node.right);
    }
  }
}