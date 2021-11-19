// Uncomment for step-by-step execution.
// debugger;

// Option 4: Modify the style property via JS.
let divAbove = document.querySelector("#above");
divAbove.style.background = '#CCC';
divAbove.style.border = '5px solid black';


// Some CSS property needs to be quoted in JS to 
// avoid confusion with the minus sign.

divAbove.style['font-size'] = '3rem';
divAbove.style['border-radius'] = '25px';
divAbove.style['box-shadow'] = '2px 2px';

// Nicer shadows:
// https://getcssscan.com/css-box-shadow-examples

// Ref:
// https://www.w3schools.com/CSSref/css3_pr_box-shadow.asp

// let betterShadow = '0px 5px 15px rgba(0, 0, 0, 0.35)';

// divAbove.style['box-shadow'] = betterShadow;

// Have a look at all the style directives. 
console.log(divAbove.style);