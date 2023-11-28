<?php
$servername="localhost";
$username="root";
$password="";
$database="xyz";

$conn = mysqli_connect($servername, $username, $password,$database);
if(!$conn){
    // echo "Connection Failed!!";
}else{
    // echo "database connected successfully!!";
}
if($_SERVER['REQUEST_METHOD']=="POST"){
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, true);
    $q1="select * from test where email='".$input['email']."' and password='".$input['password']."'";
    $res=mysqli_query($conn,$q1);
    $response=array();
    $cnt=0;
    while($x=mysqli_fetch_assoc($res)){
        $response[$cnt]=array("email"=>$x['email'],"id"=>$x['id']);
        $cnt++;
    }
    echo json_encode($response);
}
if($_SERVER['REQUEST_METHOD']=="GET"){
    // echo "nice";
    $q2="select * from test";
    $res=mysqli_query($conn,$q2);
    $rows=mysqli_num_rows($res);
    $response=array();
    $cnt=0;
    if($rows>0){
        while($x=mysqli_fetch_assoc($res)){
            $response[$cnt]=array("id"=>$x['id'],"email"=>$x['email'],"password"=>$x['password']);
            $cnt++;
        }
        echo json_encode($response);
    }else{
        echo "error in fetching records:".mysqli_error($conn);
    }
}




?>