describe('bTree', function() {
  var bTree;

  beforeEach(function() {
    bTree = bTree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(bTree.insert).to.be.a('function');
    expect(bTree.search).to.be.a('function');
    expect(bTree.startsWith).to.be.a('function');
    expect(bTree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the bTree', function() {
    bTree.addChild(5);
    expect(bTree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the bTree contains', function() {
    bTree.addChild(5);
    expect(bTree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    bTree.addChild(5);
    expect(bTree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a bTree\'s child', function() {
    bTree.addChild(5);
    bTree.children[0].addChild(6);
    expect(bTree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    bTree.addChild(5);
    bTree.addChild(6);
    bTree.children[0].addChild(7);
    bTree.children[1].addChild(8);
    expect(bTree.contains(7)).to.equal(true);
    expect(bTree.contains(8)).to.equal(true);
  });

});
