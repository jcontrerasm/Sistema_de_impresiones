<?php

	include 'conexion.php';
	
	$data = json_decode(file_get_contents("php://input"));

	$query = " INSERT INTO solicitud(solicitado , autorizado , area_oficina , responsable_impresion , hoja , tamano , tipo_papel , tipo_impresion , cantidad_paginas , hoja2 , tamano2 , tipo_papel2 , tipo_impresion2 , cantidad_paginas2 , costo_total , fecha_registro , hora_registro) VALUES( :solicitado , :autorizado , :area , :responsable , :hoja , :tamano , :tipo_papel , :tipo_impresion , :cantidad_paginas , :hoja2 , :tamano2 , :tipo_papel2 , :tipo_impresion2 , :cantidad_paginas2 ,:costo_total , :fecha , :hora) ";

	$q = $conexion->prepare($query);

	$q->execute(array(
			":solicitado" 			=> $data->solicitado,
			":autorizado" 			=> $data->autorizado,
			":area" 				=> $data->area,
			":responsable" 			=> $data->responsable,
			":hoja" 				=> $data->hoja,
			":tamano" 				=> $data->tamano,
			":tipo_papel"   		=> $data->tipo_papel,
			":tipo_impresion"   	=> $data->tipo_impresion,
			":cantidad_paginas"   	=> $data->cantidad_paginas,
			":hoja2" 				=> $data->hoja2,
			":tamano2" 				=> $data->tamano2,
			":tipo_papel2"   		=> $data->tipo_papel2,
			":tipo_impresion2"   	=> $data->tipo_impresion2,
			":cantidad_paginas2"   	=> $data->cantidad_paginas2,
			":costo_total"   		=> $data->costo_total,
			":fecha"   				=> $data->fecha,
			":hora"   				=> $data->hora
		));

	$conexion = NULL;

	echo "Datos guardados";