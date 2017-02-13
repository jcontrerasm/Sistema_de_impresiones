<?php

	$host 		= 'localhost';
	$user 		= 'root';
	$password 	= 'root';
	$db 		= 'solicitud_impresiones';

	$conexion = new PDO("mysql:host=$host;dbname=$db",$user,$password);