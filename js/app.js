const one = document.querySelector('.icon_1')
const two = document.querySelector('.icon_2')
const three = document.querySelector('.icon_3')
const text1 = document.querySelectorAll('.section__text_p')[0]
const text2 = document.querySelectorAll('.section__text_p')[1]
const text3 = document.querySelectorAll('.section__text_p')[2]


const f = one.addEventListener('click', () => {
	if (text1.style.height === '0px') {
		text1.style.height = '210px'
		text1.style.padding = '15px 0 15px 15px'
		text1.style.border = '1px solid #e5e5e5'
		
		
		
	} else {
		text1.style.height = '0px'
		text1.style.padding = '0 15px  0 15px'
		text1.style.border = '0px solid #e5e5e5'
	
	}
})
two.addEventListener('click', () => {
	if (text2.style.height === '0px') {
		text2.style.height = '210px'
		text2.style.padding = '15px 0 15px 15px'
		text2.style.border = '1px solid #e5e5e5'
		
	} else {
		text2.style.height = '0px'
		text2.style.padding = '0 15px  0 15px'
		text2.style.border = '0px solid #e5e5e5'
		
	}
})
three.addEventListener('click', () => {
	if (text3.style.height === '0px') {
		text3.style.height = '210px'
		text3.style.padding = '15px 0 15px 15px'
		text3.style.border = '1px solid #e5e5e5'
		
	} else {
		text3.style.height = '0px'
		text3.style.padding = '0 15px  0 15px'
		text3.style.border = '0px solid #e5e5e5'
		
	}
})






