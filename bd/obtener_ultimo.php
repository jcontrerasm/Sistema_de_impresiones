<?php

include 'conexion.php';

//Ultimo Registro

$query2 = "SELECT id FROM solicitud ORDER BY id DESC LIMIT 1";

$rs2 = $conexion->prepare($query2);

$rs2->execute(array());

$results2 = $rs2->fetchAll();

foreach ($results2 as $k) {
	$data2[] = $k;
}

print json_encode($data2);