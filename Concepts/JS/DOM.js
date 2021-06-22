console.log(" 'document' ->  will print the whole DOM i.e the HTML");
let doc = document;
console.log(doc);

console.log(" use the property 'firstElementChild' to get first child of each element");
console.log("document.firstElementChild.firstElementChild -> Now this will be the Head");
console.log(doc.firstElementChild.firstElementChild);

console.log(" use the property 'lastElementChild' to get last child of each element");
console.log("document.lastElementChild.lastElementChild -> Now this will be the Body");
let body = doc.lastElementChild.lastElementChild;
console.log(body);

console.log("innerText gives all the text including text inside child tags, innerHTML gives the tag contents")
let h1 = body.firstElementChild;
console.log("H1 innerText is " + h1.innerText)
console.log("H1 innerHTML is " + h1.innerHTML)

console.log(" use the property 'innerHTML' to modify the content of a element");
console.log("document.lastElementChild.lastElementChild.firstElementChild.innerHTML -> Now this modify H1 tag in body");
h1.innerHTML="Modified h1 tag"
console.log("Modified h1 tag");

console.log(" use the property 'style' to access style properties");
console.log("Modifying color of H1 tag");
console.log(h1.style.color="black");

console.log(" use the 'QuerySelector' function to fetch elements ");
let inputElement = doc.querySelector("input");
console.log("Clicking the input checkbox");
console.log(inputElement.click());

console.log("Get element by tag")
let liTagElement = doc.getElementsByTagName("li")
console.log("Getting element by tag 'li' -> will return a Array")
console.log(liTagElement)

console.log("Get element by id")
let titleIdElement = doc.getElementById("title")
console.log("Getting element by id 'title' -> will return 1st match element")
console.log(titleIdElement)

console.log(" Just like we use selector is CSS, its same here.To get class items use '.' , for id use '#' in query selector")
let tileByQuery = doc.querySelector("#title")
console.log("Getting element by id using query selector")
console.log(tileByQuery)

console.log(" To use hierarchical selector use space between each selector item")
let listWithATag = doc.querySelector("li a")
console.log("Getting anchor tag in list using query selector")
console.log(listWithATag)

console.log(" To combine selectors and fetch from same level")
let listCombineSameLine = doc.querySelector("li.list")
console.log(listCombineSameLine)

console.log(" To Fetch all items matching selector use 'querySelectorAll' -> Return Array")
let listCombineSameLineAll = doc.querySelectorAll("li.list")
console.log(listCombineSameLineAll)

console.log("Listing all classes to a element")
let button = doc.querySelector("button")
console.log("Listing all classes to button element")
console.log(button.className)

console.log("Adding a class to a element")
console.log("Making button disappear ")
let button_class_list = button.classList
button_class_list.add("invisible")
console.log("Now button is invisible")

console.log("Removing a class to a element")
console.log("Making button appear ")
button_class_list.remove("invisible")
console.log("Now button is visible again")

console.log("Toggle or apply if not applied already")
console.log("Making button disappear by toggling invisible class ")
button_class_list.toggle("invisible")
console.log("Now button is invisible again")
console.log("Toggling again!")
button_class_list.toggle("invisible")
console.log("Now button is visible again!!")


console.log("Fetch attributes of a element")
console.log("attributes of button");
console.log(button.attributes);

console.log("Fetch specific attribute of a element")
console.log("attribute style of button");
console.log(button.getAttribute("style"));

console.log("Changing  attribute of a element, itreplaces if the attr already present")
console.log("attribute style of button setting hidden->true");
button.setAttribute("style","background-color:blue")
