// _______________________________________________________Счетчик__________________________________________________________
document.querySelectorAll(".product__card").forEach(card => {
	const minus = card.querySelector(".counter__minus");
	const plus = card.querySelector(".counter__plus");
	const quantity = card.querySelector(".counter__quantity");
	const newPrice = card.querySelector(".price__new");
	const oldPrice = card.querySelector(".price__old");

	const newBasePrice = +newPrice.dataset.price;
	const oldBasePrice = +oldPrice.dataset.price;

	let count = 1;

	const updatePrice = () => {
		newPrice.textContent = `${(newBasePrice * count).toLocaleString("ru-RU")} P`;
		oldPrice.textContent = `${(oldBasePrice * count).toLocaleString("ru-RU")} P`;
	};

	plus.addEventListener("click", () => {
		count++;
		quantity.textContent = count;
		updatePrice();
	});

	minus.addEventListener("click", () => {
		if (count > 1) {
			count--;
			quantity.textContent = count;
			updatePrice();
		}
	});
});

//___________________________________________Фильтр__________________________________________________________

const select = document.querySelector(".product__select");
const cardsContainer = document.querySelector(".product__cards");
const cards = [...document.querySelectorAll(".product__card")];
const defaultCards = [...cards];

select.addEventListener("change", () => {
	if (select.value === "Сначала дешевые") {
		cards.sort((a, b) => {
			const priceA = +a.querySelector(".price__new").dataset.price;
			const priceB = +b.querySelector(".price__new").dataset.price;
			return priceA - priceB;
		});

		cards.forEach(card => {
			cardsContainer.append(card);
		});
	}

	if (select.value === "Сначала дорогие") {
		cards.sort((a, b) => {
			const priceA = +a.querySelector(".price__new").dataset.price;
			const priceB = +b.querySelector(".price__new").dataset.price;
			return priceB - priceA;
		});

		cards.forEach(card => {
			cardsContainer.append(card);
		});
	}

	if (select.value === "Сначала популярное") {
		defaultCards.forEach(card => {
			cardsContainer.append(card);
		});
	}
});
