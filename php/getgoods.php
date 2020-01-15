<?php
include 'conn.php';
if(isset($_GET['sid'])){
    $sql = "SELECT * FROM goods WHERE sid={$_GET['sid']} ";
} else {
    $sql = "SELECT sid,title,price,imgurl,isjsd FROM goods";
}
$result = $conn->query($sql);
$arr=array();
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i]=$result->fetch_assoc();
}
echo json_encode($arr);