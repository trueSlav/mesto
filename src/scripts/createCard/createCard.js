const cardElementList = document.querySelector('.places__list')

const createCard = data => {
	const { name, link } = data
	const cardTemplate = document.querySelector('#card-template').content
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
	const cardImageElement = cardElement.querySelector('.card__image')
	const cardTitleElement = cardElement.querySelector('.card__title')
	const cardDeleteButtonElement = cardElement.querySelector(
		'.card__delete-button'
	)

	cardImageElement.src = link
	cardImageElement.alt = name
	cardTitleElement.textContent = name

	cardElementList.addEventListener('click', e => {
		if (
			e.target.classList.contains('card__delete-button') &&
			e.target === cardDeleteButtonElement
		) {
			cardElement.remove()
		}
	})

	return cardElement
}

export const initialRenderCard = card => {
	cardElementList.append(createCard(card))
}

export const renderCard = data => {
	cardElementList.prepend(createCard(data))
}
