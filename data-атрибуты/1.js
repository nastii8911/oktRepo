"use strict";
const input = document.querySelector("input");
const inputField = document.querySelector(".input-field");
input === null || input === void 0 ? void 0 : input.addEventListener("input", (ev) => {
    const text = input.value;
    const validationMessage = inputField.querySelector(".validation-message");
    if (text.length > 5) {
        if (validationMessage)
            return;
        const p = document.createElement("p");
        p.classList.add("validation-message");
        p.textContent = input.getAttribute("data-validation-message");
        inputField.appendChild(p);
    }
    else {
        validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.remove();
    }
});
const imageUrl = "https://i.pinimg.com/736x/9f/b3/d3/9fb3d303905046143b259f42e33c7844.jpg";
const cards = [
    {
        title: "Card One",
        text: "This is the description for card one.",
        buttonText: "Learn More",
        imageUrl,
    },
    {
        title: "Card Two",
        text: "This is the description for card two.",
        buttonText: "See Details",
        imageUrl,
    },
    {
        title: "Card Three",
        text: "This is the description for card three.",
        buttonText: "Get Started",
        imageUrl,
    },
    {
        title: "Card Four",
        text: "This is the description for card four.",
        buttonText: "View More",
        imageUrl,
    },
    {
        title: "Card Five",
        text: "This is the description for card five.",
        buttonText: "Find Out",
        imageUrl,
    },
    {
        title: "Card Six",
        text: "This is the description for card six.",
        buttonText: "Explore",
        imageUrl,
    },
    {
        title: "Card Seven",
        text: "This is the description for card seven.",
        buttonText: "Discover",
        imageUrl,
    },
    {
        title: "Card Eight",
        text: "This is the description for card eight.",
        buttonText: "Join Us",
        imageUrl,
    },
    {
        title: "Card Nine",
        text: "This is the description for card nine.",
        buttonText: "Get Involved",
        imageUrl,
    },
    {
        title: "Card Ten",
        text: "This is the description for card ten.",
        buttonText: "Contact Us",
        imageUrl,
    },
];
const cardsContainer = document.querySelector(".cards");
// cards.forEach((cardData) => {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   const title = document.createElement("h3");
//   title.classList.add("card__title");
//   title.textContent = cardData.title;
//   const img = document.createElement("img");
//   img.classList.add("card__img");
//   img.src = cardData.imageUrl;
//   const p = document.createElement("p");
//   p.classList.add("card__text");
//   p.textContent = cardData.text;
//   const button = document.createElement("button");
//   button.classList.add("card__button");
//   button.textContent = cardData.buttonText;
//   card.appendChild(title);
//   card.appendChild(img);
//   card.appendChild(p);
//   card.appendChild(button);
//   cardsContainer?.appendChild(card);
// });
const template = document.querySelector(".card-template");
const cardTemplate = template.content;
cards.forEach((cardData) => {
    const card = createCard(cardData);
    cardsContainer === null || cardsContainer === void 0 ? void 0 : cardsContainer.appendChild(card);
});
function createCard(cardData) {
    const cloned = cardTemplate.cloneNode(true);
    const title = cloned.querySelector(".card__title");
    title.textContent = cardData.title;
    const img = cloned.querySelector(".card__image");
    img.src = cardData.imageUrl;
    const p = cloned.querySelector(".card__text");
    p.textContent = cardData.text;
    const button = cloned.querySelector(".card__button");
    button.textContent = cardData.buttonText;
    return cloned;
}
// <div class="cards">
//       <div class="card">
//         <h3 class="card__title">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
//           architecto.
//         </h3>
//         <img
//           src="https://i.pinimg.com/736x/9f/b3/d3/9fb3d303905046143b259f42e33c7844.jpg"
//           alt=""
//         />
//         <p class="card__text">
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
//           possimus aperiam fugiat incidunt iste aut consectetur neque odio
//           maiores, nihil animi, dignissimos laudantium quisquam dolores autem!
//           Exercitationem minima rerum necessitatibus!
//         </p>
//         <button class="card__button">Ok!</button>
//       </div>
//     </div>
