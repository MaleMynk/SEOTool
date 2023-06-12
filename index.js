/*var k = document.getElementById("url");
k.ariaValueMax()
//alert(k.value +"is inputted");



document.querySelector(".sbm").addEventListener("click",function(){let uel = url.value;
    alert (uel+" fetched");});
    */
//let uel = url.value;
//alert (uel+"fetched");
function countH2 (url){
    //var url ='https://en.wikipedia.org/wiki/Google_Lighthouse';
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var responseHTML = xhr.responseText;
          var parser = new DOMParser();
          var htmlDoc = parser.parseFromString(responseHTML, "text/html");
          var h2Tags = htmlDoc.getElementsByTagName("h2");
          var count = h2Tags.length;
          return count;
          //console.log("Number of <h2> tags: " + count);

        }
      };
      xhr.send();
      
    }
function getValue(){
   var k= document.getElementById("urlbox");
alert(k.value+" received");
alert (countH2(k.value)+" should be 2");
}
/*
function getValue() {
    var input = document.getElementById("myInput");
    var value = input.value;
    alert("You entered: " + value);
  }
  1556 gahghra de do 
  */

   // alert(countH2(document.getElementById("urlbox").value)+" redirects to 4");
   alert(countH2("check.html")+" redirects to 4");
    
    /*var karray=HTML.getElementsByTagName("h2");
    var totalHeadings = karray.length ;
var count = 0;
    for (var k = 0; k<totalHeadings;k++){
        if(karray[i].textContent()=="Hi")
        count ++;
        
    }

var percentage = (count*100)/totalHeadings;
return percentage;


 }

 alert ( countHi("index.html") );
// JavaScript
function countImages() {
    var url = "your-html-file-url.html"; // Replace with the URL of your HTML file
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var responseHTML = xhr.responseText;
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(responseHTML, "text/html");
        var imgTags = htmlDoc.getElementsByTagName("img");
        var count = imgTags.length;
        console.log("Number of <img> tags: " + count);
      }
    };
    xhr.send();
  }
  */


 /*

 function analyzeImages(htmlContent) {
    const images = htmlContent.getElementsByTagName('img');
    const totalImages = images.length;
    let missingAltCount = 0;
    
    for (let i = 0; i < totalImages; i++) {
    if (!images[i].hasAttribute('alt') || images[i].getAttribute('alt').trim() === '') {
    missingAltCount++;
    }
    }*/