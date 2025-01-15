export const openPopup = popup => {
	popup.classList.add('popup_is-opened', 'popup_is-animated')
}

export const closePopup = popup => {
	if (popup.classList.contains('popup_is-opened')) {
		popup.classList.remove('popup_is-opened')
	}
}

const isArray = arr => {
	return Array.isArray(arr)
}

export const handleOpenTrigger = (openTrigger, openPopup) => {
	return isArray(openTrigger)
		? openTrigger.forEach(elem => {
				elem.addEventListener('click', e => {
					if (elem === e.target) {
						openPopup()
					}
				})
			})
		: openTrigger.addEventListener('click', () => {
				openPopup()
			})
}
