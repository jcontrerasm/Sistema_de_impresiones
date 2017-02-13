/*
	MODULO PRINCIPAL DE LA APLICACION
*/

var app = angular.module('ctrl_impresiones' , ['ngRoute' , 'ngPagination']);

	app.controller('loginController' , function($scope , $http){

		/* ============== Validando el login ============== */

		$scope.validar_login = function() {

			if($scope.formulario_login.$valid){
				$http.post(
					"bd/login.php",
					{
						'usuario': $scope.usuario,
						'password': $scope.password
					})

				.success(function(data_login){

					if(data_login != 'null' ){
						$scope.valido = true;
						document.getElementById('main').style.display='flex';
					}else {
						$scope.invalido = true;
					}
					
				});
			}
		}

	});

	app.controller('mainController' , function($scope , $http){

		$scope.cantidad = 1;
		$scope.cantidad2 = 0;
		$scope.precio = 0;
		$scope.precio2 = 0;
		$scope.costo_total = 0;
		$scope.tamanos = ['A3' , 'A4'];
		$scope.tipo_papel = ['Kimberly' , 'Bond'];
		$scope.tipo_impresion = ['Blanco y negro' , 'Color'];
		$scope.usuarios = ['Azucena Salazar' , 'Franco Chavarri' , 'Hernan Percca' , 'Ivan Zapata' , 'Jhon Trujillo' , 'Juan Contreras' , 'Pedro Campos' , 'Victor Caballero'];
		$scope.form_main = true;
		$scope.form_ok = false;
		$scope.lista = false;
		$scope.costo_total = '';

		$scope.hoja2 = ' ';
		$scope.tamano2 = ' ';
		$scope.papel2 = ' ';
		$scope.impresion2 = ' ';

		/* ============== Función para el calculo del costo total ============== */

		$scope.asignar_monto = function(){

			if($scope.hoja == 'Con hoja'){
				if($scope.tamano == 'A3'){
					if($scope.impresion == 'Blanco y negro'){
						$scope.precio = 1;
					}else {
						if($scope.impresion == 'Color'){
							$scope.precio = 2;
						}
					}
				}else {
					if($scope.tamano == 'A4'){
						if($scope.impresion == 'Blanco y negro'){
							$scope.precio = 0.25;
						}else {
							if($scope.impresion == 'Color'){
								$scope.precio = 0.5;
							}
						}
					}
				}
			}else {
				if($scope.hoja == 'Sin hoja'){
					if($scope.tamano == 'A3'){
						if($scope.impresion == 'Blanco y negro'){
							$scope.precio = 0.7;
						}else {
							if($scope.impresion == 'Color'){
								$scope.precio = 1.7;
							}
						}
					}else {
						if($scope.tamano == 'A4'){
							if($scope.impresion == 'Blanco y negro'){
								$scope.precio = 0.15;
							}else {
								if($scope.impresion == 'Color'){
									$scope.precio = 0.4;
								}
							}
						}
					}
				}
			}

			if($scope.hoja2 == 'Con hoja'){
				if($scope.tamano2 == 'A3'){
					if($scope.impresion2 == 'Blanco y negro'){
						$scope.precio2 = 1;
					}else {
						if($scope.impresion2 == 'Color'){
							$scope.precio2 = 2;
						}
					}
				}else {
					if($scope.tamano2 == 'A4'){
						if($scope.impresion2 == 'Blanco y negro'){
							$scope.precio2 = 0.25;
						}else {
							if($scope.impresion2 == 'Color'){
								$scope.precio2 = 0.5;
							}
						}
					}
				}
			}else {
				if($scope.hoja2 == 'Sin hoja'){
					if($scope.tamano2 == 'A3'){
						if($scope.impresion2 == 'Blanco y negro'){
							$scope.precio2 = 0.7;
						}else {
							if($scope.impresion2 == 'Color'){
								$scope.precio2 = 1.7;
							}
						}
					}else {
						if($scope.tamano2 == 'A4'){
							if($scope.impresion2 == 'Blanco y negro'){
								$scope.precio2 = 0.15;
							}else {
								if($scope.impresion2 == 'Color'){
									$scope.precio2 = 0.4;
								}
							}
						}
					}
				}
			}

			$scope.costo_total = ($scope.cantidad * $scope.precio) + ($scope.cantidad2 * $scope.precio2);

		}

		/* ============== Función para mostrar el formulario principal nuevamente  ============== */

		$scope.mostrar_form = function(){
			if($scope.lista == true && $scope.form_ok == false && $scope.form_main == false){
				$scope.form_ok = false;
				$scope.lista = false;
				$scope.form_main = true;
				$scope.agregar_campos = false;
				$scope.claseEspecial = "col-md-6";

				$scope.hoja2 = ' ';
				$scope.tamano2 = ' ';
				$scope.papel2 = ' ';
				$scope.impresion2 = ' ';
				$scope.cantidad2 = 0;
			}else {
				if($scope.lista == false && $scope.form_ok == true && $scope.form_main == false){
					$scope.form_ok = false;
					$scope.lista = false;
					$scope.form_main = true;
					$scope.agregar_campos = false;
					$scope.claseEspecial = "col-md-6";

					$scope.hoja2 = ' ';
					$scope.tamano2 = ' ';
					$scope.papel2 = ' ';
					$scope.impresion2 = ' ';
					$scope.cantidad2 = 0;
				}
			}
		}

		/* ============== Función para limpiar los campos del formulario ============== */

		$scope.limpiar = function(){
			$scope.solicitado = '';
			$scope.autorizado = '';
			$scope.area = '';
			$scope.impreso = '';
			$scope.hoja = '';
			$scope.tamano = '';
			$scope.papel = '';
			$scope.impresion = '';
			$scope.cantidad = 0;
			$scope.hoja2 = '';
			$scope.tamano2 = '';
			$scope.papel2 = '';
			$scope.impresion2 = '';
			$scope.cantidad2 = 0;
			$scope.costo_total = '';
		}

		/* ============== Función para registrar el formulario ============== */

		$scope.registrar = function() {

			$scope.mostrar_lista = false;

			var fecha_obj = new Date();
			$scope.fecha = fecha_obj.getDate() + '-' + (fecha_obj.getMonth() + 1) + '-' + fecha_obj.getFullYear();

			var horas = fecha_obj.getHours();
			var minutos = fecha_obj.getMinutes();
			var segundos = fecha_obj.getSeconds();

			if(horas < 10){
				horas = '0' + fecha_obj.getHours();
			}
			if(minutos < 10){
				minutos = '0' + fecha_obj.getMinutes();
			}
			if(segundos < 10){
				segundos = '0' + fecha_obj.getSeconds();
			}

			$scope.hora = horas + ':' + minutos + ':' + segundos;

			if($scope.formulario_main.$valid){
				$scope.form_ok = true;
				$scope.lista = false;
				$scope.form_main = false;

				if($scope.agregar_campos == false){
					$scope.hoja2 = ' ';
					$scope.tamano2 = ' ';
					$scope.papel2 = ' ';
					$scope.impresion2 = ' ';
					$scope.cantidad2 = 0;
				}

				$http.post(
					"bd/insert.php",
					{
						'solicitado': $scope.solicitado,
						'autorizado': $scope.autorizado,
						'area': $scope.area,
						'responsable': $scope.impreso,
						'hoja': $scope.hoja,
						'tamano': $scope.tamano,
						'tipo_papel': $scope.papel,
						'tipo_impresion': $scope.impresion,
						'cantidad_paginas': $scope.cantidad,
						'hoja2': $scope.hoja2,
						'tamano2': $scope.tamano2,
						'tipo_papel2': $scope.papel2,
						'tipo_impresion2': $scope.impresion2,
						'cantidad_paginas2': $scope.cantidad2,
						'costo_total': $scope.costo_total,
						'fecha': $scope.fecha,
						'hora': $scope.hora
					})
					.success(function(data){
						console.log(data);
						$http.get("bd/obtener_ultimo.php")
							.success(function(data){
								$scope.data2 = data;
							});
					});
			}
		}

		/* ============== Función para listar las solicitudes  ============== */

		$scope.listar = function(){

			if($scope.form_main == true && $scope.form_ok == false && $scope.lista == false){
					$scope.lista = true;
					$scope.form_main = false;
					$scope.form_ok = false;
			}else{
				if($scope.form_main == false && $scope.form_ok == true && $scope.lista == false){
					$scope.lista = true;
					$scope.form_main = false;
					$scope.form_ok = false;
				}
			}

			$http.get("bd/list.php")
				.success(function(data){
					$scope.data = data;
				});
		}

		/* ============== Función para imprimir solicitud ============== */

		$scope.imprimir = function(id_obj){

			//abrimos una ventana vacía nueva
  			var ventana = window.open('','');

  			//maquetamos el contenido

  			var img = "<img src='http://serv-web/Newweb/impresiones/img/logo_usmp.png' width='45%'/>";

  			ventana.document.write(img);
  			ventana.document.write("<div style='width:100%; display:flex; flex-direction: column; justify-content:center; align-items:center;'>");
  			ventana.document.write("<h1 style='margin-top:50px'>Solicitud de Impresiones</h1>");

  			ventana.document.write("<table style='border: 1px solid #D9D9D9; padding: 10px;'>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Orden Nº:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write(document.getElementById('id_solicitud').innerHTML);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Solicitado por:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.solicitado);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Autorizado por:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.autorizado);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Área y/o oficina:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.area);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Impreso por:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.impreso);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Tipo de solicitud:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.hoja);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Tamaño:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.tamano);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Tipo de papel:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.papel);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Tipo de impresión:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.impresion);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Cantidad de páginas:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.cantidad);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			if($scope.agregar_campos == true){
  				ventana.document.write("<tr>");
	  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Tipo de solicitud:</td>");
	  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
	  			ventana.document.write($scope.hoja2);
	  			ventana.document.write("</td>");
	  			ventana.document.write("</tr>");

	  			ventana.document.write("<tr>");
	  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Tamaño:</td>");
	  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
	  			ventana.document.write($scope.tamano2);
	  			ventana.document.write("</td>");
	  			ventana.document.write("</tr>");

	  			ventana.document.write("<tr>");
	  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Tipo de papel:</td>");
	  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
	  			ventana.document.write($scope.papel2);
	  			ventana.document.write("</td>");
	  			ventana.document.write("</tr>");

	  			ventana.document.write("<tr>");
	  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Tipo de impresión:</td>");
	  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
	  			ventana.document.write($scope.impresion2);
	  			ventana.document.write("</td>");
	  			ventana.document.write("</tr>");

	  			ventana.document.write("<tr>");
	  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Cantidad de páginas:</td>");
	  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
	  			ventana.document.write($scope.cantidad2);
	  			ventana.document.write("</td>");
	  			ventana.document.write("</tr>");
  			}

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Fecha:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.fecha);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>Hora:</td>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px;'>");
  			ventana.document.write($scope.hora);
  			ventana.document.write("</td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px 20px 10px;'>Observaciones:</td>");
  			ventana.document.write("<td padding:5px 10px 20px 10px;></td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px 20px 10px;'>Recibí conforme:</td>");
  			ventana.document.write("<td padding:5px 10px 20px 10px;></td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("<tr>");
  			ventana.document.write("<td style='font-size:1.2rem; padding:5px 10px 20px 10px;'>Firma:</td>");
  			ventana.document.write("<td 5px 10px 20px 10px;></td>");
  			ventana.document.write("</tr>");

  			ventana.document.write("</table>");

  			ventana.document.write("</div>");

  			//cerramos el documento
  			ventana.document.close();

  			//imprimimos la ventana
  			ventana.print();

  			//cerramos la ventana
  			ventana.close();
		}

		$scope.habilitar_campos = function(){
			$scope.agregar_campos = true;
			$scope.claseEspecial = "col-md-4";
			$scope.cantidad2 = 1;
		}

	});

	
$(function() {

	$('body').fadeIn(2000);

});