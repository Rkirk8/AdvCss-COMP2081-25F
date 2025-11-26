//capture the percentage value from the text element
let percent = document.querySelector("svg text").textContent;
percent = percent.replaceAll("%", "");
percent = parseInt(percent, 10);
percent = percent / 100;

//calculate the height of the bar based on the percentage
let maxHeight = 200; //height of the base rectangle
let barHeight = percent * maxHeight;

//get css as a document object property
const cssRulesList = document.styleSheets[0].cssRules;

//loop through the CSS rules to capture the one that controls the :active state for the bar
let svgActiveRule;
for (let i = 0; i < cssRulesList.length; i ++) {
  if(cssRulesList[i].selectorText == "svg:active #bar1") {
    svgActiveRule = cssRulesList[i];
  }
};


//do the same for the :hover state
//let svgHoverRule;
//for (let i = 0; i < cssRulesList.length; i ++) {
  //if(cssRulesList[i].selectorText == "#bar1:hover") {
    //svgHoverRule = cssRulesList[i];
  //}
//}

// string 4 new CSS value
let propertyValue = barHeight + "px";

//update the CSS to reflect new value for height
svgActiveRule.style.setProperty("height", propertyValue);
svgHoverRule.style.setProperty("height", propertyValue);
