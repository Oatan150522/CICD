# Parqueadero Cantinflas - Proyecto de Servicio de Parqueo para Vehículos Pesados

## 1. Descripción del Proyecto

Parqueadero Cantinflas es un servicio de parqueo especializado en vehículos pesados (tractocamiones, volquetas, buses, plataformas, contenedores, etc.). 
Este proyecto busca digitalizar la gestión del parqueadero permitiendo:

- Registro de entrada/salida de vehículos pesados
- Control de cupos y disponibilidad de bahías
- Facturación y cálculo de tarifas por tiempo de estadía
- Seguimiento de clientes y empresas transportadoras
- Reportes operativos básicos
- Presentación/landing informativa del servicio para clientes

## 2. Estado Actual del Repositorio

- Stack: React + Vite (JS)
- Rama base: `main` (actualizada con cambios iniciales limpiados)
- Rama de trabajo: `develop` (creada)
- Build: `vite build` (base `/CICD/` para GitHub Pages)
- Lint: `oxlint`
- Puerto dev: 3001

Archivos iniciales ajustados:
- index.html: título "Parqueadero Cantinflas", favicon `icone.png`
- src/App.jsx: componente base limpio
- src/index.css: vacío (preparado para estilos)
- public/ vacío (assets bajo src/assets/ si aplica)
- vite.config.js configurado

## 3. Objetivo Inmediato

Crear una landing/presentación del servicio "Parqueadero Cantinflas" sobre la estructura inicial (React+Vite), dejando preparado el terreno para:
1. Presentación visual del parqueadero (marca, servicios, ubicación, contacto)
2. Componentes reutilizables (Navbar, Hero, Servicios, Footer, etc.)
3. Datos estáticos iniciales
4. Preparación para futuras funcionalidades (ingreso/egreso, tarifas, reportes)

## 4. Estructura Propuesta

```
src/
├── assets/           # Imágenes/logos (actual: Icone.png)
├── components/       # Componentes UI reutilizables
├── pages/            # Vistas/páginas
├── styles/           # Estilos (CSS modules o global)
├── data/             # Datos estáticos (tarifas, servicios)
├── services/         # Lógica futura (API, cálculos)
└── utils/            # Utilidades
```

## 5. Plan de Trabajo (Pasos a Seguir)

### Paso 1: Presentación inicial (Landing)
- [ ] Crear `src/pages/Home.jsx` con secciones:
  - Hero: "Parqueadero Cantinflas - Parqueo seguro para vehículos pesados"
  - Servicios: Parqueo diurno/nocturno, vigilancia, bahías amplias, facturación
  - Ubicación / contacto (placeholder)
  - Beneficios
- [ ] Crear componentes base: `Navbar.jsx`, `Footer.jsx`, `ServiceCard.jsx`
- [ ] Añadir estilos mínimos en `src/styles/home.css` (o usar index.css)

### Paso 2: Datos y contenido
- [ ] `src/data/services.js` con listado de servicios
- [ ] `src/data/info.js` con datos de contacto/ubicación
- [ ] Incorporar marca (Icone.png) en Navbar/Hero

### Paso 3: Enrutamiento (opcional pero recomendado)
- [ ] Añadir `react-router-dom` si se desean varias páginas (Inicio, Tarifas, Contacto, Admin)
- [ ] Configurar rutas básicas

### Paso 4: Preparar para Docker Compose (futuro)
- [ ] Crear `Dockerfile` (build + nginx serve) para producción
- [ ] Crear `docker-compose.yml` con servicio web
- [ ] Crear `.dockerignore`
- [ ] Documentar comandos en README o `docs/DOCKER.md`

## 6. Comandos útiles

```bash
# Desarrollo local
npm run dev

# Build
npm run build

# Lint
npm run lint

# Preview build
npm run preview
```

## 7. Git - Rama y commit

Rama actual: `develop` (creada y pusheada al remoto).

Para continuar:
```bash
# Trabajar sobre develop
git checkout develop
git pull origin develop  # mantener sincronizado

# Tras hacer cambios
git add .
git commit -m "feat: descripción clara del cambio"
git push origin develop
```

Cuando quieras integrar a main (cuando esté estable):
```bash
# Crear PR: develop -> main (o merge local según flujo)
git checkout main
git pull origin main
git merge develop
git push origin main
```

## 8. Siguiente Acción Sugerida

Empezar con el Paso 1: crear `src/pages/Home.jsx`, `src/components/Navbar.jsx`, `src/components/Footer.jsx` y conectar en `App.jsx`.
Así dejamos una primera versión presentable del "Parqueadero Cantinflas".

