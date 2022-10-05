const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
		'X-RapidAPI-Key': 'e681294c3fmsh1faa5cac0ee618ap15360ajsn9b46a1f342a7'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => console.log(response))
    .catch(err => console.error(err));



function showAlertLV() {
    alert("Hey! You have just changed the language to latvian!");
}

function showAlertEN() {
    alert("Hey! You have just changed the language to english!");
}

function changeBcg() {
    document.getElementById("page-work").style.backgroundColor = "#FFB7C3";
}

function letItSnow() {
    let sniegs = document.createElement("div");
    sniegs.setAttribute("class", "box");
    sniegs.style.zIndex = 0;

    document.getElementById("izvade").appendChild(sniegs);
}

function tryIt() {
    let month = document.getElementById("month").value;
    month = parseInt(month);
    let monthName;

    if (month == 1) {
        monthName = 'January';
    } else if (month == 2) {
        monthName = 'February';
    } else if (month == 3) {
        monthName = 'March';
    } else if (month == 4) {
        monthName = 'April';
    } else if (month == 5) {
        monthName = 'May';
    } else if (month == 6) {
        monthName = 'Jun';
    } else if (month == 7) {
        monthName = 'July';
    } else if (month == 8) {
        monthName = 'August';
    } else if (month == 9) {
        monthName = 'September';
    } else if (month == 10) {
        monthName = 'October';
    } else if (month == 11) {
        monthName = 'November';
    } else if (month == 12) {
        monthName = 'December';
    } else {
        monthName = 'Enter a number from 1 to 12!';
    }

    document.getElementById("demoMonth").innerHTML = monthName;

}

function numbers() {
    let number = document.getElementById("number").value;
    let i = 0;
    let rez = "";

    while (i <= number) {
        rez = rez + i + "<br>";
        document.getElementById("demoNumber").innerHTML = rez;
        i++;
    }
    
}