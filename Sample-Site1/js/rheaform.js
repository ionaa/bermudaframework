var formbody = document.getElementById('formbody');
var confirm = document.getElementById('appconfirm');

function animatedForm() {
	const arrows = document.querySelectorAll('.fa-arrow-down');
	arrows.forEach(arrow => {
       arrow.addEventListener('click', () => {
       	const input = arrow.previousElementSibling;
       	const parent = arrow.parentElement;
       	const nextForm = parent.nextElementSibling;
       	if (input.type === "text"  && validateUser(input)) {
       		nextSlide(parent, nextForm);
       	}else if (input.type === "email" && validateEmail(input)) {
       		nextSlide(parent, nextForm);
       	}
       	else if (input.type === "phone" && validatePhone(input)) {
       		nextSlide(parent, nextForm);
       	}
       	else{
       		parent.style.animation = "shake 0.5s ease";
       	}
       	parent.addEventListener('animationend', () => {
       		parent.style.animation = "";
       	});
       });
	});
	}

	function validateUser(user) {
		if(user.value.length < 3){
			console.log('not enough characters');
			error('rgb(195,41,62');
		}
		else{
			error('rgb(19,175,96');
			return true;
		}
	}

	function validateEmail(email) {
		const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if(validation.test(email.value)){
			error('rgb(19,175,96');
			return true;
		}
		else{
			error('rgb(195,41,62');
		}
	}
	function validatePhone(phone) {
		const phonevalidation = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if(phonevalidation.test(phone.value)){
			error('rgb(19,175,96');
			return true;
		}	
		else{
			error('rgb(195,41,62');
		}
	}
function nextSlide(parent, nextForm) {
	parent.classList.add("inactive");
	parent.classList.remove("active");
	nextForm.classList.add("active");
}

    function error(color) {
    	
    	formbody.style.backgroundColor = color;
    }

	animatedForm();