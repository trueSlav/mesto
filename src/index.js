import './pages/index.css'
import { initialCards } from './scripts/cards.js'
import { initialRenderCard } from './scripts/createCard/createCard'
import { popupEdit, popupCreate } from './scripts/popup/main'

initialCards.forEach(card => {
	initialRenderCard(card)
})

// const newCard = {
// 	name: 'gojo satory?',
// 	link: 'https://plus.unsplash.com/premium_photo-1736803528008-0f172fbca646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
// }
//
// renderCard(newCard)

// --------- MODAL ---------
const closePopupEditButton = document.querySelector('.popup__close')
// EDIT MODAL
const openPopupEditButton = document.querySelector('.profile__edit-button')
const openPopupEditButtonS = document.querySelector('.profile__image')
const opbtns = [openPopupEditButton, openPopupEditButtonS]

popupEdit(opbtns, closePopupEditButton)

// CREATE MODAL
const openPopupCreateButton = document.querySelector('.profile__add-button')

popupCreate(openPopupCreateButton, closePopupEditButton)
