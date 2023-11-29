<?php
include 'connect.php';
if (isset($_POST['submit'])) {
    $name = ($_POST['name']);
    $email = ($_POST['email']);
    $mobile = ($_POST['mobile']);
    $password = ($_POST['password']);

    $sql = "insert into `crudphp` (name,email,mobile,password) values ('$name','$email','$mobile','$password')";
    $result = mysqli_query($conn,$sql); 
    if($result){
        header('location:display.php');
        // echo "Data inserted successfully";
    }else{
        die(mysqli_error($conn));
    }
}
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CRUD Operation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body>
    <div class="container my-5">
        <h1>CRUD operation</h1>
        <form method="post">
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="name" placeholder="Enter your name" class="form-control" name="name" autocomplete="off">
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" placeholder="Enter your email" class="form-control" name="email" autocomplete="off">
            </div>
            <div class="mb-3">
                <label class="form-label">Phone no.</label>
                <input type="text" placeholder="Enter your Phone number" class="form-control" name="mobile" autocomplete="off">
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" placeholder="Enter the password" class="form-control" name="password">
            </div>

            <button type="submit" class="btn btn-primary" name="submit">Submit</button>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>
