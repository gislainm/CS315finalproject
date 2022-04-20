"use strict";
/*eslint-disable */
const productsArr = [
    {
        name: "Sapiens: A Brief History of Humankind Audible Audiobook – Unabridged Yuval Noah Harari(Author), Derek Perkins(Narrator), HarperAudio(Publisher)",
        category: "Books",
        quantity: 3,
        image: "<img class='card-img-top' src='./photos/sapiens.jpeg' alt='Card image cap'>",
        rating: 5,
        price: "$18.49"
    },
    {
        name: "Story Genius: How to Use Brain Science to Go Beyond Outlining and Write a Riveting Novel (Before You Waste Three Years Writing 327 Pages That Go Nowhere)",
        category: "Books",
        quantity: 2,
        image: "<img class='card-img-top' src='./photos/storyGenius.jpg' alt='Card image cap'>",
        rating: 4,
        price: "$13.79"
    },
    {
        name: "A Brief History of Time Paperback – Illustrated, ",
        category: "Books",
        quantity: 4,
        image: "<img class='card-img-top' src='./photos/aBriefHistory.jpg' alt='Card image cap'>",
        rating: 5,
        price: "$15.44"
    },
    {
        name: "The Shining Mass Market Paperback – June 26, 2012",
        category: "Books",
        quantity: 5,
        image: "<img class='card-img-top' src='./photos/theShining.jpg' alt='Card image cap'>",
        rating: 5,
        price: "$11.49"
    },
    {
        name: "Dune (Dune Chronicles, Book 1) Paperback – August 2",
        category: "Books",
        quantity: 10,
        image: "<img class='card-img-top' src='./photos/dube.jpg' alt='Card image cap'>",
        rating: 5,
        price: "$20.79"
    }]
window.onload = function () {
    let productsList = document.getElementsByClassName("myflex")[0];
    productsList.innerHTML = "";
    for (let element of productsArr) {
        let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + element.category + "</h5>" +
            "<p class='card-text'>" + element.name + "</p>" +
            "<p><b>" + element.price + "</b></p>" +
            "</div>" +
            "</div>";
        productsList.innerHTML += productCard;
    }
}

    // < div class="card border-3" style = "width: 18rem;" >
    //     <img class="card-img-top" src="img/carousel6.jpg" alt="Card image cap">
    //         <div class="card-body">
    //             <h5 class="card-title">Pumpers</h5>
    //             <p class="card-text">So tight and smooth on body.Parental && always Dry.Best Prices in town</p>
    //             <p>$<b>35.</b>99</p>
    //         </div>
    //     </div>