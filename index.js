console.log("Welcome to the console");
console.log("In this site, we are going to learn document Object Model aka DOM");
console.log("If you tap the document tab, you'll find the html document in the console")

console.log("Here we are going to learn about:\n1.getElementsByTagName\n2.getElementsByClassName\n3.getElementsByID\n4.querySelector\n5.querySelectorAll")

console.log(document);
console.log("If you tap the document tab, you'll find the html document's body in the console");
console.log(document.body);
// .getElementsByTagName() method take a tag name as input and gives you the full object over the TagName 
console.log("Getting the objects using getElementByTagName('tag name')")
console.log("Showing the innerText of the lists in html");
const listCollection=document.getElementsByTagName('ul');
console.log("This is the array type object that is given on the tag name 'ul'",listCollection);
console.log(listCollection.length);
for(const li of listCollection){
    console.log("Showing the innerText using 'innertext'==>",li.innerText);
}
console.log("Getting the objects using getElementById('id name')")
console.log("IDs are always unique and only one value that is in remains so we only need the value that hold. No need to iterate ID's for that")
const formID=document.getElementById("form01");
console.log(formID);
console.log("IDs are always unique and only one value that is in remains so we only need the value that hold. No need to iterate ID's for that")
console.log(formID.innerText);
console.log(formID.innerHTML);
const allClass = document.getElementsByClassName("nav_links");
console.log(allClass);
console.log(allClass.length);
for(const li of allClass){
    console.log("Showing the innerText using 'innertext'==>",li.innerText);
    console.log("Showing the innerHTML using 'innertext'==>",li.innerHTML);
}
console.log("Now we are using querySelector() which selects the class and the element that is given");
const queryselect=document.querySelector(".nav_links","a");
console.log("This is the querySelector",queryselect);

console.log("Now we are using querySelectorAll() which selects all the class and the element that is given");
const queryselectall=document.querySelectorAll(".nav_links","a");
console.log("This is the querySelectorall",queryselectall);

