document.addEventListener("DOMContentLoaded",function(){

	var form = document.forms['contact-form'];

	form.submit.onclick = function () {
		var isValid = true;
		if (form.name.value.length === 0) {
			form.name.nextElementSibling.innerHTML = "Vui lòng nhập tên.";
			isValid = false;
		} else {
			form.name.nextElementSibling.innerHTML = "";
		}
		if (form.email.value.length === 0) {
			form.email.nextElementSibling.innerHTML = "Vui lòng nhập email.";
			isValid = false;
		} else {
			form.email.nextElementSibling.innerHTML = "";
		}
		if (form.phone.value.length === 0) {
			form.phone.nextElementSibling.innerHTML = "Vui lòng nhập số điện thoại.";
			isValid = false;
		} else {
			form.phone.nextElementSibling.innerHTML = "";
		}
		if (isValid) {
			alert(form.name.value + " - " + form.email.value + " - " + form.phone.value);
		}
		
	}
})
