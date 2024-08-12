# Colombian API

## Descripción

El proyecto **Colombian API** proporciona servicios web para acceder a información sobre Colombia. Este proyecto utiliza Docker para contenerizar la aplicación, asegurando una implementación consistente y portátil en cualquier entorno. Sin embargo, Docker es opcional y puedes ejecutar la aplicación localmente utilizando Node.js.

Para el desarrollo de la interfaz, se ha utilizado **React** como framework principal, junto con **JavaScript** para la lógica del lado del cliente. 
## Prerequisitos

Para ejecutar este proyecto, necesitas tener instalados los siguientes elementos:

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Docker** (opcional): Para construir y ejecutar contenedores.


## Instalación


Clona el repositorio:

```sh
git clone https://github.com/julianCS21/colombian_api_JulianDavidCastilloSoto.git
```

Accede al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```sh
cd  colombian_api_JulianDavidCastilloSoto
npm install
```
Para ejecutar la aplicación localmente, usa el siguiente comando:
```sh
npm start
```

y accedes a la siguiente URL

```sh
http://localhost:3000/colombia_dash
```




### Construcción de la imagen Docker y del contenedor (Opcional)

Para construir la imagen Docker del proyecto, usa el siguiente comando:
```sh
docker build -t juliancs21/colombian_api_juliandavidcastillosoto:latest .
```

Para ejecutar un contenedor basado en la imagen construida, utiliza el siguiente comando:
```sh
docker run -d -p 3000:3000 juliancs21/colombian_api_juliandavidcastillosoto:latest

```

y accedes a la siguiente URL
```sh
http://localhost:3000/colombia_dash
```


###  Ejecución del Contenedor Docker desde Docker Hub (Opcional)

puedes ejecutar el contenedor directamente utilizando el siguiente comando:

```sh
docker run -d -p 3000:3000 juliancs21/colombian_api_juliandavidcastillosoto:latest
```

y accedes a la siguiente URL
```sh
http://localhost:3000/colombia_dash
```

Una vez dentro podras acceder a :

## Entidad presidentes

![image](https://github.com/user-attachments/assets/86b04c6d-fc41-454c-a254-e2b41264122f)

## Entidad presidentes agrupada por partidos politicos

![image](https://github.com/user-attachments/assets/8b78aabf-424f-40cb-afb2-e7f17fe5564c)

## Entidad aereopuertos

![image](https://github.com/user-attachments/assets/8beac405-f4c0-442e-8995-88d829ff40f2)

## Entidad aereopuertos agrupada por ciudad y departamento

![image](https://github.com/user-attachments/assets/5fd725e0-7b20-4122-96b2-d5e087dcf36a)


## Estructura compleja de la entidad de aereopuertos agrupada por region, departamento, ciudad y tipo

![image](https://github.com/user-attachments/assets/a4bcb63b-dcaf-4406-bc97-5831601d4cc2)

## Entidad atracciones turisticas

![image](https://github.com/user-attachments/assets/e6c7d6b7-d7f3-4280-8414-5ea130afb937)

## Entidad atracciones turisticas agrupadas por ciudad y departamento:

![image](https://github.com/user-attachments/assets/1bc81efc-50f9-453b-a298-0b4af21efecd)

## Arquitectura del Proyecto

La aplicación sigue una arquitectura frontend basada en Atomic Design, que organiza los componentes en niveles jerárquicos como átomos, moléculas, organismos, plantillas y páginas. Esto facilita el mantenimiento y la escalabilidad del proyecto.


La separación de responsabilidades se gestiona mediante una estructura modular, asegurando que cada componente y función tenga una responsabilidad clara y específica.

## Tecnologías Utilizadas

* Node.js: Entorno de ejecución para JavaScript.
* Docker: Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.
* React: Framework para construir interfaces de usuario.
* JavaScript: Lenguaje de programación para la lógica del lado del cliente.


## Autor
* **[Julián David Castillo Soto](https://www.linkedin.com/in/julián-david-castillo-soto-118856216/)**  - [julianCS21](https://github.com/julianCS21)

## Licencia
**©** Julián David Castillo Soto,  Ingeniero de Sistemas de la Universidad Escuela Colombiana de Ingeniería Julio Garavito.
