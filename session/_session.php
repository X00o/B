<?php
//What is a session ?
//Used to mannage information across differents pages.

//varify the user login info 
session_start();
$_SESSION['username'] = "souvik";
$_SESSION['catagory'] = "books";
echo "you've created your session ";


?>