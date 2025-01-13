import { closePopup, openPopup } from './utilsPopup'

const popupEdit = () => {
	const popupEditElement = document.querySelector('.popup_type_edit')
	const openPopupEditButton = document.querySelector('.profile__edit-button')
	const closePopupEditButton = document.querySelector('.popup__close')

	openPopupEditButton.addEventListener('click', () => {
		openPopup(popupEditElement)
	})

	popupEditElement.addEventListener('click', e => {
		if (e.target === popupEditElement) {
			closePopup(popupEditElement)
		}
		if (e.target === closePopupEditButton) {
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
}

export default popupEdit
