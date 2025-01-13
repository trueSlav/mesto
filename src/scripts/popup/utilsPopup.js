export const openPopup = popup => {
	popup.classList.add('popup_is-opened', 'popup_is-animated')
}

export const closePopup = popup => {
	if (popup.classList.contains('popup_is-opened')) {
		popup.classList.remove('popup_is-opened')
	}
}
