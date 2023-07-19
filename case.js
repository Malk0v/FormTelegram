const caseDB = [
  {
    id: "01",
    name: "case",
    description: "867",
    image: "./image/case.webp",
    price: 140,
    colors: ["Белый", "Черный"],
    country: "Украина",
  },
  {
    id: "01",
    name: "case",
    description: "867",
    image: "./image/case.webp",
    price: 140,
    colors: ["Белый", "Черный"],
    country: "Украина",
  },
  {
    id: "01",
    name: "case",
    description: "867",
    image: "./image/case.webp",
    price: 140,
    colors: ["Белый", "Черный"],
    country: "Украина",
  },
];

const products = document.querySelector(".js-case");
console.log(products);
console.log(caseDB);

const menuMarkup = caseDB
  .map(({ image, name, price, description, colors, country }) => {
    return `
    <div>
      <li>
        <article class="products-item">
        <img src="${image}" alt="${name}" width="200px"/>
        <h4> 👓 модель ${name}</h4>
        <p> артикул ${description}</p>
        <p> Цвета: ${colors}</p>
        <p> $ ${price} грн</p>
        <p> Производитель: ${country}</p>
        </article>
      </li>
      
    </div>`;
  })
  .join("");

const diopria = (caseDB) => {
  caseDB
    .map((colors) => {
      return `<li class="tag-list__item"> ${colors} </li >`;
    })
    .join("");
};

products.insertAdjacentHTML("beforeend", menuMarkup);
