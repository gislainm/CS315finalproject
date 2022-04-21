/*eslint-disable*/
'use strict';

function display1(obj) {
    

    
  let img=  document.getElementById("pdone");
  console.log("My img is", img);
 // .innerHTML=obj.image;
let item="<div class='card-body'>" +
"<h5 class='card-title'>" + obj.category + "</h5>" +
"<p class='card-text'>" + obj.name + "</p>" + obj.rating +
"<p><b>" + obj.price + "</b></p>" +
"</div>"; 
    //document.getElementById("pdtwo").innerHTML=item;

    console.log("my item is ", item);
   // location.href = "productpage.html.";

}