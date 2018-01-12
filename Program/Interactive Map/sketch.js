//http://api.openweathermap.org
//Setting the variable for the selection drop down
let sel;
let selvalue;

//Use a text/string object to longitude and latitude we want to know the timezones of.
let longitudeLondon = "51.5074";
let latitudeLondon = "0.1278";
let longitudeBerlin = "52.5200";
let latitudeBerlin = "13.4050";
let longitudeParis = "48.8566";
let latitudeParis = "2.3522";
let longitudeAmsterdam = "52.3702";
let latitudeAmsterdam = "4.8952";
let longitudeRome = "41.9028";
let latitudeRome = "12.4964";
//The API key provided to me by Google
let apiKey = "AIzaSyAvgAXDYsu2hxyXDJm0z38BSosrYy43z0A";
//This variable stores the JSON timezone data
let timezone;
 
//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {

  //The URL is formatted according to the documentation provided by the developers in:
  //https://developers.google.com/maps/documentation/timezone/get-api-key
  //The text/string object is formatted with the location we want to use, and our own API key
  let urlLondon = "https://maps.googleapis.com/maps/api/timezone/json?location=" + longitudeLondon +","+ latitudeLondon +"&timestamp=1458000000&key=" + apiKey;
  let urlBerlin = "https://maps.googleapis.com/maps/api/timezone/json?location=" + longitudeBerlin +","+ latitudeBerlin +"&timestamp=1458000000&key=" + apiKey;
  let urlParis = "https://maps.googleapis.com/maps/api/timezone/json?location=" + longitudeParis +","+ latitudeParis +"&timestamp=1458000000&key=" + apiKey;
  let urlAmsterdam = "https://maps.googleapis.com/maps/api/timezone/json?location=" + longitudeAmsterdam +","+ latitudeAmsterdam +"&timestamp=1458000000&key=" + apiKey;
  let urlRome = "https://maps.googleapis.com/maps/api/timezone/json?location=" + longitudeRome +","+ latitudeRome +"&timestamp=1458000000&key=" + apiKey;

  //The URL is sent to the loadJSON that returns the data to the city variable
  timezoneLondon = loadJSON(urlLondon);
  timezoneBerlin = loadJSON(urlBerlin);
  timezoneParis = loadJSON(urlParis);
  timezoneAmsterdam = loadJSON(urlAmsterdam);
  timezoneRome = loadJSON(urlRome);

}
//here we are creating the canvas setting dimensions and text properties
function setupCanvas(){
  createCanvas(1280, 720)
  var canvas = createCanvas(1280, 720);
  canvas.class("myContainer");
  canvas.parent("myContainer");
  //scans the document for an element with an ID of defaultCanvas and sets background images
  document.getElementById("defaultCanvas").style.backgroundImage = "url('images/map.jpg')";
  textAlign(LEFT);
  textSize(24);
  fill(255);
  text("<------ Select the city you would like to know the timezone of", 100, 30);
}


function setup() {
	setupCanvas();

//Select box size and position have been set and options added
  sel = createSelect();

  sel.size(85, 25);
  sel.position(325, 135);
  sel.option('Select');
  sel.option('London');
  sel.option('Berlin');
  sel.option('Paris');
  sel.option('Amsterdam');
  sel.option('Rome');
  sel.changed(mySelectEvent);

//logs in console any output
  console.log(timezoneLondon);
  console.log(timezoneBerlin);
  console.log(timezoneParis);
  console.log(timezoneAmsterdam);
  console.log(timezoneRome);

  //stops looping
  noLoop();


}

//dependant on what option is selected a background is set and text is displayed when data has been been returned and canvas is cleared and redrawn to aviod images and text layering
function mySelectEvent(){
    selvalue = sel.value();
  if (selvalue === 'London'){
	  setupCanvas();
      console.log("London");
      document.getElementById("defaultCanvas").style.backgroundImage = "url('images/london.jpg')";
      fill(255);
      text("London's current timezone is" + " " + timezoneLondon.timeZoneName, 10, 375);
	  text("<------ Select the city you would like to know the timezone of", 100, 30);
  }
  else if (selvalue === 'Berlin'){
	  setupCanvas();
	console.log("Berlin");
    document.getElementById("defaultCanvas").style.backgroundImage = "url('images/berlin.jpg')";
    fill(255);
    text("Berlin's current timezone is" + " " + timezoneBerlin.timeZoneName, 10, 375);
	text("<------ Select the city you would like to know the timezone of", 100, 30);
  }
  else if (selvalue === 'Paris'){
	  setupCanvas();
    console.log("Paris");
	document.getElementById("defaultCanvas").style.backgroundImage = "url('images/paris.jpg')";
    fill(255);
    text("Paris's current timezone is" + " " + timezoneParis.timeZoneName, 10, 375);
	text("<------ Select the city you would like to know the timezone of", 100, 30);
  }
  else if (selvalue === 'Amsterdam'){
	  setupCanvas();
    console.log("Amsterdam");
    document.getElementById("defaultCanvas").style.backgroundImage = "url('images/amsterdam.jpg')";
    fill(255);
    text("Amsterdam's current timezone is" + " " + timezoneAmsterdam.timeZoneName, 10, 375);
	text("<------ Select the city you would like to know the timezone of", 100, 30);
  }
  else if (selvalue === 'Rome'){
	  setupCanvas();
    console.log("Rome");
    document.getElementById("defaultCanvas").style.backgroundImage = "url('images/rome.jpg')";
    fill(255);
    text("Rome's current timezone is" + " " + timezoneRome.timeZoneName, 10, 375);
	text("<------ Select the city you would like to know the timezone of", 100, 30);
  }
  else if(selvalue === 'Select'){
	  setupCanvas();
  }

    }

function draw(){
}
