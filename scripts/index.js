const cardElementList = document.querySelector('.places__list')

const cardItems = () => {
    const cardTemplate = document.querySelector('#card-template').content
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true)
    const cardImageElement = cardElement.querySelector('.card__image')
    const cardTitleElement = cardElement.querySelector('.card__title')

    return {
        li: cardElement,
        imageCard: cardImageElement,
        titleCard: cardTitleElement,
    }
}

const renderItems = (parent, renderElement, data) => {
    const {name, link} = data;

    renderElement.imageCard.src = link
    renderElement.imageCard.alt = name
    renderElement.titleCard.textContent = name

    parent.append(renderElement.li)
}

initialCards.forEach(card => {
    renderItems(cardElementList, cardItems(), {...card})
})

const cardsDelButtonElement = cardElementList.querySelector('.card__delete-button')

const removeList = (parent, trigger) => {

    parent.addEventListener('click', e => {

        // if (typeof trigger[Symbol.iterator] === 'function') {
        //     trigger.forEach(btn => {
        //         if(e.target === btn || e.target.classList.contains('card__delete-button')) {
        //             e.target.parentElement.setAttribute('hidden', '')
        //             // e.target.parentElement.remove()
        //             console.log('card is deleted')
        //         }
        //     })
        // } else {
        //     if(e.target === trigger || e.target.classList.contains('card__delete-button')) {
        //         e.target.parentElement.remove()
        //         console.log('card is deleted single')
        //     }
        // }

        if(e.target === trigger || e.target.classList.contains('card__delete-button')) {
            e.target.parentElement.remove()
            console.log('card is deleted single')
        }

    })
}

removeList(cardElementList, cardsDelButtonElement)