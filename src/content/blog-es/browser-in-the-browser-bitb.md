---
title: "Browser in the Browser (BitB): cuando la ventana de login es parte del ataque"
description: "Hace años que nos enseñan a mirar la URL antes de escribir nuestras credenciales. Los ataques Browser in the Browser explotan un problema sutil de ese consejo: ¿y si la barra de direcciones que estás mirando también es falsa?"
publishedAt: 2026-08-25
updatedAt: 2026-08-25
featured: false
tags:
  - security
  - phishing
  - authentication
  - passkeys
---

La mayoría de las páginas de phishing intentan imitar un sitio legítimo.

Copian el logo, los colores, la tipografía, los formularios, los botones y la disposición general de servicios que ya conocemos. Pero tradicionalmente hubo una parte especialmente difícil de falsificar para el atacante: **el navegador mismo**.

Podés clonar una página de login, pero la barra de direcciones real del navegador sigue diciéndole al usuario dónde está parado de verdad.

Browser in the Browser, que suele abreviarse **BitB**, cambia eso.

En lugar de clonar solamente un sitio, el atacante crea algo que **parece una ventana de navegador aparte dentro de la propia página web**, con su barra de título, sus controles, su candado y —lo más importante— una barra de direcciones convincente que muestra un dominio de aspecto legítimo.

La trampa es simple:

**Nada de esa interfaz pertenece al navegador. Es parte de la página web.**

<figure>
  <img src="/assets/posts/browser-in-the-browser/overview.jpg" alt="Diagrama de un ataque Browser in the Browser: una ventana de login falsa dibujada dentro de una página maliciosa" loading="lazy" decoding="async">
  <figcaption>Un ataque BitB crea una ventana de autenticación falsa dentro de una página maliciosa. Incluso la barra de direcciones que se ve dentro de esa ventana puede ser parte del engaño.</figcaption>
</figure>

## ¿De dónde salió Browser in the Browser?

La técnica se hizo conocida en marzo de 2022, cuando el investigador de seguridad **mr.d0x** publicó una demostración que mostraba cómo recrear los popups de autenticación habituales del navegador usando tecnologías web comunes.

La idea resultó especialmente efectiva porque los usuarios ya están familiarizados con esa interacción.

Pensá en la frecuencia con la que ves botones como:

- **Continuar con Google**
- **Iniciar sesión con Microsoft**
- **Iniciar sesión con Apple**
- **Conectar tu cuenta**
- **Autorizar esta aplicación**

Al hacer clic en uno de esos botones, muchas veces se abre una ventana de autenticación más chica.

Nos entrenaron para confiar en ese patrón.

Los ataques BitB explotan esa expectativa.

El atacante no necesita comprometer al proveedor de identidad real ni explotar una vulnerabilidad en Chrome, Firefox, Safari o Edge.

Simplemente hace que la página web **parezca haber abierto un popup de autenticación legítimo**.

Esa distinción es importante.

## BitB no es una vulnerabilidad del navegador

A pesar del nombre, Browser in the Browser no suele ser un exploit contra el navegador.

No hace falta ejecución remota de código, ni un escape del sandbox, ni un zero-day, ni malware instalado en la máquina de la víctima.

Es, ante todo, una **técnica de phishing e ingeniería social**.

El navegador hace exactamente lo que tiene que hacer: renderizar HTML, CSS, imágenes, frames y JavaScript.

El ataque funciona porque algunos de esos elementos están diseñados para imitar la interfaz del propio navegador.

Dicho de otro modo, la vulnerabilidad que se explota es, en gran medida, **nuestra confianza visual en la interfaz del navegador**.

## ¿Cómo funciona un ataque BitB?

Un ataque típico se puede reducir a unas pocas etapas.

### 1. La víctima llega a un sitio señuelo

Primero, el atacante necesita que la víctima visite un sitio que él controla.

Eso puede pasar por un mail de phishing, un mensaje directo, un anuncio en un buscador, una página de descarga falsa, una publicación en redes o prácticamente cualquier otro mecanismo capaz de entregar un enlace.

El sitio inicial no tiene por qué parecer obviamente malicioso.

Puede imitar una aplicación legítima, un servicio para compartir documentos, un portal corporativo, un sorteo, una página de inscripción a un evento o un producto SaaS.

### 2. El sitio le pide a la víctima que se autentique

En algún momento la página muestra algo familiar:

**Iniciá sesión con tu cuenta.**

Por ejemplo, la página puede afirmar que hace falta autenticarse con un proveedor de identidad externo antes de acceder a un documento.

El usuario hace clic en el botón.

Normalmente, ahora el navegador crearía un popup de autenticación real.

Pero en un escenario BitB no hace falta que aparezca ninguna ventana de autenticación real.

### 3. El sitio dibuja una ventana de navegador falsa

La página crea una interfaz que visualmente se parece a un popup de navegador aparte.

Puede incluir:

- bordes de ventana;
- botones de cerrar, minimizar y maximizar;
- una barra de herramientas al estilo del navegador;
- un ícono de candado;
- una barra de direcciones;
- el dominio esperado del proveedor de autenticación;
- un formulario de login realista.

El HTML y el CSS modernos hacen que reproducir estos elementos sea sorprendentemente fácil.

JavaScript agrega realismo: permite mover la ventana por la página, hacerla aparecer con animaciones, reaccionar a los botones o comportarse de forma parecida a un popup real.

Y lo más importante: el atacante controla la barra de direcciones que se muestra dentro de esa ventana.

Podría mostrar algo tranquilizador como:

`https://login.example.com`

mientras la pestaña real del navegador sigue estando en:

`https://sitio-controlado-por-el-atacante.example`

La primera dirección existe solo visualmente.

Es texto y gráficos renderizados por la página web.

### 4. La víctima escribe sus credenciales

Si la ventana de autenticación falsa es lo bastante convincente, la víctima escribe su usuario y su contraseña.

Esas credenciales se están ingresando en un formulario controlado por el atacante, no en el proveedor de identidad legítimo.

Desde la perspectiva de la víctima, casi todo puede parecer normal.

Desde la del atacante, la página de phishing hizo su trabajo.

### 5. El atacante usa la información capturada

Las credenciales se pueden usar después contra el servicio legítimo.

Según el ataque y el método de autenticación involucrado, el flujo de phishing también puede intentar obtener información adicional, como un código de un solo uso.

Por eso vale la pena hacer una distinción importante:

**BitB por sí solo no evade mágicamente la autenticación multifactor.**

Es el mecanismo de engaño visual.

Se le pueden combinar otras técnicas de phishing para pedir contraseñas, códigos OTP u otra información.

<figure>
  <img src="/assets/posts/browser-in-the-browser/how.jpg" alt="Las tres etapas de un ataque BitB: sitio señuelo, popup falso dentro de la página y robo de credenciales" loading="lazy" decoding="async">
  <figcaption>La víctima nunca interactúa con la ventana de login legítima. El aparente popup del navegador, incluida su barra de direcciones, lo renderiza la página del atacante.</figcaption>
</figure>

## ¿Por qué esta técnica es tan convincente?

Lo interesante de BitB no es su complejidad técnica.

Es cómo se aprovecha de un hábito de seguridad que normalmente es un muy buen consejo:

> Revisá el dominio antes de escribir tu contraseña.

El problema es que la víctima puede creer que **está** revisando el dominio.

Ve un candado.

Ve el nombre correcto de la empresa.

Ve lo que parece ser la URL de autenticación correcta.

Todo se ve bien.

Pero está inspeccionando una imitación del navegador, no el navegador.

Esto se vuelve especialmente peligroso con flujos de autenticación tipo OAuth y SSO, porque los usuarios ya esperan que la autenticación ocurra en un popup.

Que aparezca una segunda ventana después de hacer clic en **Iniciar sesión con...** no se siente sospechoso.

Se siente normal.

## El ataque sigue vigente

BitB no es solamente una prueba de concepto interesante de 2022.

La técnica sigue apareciendo en operaciones de phishing reales.

A fines de 2025, investigadores de seguridad que analizaban **Sneaky2FA**, una operación comercial de Phishing-as-a-Service, observaron funcionalidad BitB incorporada en sus páginas de phishing.

Eso importa porque el Phishing-as-a-Service baja drásticamente la barrera de entrada.

Los atacantes ya no necesitan diseñar cada componente de una campaña. Los kits pueden proveer infraestructura, plantillas, mecanismos de evasión, recolección de credenciales e interfaces cada vez más sofisticadas.

Así, técnicas que antes aparecían sobre todo en investigación de seguridad terminan siendo funcionalidades empaquetadas al alcance de atacantes mucho menos sofisticados.

## ¿La autenticación multifactor detiene BitB?

Depende del tipo de autenticación.

Los métodos tradicionales de MFA, como los códigos por SMS o los códigos TOTP de una app autenticadora, siguen siendo piezas de información que el usuario puede llegar a escribir en una página de phishing.

El atacante puede, entonces, diseñar un flujo de autenticación falso que se los pida.

Eso **no** significa que BitB derrote automáticamente a MFA, pero sí que el MFA convencional no elimina del todo el phishing.

Una defensa mucho más fuerte es la **autenticación resistente al phishing**, en particular las tecnologías basadas en WebAuthn/FIDO2 y passkeys.

Estos mecanismos están atados al origen del sitio legítimo.

Una passkey creada para un servicio legítimo no puede ser usada, sin más, por un dominio de phishing que se hace pasar por ese servicio.

La apariencia visual de la página falsa pasa a ser mucho menos relevante, porque el mecanismo criptográfico de autenticación mira el dominio real, no el dominio dibujado en la pantalla.

Esta es una de las razones por las que empresas como Microsoft recomiendan cada vez más la autenticación resistente al phishing para cuentas sensibles.

## ¿Cómo detectar un ataque Browser in the Browser?

No hay un único truco visual que exponga toda implementación de BitB, sobre todo a medida que mejora la calidad de las páginas de phishing.

Pero hay varias señales útiles.

### Probá interactuar con la supuesta interfaz del navegador

Acordate de que la barra de direcciones dentro de una ventana BitB no es realmente una barra de direcciones.

Según la implementación, puede que no puedas:

- seleccionar su URL;
- poner el cursor adentro;
- abrir el menú del navegador;
- interactuar normalmente con los controles de la ventana.

El atacante puede simular algunas de estas interacciones, pero eso le exige trabajo adicional.

### Movés el popup más allá de la página

Un popup falso normalmente existe dentro de los límites de la página que lo creó.

Si lo arrastrás, puede comportarse raro cerca del borde del área de contenido del navegador.

Una ventana real del sistema operativo puede existir con independencia de la página original.

Un elemento del DOM simulado no puede salir genuinamente de su viewport.

No es una prueba perfecta —el atacante puede simular el movimiento de forma muy convincente— pero un comportamiento inesperado es una señal de alerta.

### Prestá atención a tu gestor de contraseñas

Los gestores de contraseñas conocen el origen real del sitio.

Si normalmente recibís la sugerencia de autocompletado para un servicio y de repente tu gestor no reconoce una página de login supuestamente idéntica, eso merece atención.

No lo tomes como prueba por sí solo, pero sí como una razón fuerte para verificar lo que estás viendo.

### Preguntate por qué te estás autenticando

El contexto sigue siendo una de las defensas más poderosas contra el phishing.

¿Iniciaste vos este login?

¿Por qué este sitio necesita tu cuenta?

¿Estabas esperando un pedido de autenticación?

¿Llegaste por un mail, un anuncio, un código QR, un mensaje directo o un enlace inesperado?

Una página de login perfectamente diseñada puede tener igual un motivo de existir completamente inverosímil.

### Abrí el servicio vos mismo

Si algo te resulta sospechoso, no sigas investigando el popup.

Cerrá la página.

Abrí una pestaña nueva y navegá manualmente al servicio que querías usar, preferentemente desde un marcador o un dominio que ya conocés.

Eso saca de la ecuación a la página controlada por el atacante.

<figure>
  <img src="/assets/posts/browser-in-the-browser/detect.jpg" alt="Señales de alerta y buenas prácticas frente a los ataques Browser in the Browser" loading="lazy" decoding="async">
  <figcaption>La inspección visual sola no alcanza. La navegación independiente, el gestor de contraseñas y la autenticación resistente al phishing dan señales mucho más fuertes que una interfaz de login convincente.</figcaption>
</figure>

## Una lección sutil sobre seguridad en el navegador

BitB pone de relieve algo más amplio que una técnica de phishing.

Solemos tratar elementos visuales como si fueran límites de seguridad.

El candado significa seguro.

El logo familiar significa legítimo.

El popup de login significa autenticación.

La barra de direcciones significa identidad.

Pero en la web moderna, un atacante puede reproducir casi cualquier elemento visual que exista dentro de una página.

Los píxeles son baratos.

La confianza, entonces, tendría que venir de cosas que el atacante no puede reproducir fácilmente.

El origen real del navegador.

Un gestor de contraseñas que reconoce el dominio correcto.

Una passkey atada criptográficamente al servicio legítimo.

Un pedido de login que iniciaste vos a propósito.

Una URL que abriste por tu cuenta y no una que te llegó.

Estas señales son bastante más fuertes que un logo, un candado o un marco de ventana convincente.

## La defensa más simple

Hay una regla muy práctica que protege contra BitB y contra muchas otras técnicas de phishing:

**Cuando un sitio te pide inesperadamente que te autentiques con una cuenta importante, no uses la ventana de login que te ofrece.**

En su lugar:

1. abrí una pestaña nueva;
2. navegá por tu cuenta al servicio legítimo;
3. confirmá si realmente hay algo que requiera tu atención.

Para cuentas de alto valor, usá passkeys u otro método de autenticación resistente al phishing siempre que esté disponible.

Porque, en el fondo, los ataques Browser in the Browser tienen éxito convenciéndonos de confiar en algo que apenas **parece** una interfaz de seguridad.

Y esa es la parte más interesante de la técnica.

El atacante no necesita comprometer el navegador.

Solo necesita convencernos de que un pedazo de la página **es** el navegador.

## Para seguir leyendo

- **[mr.d0x — "Browser In The Browser (BITB) Attack"](https://mrd0x.com/browser-in-the-browser-phishing-attack/)** — la investigación de marzo de 2022 que popularizó la técnica.
- **[Sophos — "Browser-in-the-browser attacks: watch out for windows that aren't!"](https://www.sophos.com/en-us/blog/serious-security-browser-in-the-browser-attacks-watch-out-for-windows-that-arent)** — una explicación técnica accesible de por qué funciona el engaño.
- **[Push Security — "Analyzing the latest Sneaky2FA Browser-in-the-Browser phishing page"](https://pushsecurity.com/blog/analyzing-the-latest-sneaky2fa-phishing-page)** — análisis de la funcionalidad BitB observada en un kit moderno de Phishing-as-a-Service.
- **[Microsoft — Digital Defense Report 2024](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/final/en-us/microsoft-brand/documents/Microsoft%20Digital%20Defense%20Report%202024%20%281%29.pdf)** (PDF) — contexto sobre autenticación resistente al phishing, FIDO2, WebAuthn y passkeys.
