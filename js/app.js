
const sectionBlock = document.querySelectorAll('.section__block_plac')
const sectionBlockIcon = document.querySelectorAll('.section__block_icon')
const sectionBlockActivMenu = document.querySelectorAll('.section__block_activ-menu')


sectionBlock.forEach((el) => {
	el.addEventListener('click', (event) => {
		const firstChild = event.currentTarget.firstElementChild
		if (event.target.closest('.section__block_icon')) {
			if (firstChild.nextElementSibling.classList.contains('section__text_style')) {
				
				sectionBlockActivMenu.forEach((el) => {
					el.classList.remove('section__text_style')
				})
				
			} else {
				sectionBlockActivMenu.forEach((el) => {
					el.classList.remove('section__text_style')

				})
				firstChild.nextElementSibling.classList.add('section__text_style')
				
			}
		} else {

		}
		
	})
})

document.addEventListener('dblclick', (event) => {
	if (!event.target.parentElement.closest('.section__block_plac')) {
		sectionBlockActivMenu.forEach((el) => {
			el.classList.remove('section__text_style')
		})
	}
})



document.addEventListener('keydown', event => {
	if (event.code === 'Escape') {
		sectionBlockActivMenu.forEach((el) => {
			el.classList.remove('section__text_style')
		})
		
	}
	

})