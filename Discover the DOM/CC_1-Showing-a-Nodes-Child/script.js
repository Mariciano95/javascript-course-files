// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
//-------
// For Cases of Wrong node Type , return "Wrong Node Type" String
// For Cases of Incorrect Index, return "Wrong Index" String
// For Correct Cases, return the "nodeName" property of that node

const showChild = (node, index) => {
    let c = node.children;
    if (index < 0 || (c && index >= c.length)) {
        return 'Wrong Index';
    } else if (node.childNodes[index] === undefined) {
        return 'Wrong Node Type';
    }
    return node.childNodes[index].nodeName;
}