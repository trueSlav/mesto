const cardElementList = document.querySelector('.places__list')

const selectCardItems = () => {
	const cardTemplate = document.querySelector('#card-template').content
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
	const cardImageElement = cardElement.querySelector('.card__image')
	const cardTitleElement = cardElement.querySelector('.card__title')
	const cardDeleteButtonElement = cardElement.querySelectorAll(
		'.card__delete-button'
	)

	return {
		cardElement,
		cardImageElement,
		cardTitleElement,
		cardDeleteButtonElement
	}
}

const createCard = (parent, renderElement, data) => {
	const { name, link } = data

	renderElement.cardImageElement.src = link
	renderElement.cardImageElement.alt = name
	renderElement.cardTitleElement.textContent = name

	renderElement.cardDeleteButtonElement.forEach(button => {
		button.addEventListener('click', () =>
			removeItem(renderElement.cardElement)
		)
	})

	return renderElement.cardElement
}

const removeItem = cardElement => {
	cardElement.remove()
}

initialCards.forEach(card => {
	cardElementList.append(
		createCard(cardElementList, selectCardItems(), { ...card })
	)
})
