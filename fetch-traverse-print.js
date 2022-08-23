fetch("http://localhost:3000/en/article/444721")
  .then(response => response.json())
  .then(data => {

    traverse(data.content);
  })
  .catch(error => console.error(error));
function traverse (content) {

  let node = document.createElement("div");
  node.innerHTML = content;
  let treeWalker = document.createTreeWalker(
    node,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: function (node) {

        if (["P", "LI", "H2", "H3"].indexOf(node.tagName) > -1) {
          return NodeFilter.FILTER_ACCEPT;
        } else {
          return NodeFilter.FILTER_SKIP;
        }
      }
    },
  );



  (function traverse(treeWalker) {
    let currentNode = treeWalker.nextNode()
    if (currentNode) {
      let txt = currentNode.innerText
      console.log(txt)
      traverse(treeWalker)

    } else {
      console.log("Done");
    }
  })(treeWalker);
}
