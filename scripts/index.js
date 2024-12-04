const cardTemplate = document.querySelector('#card-template').content
const cardElementList = document.querySelector('.places__list')

const addCard = ({name, link}) => {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
    const cardImageElement = cardElement.querySelector('.card__image')
    const cardTitleElement = cardElement.querySelector('.card__title')

    cardImageElement.src = link
    cardImageElement.alt = name
    cardTitleElement.textContent = name

    cardElementList.append(cardElement)
}

const removeCard = () => {
    const cardsDelButtonElement = cardElementList.querySelectorAll('.card__delete-button')

    cardsDelButtonElement.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target
            target.parentElement.setAttribute('hidden', '')
        })
    })
}

initialCards.forEach(card => {
    addCard(card)
})
removeCard()