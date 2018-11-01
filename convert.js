//conversion of  fahrenheit to celcius	
function fahrenheitToCelcius(celsius){
	
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var celcius = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(celcius);
}

//convertion of fahrenheit to celcuis
function celciusToFahrenheit(fahrenheit){
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var fahrenheit = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(fahrenheit);
} 
convert to fahrenheiit(60);
fahrenheittocelcius(45);