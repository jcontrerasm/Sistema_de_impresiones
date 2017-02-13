<?php

include 'conexion.php';

$datos_login = json_decode(file_get_contents("php://input"));

//Buscar Usuario en la BD

$query_login = "SELECT usuario , password FROM usuario WHERE usuario = :usuario AND password = :password ";

$rs3 = $conexion->prepare($query_login);

$rs3->execute(array(
	":usuario" => $datos_login->usuario,
	":password" => $datos_login->password

));

$results3 = $rs3->fetchAll();

foreach ($results3 as $k) {
	$data_login[] = $k;
}

if(isset($data_login)){
	print json_encode($data_login);
}else {
	print json_encode(null);
}