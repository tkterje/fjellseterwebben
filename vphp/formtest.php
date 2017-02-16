<!DOCTYPE html>

<html>
<head>
    <title>Fjellseterlopet</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <link href='http://fonts.googleapis.com/css?family=Exo+2:400,300&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="style/bootstrap.min.css">
    <link type="text/css" rel="stylesheet" href="style/style.css">
        <link rel="image_src"
      type="image/jpeg"
      href="path/icon-facebook.gif" />

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/custom.js"></script>

</head>
<body>


<div class ="container">
<h1> FIRST TEST </h1>

        <form method="post" action="https://www.paypal.com/cgi-bin/webscr" >
        Name: <input type="text" name="name"><br>
        E-mail: <input type="text" name="email"><br>
        <input type="submit" name="submit">
        </form>


<?php

if (isset($_POST['submit'])) {
  $string = $_POST["name"].",".$_POST["email"];
  $list = array(
    $string
  );
  $file = fopen("signup.csv","a");

  foreach ($list as $line){
      fputcsv($file,explode(',',$line));
      }
    fclose($file);
  }
?>

</div>


</body>
</html>
