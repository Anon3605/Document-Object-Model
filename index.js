console.log("Welcome to the console");
console.log("In this site, we are going to learn document Object Model aka DOM");
console.log("If you tap the document tab, you'll find the html document in the console")

console.log("Here we are going to learn about:\n1.getElementsByTagName\n2.getElementsByClassName\n3.getElementsByID\n4.querySelector\n5.querySelectorAll")

console.log(document);
console.log("If you tap the document tab, you'll find the html document's body in the console");
console.log(document.body);


// option 01: getElementsByTagName()
console.log("Getting the objects using getElementByTagName('tag name')")
console.log("Showing the innerText of the lists in html");
const listCollection=document.getElementsByTagName('ul');
console.log("This is the array type object that is given on the tag name 'ul'",listCollection);
console.log(listCollection.length);
for(const li of listCollection){
    console.log("Showing the innerText using 'innertext'==>",li.innerText);
}


// option 02: getElementsById()
console.log("Getting the objects using getElementById('id name')")
console.log("IDs are always unique and only one value that is in remains so we only need the value that hold. No need to iterate ID's for that")
const formID=document.getElementById("form01");
console.log(formID);
console.log("IDs are always unique and only one value that is in remains so we only need the value that hold. No need to iterate ID's for that")
console.log(formID.innerText);
console.log(formID.innerHTML);


// option 02: getElementsByClassName()
const allClass = document.getElementsByClassName("nav_links");
console.log(allClass);
console.log(allClass.length);
for(const li of allClass){
    console.log("Showing the innerText using 'innertext'==>",li.innerText);
    console.log("Showing the innerHTML using 'innertext'==>",li.innerHTML);
}


// option 03: querySelect()
console.log("Now we are using querySelector() which selects the class and the element that is given");
const queryselect=document.querySelector(".nav_links","a");
console.log("This is the querySelector",queryselect);

// option 03: querySelectAll()
console.log("Now we are using querySelectorAll() which selects all the class and the element that is given");
const queryselectall=document.querySelectorAll(".nav_links","a");
console.log("This is the querySelectorall",queryselectall);

console.log("This is the Console.log(document.querySelcetorAll('.class_name'||'#Id_name'))");
const style_elem = document.querySelector("#log_links");
console.log(style_elem);
console.log("Printing all the elements of the selector variable");
for(var i of style_elem.attributes){
    console.log(i);
}
console.log("Here you can change the styles\nChanging text color form white to black");
style_elem.style.color="black";
