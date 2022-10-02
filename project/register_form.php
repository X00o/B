<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register Form</title>
</head>
<body>
    <h1>Registration Form</h1>
    <form method="post" action="register_submit.php">
        <label for="name">Name: </label>
        <input type="text" name="name" id="name" placeholder=" Enter your Name"> <br>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" placeholder=" Enter your Email"><br>
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" placeholder=" Enter your Password" > <br> <br>
        <input type="submit" name="submit" value="Submit">
    </form>

    <hr>
<a href="register_form.php">register_form</a> 
<a href="fetch_data.php">fetch_data</a>
<a href="login_form.php">login_form</a>
<a href="login_submit.php">login_submit</a>
<a href="dashboard.php">dashboard</a>
<hr>
</body>
</html>