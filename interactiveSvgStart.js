document.addEventListener("DOMContentLoaded", function () {
	runProgram();
});

async function runProgram() {

	let selected;
	let selectedID;
	let color;
	let active;
	let infoboks;

	// 1. Load svg map
	//------------------------------------------------------------------------------------
	let mySvg = await fetch("Kunstpakhuset3.svg");
	let svg = await mySvg.text();

	document.querySelector("#map").innerHTML = svg;

	// 2. find infobokse og skjul dem
	//------------------------------------------------------------------------------
	let info_1 = document.querySelector("#map #info-1");
	let info_2 = document.querySelector("#map #info-2");
	let info_3 = document.querySelector("#map #info-3");
	let info_4 = document.querySelector("#map #info-4");

	info_1.style.visibility = "hidden";
	info_2.style.visibility = "hidden";
	info_3.style.visibility = "hidden";
	info_4.style.visibility = "hidden";


	// 3. Skift farve ved klik, og vis tekst
	//-----------------------------------------------------------------------

	document.querySelector("#map #points").addEventListener("click", function (evt) {
		clicked(evt);
	})


	//function clicked
	//--------------------------------------------------------------------
	function clicked(obj) {
		if (infoboks != undefined) {
			infoboks.style.visibility = "hidden";
		}




		// a. find det klikkede element
		//----------------------------------------------
		selected = obj.target;


		// b. find det klikkede elementets ID
		//---------------------------------------------
		selectedID = selected.getAttribute("id");



		// c. find  det klikkede elements fillfarve
		//---------------------------------------------
		color = selected.getAttribute("fill");
		console.log(color);



		// d. vis infobokse
		//--------------------------------------------
		if (selectedID === "punkt1") {
			info_1.style.visibility = "visible";
			infoboks = info_1;
		}
		if (selectedID === "punkt2") {
			info_2.style.visibility = "visible";
			infoboks = info_2;
		}
		if (selectedID === "punkt3") {
			info_3.style.visibility = "visible";
			infoboks = info_3;
		}
		if (selectedID === "punkt4") {
			info_4.style.visibility = "visible";
			infoboks = info_4;
		}




		// 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
		//------------------------------------------------------------------------------------
		if (active != undefined) {
			active.setAttribute("fill", color);
		}

		//gør det klikkede til det aktive
		//-------------------------------------------------------------------------
		active = selected;



		//skift farve på det valgte
		//-------------------------------------------------------------------------
		if (color === "#b62300")(
			document.querySelector("#" + selectedID).setAttribute("fill", "#123456")
		)

		//reset farve og skjul tekst hvis valgt elementet allerede er aktivt
		//--------------------------------------------------------------------------
		else {
			document.querySelector("#" + selectedID).setAttribute("fill", "#b62300");
			infoboks.style.visibility = "hidden";
		}

	}

};
