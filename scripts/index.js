const cardElementList = document.querySelector('.places__list')

const selectCardItems = () => {
	const cardTemplate = document.querySelector('#card-template').content
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
	const cardImageElement = cardElement.querySelector('.card__image')
	const cardTitleElement = cardElement.querySelector('.card__title')

	return {
		cardElement,
		cardImageElement,
		cardTitleElement
	}
}

const renderItems = (parent, renderElement, removeCard, data) => {
	const { name, link } = data

	renderElement.cardImageElement.src = link
	renderElement.cardImageElement.alt = name
	renderElement.cardTitleElement.textContent = name

	removeCard(parent)

	return parent.append(renderElement.cardElement)
}

const removeItem = parent => {
	parent.addEventListener('click', e => {
		if (e.target && e.target.classList.contains('card__delete-button')) {
			e.target.parentElement.remove()
		}
	})
}

initialCards.forEach(card => {
	renderItems(cardElementList, selectCardItems(), removeItem, { ...card })
})
