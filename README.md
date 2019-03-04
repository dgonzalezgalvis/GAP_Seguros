# GAP_Seguros
GAP_Seguros

Contenido:

El proyecto se estructura de la siguiente manera:

1. Carpeta Datos:
	- GAP_Seguros.Persistenca: La configuración del ORM
	- GAP_Seguros.Entidades: El manejo de las entidades utilizadas en la aplicación

2. Carpeta Presentación:
	- GAP_Seguros.Web: Aplicación web .net 4.5 (deprecated)
	- GAP_Seguros.Web.Tests: Pruebas para la aplicación web (deprecated)
	- GAP_Seguros.WebAngular: Aplicación angular

3. Carpeta Servicios:
	- GAP_Seguros.Servicios: Aplicación web api con end points autorizados.
	
La aplicación en estos momentos se encuentra desplegada a través de Azure services, de la siguiente manera:

# https://gapseguroswebangular.azurewebsites.net
Aplicación web angular 2 con webpack, para ingresar a la misma, por favor usar las siguientes credenciales:
username: admin
password: 123

# https://gapsegurosservicios20190226095841.azurewebsites.net/
Aplicación web api, en la misma se podrán encontrar las siguientes apis
 - POST recuperartoken
 - GET api/seguros
 - POST api/seguros
 - DELETE api/seguros/:id
 - PUT api/seguros/:id