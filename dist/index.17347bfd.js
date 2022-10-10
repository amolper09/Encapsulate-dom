window.dom = {
    create (string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    //增
    after (node, newNode) {
        node.parentNode.insertBefore(newNode, node.nextSibling);
    },
    before (newNode, node) {
        node.parentNode.insertBefore(newNode, node);
    },
    append (parent, child) {
        parent.appendChild(child);
    },
    wrap (child, father) {
        dom.before(father, child);
        dom.append(father, child);
    },
    //删
    remove (child) {
        child.parentNode.removeChild(child);
        return child;
    },
    empty (child) {
        const array = [];
        let x = child.firstChild;
        while(x){
            array.push(dom.remove(child.firstChild));
            // console.log(array);
            x = child.firstChild;
        }
        return array;
    },
    //改
    attr (node, name, value) {
        if (arguments.length === 3) node.setAttribute(name, value);
        if (arguments.length === 2) return node.getAttribute(name);
    },
    text (node, string) {
        node.innerHTML = string;
    },
    style (node, name, value) {
        if (arguments.length === 3) node.style[name] = value;
        else if (arguments.length === 2) {
            if (typeof name === "string") return node.style[name];
            else if (name instanceof Object) {
                const object = name;
                for(let key in object)node.style[key] = object[key];
            }
        }
    },
    on (node, eventName, fn) {
        node, addEventListener(eventName, fn);
    },
    off (node, eventName, fn) {
        node, removeEventListener(eventName, fn);
    },
    //查
    find (selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },
    parent (node) {
        return node.parentNode;
    },
    children (node) {
        return node.children;
    },
    siblings (node) {
        return Array.from(node.parentNode.children).filter((n)=>n !== node);
    },
    next (node) {
        let x = node.nextSibling;
        while(x && x.nodeType === 3)x = x.nextSibling;
        return x;
    },
    previous (node) {
        let x = node.previousSibling;
        while(x && x.nodeType === 3)x = x.previousSibling;
        return x;
    },
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    }
};

//# sourceMappingURL=index.17347bfd.js.map
