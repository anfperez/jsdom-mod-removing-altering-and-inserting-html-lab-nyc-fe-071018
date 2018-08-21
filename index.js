/* Enter the code to remove the main node element under this comment */

/* Create your new element here and assign it to newHeader */
const testVar = "hi"

/* Enter the code to remove the node element here */
document.querySelector("main#main").remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement("h1");

newHeader.id = "victory"
newHeader.innerText = "Angela is the champion!";
newHeader.className = "victory whatever";