# Front End Server Angular

Dentro de la carpeta frontend/articulos se necesita instalar.
Comando para instalar dependencias: npm install
Comandos para instalar bootstrap: npm install bootstrap
Comando para levantar proyecto: ng serve

# Back End Server

Instalar MAMP (MAC) o laragon (windows)
Entrar en a la carpeta MAMP, después entrar en la capeta htdocs y colocar la carpeta articulosApi.
Levantar servicio MAMP o laragon.

Configurar puerto en caso de ser necesario, para configurar el puerto es en la carpeta articulosApi, app, config, app.php
public string $baseURL = 'http://localhost:8888/articulosApi/public/';

# Base de datos

Utilice phpMyAdmin5 para gestionar la base de datos.
http://localhost:8888/phpMyAdmin5/

En la carpeta base de datos está el archivo .sql con la base.
Se tiene que importar desde el phpMyAdmin5
