# Copy Edit Mode – Guía de Uso

Este documento explica cómo activar y usar el **Copy Edit Mode** en la aplicación Conexio. Esta funcionalidad permite a usuarios no técnicos (CEOs, stakeholders) editar textos de la interfaz directamente desde el navegador y exportar los cambios en un archivo JSON estructurado para que los desarrolladores puedan aplicarlos fácilmente.

---

## 1. Activación

### Paso 1: Autorización vía URL

Añade los siguientes parámetros a la URL de cualquier página:

```
?copyEdit=1&token=TU_TOKEN_SECRETO
```

El token debe coincidir con la variable de entorno `NEXT_PUBLIC_COPY_EDIT_TOKEN` configurada en el proyecto.

**Ejemplo:**
```
https://tu-dominio.com/?copyEdit=1&token=mi-token-secreto
https://tu-dominio.com/dashboard?copyEdit=1&token=mi-token-secreto
```

### Paso 2: Activar/Desactivar con teclado

Una vez autorizado, puedes activar o desactivar el modo de edición con:

```
Ctrl + Shift + B
```

Cuando el modo está activo:
- Aparece un **panel lateral** con los cambios propuestos
- Los textos editables se **resaltan** al pasar el cursor
- Puedes hacer clic en cualquier texto con `CopyText` para editarlo

---

## 2. Edición de Textos

### Textos con `copyId` (recomendado)

Los textos envueltos con el componente `<CopyText>` tienen un identificador estable (`copyId`). Al hacer clic en ellos:

1. Se abre el panel de edición
2. Puedes modificar el texto
3. El cambio se guarda automáticamente en memoria

### Textos sin `copyId` (fallback)

Para textos que no tienen `CopyText`, puedes usar:

```
Alt + Click
```

Esto selecciona cualquier elemento de texto y genera un selector CSS/DOM como identificador.

---

## 3. Panel de Edición

El panel lateral muestra:

- **Texto actual** (antes)
- **Campo de edición** (después)
- **copyId** o selector CSS del elemento
- **Ruta** de la página donde se encuentra
- **Idioma** activo (de/es)

### Acciones disponibles:

| Botón | Acción |
|-------|--------|
| **Aplicar** | Guarda el cambio propuesto |
| **Descargar JSON** | Exporta todos los cambios |
| **Limpiar todo** | Borra todos los cambios pendientes |

---

## 4. Exportar Cambios (JSON)

Al hacer clic en **"Descargar JSON"**, se genera un archivo con la siguiente estructura:

```json
{
  "exportedAt": "2025-01-07T15:30:00.000Z",
  "changes": [
    {
      "copyId": "landingA.hero.title",
      "before": "Texto original",
      "after": "Texto modificado",
      "route": "/",
      "lang": "de"
    },
    {
      "cssPath": "body > main > section:nth-child(2) > h2",
      "domPath": "BODY/MAIN/SECTION[2]/H2",
      "before": "Otro texto",
      "after": "Texto cambiado",
      "route": "/dashboard",
      "lang": "de"
    }
  ]
}
```

### Campos del JSON:

| Campo | Descripción |
|-------|-------------|
| `copyId` | Identificador estable del texto (si existe) |
| `cssPath` | Selector CSS del elemento (fallback) |
| `domPath` | Ruta DOM del elemento (fallback) |
| `before` | Texto original |
| `after` | Texto modificado |
| `route` | Ruta de la página |
| `lang` | Idioma activo al momento de la edición |

---

## 5. Convención de `copyId`

Los identificadores siguen una estructura jerárquica:

```
[página].[sección].[elemento]
```

### Ejemplos:

| copyId | Ubicación |
|--------|-----------|
| `landingA.hero.title` | Landing → Hero → Título |
| `landingA.hero.primaryCta` | Landing → Hero → Botón principal |
| `landingA.sections.faqTitle` | Landing → Sección FAQ → Título |
| `landingA.sections.faqs.0.q` | Landing → FAQ → Pregunta #1 |
| `dashboard.sidebar.home` | Dashboard → Sidebar → Item "Home" |
| `dashboard.list.filter.all` | Dashboard → Lista → Filtro "Todos" |
| `dashboard.create.step1.title` | Dashboard → Crear Oferta → Paso 1 → Título |
| `dashboard.profile.labels.location` | Dashboard → Perfil → Label "Ubicación" |
| `auth.login.title` | Login → Título |
| `auth.register.form.email.label` | Register → Formulario → Email → Label |

---

## 6. Aplicar Cambios (para Desarrolladores)

Una vez recibido el JSON:

1. **Buscar por `copyId`**: Localiza el componente `<CopyText copyId="...">` en el código
2. **Modificar `defaultText`**: Actualiza el valor del prop `defaultText`
3. **O modificar traducciones**: Si el texto viene de `t.sections.*`, actualiza el archivo de traducciones

### Ejemplo de búsqueda:

```bash
# Buscar por copyId en el código
grep -r "landingA.hero.title" src/
```

### Ejemplo de cambio:

```tsx
// Antes
<CopyText copyId="landingA.hero.title" defaultText={t.hero.title} as="span" />

// Después (si se cambia el default)
<CopyText copyId="landingA.hero.title" defaultText="Nuevo título" as="span" />
```

---

## 7. Páginas Cubiertas

| Página | Estado |
|--------|--------|
| Landing (/) | ✅ Completo |
| Login (/login) | ✅ Completo |
| Register (/register) | ✅ Completo |
| Dashboard (/dashboard) | ✅ Completo |
| Dashboard → Home | ✅ Completo |
| Dashboard → Perfil | ✅ Completo |
| Dashboard → Ofertas | ✅ Completo |
| Dashboard → Crear Oferta | ✅ Completo |
| Dashboard → Candidatos | ✅ Completo |

---

## 8. Notas Importantes

- **Los cambios NO se aplican automáticamente** al código. El JSON es solo un reporte.
- **Los nombres propios** (empresas, personas) NO son editables intencionalmente.
- **Los datos dinámicos** (números, fechas calculadas) NO son editables.
- **El modo se desactiva** al cerrar el navegador o limpiar localStorage.
- **La autorización persiste** en localStorage hasta que se borre manualmente.

---

## 9. Variables de Entorno

```env
# Token de autorización para Copy Edit Mode
NEXT_PUBLIC_COPY_EDIT_TOKEN=tu-token-secreto-aqui
```

---

## 10. Soporte

Si encuentras textos que deberían ser editables pero no lo son, reporta:

1. La URL de la página
2. El texto exacto
3. Una captura de pantalla

El equipo de desarrollo añadirá el `copyId` correspondiente.
