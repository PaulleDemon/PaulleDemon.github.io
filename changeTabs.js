
function openTab(tabid, btn_id) {

	for (let x of ["hire-me", "about-section"]){
	document.getElementById(x).style.display = "none";
	}

	for (let x of ["hire_me_btn", "about_me_btn"]){
		document.getElementById(x).classList.remove("active-btn");
	}

	document.getElementById(tabid).style.display = "block";
	document.getElementById(btn_id).classList.add("active-btn");

}
