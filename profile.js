let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')
let img = document.querySelector('img')

color.addEventListener('click', () => {
    alert('Blue')
}
)
place.addEventListener('click', () => {
    alert('Raising Canes')
}
)
ritual.addEventListener('click', () => {
    alert('Breakfast Casserole on Christmas morning')
}
)

img.addEventListener('mouseover', () => {
    alert('This is not a real photo of Chandler Dearden')
})
