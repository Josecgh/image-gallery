# IMAGE GALLERY - Angular

## Objetivo del Proyecto

Este proyecto está diseñado para introducirte en el desarrollo con Angular siguiendo las **mejores prácticas de programación**. No se trata solo de hacer que funcione, sino de aprender a escribir código limpio, mantenible y profesional.

Construirás una galeria de imágenes interactiva donde aprenderás:
- Arquitectura de componentes y comunicación entre ellos
- Gestión de estado con Signals
- Testing de componentes y funcionalidades
- Buenas prácticas de Git y organización de repositorio
- Código limpio y principios SOLID aplicados a Angular

## Descripción de la Aplicación

Una galería de imágenes responsive con las siguientes funcionalidades:
- Visualización en grid responsive
- Imagen destacada (primera posición)
- Eliminación individual de imágenes
- Selección múltiple y eliminación masiva
- Reordenamiento mediante drag-and-drop
- Diseño atractivo y accesible

## Antes de Empezar

### Configuración del Entorno

**1. Verifica tu entorno de desarrollo:**
- Node.js
- npm (o pnpm)
- angular cli
- git configurado con tu nombre y email
- vscode

**2. Crea el repositorio:**
- Inicializa un repositorio en GitHub
- Añade un README.md descriptivo
- Incluye un .gitignore apropiado para Angular

**💡 Tip:** Busca "Angular .gitignore template" para un punto de partida

### Estrategia de Branches

Trabajarás con **Git Flow simplificado**:
- `main`: código estable y funcional
- `feature/nombre-descriptivo`: una rama por cada iteración

**Recursos:**
- [Git Branching Strategies](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
- [Conventional Commits](https://www.conventionalcommits.org/)

**Objetivo de aprendizaje:** Familiarizarte con flujos de trabajo profesionales en equipos

## Iteraciones del Proyecto

### Iteración 1: Fundamentos - Estructura y Componentes

**Conceptos clave:**
- Componentes standalone (el estándar moderno de Angular)
- Comunicación padre-hijo con `input()`
- Control de flujo nativo (`@for`, `@if`)
- Separación de responsabilidades

#### Pasos Guiados

**1. Crea tu aplicación Angular**

```bash
# Usa Angular CLI con las opciones apropiadas
ng new image-gallery
```

**❓ Preguntas para reflexionar:**
- ¿Qué es un componente en Angular y cuales son sus partes principales?
- ¿Qué otros comandos del CLI de Angular encuentras útil para que tú trabajo sea más productivo?
- ¿Por qué ahora Angular es Zoneless y cual es su impacto?

**Recursos:**
- [Angular Essentials](https://angular.dev/essentials)
- [Angular CLI Documentation](https://angular.dev/cli)
- [Angular without ZoneJS (Zoneless)](https://angular.dev/guide/zoneless#)

**2. Planifica la arquitectura de componentes**

Antes de escribir código, dibuja o esquematiza:
- ¿Qué componentes necesitas?
- ¿Cuál es la responsabilidad de cada uno?
- ¿Cómo fluyen los datos entre ellos?

**💡 Principio SOLID aplicado:** Single Responsibility Principle
- Un componente = Una responsabilidad clara

**Checklist de diseño:**
- [ ] Identificar componentes necesarios
- [ ] Definir inputs/outputs de cada componente
- [ ] Pensar en la reutilización


**3. Crea la rama de trabajo**

```bash
git checkout -b feature/basic-gallery
```

**💡 Convención de commits:**
Durante toda la iteración, haz commits frecuentes y descriptivos. Por ejemplo:
- `feat: add gallery component structure`
- `feat: create image-item component`
- `refactor: extract image interface`

**4. Define el modelo de datos**

**Objetivo:** Trabajar con TypeScript de forma profesional

Crea una interfaz `Image` que defina la estructura de tus datos.

**❓ Preguntas:**
- ¿Dónde deberías colocar las interfaces en la estructura del proyecto?
- ¿Qué propiedades mínimas necesita una imagen?
- ¿Deberías usar `interface` o `type`?

**Recursos:**
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Angular - Creating an interface](https://angular.dev/tutorials/first-app/04-interfaces)

**💡 Buena práctica:** Usa nombres descriptivos y agrupa tipos/interfaces relacionados

**5. Implementa el componente Gallery**

**Responsabilidades:**
- Gestionar la lista de imágenes
- Renderizar múltiples ImageItem
- Determinar cuál es la imagen destacada

**Conceptos a aplicar:**
- Uso de `signal()` para estado reactivo
- Control de flujo `@for` con `track`
- Property binding

**❓ Desafíos de aprendizaje:**
- ¿Por qué es importante el `track` en `@for`?
- ¿Cuándo usar `signal()` vs propiedades normales?
- ¿Cómo pasas datos a componentes hijos?

**Recursos:**
- [Angular Signals](https://angular.dev/essentials/signals)
- [Template syntax - @for](https://angular.dev/guide/templates/control-flow#repeat-content-with-the-for-block)

**💡 Tips:**
- Usa datos de ejemplo de [picsum.photos](https://picsum.photos)
- Estructura: `https://picsum.photos/id/237/300/200`
- Crea un array con al menos 6-8 imágenes

**6. Implementa el componente ImageItem**

**Responsabilidades:**
- Mostrar UNA imagen
- Aplicar estilos según su estado (destacada o normal)
- Ser reutilizable

**Conceptos:**
- `input()` signals para recibir datos
- `ChangeDetectionStrategy.OnPush` para optimización
- Class binding condicional

**❓ Preguntas:**
- ¿Qué ventaja tiene OnPush?
- ¿Cómo aplicas clases CSS condicionalmente?
- ¿Por qué este componente no debe tener lógica de negocio compleja?

**Recursos:**
- [Change Detection](https://angular.dev/guide/components/advanced-configuration#changedetectionstrategy)
- [Input signals](https://angular.dev/guide/components/inputs#reading-inputs)
- [CSS class and style property bindings](https://angular.dev/guide/templates/binding#css-classes)

**7. Implementa la lógica de imagen destacada**

**Desafío:** La primera imagen debe ser visualmente diferente

**Pistas:**
- Piensa en cómo identificar la primera imagen
- ¿Pasarás un índice o un booleano?
- ¿Cómo se verá reflejado en el CSS?

**💡 CSS Tip:** La imagen destacada podría ser más grande, tener un borde especial, etc.

**8. Testing básico**

Antes de fusionar, verifica:

```bash
# Ejecuta los tests
ng test

# Compila sin errores
ng build
```

**Checklist de calidad:**
- [ ] La aplicación compila sin errores
- [ ] No hay warnings en consola
- [ ] Las imágenes se muestran correctamente
- [ ] La primera imagen tiene estilos diferentes
- [ ] El código está formateado consistentemente

**9. Merge a main**

```bash
# Asegúrate de estar en feature/basic-gallery
git add .
git commit -m "feat: implement basic gallery structure with featured image"
git checkout main
git merge feature/basic-gallery
git push origin main
```

**Recurso:** [Git Merge vs Rebase](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

### Iteración 2: Estilización Profesional

**Conceptos clave:**
- Utility-first CSS con Tailwind
- Componentes UI con PrimeNG
- Diseño responsivo
- Accesibilidad

#### Pasos Guiados

**1. Nueva rama**

```bash
git checkout -b feature/styles
```

**2. Instala y configura Tailwind CSS**

**Sigue la guía oficial:**
- [Tailwind CSS - Angular Setup](https://tailwindcss.com/docs/guides/angular)

**❓ Preguntas:**
- ¿Qué ventajas ofrece Tailwind sobre CSS tradicional?
- ¿Dónde va la configuración de Tailwind?
- ¿Cómo se integra con el proceso de build de Angular?

**💡 Tip:** Lee la configuración generada para entender qué hace cada parte

**3. Instala y configura PrimeNG**

**Recursos:**
- [PrimeNG Installation](https://primeng.org/installation)
- [PrimeNG + Tailwind Integration](https://primeng.org/tailwind)

**Objetivo:** Aprender a integrar bibliotecas de terceros en Angular

**4. Diseña el layout de la galería**

**Requisitos:**
- Grid responsivo centrado
- Ancho máximo apropiado para tablet
- Espaciado consistente
- Imagen destacada ocupa más espacio

**💡 Conceptos de Tailwind a investigar:**
- Grid system: `grid`, `grid-cols-*`
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- Spacing: `gap-*`, `p-*`, `m-*`
- Layout: `container`, `mx-auto`

**Recurso:** [Tailwind Grid Documentation](https://tailwindcss.com/docs/grid-template-columns)

**5. Implementa diseño responsive**

**Especificaciones:**

| Dispositivo | Columnas | Imagen destacada |
|------------|----------|------------------|
| Desktop (>1024px) | 5 | 2x2 grid cells |
| Tablet (768-1024px) | 4 | Mismo tamaño |
| Mobile (<768px) | 2 | Mismo tamaño |

**❓ Desafío:**
- ¿Cómo haces que un elemento ocupe múltiples celdas del grid?
- ¿Cómo aplicas estilos solo en ciertos breakpoints?

**💡 Investiga:** `col-span-*`, `row-span-*`, breakpoints de Tailwind


**6. Accesibilidad**

**Checklist obligatorio:**
- [ ] Todas las imágenes tienen `alt` text descriptivo
- [ ] Los botones tienen labels claros
- [ ] El contraste de colores es adecuado
- [ ] Navegación con teclado funciona correctamente
- [ ] Pruebas con lector de pantalla

**Recursos:**
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Angular Accessibility](https://angular.dev/best-practices/a11y#)

**Herramientas de testing:**
- Extensión Lighthouse en Chrome DevTools
- Lector de pantalla del sistema operativo
- [axe DevTools](https://www.deque.com/axe/devtools/)

**7. Commit y merge**

Haz commits específicos para cada cambio:
```bash
git add .
git commit -m "feat: add tailwind configuration"
git commit -m "feat: implement responsive grid layout"
git commit -m "feat: add accessibility improvements"
```

### Iteración 3: Interactividad - Eventos y Estado

**Conceptos clave:**
- Comunicación hijo → padre con `output()`
- Event binding
- Gestión de estado con Signals
- Inmutabilidad en actualizaciones de estado

#### Pasos Guiados

**1. Nueva rama**

```bash
git checkout -b feature/event-handlers
```

**2. Añade botón de eliminación en ImageItem**

**Responsabilidades del componente hijo:**
- Mostrar botón de eliminar
- Emitir evento cuando se hace click
- NO ejecutar la lógica de eliminación (eso es responsabilidad del padre)

**Concepto:** Separation of Concerns

**❓ Preguntas:**
- ¿Por qué el hijo no debe eliminar directamente?
- ¿Qué información debe enviar al padre?
- ¿Cómo prevenir que eventos se propaguen incorrectamente?

**Recursos:**
- [Output signals](https://angular.dev/guide/components/outputs#)
- [Event propagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)

**💡 Tip:** Investiga `event.stopPropagation()` y cuándo usarlo

**3. Gestiona la eliminación en Gallery**

**Requisitos:**
- Actualizar el estado de forma inmutable
- Manejar el caso de eliminar la imagen destacada

**Concepto:** Estado inmutable

**❓ Desafíos:**
- ¿Cómo actualizas un array signal?
- ¿Diferencia entre `.set()` y `.update()`?
- ¿Qué pasa si eliminas la imagen destacada?

**Recursos:**
- [Working with Signals](https://angular.dev/guide/signals)
- [Array immutability patterns](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

**💡 Pista:** El método `filter()` de arrays es tu amigo

**4. Estiliza el botón de eliminar**

**Consideraciones UX:**
- Debe ser claramente visible pero no intrusivo
- Color que indique acción destructiva (rojo)
- Icono reconocible (papelera)
- Hover states

**Recurso:** [Heroicons](https://heroicons.com/) o iconos de PrimeNG

**5. Escribe tests para la funcionalidad**

**Objetivo:** Aprender TDD (Test-Driven Development)

**Tests mínimos:**
- El botón de eliminar se renderiza
- Hacer click emite el evento correcto
- El componente Gallery elimina la imagen del array
- Se muestra el diálogo de confirmación

**❓ Conceptos a investigar:**
- ¿Cómo testear outputs en Angular?
- ¿Cómo mockear `window.confirm`?
- ¿Qué es un spy en Jasmine?

**📖 Recursos:**
- [Angular Testing Guide](https://angular.dev/guide/testing)
- [Jasmine Spies](https://jasmine.github.io/api/edge/Spy.html)

**💡 Tip:** Escribe el test antes de implementar la funcionalidad

**6. Refactorización**

Antes de hacer merge, revisa tu código:

**Code Review Checklist:**
- [ ] ¿Hay código duplicado?
- [ ] ¿Los nombres de variables/funciones son descriptivos?
- [ ] ¿Las funciones hacen una sola cosa?
- [ ] ¿Hay magic numbers que deberían ser constantes?
- [ ] ¿El código es fácil de leer sin comentarios?

**Recurso:** [Clean Code principles](https://github.com/ryanmcdermott/clean-code-javascript)

### Iteración 4: Drag and Drop con Angular CDK

**Conceptos clave:**
- Integración de librerías de Angular ecosystem
- Directivas del CDK
- Manejo de eventos complejos
- Actualización de estado basada en índices

#### Pasos Guiados

**1. Nueva rama**

```bash
git checkout -b feature/drag-and-drop
```

---

**2. Instala Angular CDK**

```bash
npm install @angular/cdk
```

**❓ Preguntas:**
- ¿Qué es el CDK y cómo se diferencia de Material?
- ¿Qué módulos ofrece el CDK?

**Recurso:** [Angular CDK Overview](https://material.angular.dev/cdk/categories)

**3. Importa el módulo Drag-Drop**

**Desafío:** Importar correctamente en un componente standalone

**Pistas:**
- No uses `NgModule`, importa directamente en el componente
- Necesitas las directivas específicas del CDK

**Recurso:** [CDK Drag and Drop](https://material.angular.dev/cdk/drag-drop/overview)

---

**4. Implementa la funcionalidad**

**Directivas clave a investigar:**
- `cdkDropList` - contenedor que acepta drops
- `cdkDrag` - elemento arrastrable
- `(cdkDropListDropped)` - evento al soltar

**❓ Desafíos:**
- ¿Dónde colocas cada directiva?
- ¿Qué información proporciona el evento `CdkDragDrop`?
- ¿Cómo reordenas el array manteniendo inmutabilidad?

**💡 Tip:** El CDK proporciona una función helper `moveItemInArray()`

**Recursos:**
- [CDK Drag Drop API](https://material.angular.dev/cdk/drag-drop/api)
- Ejemplos en la documentación oficial

**5. Maneja el estado después del reordenamiento**

**Consideraciones:**
- Actualizar el array de imágenes
- Posiblemente actualizar la imagen destacada
- Mantener la reactividad

**❓ Pregunta crítica:**
- Si siempre la primera imagen es destacada, ¿qué pasa después de reordenar?

**6. Estiliza el drag-and-drop**

**UX considerations:**
- Visual feedback mientras arrastras
- Placeholder donde se soltará
- Cursor apropiado
- Animaciones suaves

**💡 CDK añade clases automáticas:**
- `.cdk-drag-preview`
- `.cdk-drag-placeholder`
- `.cdk-drag-animating`

**Investiga:** Cómo personalizar estas clases con Tailwind

**7. Testing de drag-and-drop**

**Objetivo:** Testear lógica sin simular eventos del DOM

**Estrategia:**
- Testea la función `drop()` directamente
- Crea un mock del evento `CdkDragDrop`
- Verifica el reordenamiento del array

**❓ ¿Por qué es mejor testear la lógica que la interacción DOM en este caso?

**Recurso:** [CDK Testing Utilities](https://material.angular.dev/cdk/testing/overview)

### Iteración 5: Selección Múltiple

**Conceptos clave:**
- Estado complejo (Set vs Array)
- Lógica de toggle
- Conditional rendering
- UX patterns para batch operations

#### Pasos Guiados

**1. Nueva rama**

```bash
git checkout -b feature/multiple-selection
```

**2. Diseña el flujo de usuario**

Antes de codificar, piensa:
- ¿Cómo selecciona el usuario una imagen?
- ¿Cómo sabe que está seleccionada?
- ¿Cómo deselecciona?
- ¿Dónde aparece el botón de eliminar múltiples?

**💡 Tip:** Dibuja el flujo en papel

**3. Gestiona el estado de selección**

**❓ Decisión de diseño:** ¿Usar `Set<string>` o `Array<string>`?

**Pros de `Set`:**
- Búsquedas O(1)
- Previene duplicados automáticamente
- `.has()`, `.add()`, `.delete()` son semánticos

**Aprende:** Cuándo usar cada estructura de datos

**Recurso:** [Set - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

**4. Implementa la selección visual**

**Requisitos:**
- Indicador claro de imagen seleccionada (borde, overlay, checkmark)
- Click en la imagen para seleccionar/deseleccionar
- No interferir con el drag-and-drop

**❓ Desafío:**
- ¿Cómo manejas múltiples clicks listeners?
- ¿Cómo previenes que el click de selección active el drag?

**5. Botón de eliminación múltiple**

**UX considerations:**
- Solo visible cuando hay selección
- Muestra cuántas imágenes se eliminarán
- Confirmación clara antes de eliminar
- Feedback después de eliminar

**💡 Ejemplo mensaje:** "¿Eliminar 3 imágenes seleccionadas?"

**6. Implementa la lógica de eliminación batch**

**Requisitos:**
- Eliminar todas las seleccionadas en una operación
- Limpiar el estado de selección después
- Mantener inmutabilidad

**❓ Desafío de rendimiento:**
- ¿Es eficiente hacer múltiples `.filter()`?
- ¿Cómo optimizarías para 100+ imágenes?

**7. Testing exhaustivo**

**Tests mínimos:**
- Seleccionar/deseleccionar individual
- Selección múltiple
- Botón aparece/desaparece correctamente
- Eliminación batch funciona
- Estado se limpia después de eliminar

**Objetivo:** Cobertura de código >80%

**Recurso:** [Code Coverage](https://angular.dev/guide/testing/code-coverage)

```bash
ng test --code-coverage
```

### Iteración 6: Testing Profesional

**Conceptos clave:**
- Testing unitario vs integración
- Test doubles (mocks, spies, stubs)
- Arrange-Act-Assert pattern
- Coverage vs quality

#### Pasos Guiados

**1. Nueva rama**

```bash
git checkout -b feature/comprehensive-testing
```

**2. Configuración del entorno de testing**

**Revisa:**
- `karma.conf.js` - configuración del test runner
- `test.ts` - setup de testing
- Configuración de code coverage

**📖 Recursos:**
- [Karma Configuration](https://karma-runner.github.io/latest/config/configuration-file.html)
- [Jasmine Documentation](https://jasmine.github.io/)

**3. Testing de ImageItem Component**

**Tests esenciales:**

**a) Renderizado:**
- Se crea correctamente
- Muestra la imagen con src/alt correctos
- Aplica clase `featured` cuando corresponde
- Aplica clase de selección cuando corresponde

**b) Interactividad:**
- Emite evento de eliminación al hacer click
- Emite evento de selección al hacer click
- `stopPropagation` se llama correctamente

**c) Edge cases:**
- Comportamiento con datos inválidos
- Múltiples clicks rápidos

**Pattern:** Arrange-Act-Assert

```typescript
it('should do something', () => {
  // Arrange: prepara el escenario
  const testData = {...};
  
  // Act: ejecuta la acción
  component.doSomething(testData);
  
  // Assert: verifica el resultado
  expect(component.result).toBe(expected);
});
```

**Recurso:** [Component Testing](https://angular.dev/guide/testing/components-basics)

**4. Testing de Gallery Component**

**Tests esenciales:**

**a) Renderizado:**
- Renderiza el número correcto de ImageItems
- Pasa los inputs correctamente a los hijos
- Marca la primera imagen como destacada

**b) Eliminación:**
- Individual funciona
- Múltiple funciona
- Pide confirmación
- Actualiza el UI correctamente

**c) Drag and Drop:**
- Reordena correctamente el array
- Actualiza la imagen destacada si necesario

**d) Selección:**
- Toggle funciona
- Eliminar seleccionadas funciona
- Estado se limpia después de eliminar

**💡 Tips:**
- Usa `fixture.debugElement.query()` para encontrar elementos
- `fixture.detectChanges()` después de cambios
- Mockea `window.confirm` con `spyOn`

**5. Tests de integración**

**Objetivo:** Testear la aplicación completa

**Escenarios:**
1. Usuario carga la app → ve la galería
2. Usuario elimina una imagen → desaparece
3. Usuario reordena → orden cambia
4. Usuario selecciona múltiples → puede eliminarlas

**❓ Diferencia:**
- Tests unitarios: un componente aislado
- Tests de integración: múltiples componentes juntos

**6. Analiza la cobertura**

```bash
ng test --no-watch --code-coverage
```

**Objetivos de cobertura:**
- Statements: >80%
- Branches: >75%
- Functions: >80%
- Lines: >80%

**❓ Reflexiona:**
- ¿Cobertura del 100% significa código perfecto?
- ¿Qué es más importante: cantidad o calidad de tests?

**Recurso:** [Testing Best Practices](https://angular.dev/guide/testing)

**7. Refactoriza basándote en los tests**

**Concepto:** Tests como documentación

Si un test es difícil de escribir, probablemente el código está mal diseñado.

**Señales de mal diseño:**
- Necesitas muchos mocks
- Mucha configuración en `beforeEach`
- Tests muy largos
- Tests frágiles (se rompen con cambios pequeños)

**💡 Refactorización guiada por tests:**
1. Tests fallan → código incorrecto
2. Tests difíciles de escribir → código mal diseñado
3. Tests redundantes → código duplicado

## 🎓 Criterios de Evaluación

### Código Limpio (30%)
- [ ] Nombres descriptivos y consistentes
- [ ] Funciones pequeñas con responsabilidad única
- [ ] Sin código duplicado
- [ ] Comentarios solo donde añaden valor
- [ ] Estructura de carpetas lógica

### Buenas Prácticas Angular (25%)
- [ ] Componentes standalone
- [ ] Uso correcto de Signals
- [ ] OnPush change detection
- [ ] Directivas y pipes usadas apropiadamente
- [ ] Gestión de estado clara

### Testing (25%)
- [ ] Cobertura >80%
- [ ] Tests significativos (no solo cobertura)
- [ ] Tests unitarios e integración
- [ ] Edge cases cubiertos
- [ ] Tests mantenibles

### Git y Organización (20%)
- [ ] Commits atómicos y descriptivos
- [ ] Mensajes siguiendo convenciones
- [ ] Ramas por feature
- [ ] README completo
- [ ] Sin archivos innecesarios en el repo

## Recursos Generales

### Documentación Oficial
- [Angular](https://angular.dev) - Documentación principal
- [Angular Style Guide](hhttps://angular.dev/style-guide) - **LECTURA OBLIGATORIA**

### Librerías del Proyecto
- [Tailwind CSS](https://tailwindcss.com/docs)
- [PrimeNG](https://primeng.org/)
- [Angular CDK](https://material.angular.dev/cdk/categories)

### Clean Code
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
- [SOLID Principles](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

### Testing
- [Jasmine](https://jasmine.github.io/)
- [Testing Angular Applications](https://testing-angular.com/)

## 💡 Consejos Finales

### Proceso de Aprendizaje

1. **Lee la documentación oficial** antes de buscar tutoriales
2. **Entiende antes de copiar** - si encuentras código online, asegúrate de entenderlo
3. **Experimenta** - prueba cosas, rompe código, aprende de errores
4. **Refactoriza** - tu primera solución raramente es la mejor

### Cuando Te Atascas

1. Lee el mensaje de error completo
2. Busca en la documentación oficial
3. Usa las DevTools del navegador
4. Divide el problema en partes más pequeñas
5. Escribe un test que reproduzca el problema

### No Uses IA para

- Generar código completo
- Resolver problemas sin entenderlos
- Saltar el proceso de aprendizaje

### Sí Usa IA para

- Explicar conceptos después de leer la documentación
- Revisar tu código y sugerir mejoras
- Generar casos de test adicionales
- Entender mensajes de error complejos

## Checklist Final del Proyecto

Antes de considerar el proyecto terminado:

### Funcionalidad
- [ ] Todas las features implementadas
- [ ] Sin errores en consola
- [ ] Funciona en diferentes navegadores
- [ ] Responsive en mobile, tablet, desktop

### Calidad de Código
- [ ] Linting sin errores (`ng lint`)
- [ ] Tests pasando (`ng test`)
- [ ] Cobertura >80%
- [ ] Build de producción exitoso (`ng build`)

### Documentación
- [ ] README con instrucciones claras
- [ ] Comentarios en código complejo
- [ ] Commits descriptivos
- [ ] CHANGELOG si aplica

### Accesibilidad
- [ ] Lighthouse score >90
- [ ] Navegación por teclado funciona
- [ ] Lectores de pantalla funcionan
- [ ] Contraste de colores adecuado

**¡Éxito en tu aprendizaje!**

Recuerda: el objetivo no es solo completar las tareas, sino **entender profundamente** cómo y por qué funciona cada parte de Angular.
