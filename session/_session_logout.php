<?php
//What is a session ?
//Used to mannage information across differents pages.

//varify the user login info 
session_start();
session_unset();
session_destroy();

echo " <br> you are logged out.";


?>