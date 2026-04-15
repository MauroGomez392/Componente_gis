# Componente GIS v3

Un componente de Sistema de Información Geográfica (GIS) desarrollado en Angular que integra mapas interactivos usando ArcGIS API for JavaScript. Este proyecto está diseñado para visualizar y manipular datos geoespaciales del MGAP (Ministerio de Ganadería, Agricultura y Pesca) de Uruguay.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 🌟 Características

- **Visualización de mapas interactivos** usando ArcGIS API
- **Múltiples capas de información** incluyendo:
  - Rutas Nacionales
  - Calles
  - Departamentos
  - Centros Poblados
  - Padrones Catastrales
  - Seccionales Policiales
  - Límite Nacional
- **Herramientas de dibujo** para crear geometrías personalizadas
- **Gestión de capas** con controles de visibilidad
- **Componentes modulares** para fácil extensión
- **Selección de puntos** con configuración personalizable

## 🛠️ Tecnologías Utilizadas

- **Angular 17.3** - Framework principal
- **ArcGIS API for JavaScript 4.29** - Funcionalidades GIS
- **TypeScript** - Lenguaje de programación
- **RxJS** - Programación reactiva
- **HTML5/CSS3** - Interfaz de usuario

## 📋 Requisitos Previos

Antes de instalar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [Angular CLI](https://angular.io/cli) (se instalará globalmente)

```bash
# Verificar versiones instaladas
node --version
npm --version
```

## 🚀 Instalación

### 1. Clonar o descargar el proyecto

```bash
# Si usas Git
git clone <url-del-repositorio>
cd ComponenteGISv3

# O descargar y extraer el ZIP del proyecto
```

### 2. Instalar Angular CLI globalmente

```bash
npm install -g @angular/cli
```

### 3. Instalar dependencias del proyecto

```bash
npm install
```

## ⚙️ Configuración

### Variables de Entorno

El proyecto utiliza archivos de configuración en `src/environments/`:

- `environment.ts` - Configuración para producción
- `environment.development.ts` - Configuración para desarrollo

#### Configuraciones principales en `environment.ts`:

```typescript
export const environment = {
    // ID del mapa base de ArcGIS
    id_base_map: "cd40d1d0eae943039075856b87686c11",
    
    // URL del portal de mapas
    url_portal: "https://mapastest.mgap.gub.uy/portal",
    
    // Configuración de capas disponibles
    urls_layers: [
        // Array de capas con URLs, descripciones y configuraciones
    ],
    
    // Configuración de puntos
    puntos: {
        color_ptos_static: [0, 0, 255],    // Color azul
        color_ptos_hover: [255, 0, 0],     // Color rojo
        color_ptos_outline: [255, 255, 255], // Color blanco
        pto_size_static: 10,               // Tamaño normal
        pto_size_hover: 20                 // Tamaño al hacer hover
    },
    
    // Habilitar/deshabilitar selección múltiple
    multiplePointSelection: false
};
```

### Personalizar Configuración

1. **Cambiar el mapa base**: Modifica `id_base_map` con tu ID de ArcGIS
2. **Agregar nuevas capas**: Añade objetos al array `urls_layers`
3. **Personalizar colores**: Modifica los valores RGB en `puntos`
4. **Configurar portal**: Cambia `url_portal` por tu instancia

## 🏃‍♂️ Ejecución

### Modo Desarrollo

```bash
# Ejecutar el servidor de desarrollo
npm start
# o
ng serve

# El proyecto estará disponible en http://localhost:4200/
```

### Modo Desarrollo con Watch

```bash
# Compilación automática al detectar cambios
npm run watch
```

## 🏗️ Construcción (Build)

### Build de Desarrollo

```bash
npm run build:test
```

### Build de Producción

```bash
npm run build:prod
```

Los archivos compilados se generarán en el directorio `dist/componente-gis-v3/`.

## 🧪 Pruebas

```bash
# Ejecutar pruebas unitarias
npm test
# o
ng test
```

## 📁 Estructura del Proyecto

```
ComponenteGISv3/
├── src/
│   ├── app/
│   │   ├── features/           # Componentes de funcionalidades
│   │   │   ├── draw/          # Herramientas de dibujo
│   │   │   ├── graphic/       # Manejo de gráficos
│   │   │   ├── layer/         # Gestión de capas
│   │   │   └── message.service.ts # Servicio de mensajería
│   │   ├── services/          # Servicios de la aplicación
│   │   │   └── layer.service.ts
│   │   ├── app.component.*    # Componente principal
│   │   ├── app.config.ts      # Configuración de la app
│   │   └── app.routes.ts      # Rutas de navegación
│   ├── assets/                # Recursos estáticos
│   ├── environments/          # Configuraciones de entorno
│   ├── index.html            # Página principal
│   ├── main.ts               # Punto de entrada
│   ├── styles.css            # Estilos globales
│   └── web.config            # Configuración IIS
├── angular.json              # Configuración de Angular
├── package.json              # Dependencias y scripts
├── tsconfig.json            # Configuración TypeScript
└── README.md                # Este archivo
```

## 🔧 Componentes Principales

### AppComponent
Componente principal que inicializa el mapa y coordina los demás componentes.

### LayerComponent
Maneja la visualización y control de capas del mapa.

### GraphicComponent
Gestiona la creación y manipulación de elementos gráficos.

### DrawComponent
Proporciona herramientas de dibujo para crear geometrías.

### LayerService
Servicio que maneja la lógica de negocio relacionada con las capas.

### MessageService
Servicio de comunicación entre componentes.

## 📡 API de Comunicaciones (PostMessage)

El componente implementa un sistema de comunicación bidireccional con la aplicación padre usando la API `postMessage`. Este sistema permite integrar el componente GIS como un iframe y controlarlo externamente.

### Mensajes que Recibe del Padre

| Mensaje | Parámetros | Descripción |
|---------|------------|-------------|
| `ADD_FEATURES` | `{ features: GeoJSON_FeatureCollection }` | Añade múltiples features al mapa |
| `ZOOM_TO_FEATURE` | `{ id: string }` | Hace zoom a un feature específico por ID |
| `DELETE_FEATURES` | `{ ids: string[] }` | Elimina features del mapa por sus IDs |
| `FINISHED_POINT` | `{}` | Finaliza la creación de un punto en progreso |
| `ONLY_VIEW` | `{}` | Cambia a modo solo visualización (sin edición) |
| `UPDATE_FEATURE` | `{ id: string }` | Pone un feature en modo edición por ID |

### Mensajes que Envía al Padre

| Mensaje | Parámetros | Descripción |
|---------|------------|-------------|
| `INITIALIZE_COMPLETE` | `{}` | Notifica que el componente terminó de inicializarse |
| `ADD_FEATURE` | `{ geojson: GeoJSON_Feature }` | Notifica que se creó un nuevo feature |
| `UPDATE_FEATURE` | `{ geojson: GeoJSON_Feature \| GeoJSON_FeatureCollection }` | Notifica que se actualizó uno o más features |
| `DELETE_FEATURE` | `{ ids: string[] }` | Notifica que se eliminaron features |
| `FEATURE_SELECTED` | `{ id: string }` | Notifica que se seleccionó un feature |
| `FEATURES_SELECTED` | `{ id: string[] }` | Notifica que se seleccionaron múltiples features |

### Ejemplo de Uso

```javascript
// Enviar puntos al componente
const iframe = document.getElementById('gis-component');
iframe.contentWindow.postMessage({
  message: "ADD_FEATURES", 
  params: {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-56.164532, -34.901112]
        },
        "properties": {
          "id": "5125"
        }
      }
    ]
  }
}, "*");

// Escuchar respuestas del componente
window.addEventListener('message', (event) => {
  if (event.data.message === 'ADD_FEATURE') {
    console.log('Nuevo feature creado:', event.data.params.geojson);
  }
});
```

### Propiedades de los Features

Cada feature incluye las siguientes propiedades automáticamente calculadas:

- **id**: Identificador único (UUID)
- **padron**: Número de padrón catastral
- **departamento**: Nombre del departamento
- **seccional_policial**: Seccional policial correspondiente
- **esTerritorioNacional**: Boolean indicando si está en territorio nacional

## 🌐 Servicios Web Utilizados

El proyecto consume varios servicios web del MGAP:

- **Rutas Nacionales**: WMS de MTOP
- **Capas vectoriales**: ArcGIS REST Services
- **Portal de mapas**: https://mapastest.mgap.gub.uy/portal

## 🔐 Configuración de Seguridad

Para producción, asegúrate de:

1. Configurar CORS adecuadamente
2. Usar HTTPS para todos los servicios
3. Validar tokens de acceso si es necesario
4. Configurar el archivo `web.config` para IIS

## 📝 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| `start` | `ng serve` | Inicia servidor de desarrollo |
| `build` | `ng build` | Construcción estándar |
| `build:test` | `ng build --configuration=development --base-href componente_gis/` | Build para testing |
| `build:prod` | `ng build --configuration=production --base-href /componente_gis/` | Build para producción |
| `watch` | `ng build --watch --configuration development` | Build con watch mode |
| `test` | `ng test` | Ejecuta pruebas unitarias |

## 🐛 Solución de Problemas

### Error de CORS
Si experimentas errores de CORS, verifica que los servicios web permitan el origen de tu aplicación.

### Problemas de instalación
```bash
# Limpiar caché de npm
npm cache clean --force

# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Error de ArcGIS API
Verifica que tengas acceso a internet y que los servicios de ArcGIS estén disponibles.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📄 Licencia

Este proyecto es propiedad del MGAP (Ministerio de Ganadería, Agricultura y Pesca) de Uruguay.

## 📞 Soporte

Para soporte técnico o consultas, contacta al equipo de desarrollo del MGAP.

---

**Versión**: 0.0.0  
**Última actualización**: Octubre 2025
