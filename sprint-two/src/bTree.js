/**
 * Initialize your data structure here.
 */
var Trie = function(v) {
    this.value = v; // v is an alphabet 
    this.children = []; 
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (word.length>=1){
        var wordSpplit = word.split(''); // a, p, p, l, e 
        var tree = new Trie (wordSpplit[0]); // make a new tree with a as the node 
        tree.children.push(tree.insert(wordSpplit.slice(1).join(''))); 
        return tree;
    }else{
        return undefined
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (word===undefined){
        return true;
    }
    if (this.value===word[0]){
        this.search(word.slice(1));  
    }else{
        return false; 
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */





