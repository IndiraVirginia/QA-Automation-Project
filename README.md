# QA-Automation-Project
Proyecto de Automatización para el curso de Xa Academy QA 
# QA Automation Project

Este repositorio contiene el trabajo final del curso de **QA Automation**. El objetivo del proyecto es automatizar pruebas para la página de demo de [SauceDemo](https://www.saucedemo.com/), utilizando Cypress para realizar pruebas de login, carrito de compras y proceso de checkout.

## Descripción

El proyecto incluye las siguientes pruebas automatizadas con Cypress:
1. **Login con usuario 'standard_user'**.
2. **Agregar productos al carrito**.
3. **Iniciar el proceso de compra**.
4. **Ingresar los datos al formulario de checkout**.
5. **Realizar el checkout y validar el mensaje de confirmación**.
6. **Realizar logout**.

Estas pruebas aseguran que el flujo de compra funcione correctamente para diferentes usuarios en la plataforma de SauceDemo.

## Requisitos

Para ejecutar las pruebas en este proyecto, necesitas tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (Versión 14 o superior)
- [Cypress](https://www.cypress.io/)

## Instalación

1. Clona este repositorio a tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/QA-Automation-Project.git
Navega a la carpeta del proyecto:

cd QA-Automation-Project

Instala las dependencias de Node.js:

    npm install

Ejecutando las Pruebas

Una vez que hayas instalado todas las dependencias, puedes ejecutar las pruebas con el siguiente comando:

npx cypress open

Esto abrirá la interfaz de Cypress y podrás ejecutar las pruebas desde la interfaz gráfica.
Estructura del Proyecto

    cypress/integration: Contiene los archivos de prueba automatizada (.cy.js).
    cypress/fixtures: Contiene los datos de prueba para el login y otros casos.
    cypress/support: Contiene configuraciones y comandos personalizados de Cypress.
    package.json: Archivo de configuración de dependencias y scripts.


Hecho por Indira Rueda – 2024
