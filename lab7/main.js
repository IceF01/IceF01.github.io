document.getElementsByTagName("h1")[0].remove();

// Create a new h1 element and set its text content
var h1 = document.createElement("h1");
h1.textContent = "Lab7 Assignment";
// Set the h1 element style
h1.style.color = "blue";

document.body.appendChild(h1)
// Create a new hr element
var hr = document.createElement("hr");
document.body.appendChild(hr)
// Create a new h2 element and set its text content
var h2 = document.createElement("h2");
h2.textContent = "Task";
// Set the h2 element style
h2.style.color = "red";
document.body.appendChild(h2)
// Create a new p element and set its text content
var p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(p1)
// Create a new ul element
var ul = document.createElement("ul");
document.body.appendChild(ul)
// Create a new li element, set its text content and class
var li1 = document.createElement("li");
li1.innerHTML = "find elements in the DOM <b>(5 points)</b>;";
li1.classList.add("even");
// Set the li element style
li1.style.color = "green";

// Create a new li element, set its text content and class
var li2 = document.createElement("li");
li2.innerHTML = "create/add/remove elements <b>(5 points)</b>;";
li2.classList.add("odd");
// Set the li element style
li2.style.color = "purple";

// Create a new li element, set its text content and class
var li3 = document.createElement("li");
li3.innerHTML = "change content of the elements <b>(5 points)</b>;";
li3.classList.add("even");
// Set the li element style
li3.style.color = "green";

// Create a new li element, set its text content and class
var li4 = document.createElement("li");
li4.innerHTML = "change styles of the elements <b>(5 points)</b>;";
li4.classList.add("odd");
// Set the li element style
li4.style.color = "purple";

// Create a new li element, set its text content and class
var li5 = document.createElement("li");
li5.innerHTML = "change attributes of the elements <b>(5 points)</b>;";
li5.classList.add("even");
// Set the li element style
li5.style.color = "green";

// Create a new li element, set its text content and class
var li6 = document.createElement("li");
li6.innerHTML = "change classes of the elements <b>(5 points)</b>.";
li6.classList.add("odd");
// Set the li element style
li6.style.color = "purple";

// Append the li elements to the ul element
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);
// Create a new p element and set its text content
var p2 = document.createElement("p");
p2.textContent = "";

// Create a new hr element
var hr2 = document.createElement("hr");
document.body.appendChild(hr2)

// Create a new h2 element and set its text content
var h2_2 = document.createElement("h2");
document.body.appendChild(h2_2)
h2_2.textContent = "Submission";
// Set the h2 element style
h2_2.style.color = "red";

// Create a new p element and set its text content
var p3 = document.createElement("p");
document.body.appendChild(p3)
p3.textContent = "To submit your work, follow these instructions:";

// Create a new ul element
// var ul2

// create unordered list element
const ul2 = document.createElement('ul');

// create list item elements
const li11 = document.createElement('li');
const li22 = document.createElement('li');
const li33 = document.createElement('li');
const li44 = document.createElement('li');
const li55 = document.createElement('li');
const li66 = document.createElement('li');
const li77 = document.createElement('li');

// set class and text content for list items
li11.setAttribute('class', 'even');
li11.style.color = 'green';
li11.innerHTML = 'Create a new repository on Github, named <b>lab7 (1 point)</b>.';

li22.setAttribute('class', 'odd');
li22.style.color = 'purple';
li22.textContent = 'Clone this repository to your local machine and work inside it.';

li33.setAttribute('class', 'even');
li33.style.color = 'green';
li33.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';

li44.setAttribute('class', 'odd');
li44.style.color = 'purple';
li44.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).';

li55.setAttribute('class', 'even');
li55.style.color = 'green';
li55.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';

li66.setAttribute('class', 'odd');
li66.style.color = 'purple';
li66.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file <b>(5 points)</b>.';

li77.setAttribute('class', 'even');
li77.style.color = 'green';
li77.innerHTML = "After you finish your work, submit it to the Github (<b>2 points</b>)."


// append list items to the unordered list
ul2.appendChild(li11);
ul2.appendChild(li22);
ul2.appendChild(li33);
ul2.appendChild(li44);
ul2.appendChild(li55);
ul2.appendChild(li66);
ul2.appendChild(li77);

// append the unordered list to the body of the HTML document
document.body.appendChild(ul2);

var hr2 = document.createElement("hr");
document.body.appendChild(hr2)