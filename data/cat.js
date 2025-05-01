// にゃー…

let pa = new URLSearchParams(document.location.search)

let text_1 = document.getElementById('text_input_1')
let text_2 = document.getElementById('text_input_2')
let text_3 = document.getElementById('text_input_3')

let button_1 = document.getElementById('button_1')
let button_2 = document.getElementById('button_2')
let button_3 = document.getElementById('button_3')



function revcat(i){
	return i.split('').reverse().join('')
}

function replace(){
	text_2.value = text_1.value
	text_3.value = revcat(text_1.value)
}


function paste_button(){
	navigator.clipboard.readText().then(function(tmp){
		text_1.value = tmp
		replace()
	}, function(){})
}

function copy_cat(){
	navigator.clipboard.writeText(text_2.value)
	alert('コピーしました！')
}

function copy_revcat(){
	navigator.clipboard.writeText(text_3.value)
	alert('コピーしました！')
}


text_1.addEventListener('input', replace)

button_1.addEventListener('click', paste_button)
button_2.addEventListener('click', copy_cat)
button_3.addEventListener('click', copy_revcat)



let open_input = pa.get('input')
if(open_input !== undefined){
	text_1.value = open_input
	replace()
}

