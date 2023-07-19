const antiDB = [
  {
    id: "01",
    name: "Sunlight",
    description: "862-8",
    image: "./image/anti.jpeg",
    price: 200,
    country: ["China"],
  },
  {
    id: "01",
    name: "Sunlight",
    description: "862-8",
    image: "./image/anti.jpeg",
    price: 200,
    country: ["China"],
  },
  {
    id: "01",
    name: "Sunlight",
    description: "862-8",
    image: "./image/anti.jpeg",
    price: 200,
    country: ["China"],
  },
  {
    id: "01",
    name: "Sunlight",
    description: "862-8",
    image: "./image/anti.jpeg",
    price: 200,
    country: ["China"],
  },
  {
    id: "01",
    name: "Sunlight",
    description: "862-8",
    image: "./image/anti.jpeg",
    price: 200,
    country: ["China"],
  },
  {
    id: "01",
    name: "Sunlight",
    description: "862-8",
    image: "./image/anti.jpeg",
    price: 200,
    country: ["China"],
  },
  {
    id: "01",
    name: "Sunlight",
    description: "862-8",
    image: "./image/anti.jpeg",
    price: 200,
    country: ["China"],
  },
];

const products = document.querySelector(".js-anti");
console.log(products);
console.log(antiDB);

const menuMarkup = antiDB
  .map(({ image, name, price, description, country }) => {
    return `
    <div>
        <li>
        <article class="products-item">
        <img src="${image}" alt="${name}" width="200px"/>
        <h4> 👓 модель ${name}</h4>
        <p> артикул ${description}</p>
        <p> ${country}</p>
        <p> $ ${price} грн</p>
        </article>
    </li>

    </div>`;
  })
  .join("");

const ingredient = (antiDB) => {
  antiDB
    .map((country) => {
      return `<li class="tag-list__item"> ${country} </li >`;
    })
    .join("");
};

products.insertAdjacentHTML("beforeend", menuMarkup);
