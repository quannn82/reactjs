<?php
  $REQUEST_URI = "http://developer.local/reactjs";
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link href="<?php echo $REQUEST_URI ?>/angular/material/angular-material.min.css" rel="stylesheet" type="text/css"/>
    <link href="<?php echo $REQUEST_URI ?>/assets/css/demo-1.css" rel="stylesheet" type="text/css"/>

    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <!-- Load React. -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

    <!-- Load our React component. -->
    <script type="text/babel" src="<?php echo $REQUEST_URI ?>/assets/js/demo-1.js"></script>
  </body>
</html>
