

// Instantiate a new graph
var Graph = function () {
  this.allNodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.allNodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.allNodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  var edgeList = this.allNodes[node].slice();
  for (let i = 0; i < edgeList.length; i++) {
    this.removeEdge(node, edgeList[i]);
  }
  delete this.allNodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  return this.allNodes[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.allNodes[fromNode].push(toNode);
  this.allNodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  this.allNodes[fromNode] = this.allNodes[fromNode].filter(edge => edge !== toNode);
  this.allNodes[toNode] = this.allNodes[toNode].filter(edge => edge !== fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (let key in this.allNodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 addNode O(1)
 contains O(1)
 removeNode O(n^2)
 hasEdge O(n)
 addEdge O(1)
 removeEdge O(n)
 forEachNode O(n)
 */


