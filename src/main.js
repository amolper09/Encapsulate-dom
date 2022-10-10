// const div = dom.create("<div>3</div>");
// console.log(div);

// let div2 = dom.remove(test);
// console.log(div2);

// dom.empty(empty);
// dom.attr(test, "title", "this is a new title");
// console.log(test);
// const title = dom.attr(test, "title");
// console.log(title);
// dom.text(test,'newnew')

// dom.style(test, { border: "1px solid red", background: "blue" });
// dom.style(test, "border");
// dom.style(test, "border", "1px solid black");

// console.log(test);
// console.log(dom.style(test, "border"));

// const fn = () => {
//   console.log("点击了");
// };
// dom.on(test, "click", fn);

// dom.off(test, "click", fn);
// const div2 = dom.find("#test")[0];

// console.log(dom.children(empty));
// console.log(dom.siblings(e2));

// console.log(dom.next(e2));
// console.log(dom.previous(e2));
const div = dom.find("#test>.red")[0];
console.log(div);
dom.style(div, "color", "red");

const divList = dom.find(".red");
console.log(divList);
dom.each(divList, (n)=> console.log(n))
