// To change the heading style
document.addEventListener("DOMContentLoaded", () => {

const heading = document.getElementById("heading");
heading.style.backgroundColor = "blue";
heading.style.color = "#ffff";
heading.style.padding ="20px";
heading.style.borderRadius = "10px";

// To change the text content and styles
const paragraph = document.getElementsByClassName("para");

if(paragraph.length >= 5){
paragraph[0].style.backgroundColor ="gray";
paragraph[0].style.color = "black";
paragraph[0].innerHTML = "I know now what the DOM is 🙌";

paragraph[1].style.backgroundColor = "yellow";
paragraph[1].style.color = "black";
paragraph[1].innerHTML = "I know how to access / select elements in the DOM 👊";

paragraph[2].style.backgroundColor = "green";
paragraph[2].style.color = "black";
paragraph[2].innerHTML = "I know how to use the style methods to change the style of an element in the DOM ✅";

paragraph[3].style.backgroundColor ="purple";
paragraph[3].style.color = "#ffff";
paragraph[3].style.textContent = "I know how the styling properties differ in JS from CSS 👍";

paragraph[4].style.backgroundColor = "black";
paragraph[4].style.color = "#ffff";
paragraph[4].innerHTML = "Yes I did it!! I manipulated the DOM and styled my elements 😍😍😍😍 ";

}else{
    console.error("Error: Not enough paragraph elements found.");
}

} );

