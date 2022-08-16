function Swatchy() {

    let trigger
    let input
    let container
    let swatches = [
        "#B71C1C", "#D32F2F", "#F44336", "#E57373", "#FFCDD2",
        "#880E4F", "#C2185B", "#E91E63", "#F06292", "#F8BBD0",
        "#4A148C", "#7B1FA2", "#9C27B0", "#BA68C8", "#E1BEE7",
        "#311B92", "#512DA8", "#673AB7", "#9575CD", "#D1C4E9",
    ]


    // swatches = props?.swatches ?? this.swatches
    trigger = document.querySelector('.swatchy-trigger')
    input = document.querySelector('.swatchy-display')
    createPopup()
    addSwatches()
    trigger.addEventListener('click', togglePopup)

    function createPopup() {
        container = document.createElement("div")
        container.classList.add('swatchy-element')
        container.setAttribute('style', 'display: none;')
        input.after(container)
    }

    function addSwatches() {
        let swatchContainer = document.createElement('div')
        swatchContainer.classList.add('swatchy-swatches')
        container.appendChild(swatchContainer)

        for (const swatch of swatches) {
            let colorButton = document.createElement('div')
            colorButton.setAttribute('data-swatchy-color', swatch)
            colorButton.style.backgroundColor = swatch
            colorButton.classList.add('swatchy-color-button')
            colorButton.addEventListener('click', selectColor)
            swatchContainer.appendChild(colorButton)
        }

    }

    function selectColor(e) {
        let input = document.querySelector('.swatchy-display')
        let newColor = e.target.getAttribute('data-swatchy-color')
        input.setAttribute('value', newColor)
        input.setAttribute('data-swatchy-color', newColor)
        input.setAttribute('style', 'background-color: ' + newColor + '; color: ' + newColor + ';')
        togglePopup()
    }

    function togglePopup() {
        let el = document.querySelector('.swatchy-element')
        let displayValue = 'block'

        let display = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display
        if ('none' === display) {
            el.style.display = displayValue
        } else {
            el.style.display = 'none'
        }
    }

}

