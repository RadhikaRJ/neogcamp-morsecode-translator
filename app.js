var btntranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-input");
var outputDiv = document.querySelector(".output");

btntranslate.addEventListener("click",clickEventHandler);

var serverURL="https://api.funtranslations.com/translate/morse.json";

function createURL(text){
    return serverURL+"?"+"text="+text;
}

function errorHandler(error){
    console.log("the error is: ",error);
    alert("Server is busy, Try again later!");
}

function clickEventHandler(){

    var userInput = inputText.value;
    //console.log("user Input: ",userInput);
    fetch(createURL(userInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerHTML = translatedText;

    })
    .catch(errorHandler);
}