import "../css/menu.css";
// import images
import imgStew from "../images/food-menu/stew.png";
import imgHamburger from "../images/food-menu/hamburger.png";
import imgPasta1 from "../images/food-menu/pasta1.png";
import imgPasta2 from "../images/food-menu/pasta2.png";
import imgSteak from "../images/food-menu/steak.png";
import imgTaco from "../images/food-menu/taco.png";

const menuItems = [

    {
        imageSrc: imgStew,
        imageAlt: "stew",
        name: "Stew",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.",
        price: "$4.99"
    },
    {
        imageSrc: imgHamburger,
        imageAlt: "hamburger",
        name: "Hamburger",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.",
        price: "$5.99"
    },
    {
        imageSrc: imgPasta1,
        imageAlt: "pasta",
        name: "Pasta 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.",
        price: "$6.99"
    },
    {
        imageSrc: imgPasta2,
        imageAlt: "pasta",
        name: "Pasta 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.",
        price: "$7.99"
    },
    {
        imageSrc: imgSteak,
        imageAlt: "steak",
        name: "Steak",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.",
        price: "$8.99"
    },
    {
        imageSrc: imgTaco,
        imageAlt: "tacos",
        name: "Tacos",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.",
        price: "$9.99"
    }
];

// function for rendering the menu page
const renderMenuPage = () => {

    // div#content
    const contentContainer = document.getElementById("content");

    // div.menu-container
    const menuPageContainer = document.createElement("div");
    menuPageContainer.classList.add("menu-container");
    contentContainer.appendChild(menuPageContainer);

    // h1
    const h1 = document.createElement("h1");
    h1.innerText = "Menu";
    menuPageContainer.appendChild(h1);

    // div.food-container
    const foodContainer = document.createElement("div");
    foodContainer.classList.add("food-container");
    menuPageContainer.appendChild(foodContainer);

    menuItems.forEach((item) => {

        // food card
        const foodItem = document.createElement("article");
        foodItem.classList.add("food");

        // img
        const image = document.createElement("img");
        image.src = item.imageSrc;
        image.alt = item.imageAlt;
        foodItem.appendChild(image);

        // h2
        const h2 = document.createElement("h2");
        h2.innerText = item.name;
        foodItem.appendChild(h2);

        // description p
        const pDescription = document.createElement("p");
        pDescription.innerText = item.description;
        foodItem.appendChild(pDescription);

        // price p
        const pPrice = document.createElement("p");
        pPrice.innerText = item.price;
        pPrice.classList.add("price");
        foodItem.appendChild(pPrice);

        // add card in div.food-container
        foodContainer.appendChild(foodItem);
    });

};

export { renderMenuPage };

//<div class="menu-container">
//
//    <h1>Menu</h1>
//
//    <div class="food-container">
//       <article class="food">
//            <img src="./images/food-menu/stew.png" alt="stew">
//            <h2>Stew</h2>
//            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.</p>
//           <p>$4.99</p>
//        </article>
//
//        <article class="food">
//            <img src="./images/food-menu/hamburger.png" alt="hamburger">
//            <h2>Hamburger/h2>
//            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.</p>
//            <p>$5.99</p>
//        </article>
//
//        <article class="food">
//            <img src="./images/food-menu/pasta1.png" alt="pasta">
//            <h2>Pasta 1</h2>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.</p>
//            <p>$6.99</p>
//        </article>
//
//        <article class="food">
//            <img src="./images/food-menu/pasta2.png" alt="pasta">
//            <h2>Pasta 2</h2>
//            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.</p>
//            <p>$7.99</p>
//        </article>
//
//       <article class="food">
//            <img src="./images/food-menu/steak.png" alt="steak">
//            <h2>Steak</h2>
//            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.</p>
//            <p>$8.99</p>
//        </article>
//
//        <article class="food">
//           <img src="./images/food-menu/taco.png" alt="tacos">
//            <h2>Tacos</h2>
//            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aliquam nostrum quidem laboriosam.</p>
//            <p>$9.99</p>
//        </article>
//    </div>
//
//</div>