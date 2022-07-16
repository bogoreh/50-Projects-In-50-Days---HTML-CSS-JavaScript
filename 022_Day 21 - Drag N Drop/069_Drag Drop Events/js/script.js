const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
    empty.addEventListener('dragOver', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drag', drapDrop)
}

/* function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
} */

function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    // console.log('drag end')
    this.className = 'fill'
}

function dragOver(e) {
    // console.log('drag Over')
    e.preventDefault()
}

function dragStart() {
    console.log('drag start')
}

function dragEnter(e) {
    // console.log('drag enter')
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    // console.log('drag leave')
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}