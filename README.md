# 🍎 Comida - Evita el Desperdicio de Alimentos

Una aplicación web moderna enfocada en móvil para gestionar tu despensa y evitar el desperdicio de alimentos.

## 🚀 Características

- **Login/Autenticación**: Sistema de login seguro
- **Dashboard Principal**: Visualiza tus alimentos categorizados:
  - 🔴 Caducados
  - 🟠 Próximos a caducar
  - 🟢 Con tiempo disponible
- **Interfaz Móvil**: Diseño responsive optimizado para teléfonos
- **Navegación por Pestañas**: 
  - Inicio
  - Favoritos (próximamente)
  - Configuración (próximamente)

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona este repositorio:
```bash
git clone <tu-repo-url>
cd comida_front
```

2. Instala las dependencias:
```bash
npm install
```

## 🎯 Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

## 🔐 Credenciales de Prueba

Para probar el login, usa cualquier email y contraseña:
- **Email**: test@example.com
- **Password**: cualquier contraseña (mínimo 8 caracteres)

## 📦 Build para Producción

```bash
npm run build
```

Esto generará la carpeta `dist` con tu aplicación lista para desplegar.

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── FoodList.jsx          # Componente de lista de alimentos
│   └── FoodList.css
├── pages/
│   ├── Login.jsx             # Página de login
│   ├── Login.css
│   ├── Home.jsx              # Página principal
│   └── Home.css
├── App.jsx                   # Componente raíz
├── App.css
├── main.jsx                  # Entrada de la aplicación
└── index.css                 # Estilos globales
```

## 🎨 Colores del Tema

- **Verde Principal**: `#10b981`
- **Verde Oscuro**: `#047857`
- **Rojo (Caducado)**: `#ef4444`
- **Naranja (Por caducar)**: `#f59e0b`
- **Verde (Con tiempo)**: `#10b981`

## 📱 Funcionalidades Futuros

- [ ] Notificaciones de alimentos próximos a caducar
- [ ] Compartir lista con familia
- [ ] Historial de alimentos consumidos
- [ ] Estadísticas de desperdicio

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, por favor abre un issue primero para discutir qué te gustaría cambiar.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 📧 Contacto

Para preguntas o sugerencias, contacta al equipo de desarrollo.
