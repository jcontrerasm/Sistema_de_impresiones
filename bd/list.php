<?php
	
	include 'conexion.php';
	/*
	//LOGIN

	$query = "SELECT * FROM usuario";

	$response = $conexion->prepare($query);

	$response->execute(array());

	$results = $response->fetchAll();

	foreach ($results as $k) {
		$datos_usuario[] = $k;
	}

	print json_encode($datos_usuario);

	*/

	//Listar Solicitudes
	
	$query = "SELECT * FROM solicitud";

	$rs = $conexion->prepare($query);

	$rs->execute(array());

	$results = $rs->fetchAll();

	foreach ($results as $k) {
		$data[] = $k;
	}

	print json_encode($data);
