import { closePopup, openPopup, handleOpenTrigger } from './utilsPopup'

const popupEdit = (openTrigger, closeTrigger) => {
	const popupEditElement = document.querySelector('.popup_type_edit')

	handleOpenTrigger(openTrigger, () => {
		openPopup(popupEditElement)
	})

	popupEditElement.addEventListener('click', e => {
		if (e.target === popupEditElement) {
			closePopup(popupEditElement)
		}
		if (
			e.target === closeTrigger &&
			closeTrigger.classList.contains('popup__close')
		) {
			closePopup(popupEditElement)
		}
	})

	function escapeClose(e) {
		if (e.key === 'Escape') {
			closePopup(popupEditElement)
			document.removeEventListener('keydown', escapeClose)
		}
	}
	document.addEventListener('keydown', escapeClose)

	// Находим форму в DOM
	const formElement = document.querySelector('.popup__form')
	const nameInput = document.querySelector('.popup__input_type_name')
	const jobInput = document.querySelector('.popup__input_type_description')
	const profileNameElement = document.querySelector('.profile__title')
	const profileJobElement = document.querySelector('.profile__description')

	nameInput.value = profileNameElement.textContent
	jobInput.value = profileJobElement.textContent

	function handleFormSubmit(e) {
		e.preventDefault()
		const name = nameInput.value
		const job = jobInput.value

		profileNameElement.textContent = name
		profileJobElement.textContent = job
		closePopup(popupEditElement)
	}

	formElement.addEventListener('submit', handleFormSubmit)
}

export default popupEdit
