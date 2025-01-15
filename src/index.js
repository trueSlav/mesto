import './pages/index.css'
import { initialCards } from './scripts/cards.js'
import { popupEdit } from './scripts/popup/main'

const cardElementList = document.querySelector('.places__list')

const selectCardItems = () => {
	const cardTemplate = document.querySelector('#card-template').content
	const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
	const cardImageElement = cardElement.querySelector('.card__image')
	const cardTitleElement = cardElement.querySelector('.card__title')
	const cardDeleteButtonElement = cardElement.querySelector(
		'.card__delete-button'
	)

	return {
		cardElement,
		cardImageElement,
		cardTitleElement,
		cardDeleteButtonElement
	}
}

const createCard = (renderElement, removeCard, data) => {
	const { name, link } = data

	renderElement.cardImageElement.src = link
	renderElement.cardImageElement.alt = name
	renderElement.cardTitleElement.textContent = name

	renderElement.cardDeleteButtonElement.addEventListener('click', () =>
		removeCard(renderElement.cardElement)
	)

	return renderElement.cardElement
}

const removeItem = cardElement => {
	cardElement.remove()
}

initialCards.forEach(card => {
	cardElementList.append(createCard(selectCardItems(), removeItem, { ...card }))
})

// --------- MODAL ---------
const openPopupEditButton = document.querySelector('.profile__edit-button')
const openPopupEditButtonS = document.querySelector('.profile__image')
const opbtns = [openPopupEditButton, openPopupEditButtonS]
const closePopupEditButton = document.querySelector('.popup__close')

popupEdit(opbtns, closePopupEditButton)

//utils
// const openPopup = popup => {
// 	popup.classList.add('popup_is-opened')
// }
//
// const closePopup = popup => {
// 	if (popup.classList.contains('popup_is-opened')) {
// 		popup.classList.remove('popup_is-opened')
// 	}
// }

// popup_type_edit

// const popupEditElement = document.querySelector('.popup_type_edit')
// const openPopupEditButton = document.querySelector('.profile__edit-button')
// const closePopupEditButton = document.querySelector('.popup__close')
//
// openPopupEditButton.addEventListener('click', () => {
// 	openPopup(popupEditElement)
// })
//
// popupEditElement.addEventListener('click', e => {
// 	if (e.target === popupEditElement) {
// 		closePopup(popupEditElement)
// 	}
// 	if (e.target === closePopupEditButton) {
// 		closePopup(popupEditElement)
// 	}
// })

// popup_type_new-card
// const popupNewCardElement = document.querySelector('.popup_type_new-card')
// const openPopupNewCardButton = document.querySelector('.profile__edit-button')
// const closePopupNewCardButton = document.querySelector('.popup__close')

// popup_type_image
