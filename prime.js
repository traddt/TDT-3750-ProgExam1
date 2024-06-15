// Tradd Thomas
// 6/15/2024
// CPSC 3750
// program exam #1 
// A

var primeSum = 0;
var nonprimeSum = 0;

var red = "#ff0000";
var grn = "#00ff00";
var id = 0;

function changeColors() {
	id = 1 - id;
	if (id === 0) {
		document.getElementById("primes").style.backgroundColor = grn;
		document.getElementById("nonprimes").style.backgroundColor = red;
	} else {
		document.getElementById("primes").style.backgroundColor = red;
		document.getElementById("nonprimes").style.backgroundColor = grn;
	}
}

function isPrime(n) {
    if (n <= 1) {
		return false;
	}
 
    // Main Loop
    for (var i = 2; i <= n / 2; i++) {
		if (n % i === 0) {
			return false;
		}
	}
 
    return true;
}

function printList() {
	var a = document.getElementById("num").value;
	
	var primStr = "<li>Primes</li>";
	var compStr = "<li>Non-Primes</li>";
	primeSum = 0;
	nonprimeSum = 0;
	
	console.log("Part A");
	
	for (var i=0; i<a; i++) {
		if(isPrime(i + 1)) {
			primStr += "<li>" + (i + 1) + "</li>";
			primeSum += (i + 1);
		} else {
			compStr += "<li>" + (i + 1) + "</li>";
			nonprimeSum += (i + 1);
		}
	}
	
	console.log(primStr);
	
	document.getElementById("primes").innerHTML = primStr;
	document.getElementById("nonprimes").innerHTML = compStr;
}

function sumPrimes() {
    document.getElementById("pSum").innerHTML = "The sum of the list is " + primeSum;
}

function sumNonPrimes() {
    document.getElementById("npSum").innerHTML = "The sum of the list is " + nonprimeSum;
}