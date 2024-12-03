// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardTemplate = document.querySelector('#card-template').content
const cardsDelButtonElement = cardTemplate.querySelector('.card__delete-button').cloneNode(true)
console.log(cardsDelButtonElement)

const removeCard = (e) => {
    console.log(e)
    e.setAttribute('data-hidden', 'hidden')
}

const addCard = ({name, link}) => {
    const cardElementList = document.querySelector('.places__list')
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true)
    const cardImageElement = cardElement.querySelector('.card__image')
    const cardTitleElement = cardElement.querySelector('.card__title')

    cardImageElement.src = link
    cardImageElement.alt = name
    cardTitleElement.textContent = name

    cardElementList.append(cardElement)
}

initialCards.forEach(card => {
    addCard(card)
})

// cardsDelButtonElement.forEach(button => {
//     button.addEventListener('click', (e) => {
//         console.log(e.target)
//     })
// })