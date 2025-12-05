# GlobalBikes App

Aplicación web desarrollada en **React + Vite** que permite explorar
redes de bicicletas públicas en todo el mundo utilizando la API pública
**CityBikes**.

El usuario puede: 

- Ver todas las redes de bicicletas disponibles.
- Seleccionar una red y ver sus estaciones.
- Abrir cualquier estación directamente en **Google Maps**.
- Navegar entre páginas gracias a **React Router**.
- Visualizar la interfaz con estilos de **Material UI (MUI)**.
- Contar con un control de errores gracias a **Error Boundaries**.

------------------------------------------------------------------------

## Tecnologías utilizadas

-   **React**
-   **Vite**
-   **React Router DOM**
-   **Material UI (MUI)**
-   **JavaScript**
-   **CityBikes API (pública)**
-   **Error Boundaries**
-   **Netlify**

------------------------------------------------------------------------

## Despliegue en Netlify

    https://globalbikes.netlify.app/

------------------------------------------------------------------------

## Estructura del proyecto

    src/
    │
    │
    ├── assets/
    │   ├── bike.png
    │   ├── pngwing.png
    │   └── react.svg
    │ 
    ├── Components/
    │   ├── Navbar.jsx
    │   ├── NetworkList.jsx
    │   ├── StationItem.jsx
    │   └── StationList.jsx
    │
    ├── Errors/
    │   └── ErrorBoundary.jsx
    │
    ├── Hooks/
    │   └── UseFetch.jsx
    │
    ├── Pages/
    │   ├── Home.jsx
    │   ├── NetworksPage.jsx
    │   └── StationsPage.jsx
    │
    ├── Styles/
    │   └── Global.css
    │
    ├── App.css
    ├── App.jsx
    ├── index.css
    └── main.jsx

------------------------------------------------------------------------

## API utilizada

La aplicación consume la API pública de CityBikes:

 **Lista de redes:**

    https://api.citybik.es/v2/networks

 **Estaciones de una red:**

    https://api.citybik.es/v2/networks/:id

------------------------------------------------------------------------

## Manejo de errores

El proyecto cuenta con un componente **ErrorBoundary** para capturar
fallos de renderizado.

------------------------------------------------------------------------

## Hook personalizado

### `useFetch(url)`

Permite: 

- Manejar carga (`loading`)
- Manejar errores (`error`)
- Obtener datos desde la API (`data`)

------------------------------------------------------------------------

## Estilos

La aplicación utiliza **Material UI (MUI)** para la interfaz visual.\
También incluye estilos globales en:\

`src/Styles/Global.css`


