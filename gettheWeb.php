<?php

    $weather = "";
    $error = "";
        $file_headers = @get_headers("https://trial-keys.ru/");
        if($file_headers[0] == 'HTTP/1.1 404 Not Found') {
            $error = "NO PAGE FOUND";
        } else {
            $forecastPage = file_get_contents("https://trial-keys.ru/");
                print_r ( $forecastPage);
        }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

      <title>The keys</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">

      <style type="text/css">

          .container {
              text-align: center;
              margin-top: 100px;
              width: 450px;
          }


      </style>
  </head>
  <body>
      <div class="container">
          <h1>Your code is:</h1>
              <div class = "codes">
              TEST
              <div>
      </div>
<script>
var c = document.querySelector("#esetkeydiv");
c.style.display = "block";
var a = document.querySelector("#keysbox12");
var b = a.children[0].children[0].children[2].children[0].innerText;

var x = document.querySelector(".codes");

document.querySelector("#container").style.display = "none";

var newarr = a.innerText.split(" ");
arr = newarr.filter(function(el, index){
    if (el.length > 9 && el.length < 18){
        return el;
    }
});
var finalArr = arr.map(function (are) {
    return (are.slice(0, -2));
  });
x.innerHTML = "<br><h3>Name: <strong>"+finalArr[2]+"</strong></h3><br><h3>Password: <strong>"+finalArr[3]+"</strong></h3>";

</script>

    <!-- jQuery first, then Bootstrap JS. -->

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
  </body>
</html>