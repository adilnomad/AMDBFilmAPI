/*
author: sakennomad @ github
*/
// animation Plugin
CSSPlugin.defaultTransformPerspective = 400;

// load default poster as a main page content
function defaultPage() {
  // get search key word
  var keyWord = document.getElementById("keyWord").value;
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      var obj = JSON.parse(xhttp.responseText);
      var cleanList = document.getElementById("myList");
      cleanList.innerHTML = '';

      if (this.readyState == 4 && this.status == 200) {
        var node = document.createElement("LI");
        node.style.positioning = "absolute";
        node.style.right = "300px";
        var img = document.createElement("IMG");
        
        //get poster
        img.setAttribute("src", obj[0].Poster);
        img.setAttribute("style", "width:340px; height:600px");
        node.setAttribute("id", "fontOne");
        var textnode = document.createTextNode(obj[0].Title);
        node.appendChild(textnode);
        node.appendChild(document.createElement("BR"));
        node.appendChild(img);
        node.style.padding = "20px 20px";
        document.getElementById("myList").appendChild(node);
      }
      // styling list elements
      document.getElementById("myList").style.padding = "10px 10px";
      document.getElementById("myList").style.fontSize = "xx-large";
      document.getElementById("myList").style.color = "white";

      TweenMax.fromTo("#myList", 1, {opacity: 0, y:50}, {opacity: 1, y:0});
  };
  //  make an API call
  xhttp.open("GET", "/" + "The Avengers", true);
  xhttp.send();

}

// make an API call and load film info into DOM
function getMovies() {

  TweenMax.fromTo("#myList", 1, {opacity: 1, y:0}, {opacity: 0, y:30});
  // get search key word
  var keyWord = document.getElementById("keyWord").value;
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      var obj = JSON.parse(xhttp.responseText);
      var cleanList = document.getElementById("myList");
      cleanList.innerHTML = '';
      if (this.readyState == 4 && this.status == 200) {
        for (var i = 0; i < obj.length; i++) {
          var node = document.createElement("LI");
          var img = document.createElement("IMG");
          
          //get poster
          img.setAttribute("src", obj[i].Poster);
          img.setAttribute("style", "width:340px; height:600px");
          node.setAttribute("id", "fontOne");
          var textnode = document.createTextNode(obj[i].Title);
          node.appendChild(textnode);
          node.appendChild(document.createElement("BR"));
          node.appendChild(img);
          node.style.padding = "20px 20px";
          document.getElementById("myList").appendChild(node);
        }
      }

      // styling list elements
      document.getElementById("myList").style.padding = "10px 10px";
      document.getElementById("myList").style.fontSize = "xx-large";
      document.getElementById("myList").style.color = "white";
      TweenMax.fromTo("#myList", 1, {opacity: 0, y:30}, {opacity: 1, y:0});
  };
  //  make an API call
  xhttp.open("GET", "/" + String(keyWord) , true);
  xhttp.send();
}


















