import { closePopup, handleOpenTrigger, openPopup } from './utilsPopup'
import { renderCard } from '../createCard/createCard'

const popupCreate = (openTrigger, closeTrigger) => {
	const popupCreateElement = document.querySelector('.popup_type_new-card')

	handleOpenTrigger(openTrigger, () => {
		openPopup(popupCreateElement)
	})

	popupCreateElement.addEventListener('click', e => {
		if (e.target === popupCreateElement) {
			closePopup(popupCreateElement)
		}
		if (
			e.target === closeTrigger &&
			closeTrigger.classList.contains('popup__close')
		) {
			closePopup(popupCreateElement)
		}
	})

	function escapeClose(e) {
		if (e.key === 'Escape') {
			closePopup(popupCreateElement)
			document.removeEventListener('keydown', escapeClose)
		}
	}
	document.addEventListener('keydown', escapeClose)

	// Находим форму в DOM
	const formElement = document.querySelector('form[name="new-place"]')
	console.log(formElement)
	const nameInput = document.querySelector('.popup__input_type_card-name')
	const linkInput = document.querySelector('.popup__input_type_url')

	function handleFormSubmit(e) {
		e.preventDefault()
		const name = nameInput.value
		const link = linkInput.value

		const data = {
			name,
			link
		}

		renderCard(data)
		formElement.reset()
		closePopup(popupCreateElement)
	}

	formElement.addEventListener('submit', handleFormSubmit)
}

export default popupCreate
