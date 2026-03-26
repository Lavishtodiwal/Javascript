// IIFE = Immediately invoked function expression
// (function) (calling)
// ()()

// jo function immediate execute ho jaye
(function chai() {
  console.log("chai hai garam!!");
})(); //should be end

(() => {
  console.log("chai hai garam!!");
})();

((name) => {
  console.log(`${name}, chai hai garam!!`);
})("lavish");
