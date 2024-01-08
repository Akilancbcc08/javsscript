document.head.innerHTML="<title>DOM CLASS</title>"

// document.body.innerHTML="<p> hello Akila</p>"
// document.body.innerHTML+="Hello dey Akila"
// let z=document.createElement("p");
// document.body.append(z)
// z.textContent="Welcome to js World";

// let div=document.createElement("div");
// div.style.width="200px";
// div.style.height="200px";
// div.style.background=" gray";
// document.body.append(div);
// let para=document.createElement("p");
// para.textContent="Dey Akila";
// para.style.color="white";
// para.style.fontSize="25px";
// div.appendChild(para);
// let link=document.createElement("a");
// document.body.append(link);
// link.textContent="Home";
// link.setAttribute("href","#");
// console.log(link.getAttribute("href"));
// link.removeAttribute("href");
// link.href="#"
// link.remove();
// let img =document.createElement("img");
// img.src="cartoon.jpg";
// document.body.append(img);
// img.style.width="500px";
// img.style.height="400px";
// document.body.append(img);
// img.style.padding="100px";

// let a=prompt("Enter first value");
// let b=prompt("Enter second value");
// document.write(parseInt(a)+parseInt(b));


let input=document.createElement("p");
input.id="username";
document.body.append(input);
let a=document.getElementById("username");

a.textContent="this is the  textcontent";
document.body.append(a);
a.style.color="red";
a.style.fontsize="45px";

let element =document.getElementsByClassName("highlight");
console.log(elements);