const items = document.querySelectorAll('.item')
const container = document.querySelector('.sortableList')

items.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging')
    })
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging')
    })
})


const handleDragOver = (e) => {
    e.preventDefault()
    const draggingItem = container.querySelector('.dragging')
    const siblings = [...container.querySelectorAll(".item:not(.dragging)")];
    const nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2
    })
    console.log(draggingItem);
    container.insertBefore(draggingItem, nextSibling)
}

container.addEventListener('dragover', handleDragOver)