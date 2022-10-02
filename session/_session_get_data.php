<?php
//What is a session ?
//Used to mannage information across differents pages.

//varify the user login info 
session_start();
if(isset($_SESSION['username'])){
    echo "welcome " . $_SESSION['username'] ;
    echo "<br> your favorite catagory is " . $_SESSION['catagory'] ;
    echo "<br >";
    
}else{
    echo " Please Continue to log in";
}

?>