<!DOCTYPE html>
<html lang="en">
<head>
    <link href="angular/material/angular-material.min.css" rel="stylesheet" type="text/css"/>
    <link href="assets/css/styles.css" rel="stylesheet" type="text/css"/>

    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <!-- <script src="angular/angular.min.js" type="text/javascript"></script>
    <script src="angular/angular-ui.min.js" type="text/javascript"></script>
    <script src="angular/angular-animate.min.js" type="text/javascript"></script>
    <script src="angular/angular-aria.min.js" type="text/javascript"></script>
    <script src="angular/angular-messages.min.js" type="text/javascript"></script>
    <script src="angular/material/angular-material.min.js" type="text/javascript"></script> -->

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

    <!-- <script src="/sites/base/theme/general/js/utility.js"></script> -->
</head>
<body ng-app="myApp" ng-controller="MainCtrl">
    <div>Study ReactJS</div>
    <!-- We will put our React component inside this div. -->
    <div class="like_button_container"></div>
    <div class="like_button_container"></div>
    <div class="like_button_container"></div>
    <div class="like_button_container"></div>
    <div class="like_button_container"></div>
    <div id="hello"></div>
    <ListBtn />

    <div>-----------Begin code page with JSX----------</div>
    <div id="root"></div>

    <!-- Load React. -->
    <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

    <!-- Load our React component. -->
    <script type="text/babel" src="assets/js/react.component.js"></script>
    <!-- <script src="controller/index.controller.js"></script> -->
</body>
</html>
