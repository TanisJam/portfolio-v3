---
title: Un naranjo que crece con el scroll
description: "Quería que la puerta de entrada de este sitio fuera un lugar y no un tablero: algo vivo, agradable de recorrer y que no se terminara nunca. La historia completa de cómo llegué ahí — cuatro versiones descartadas, fisiología vegetal como fuente de curvas de animación, sonido sintetizado sin un solo archivo, y todo lo que hubo que tirar en el camino."
publishedAt: 2026-08-19
updatedAt: 2026-08-19
featured: true
tags:
  - canvas
  - procedural
  - generative-audio
  - process
  - personal-site
---

La home de este sitio es un naranjo que crece mientras scrolleás. Nace de una semilla, echa raíz, florece, da fruta, y la fruta se pela y se abre hasta que una semilla se suelta y arranca el ciclo de nuevo. No hay una sola imagen. No hay un solo archivo de audio. Todo se genera, cuadro por cuadro, con dibujo 2D y osciladores.


<figure>
  <img src="/assets/posts/citrus/canopy.jpg" alt="El naranjo con la copa formada, de día" loading="lazy" decoding="async">
  <figcaption><b>p = 0.50.</b> Un cuadro real de la pieza, no un montaje. Todas las figuras de este post salen de <code>pnpm figures</code>, que maneja la pieza hasta un <code>p</code> exacto y le saca una foto al canvas.</figcaption>
</figure>

Pero antes de contar cómo, hay que contar por qué. Sin eso, lo que sigue parece una demo técnica, y no lo es.

## Un sitio personal no es un tablero

La versión anterior de este sitio hacía lo que hacen casi todos: acá está mi experiencia, acá mis proyectos, acá mi contacto. Ordenado, correcto y quieto. Ya lo escribí una vez: [un portfolio es una foto, y mi trabajo no lo es](/es/blog/from-portfolio-to-personal-site).

El problema es que lo que hago todos los días no se parece en nada a un tablero de información. Se parece a un proceso: algo que crece, que cambia de forma, que a veces se poda y a veces se ramifica, que tiene etapas donde no se ve nada pasar y otras donde pasa todo junto. Un tablero puede listar ese trabajo. No puede transmitirlo.

Quería que la puerta de entrada tuviera esa textura. Que se sintiera **fresca** —viva, en movimiento, hecha ahora— y que además fuera **agradable de recorrer**. Ese segundo requisito es el que casi nadie se pone. No se trata de que te informes más rápido: se trata de que te den ganas de quedarte, de bajar un poco más para ver qué pasa. Un sitio personal es lo más parecido a invitar a alguien a tu casa. Puede ser un pasillo con carteles, o puede ser un lugar donde se está bien.

De ahí salieron las dos reglas que gobernaron todo lo demás:

1. **Nada estático.** Si algo se puede derivar y dibujar, se deriva y se dibuja. Cero imágenes, cero samples. Todo lo que ves y todo lo que escuchás se genera mientras scrolleás.
2. **Recorrerla tiene que dar gusto.** Cada vez que una decisión técnica y una decisión de sensación se pelearon, ganó la sensación. Vas a ver ese patrón repetirse en cada parte de este post.

## Por qué una semilla

Falta el sujeto, y no es decorativo.

Una semilla no es lo que tenés hoy. Es el potencial de lo que puede llegar a ser. Y ese potencial no se gasta: de la semilla sale un árbol, del árbol una fruta, de la fruta otra semilla. No hay un punto donde eso se termina — es infinito por construcción.

Eso es exactamente lo que quería decir sobre el trabajo. Un proyecto terminado no es un final: es una idea simple que quedó disponible para volver a crecer en otro lado. Las features de hoy son las semillas de los proyectos de mañana.

**Por eso la pieza no termina.** El loop no es un truco de ingeniería para ahorrar contenido — es la única forma honesta de cerrar algo que no se cierra. Que llegues al fondo de la página y descubras que estás de nuevo arriba no es un efecto: es la afirmación completa.

Todo lo que sigue —cuatro versiones descartadas, fisiología vegetal, osciladores, tests sin navegador— es la búsqueda de cómo sostener esas tres cosas a la vez: que sea dinámico, que sea lindo de recorrer, y que no se termine.

Aviso: es largo. La pieza tardó semanas y la parte interesante no es el resultado, es lo que se fue muriendo.

---

## Parte I — Cuatro intentos

Cada versión tiró algo fundamental de la anterior. La progresión no fue "agregar features": fue descubrir que algo que parecía resuelto no lo estaba.

| # | Qué era | Qué murió al pasar a la siguiente |
|---|---|---|
| 1 | Un bosque que crece con scroll horizontal | La dirección: horizontal no era intuitivo |
| 2 | Descenso vertical por pisos de montaña | El caché: los elementos estaban congelados |
| 3 | El ciclo de vida de un naranjo | El final único: no había decisión del usuario |
| 4 | El ciclo se ramifica y se cierra | La elección con el mouse (spoiler de la Parte II) |

### Intento 1 — El bosque horizontal

De acá salió la única idea que sobrevivió las cuatro versiones y sigue viva hoy:

**El scroll no maneja animaciones. Maneja una sola variable, `p`, de 0 a 1.** Todo lo demás se deriva: la hora del día, la posición de la cámara, el crecimiento de cada planta, el color del cielo.

```js
p += (target - p) * (1 - Math.pow(0.0015, dt));
```

Ese lerp sobre el scroll es el 80% de la sensación de calidad. Nunca uses el scroll crudo: el retraso suave de ~200 ms es la diferencia entre "página con parallax" y "algo que se siente bien".

Y acá también está el primer error grande, que tardé una versión entera en ver: **cacheé cada árbol como bitmap**, uno por paso de crecimiento. Rapidísimo. Y completamente muerto. El árbol crecía, pero no respiraba.

La optimización obvia y la sensación de vida están en tensión directa. Un bitmap cacheado es 50× más barato que recalcular geometría, y se ve 10× peor.

### Intento 2 — El descenso vertical

Vertical coincide con la dirección del gesto, y con montañas y ríos es más natural. Pero el pedido real era otro: que **los mismos elementos** se animen, se muevan, crezcan y se transformen. Eso obligó a tirar el caché.

La arquitectura que lo reemplazó: cada planta pasó a ser un array plano de nodos con índice de padre, donde el padre siempre precede al hijo. Eso permite recalcular todos los ángulos acumulados en un solo pase hacia adelante, por frame:

```js
A[i] = A[padre[i]] + anguloRelativo[i] + viento(profundidad, t, fase);
```


<figure>
  <img src="/assets/posts/citrus/diag-array.svg" alt="Diagrama del array plano de nodos con índice de padre" loading="lazy" decoding="async">
  <figcaption>El padre siempre precede al hijo, así que ningún arco apunta a la izquierda. Esa es toda la garantía que hace falta para recalcular el árbol entero en un solo pase.</figcaption>
</figure>

El detalle que hace que el viento se vea real: escala con `(profundidad / total) ** 1.6`. Se acumula hacia las puntas igual que en un árbol de verdad — el tronco casi no se mueve, las hojas bailan.


<figure>
  <img src="/assets/posts/citrus/diag-viento.svg" alt="Gráfico de la amplitud del viento por nivel de profundidad" loading="lazy" decoding="async">
  <figcaption>Lineal se ve como una bandera. Con exponente 1.6 se ve como un árbol.</figcaption>
</figure>

Cómo no morir de draw calls: juntar todos los segmentos por nivel de profundidad y hacer un solo `stroke()` por nivel, no uno por planta. De ~60 llamadas por árbol a 7.

### Intento 3 — El naranjo

Acá apareció el pedido que cambió todo: investigar bien primero el ciclo de vida de las naranjas, cada etapa y cada pormenor, para después reflejarlo.

**Investigar antes de diseñar produjo mejores decisiones de software, no sólo mejor contenido.** Esa es la tesis del post y acá está la evidencia.

**1. El crecimiento no es una rampa. Son pulsos que se turnan.** En cítricos el crecimiento radicular se detiene mientras crecen los brotes, y alternan cíclicamente. El árbol nunca construye las dos cosas a la vez.

Las curvas de crecimiento dejaron de ser rampas y pasaron a ser escaleras con mesetas alternadas. Es una curva de easing mejor que cualquiera que se me hubiera ocurrido inventando, y no la inventé: la copié de la fisiología. Más adelante, esa misma alternancia va a hacer que las capas de sonido se turnen solas, sin que nadie lo programe.


<figure>
  <img src="/assets/posts/citrus/diag-pulsos.svg" alt="Curvas de crecimiento en escalera alternada contra una rampa" loading="lazy" decoding="async">
  <figcaption>La curva de easing que no inventé. La copié de la fisiología del cítrico, y años después me devolvió también la automatización de mezcla del audio.</figcaption>
</figure>

**2. Las semillas de cítrico no pueden esperar.** Son recalcitrantes: mueren si se secan por debajo de ~25% de humedad. No hay latencia, no hay banco de semillas. Germina o muere. Traducido: la caída inicial no tiene pausa dramática. Toca tierra y arranca.


<figure>
  <img src="/assets/posts/citrus/seed.jpg" alt="La semilla germinando sobre la tierra" loading="lazy" decoding="async">
  <figcaption><b>p = 0.06.</b> Toca tierra y arranca. Sin pausa dramática: una semilla de cítrico que se seca por debajo del 25% de humedad se muere.</figcaption>
</figure>

**3. De una semilla salen varios brotes.** Poliembrionía: 2,9 a 4,6 embriones por semilla en naranja Valencia. La mayoría son clones nucelares de la madre; uno solo suele ser nuevo. Traducido: brotan cuatro radículas, tres se frenan y se desvanecen.

**4. El 98% de las flores se cae — y queda una marca.** Menos del 2% llega a fruto cosechable. Pero el detalle que vale oro: en la caída de junio el fruto se desprende en la zona C, entre fruto y cáliz. El cáliz queda en el árbol. Traducido: después de la caída quedan estrellitas verdes vacías por toda la copa. Es el tipo de detalle que nadie puede nombrar pero todos registran.


<figure>
  <img src="/assets/posts/citrus/calyx.jpg" alt="La copa después de la caída, con los cálices vacíos" loading="lazy" decoding="async">
  <figcaption><b>p = 0.68.</b> Las estrellitas verdes son cálices vacíos: el fruto se desprendió en la zona C y el cáliz quedó en la rama. Nadie lo puede nombrar, todos lo registran.</figcaption>
</figure>

**5. La naranja siempre fue naranja.** Las noches frías degradan la clorofila de la cáscara y dejan ver los carotenoides que ya estaban debajo. En clima cálido la fruta queda verde aunque esté perfectamente madura. Traducido: **el color no avanza con el scroll. Avanza un paso por cada noche fría que pasa en la escena.**


<figure>
  <img src="/assets/posts/citrus/colour.jpg" alt="La fruta virando de verde a naranja en la copa" loading="lazy" decoding="async">
  <figcaption><b>p = 0.76.</b> El color no avanza con el scroll: avanza un paso por cada noche fría que pasa en la escena.</figcaption>
</figure>

De yapa, para las hojas: la hoja del cítrico no es simple, es unifoliolada — una hoja compuesta reducida a un solo folíolo, con pecíolo alado y una articulación visible. Más glándulas de aceite que se ven como puntitos translúcidos.

### Intento 4 — El ciclo que se ramifica

La metáfora se estiró hasta cerrar:

| Elemento | Qué representa |
|---|---|
| Naranja | Un proyecto |
| Gajo | Una feature |
| Semilla | Una idea simple |
| El ciclo que se repite | Esa idea puede volver a crecer |

El detalle que hace que cierre: las ideas son un pool compartido entre proyectos. "Write it down" aparece en el *Review checklist* de un proyecto y en el *Audit trail* de otro. No es un bug de contenido — es exactamente la tesis: todo está hecho de las mismas piezas simples, ensambladas distinto.

Y acá nació **el bucle invisible**, que es lo único de esta versión que llegó intacto al final:

El tramo final del scroll (`p` de 0.95 a 1.00) renderiza exactamente los mismos píxeles que el tramo inicial. Al llegar al fondo, el scroll salta a `p − 0.95`. Como el render de ambos tramos es idéntico, el salto no cambia un solo píxel. El usuario baja hasta el final y sin darse cuenta está de nuevo arriba.


<figure>
  <img src="/assets/posts/citrus/diag-bucle.svg" alt="Diagrama del bucle: los tramos inicial y final son idénticos" loading="lazy" decoding="async">
  <figcaption>El salto no cambia un solo píxel porque los dos tramos renderizan lo mismo.</figcaption>
</figure>

Es un truco barato de escribir y carísimo de sostener, y ahí está la gracia: **obligó a que todo lo demás fuera coherente**. Si el cielo no llega exactamente al mismo color con el que arrancó, se ve. Si la semilla no aterriza exactamente donde empieza la vuelta siguiente, se ve. Un final cualquiera te perdona los desajustes del camino; un ciclo no perdona ninguno. Buena parte de las correcciones de la Parte II existen porque el loop las delató.


<figure>
  <div class="fig-pair">
    <img src="/assets/posts/citrus/loop-start.jpg" alt="El principio del recorrido" loading="lazy" decoding="async">
    <img src="/assets/posts/citrus/loop-end.jpg" alt="El final del recorrido" loading="lazy" decoding="async">
  </div>
  <figcaption><b>p = 0.048</b> y <b>p = 0.998.</b> El principio y el final del recorrido. No son la misma imagen —el viento corre contra el reloj y la captura no lo congela— pero el test de identidad sí congela el tiempo, y ahí salen iguales hasta la última llamada de dibujo.</figcaption>
</figure>

En esta versión, la posición del mouse decidía qué fruta y qué gajo se abrían: 15 finales posibles, 3 frutas × 5 gajos. Guardá ese dato. En la Parte II se muere.

---

## Parte II — De la exploración a la pieza

Hasta acá era una exploración: un archivo, cero dependencias, 45 KB. Lo que sigue es convertirla en la home de un sitio real, y ahí la mayoría de las certezas se cayeron.

### La migración: React se queda con la página, el motor con el píxel

| qué | quién |
|---|---|
| Estructura, contenido, orden, accesibilidad | React |
| Etapa, edad, nota, esquema claro/oscuro, acento | React (estado) |
| Opacidad de las bandas, punto del riel, destello | el motor (por referencia) |
| Los 44 000 dibujos por frame | el motor |

**Un frame de canvas no es un árbol de elementos**: es una secuencia de escrituras opacas sobre un contexto, y entre un frame y el siguiente no hay nada que reconciliar. Declararlo en JSX agregaría una capa que no describe nada y cobraría una reconciliación por frame a cambio. Por eso el motor sigue siendo el mismo código imperativo que corría dentro de un `<script>`.

Lo que sí ganó la migración es todo lo que estaba escrito dos veces: los rangos de las bandas dejaron de ser `data-from="0.085"` leído con `querySelectorAll` + `parseFloat`, y la lista accesible de proyectos pasó a salir del **mismo** catálogo que dibuja el canvas. Antes eran dos listas escritas a mano que podían divergir sin que nada avisara: agregar un gajo al dibujo no agregaba nada para un lector de pantalla.

Y `destroy()` no es prolijidad. StrictMode monta, desmonta y vuelve a montar cada componente a propósito: sin él quedan dos bucles de animación peleándose por el mismo canvas desde el primer arranque.

### Darle materia al dibujo

En el mismo pase, tres problemas que sólo se ven mirando, no leyendo código.

**Líneas demasiado perfectas.** Las raíces se trazaban con `lineTo` puro — polilíneas rectas con codos, justo en la fase que narra el hidrotropismo: lo decía el texto y lo desmentía el trazo. El tronco nacía en la vertical exacta, y la curvatura de rama era `sin(ph) * 0.052` pelado, así que cualquier rama con `ph` cerca de un cero quedaba perfectamente recta — y el tronco era una de ésas.


<figure>
  <img src="/assets/posts/citrus/roots.jpg" alt="El sistema de raíces bajo tierra" loading="lazy" decoding="async">
  <figcaption><b>p = 0.28.</b> La raíz siguiendo el gradiente de humedad. Antes se trazaba con <code>lineTo</code> puro: polilíneas rectas con codos, justo en la fase que narra el hidrotropismo.</figcaption>
</figure>

**Textura.** Granulación como alta frecuencia por baja, cada una en su espacio: el grano del papel en pantalla, el cúmulo del pigmento en mundo. Oscurecimiento de borde donde hay mancha que se seca. Peso de línea cargado del lado en sombra. Bordes perdidos hacia la profundidad, que además disuelve la jaula de alambre en que se leían las raíces del fondo.

Y una regla que se respetó a rajatabla: **nada de la variación nueva sale de `r()`**. Toda deriva de `ph`, del índice o de una constante, así que la topología del árbol y de las raíces no se movió ni un milímetro.

### El texto: dos fracasos y una cartela

El texto cae sobre un canvas que cambia de color con la hora del día. No hay un color de tinta que ande sobre el cielo de mediodía **y** sobre la tierra en sombra. Se probaron los dos recursos habituales y los dos fallaron:

- `text-shadow` con halo engorda el contorno de cada letra y ensucia el dibujo de la tipografía, sobre todo en cuerpos grandes.
- el *scrim* —la capa de gradiente que recomienda la práctica establecida para texto sobre imagen— se lee como un difuminado flotando encima del dibujo. Con forma propia y sin ella. No hay ajuste que lo arregle, y la razón es exacta: **no tiene superficie**. Una mancha que se desvanece no es un objeto, y el ojo la registra como error de impresión antes que como fondo.

Lo que sí tiene superficie es una cartela. Una lámina de espécimen no resuelve el texto tapando el dibujo: le da al texto su propia tarjeta de papel, apoyada sobre la hoja. La convención tiene doscientos años y es literalmente el lenguaje de esta pieza. El contraste deja de ser un problema de mezcla y pasa a ser uno de materiales: hay papel, y encima del papel hay tinta.

Tres detalles hacen que se lea como cartela y no como componente de interfaz: sin `border-radius` —una tarjeta de papel se corta con guillotina—, opacidad .97 y no .94 —con seis centésimas el dibujo asoma por dentro y vuelve el problema del difuminado— y grano propio, porque si salen perfectas y lisas sobre una lámina granulada, esa perfección es lo que las delata.

También se fueron Bodoni Moda y Newsreader, por la misma razón que el `text-shadow`: son tipografías de alto contraste de trazo, y sobre un fondo que cambia los trazos finos desaparecen. Entraron Fraunces y Source Serif 4.

### El pase de correcciones (o: cuando se muere la mejor idea)

Todo lo que sigue salió de mirar la pieza corriendo y anotar qué se ve mal. Los diagnósticos son de screenshot ampliado, no de leer código.

**La elección con el mouse se fue.** Sobrevivió una versión entera y era el final del intento 4. El diagnóstico: *no era interacción*. No había forma de saber que existía, no había estado, no había vuelta atrás y el resultado no llevaba a ninguna parte. La reemplaza la vuelta: cada ciclo abre otro proyecto y otro gajo, con un paso que no divide a cinco para que el par no se repita antes de tiempo. El scroll se queda; nunca estuvo en discusión.

En el mismo movimiento se fue `Cue`, el cartel que pedía mover el mouse. **Un cartel que invita a hacer algo que no hace nada es peor que ningún cartel.**

**La copa estaba hueca.** Había una hoja por nodo terminal, y en un árbol de siete niveles todos los terminales están sobre el perímetro: salía una corona de follaje con el esqueleto pelado adentro. Ahora las hojas nacen a lo largo del brote con densidad proporcional a su longitud, y las de sombra van más grandes, más planas y más viejas.


<figure>
  <img src="/assets/posts/citrus/flush.jpg" alt="El árbol joven, todavía sin flores" loading="lazy" decoding="async">
  <figcaption><b>p = 0.38.</b> Juvenil y espinoso. Un cítrico de semilla tarda de tres a siete años en poder florecer — a veces quince.</figcaption>
</figure>

Aun así el centro seguía vacío, y ahí el problema no era de hojas sino de madera: el árbol se abre en abanico, con trece ramas de nivel 3 contra ciento sesenta y una ramitas en el borde. Se agregaron brotes interiores —los que la poda de cítricos llama *chupón* cuando se va de largo— con su propio generador, para que el árbol de siempre no cambiara ni una rama.

**Y acá me corrijo a mí mismo.** En la exploración había declarado una licencia artística: sobrevivían 3 de 46 flores, o sea 6,5%, no el <2% real. Estaba mal el razonamiento, no el número. El 2% de cuaje es sobre las flores reales del árbol, que son miles; aplicárselo a las cuarenta y seis dibujadas es **contar dos veces la misma poda**. Ahora son nueve frutos, y no hay licencia que declarar.

**El clímax tenía tres saltos, cada uno por su causa:**

- La naranja del árbol seguía dibujándose mientras la fase interior pintaba otra encima.
- El pelado tenía un escalón de tono recto cruzando la fruta: la misma superficie continua se sombreaba con dos modelos, el degradado esférico abajo de la línea de pelado y la incidencia arriba.
- Entre la fruta pelada de perfil y el rosetón de carpelos había dos proyecciones distintas empalmadas por opacidad. La relación entre esas dos vistas es una rotación de 90° sobre el eje horizontal, así que se dibuja: los tabiques del albedo terminan siendo los mismos radios que separan los carpelos, y cuando el albedo se abre ya no queda nada que empalmar.

**Y el bucle perdió el destello.** Había un flash blanco tapando la costura, y tapar el corte era perder lo único que la pieza quiere decir. Ahora la semilla que se suelta del gajo viaja y aterriza exactamente donde arranca la vuelta siguiente: misma posición, mismo tamaño, misma rotación. Para eso hubo que igualar la última parada del ciclo de cielo con la primera — esa diferencia de quince niveles de luma sobre la superficie más grande del cuadro era lo que el destello estaba tapando.

### El pelado, de verdad

La versión anterior movía ocho sectores de anillo hacia afuera. Funcionaba como reparto de una torta: la piel no se rompía, no se doblaba y nunca mostraba su lado de adentro.

Ahora hay una **línea de pelado** que baja por la fruta. Debajo, la piel sigue pegada y está exactamente sobre la esfera. Arriba está libre: sale por la tangente y sigue un arco de curvatura constante cuya longitud es exactamente la piel ya soltada, así que no se estira ni se encoge. La proyección ortográfica de un gore visto de costado es literalmente `x = u·sen ψ`, `y = −v`: el par `(u, v)` que la deformación calcula en el plano meridiano **ya es el dibujo**. Lo único que hace falta agregar es el orden de pintado por `z`.


<figure>
  <img src="/assets/posts/citrus/peel.jpg" alt="La naranja a medio pelar, con las tiras de cáscara levantadas" loading="lazy" decoding="async">
  <figcaption><b>p = 0.856.</b> Debajo de la línea de pelado la piel sigue exactamente sobre la esfera. Arriba sale por la tangente y sigue un arco cuya longitud es exactamente la piel ya soltada: no se estira ni se encoge.</figcaption>
</figure>

Después la cáscara **cae** —no se desvanece— y el albedo se **abre desde el centro** —tampoco se desvanece—. Las dos cosas por la misma razón: bajar el alpha delata las costuras internas, y un velo blanco al 50% sobre la pulpa manda los naranjas al gris justo en el frame más importante de la pieza.

Y el albedo no se abre con un agujero circular: se **rasga por los tabiques**, que es por donde la fruta ya venía dividida. Con hilos, además, porque el albedo es una red de células con bolsones de aire, no una membrana: no se separa por una línea, se separa en hebras que cruzan la abertura y se cortan de a una.

### Performance: medir antes de escribir

La pieza se adapta a la máquina en vez de asumir una.

- **Calibración al arranque**: dibuja 420 hojas sobre un lienzo de descarte, antes del primer cuadro, y mide el costo por *orden*. El costo por *píxel* no se puede medir desde el hilo principal —rellenar la pantalla tres veces mide cero, lo rasteriza la placa— así que ahí va un techo aritmético y no un pronóstico inventado.
- **Vigilante**: cuenta cuadros perdidos sobre ventana por reloj, no promedio corrido. Cede resolución primero, ralea la copa después. Nunca vuelve a subir: bajar y subir hace latir la copa.
- **LOD por fracción de hojas y no por umbral**: las 1254 hojas cruzan el umbral juntas, así que subirlo apagaría la nervadura de toda la copa de un cuadro al otro. Lo caro de la hoja es la lámina, no la nervadura (12,8 ms contra 3,1 en silueta), así que la rebaja aplana en vez de quitar detalle.

Y un descarte exacto, que no es rebaja de calidad: las raíces se dibujaban con el suelo fuera de cuadro, 10,6% del cuadro en `p` 0.60.

| Recorrido completo | cuadros pasados de presupuesto |
|---|---|
| 1440×900 libre | 0,3% → 0,0% |
| 2560×1440 | 6,8% → 0,5% |
| 1440×900 con CPU 4× | 12,7% → 5,5% |

---

## Parte III — La pieza suena

Todo sintetizado: **no entra un solo archivo de audio**, igual que no entra una sola imagen. Un banco de samples habría sido el único insumo externo de la obra.

La restricción de fondo es la misma que la del dibujo, y acá cuesta más caro equivocarse: **la pieza no corre en tiempo, corre en scroll**. El lector es el cabezal — va, vuelve, para en seco o se come tres etapas — así que no hay track lineal posible. De ahí salen las dos reglas: `p` mueve un estado y nunca un cabezal, y nada se genera por sample en vivo (el ruido se hornea una vez en un buffer y lo loopea el audio thread; el main ni se entera).

### La puerta

Un `AudioContext` creado antes de un gesto de usuario nace suspendido, y el scroll no cuenta como gesto en Chrome. La restricción técnica y la decisión de diseño apuntan al mismo lado: un toggle flotando en una esquina es un accesorio pegado a la pieza; **una puerta es la pieza empezando**.

### Las camas

Cuatro capas continuas de ruido horneado —tierra, aire, insectos, noche— con la ganancia y el filtro colgados de `p`. El ancho de banda del viento sale del tamaño de la copa: la misma curva que engorda el árbol abre el filtro. El reverb es una respuesta al impulso sintetizada y va como envío, no como insert, para que la tierra suene seca y el aire mojado.

### La música

Un piano eléctrico que repite un motivo con su firma rítmica mientras la armonía debajo cambia, que es el método de *Music for Nine Post Cards* de Hiroshi Yoshimura. El motivo se guarda en **grados del acorde** y no en notas, así que la misma figura cae sobre cualquier acorde.

Rhodes y no piano de cola por honestidad: un acústico creíble son doce o dieciséis parciales inarmónicos por nota más resonancia simpática; un Rhodes son tres osciladores, y es el instrumento del disco. Los picos y valles salen de dos arcos de largos inconmensurables, y el pico dinámico cae sobre el armónico a propósito.

### Los hechos del mundo: de evento a estado

Esta es la corrección más grande de toda la pieza, y es la misma lección que el caché del intento 1, en otro dominio.

La primera versión disparaba un sonido al cruzar un umbral, y corría contra el reloj del audio. Una vez lanzado ya no le importaba dónde estaba el lector. Scrolleando despacio terminaba y el resto de la animación quedaba muda; scrolleando rápido quedaba atrás; y volviendo para atrás no sonaba nada. **Un disparo no tiene marcha atrás.**

Ahora una transformación no es un evento: es un **estado**. Catorce capas cuya ganancia sale de cuánto se está moviendo la cosa en este instante. Si el lector frena, la fibra sigue cediendo medio segundo y muere sola. Si vuelve, suena igual — la cáscara volviéndose a poner hace el mismo ruido que la cáscara abriéndose, porque es la misma fibra rozando.


<figure>
  <img src="/assets/posts/citrus/diag-audio.svg" alt="Diagrama comparando sonido por evento contra sonido por estado" loading="lazy" decoding="async">
  <figcaption>El mismo error que el caché de bitmaps, en otro dominio: modelar como instantáneo algo que el usuario controla de forma continua.</figcaption>
</figure>

Para eso el motor tuvo que aprender a contar cuánto se mueve cada cosa: `sig` pasó de diez señales a quince. Las dos interesantes son `bud` y `leaf`, porque no son el tamaño del árbol sino **cuánta actividad hay ahora mismo**. Se calculan con ocho pasos por frame, uno por nivel de profundidad, en vez de recorrer las mil doscientas ramas.

Dos detalles que hacen que funcione:

- **La velocidad se normaliza por el largo de cada transformación.** La raíz tarda 0.59 de `p` en crecer y la fruta 0.018: con el mismo scroll, la señal de la fruta se mueve treinta veces más rápido. Sin corregirlo, el pelado revienta y la raíz no se oye.
- **Se usa la derivada de cada señal y no la del scroll**, porque las curvas de crecimiento tienen mesetas. Y acá cierra el círculo con la Parte I: el cítrico crece de raíz **o** de brote, nunca los dos, así que **las dos capas de sonido se turnan solas sin que nadie lo programe**. La fisiología que dio las curvas de easing terminó dando también la mezcla.

### El timbre, que era lo que ensuciaba

- Cada grano lleva una **ventana de Hann**. Antes atacaban con una rampa de cuatro milisegundos, o sea casi un escalón, y un escalón tiene espectro plano: cien de esos por segundo no suenan a hojas, suenan a ruido blanco.
- Los granos son **resonadores de Q alto** y no bandas anchas. Q bajo es viento, y Q bajo en el grave es un trueno — que es literalmente lo que era la naranja acercándose.
- Los tamaños siguen una **ley de potencias**, como cualquier cosa que cruje. Parejos, cien granos suenan a una máquina repitiendo cien veces lo mismo.
- Las texturas se **afinan al acorde** que el piano está tocando, así que el mundo deja de competir con la armonía y pasa a formar parte de ella. El pelado y el albedo quedan sin afinar a propósito: una cáscara rompiéndose no tiene altura musical, y ese contraste es lo que las hace leer como hechos.

Los niveles se calibraron midiendo cuánto despega cada capa por encima del fondo, no a oído. Tres estaban por debajo.

---

## Parte IV — Que sea el portfolio de verdad

El texto de relleno se fue. Los seis frutos con nombre de la copa **son** los seis proyectos publicados, y salen del mismo array que dibuja el canvas: nombre, stack, gajos y URL del repo. Cuántos frutos cuelga el árbol se deriva de `PROJECTS.length`, así que agregar un proyecto es editar ese array y nada más.

El trabajo diario no está entre los frutos, a propósito. No es algo que se corta y se abre; es el árbol que se sigue cuidando. Vive en la banda *Currently*.

Y cada gajo aprendió a explicarse: al apoyar el puntero sobre un carpelo, la lámina escribe al pie qué es esa pieza del proyecto, letra por letra, con el sangrado de la tinta antes del trazo. Entre un gajo y otro el pincel se levanta: el texto viejo se retira, hay un hueco, y recién ahí empieza el nuevo.


<figure>
  <img src="/assets/posts/citrus/carpels.jpg" alt="Los gajos de la naranja separados y rotulados con las features del proyecto" loading="lazy" decoding="async">
  <figcaption><b>p = 0.93.</b> La metáfora hecha dibujo: la naranja es un proyecto, cada gajo una feature. Los rótulos salen del mismo array que dibuja el canvas.</figcaption>
</figure>

Tres decisiones que valen más que el efecto:

- **El sondeo del puntero no pasa por el evento.** El evento guarda dos números; el cuadro decide qué gajo está señalado, con la geometría que acaba de dibujar y leída de la matriz del contexto. Una cuenta paralela se desincroniza en silencio, y un área sensible desincronizada responde donde no hay nada.
- **Señalado no es elegido.** El señalado sólo se aclara; el elegido conserva su pulpa. Compartir el color prometía una apertura que el hover no hace.
- **El puntero no decide.** Pregunta. La elección sigue saliendo de la vuelta, no del mouse — la lección del pase de correcciones no se deshizo para meter un efecto lindo.

### Accesibilidad

El canvas es `aria-hidden` y una cartela apagada está en `visibility: hidden`, así que sin un bloque de texto paralelo un lector de pantalla encuentra sólo la banda encendida y un buscador no encuentra nada. `TextIndex` es la versión leíble de la página entera, y las glosas de los gajos viven una sola vez, en el catálogo, usadas por las dos superficies.

### La tarjeta social

`og.jpg` **no es un mockup**. Es un cuadro real del canvas en `p = 0.78` —viraje de color, de noche, con el árbol cargado y la raíz a la vista— con el título inyectado como DOM y fotografiado junto con el dibujo. Por eso usa las mismas fuentes que la pieza y no una aproximación que se desalinea sola la primera vez que alguien toca la tipografía.

Es manual a propósito: treinta segundos que se pagan una vez por cambio, contra montar un navegador en cada `build`.

### El teléfono

Un teléfono parado no tiene márgenes, y la pieza estaba compuesta como una lámina: el dibujo en el medio, las cartelas en los márgenes. Una cartela con medida de lectura ocupa el ancho **entero** de 390 px, así que el texto no iba al costado del dibujo: le caía encima.

Se reparte por alto, que es lo único que un teléfono tiene de sobra: el dibujo arriba, el texto abajo. Y para eso **el dibujo deja el lugar en vez de pelearlo** — un solo punto de entrada, `reframe()`, con el ancla vertical del mundo, un multiplicador de escala aplicado una sola vez, y la franja donde vive el texto.

Y sobre una franja que la cámara deja vacía a propósito **no hay dibujo que tapar**: el papel deja de hacer falta y el contraste lo resuelve el mismo viraje claro/oscuro que ya mantiene legibles la marca y la navegación. La solución del desktop no era universal; era una respuesta a una pregunta que en vertical no existe.

El reencuadre destapó dos bugs que llevaban meses escondidos:

- El view box se derivaba del centro de la pantalla y no del ancla. Al subir el ancla quedaba corto por abajo y la tierra terminaba antes que la pantalla: **se veía cielo debajo del suelo.**
- La pista de scroll no se iba nunca. `animation: ... both` retiene su estado final para siempre y le ganaba a la clase de salida: sin transición no hay `transitionend`, y el nodo quedaba montado.

Y la deuda de scroll quedó acotada. Con un dedo, el scroll es un envión y el navegador sigue solo: un salto de 20.000 px dejaba la pieza reproduciéndose sola 6,8 s después de soltar. Ahora 3,8 s.

### El despliegue

La pieza es la puerta de entrada del dominio: se queda con la raíz y le pasa todo lo demás —`/blog`, `/projects`, `/resume`— al sitio de Astro, que vive en su propio repo y su propio proyecto de Vercel. Una sola regla:

```json
{ "source": "/:path+", "destination": "https://<alias>/:path+" }
```

`:path+` exige **al menos un segmento**. Por eso `/` se queda del lado de la pieza y todo lo demás cae del otro, sin enumerar rutas: un post nuevo en el blog funciona sin tocar ese archivo.

Y la dirección no es intercambiable. Vercel resuelve el **filesystem antes que los rewrites**, así que si el dominio se lo quedara Astro, un rewrite de `/` hacia la pieza no dispararía nunca: su `index.html` existe y gana. **El que sirve la raíz tiene que ser el dueño del dominio.**

---

## Cómo testear una animación sin abrir el navegador

Una animación de canvas parece imposible de testear sin ojos. No lo es. Se puede simular el contexto en Node y capturar la secuencia completa de llamadas de dibujo:

```js
const ctx = new Proxy({}, {
  get(t, k) {
    return (...args) => log.push(k + '|' + args.join(','));
  }
});
```

Con eso corren cinco tests. Los tres originales:

1. **Identidad del bucle.** Congelo el tiempo, activo `prefers-reduced-motion` para que el render sea función pura de `p`, y comparo la secuencia de llamadas en seis pares de posiciones espejadas. Idénticas, hasta la última llamada. El bucle es invisible **por construcción, no por suerte**.
2. **Barrido completo.** 2400 frames de punta a punta. Detecta errores de runtime en cualquier posición del scroll y mide el costo. Encontró un crash real: un array de buckets dimensionado a 7 cuando las raíces llegaban a profundidad 8.
3. **Ramificación.** Verificar que el final ramifica de verdad.

Y una cosa que cambió: **la pieza dejó de ser función sólo de `p`**. Cuál proyecto se abre depende de cuántas vueltas llevás, y eso es deliberado. El test de arrastre pasó a comparar dos instancias con la misma cantidad de vueltas **por caminos distintos** —que es donde seguiría apareciendo cualquier arrastre accidental— y verifica la rotación aparte. El test de ramificación probaba el mouse; ahora prueba que la idea que se lleva cada vuelta es exactamente la primera semilla del gajo que abrió.

Cuando cambia el diseño, el test no se borra: se le cambia la pregunta.

---

## Lo que aprendí

**El caché fue una optimización prematura que costó una versión entera.** Y su gemelo en audio —el disparo por umbral— costó otra iteración completa. Las dos veces el error fue el mismo: modelar como instantáneo algo que el usuario controla de forma continua.

**Los diagnósticos de screenshot ampliado encuentran cosas que leer código no encuentra.** Casi todos los defectos del dibujo tenían una causa geométrica que no se deduce del fuente.

**Medir antes de ajustar.** Las tres naranjas del intento 4 estaban al 40%, 44% y 59% del ancho de pantalla: la elección por mouse era físicamente imposible, y sin medir lo hubiera ajustado a ojo tres veces. Lo mismo con el árbol contra el encuadre, y con los niveles de audio contra el piso de ruido.

**Si vas a torcer un dato por legibilidad, decilo en la pieza, no en el post.** Y antes de declarar la licencia, revisá si el número estaba mal aplicado — el 2% de cuaje resultó ser eso.

**Un cartel que invita a hacer algo que no hace nada es peor que ningún cartel.**

---

## Números

| medida | valor |
|---|---|
| Nodos del árbol | 396 |
| Nodos de raíz | 732 |
| Hojas en la copa | 1254 |
| Ramitas en el borde | 161 |
| Sitios florales → frutos | 46 → 9 |
| Señales que publica el motor | 15 |
| Capas de sonido por estado | 14 |
| Noches del ciclo | 8 |
| Dibujos por frame | ~44 000 |
| Archivos de imagen | 0 |
| Archivos de audio | 0 |

---

## La tesis

**La restricción del tema es una fuente de diseño, no un límite.**

No inventé cómo debía crecer el árbol: lo leí. Los pulsos alternados, la caída del 98%, el cáliz que queda, el color que ya estaba ahí. Cada hecho resolvió una decisión de diseño que, de otro modo, hubiera tenido que tomar a ojo — y la hubiera tomado peor. La alternancia raíz/brote de la fisiología del cítrico terminó siendo, a la vez, mi curva de easing y mi automatización de mezcla. Eso no se me ocurre a mí.

Y la otra tesis, la que estaba desde antes de la primera línea de código: **un sitio personal puede ser un lugar y no un tablero.** Toda esta máquina —las curvas copiadas de la fisiología, los granos con ventana de Hann, las cartelas de papel, el reencuadre del teléfono— existe para una sola cosa, que es que recorrerla dé gusto. Cada vez que la técnica y la sensación se pelearon, ganó la sensación. El bitmap era más rápido y perdió. El disparo por umbral era más simple y perdió. El destello tapaba la costura y perdió.

El objetivo de la pieza es simple: que alguien llegue al fondo de la página, se dé cuenta de que volvió al principio, y suba de nuevo. Que se lleve la idea de que nada de esto está terminado — ni el árbol, ni el sitio, ni el trabajo. Una semilla nunca es lo que tenés hoy.
