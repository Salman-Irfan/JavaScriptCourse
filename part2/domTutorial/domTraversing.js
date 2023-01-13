console.log("dom traversing")

// Document
// we call this document => "root node"

// child node of this document object => HTML
// we call this HTML => root element

// childs of html => 1. head, 2. 

const rootNode = document.getRootNode();
console.log("rootNode = ", rootNode)
console.log("rootNode.childNodes = ", rootNode.childNodes)

const htmlElementNode = rootNode.childNodes[0];
console.log("htmlElementNode = ", htmlElementNode)

const htmlChilds = htmlElementNode.childNodes
console.log("htmlChilds = ", htmlChilds)