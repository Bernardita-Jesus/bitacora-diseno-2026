# Guía de mi aprendizaje con los sintetizadores

Apuntes en proceso de registro de mi investigación sobre lo que considero necesario comprender y expresar.

Como contexto, provengo de la disciplina del diseño industrial. Los sintetizadores fueron lo que me acercó al mundo del arte sonoro. Esta motivación surgió a raíz de mi curso de Máquinas Electrónicas, donde realizábamos proyectos con circuitos y sensores que producían sonido y como parte de las tareas, investigábamos sobre sintetizadores, su historia, álbumes y artistas.

Esta pasión llegó en un momento en que necesitaba conectar con algo que me acompañara y me ayudara a entenderme. La adopté como un acto de resistencia, un espacio donde podía crear y escuchar con atención cosas de mí misma.

Estos apuntes nacen desde ese proceso de aprendizaje. No buscan ser un manual técnico exhaustivo, sino registrar aquello que desde mi experiencia, considero necesario comprender para comenzar a utilizar un sintetizador sin sentirse abrumado. Son una recopilación de conceptos, observaciones y formas de aproximarse al instrumento que me han ayudado a entender cómo funciona y a disfrutar el proceso de explorarlo.

Más que explicar todas las posibilidades del sintetizador, este registro reúne las bases que me permitieron comenzar a utilizarlo.

## ¿Qué es un sintetizador?

Un sintetizador es un instrumento electrónico que genera, procesa y modifica señales eléctricas a través de distintos módulos para convertirlas en sonido. Cada módulo cumple una función específica, algunos generan el sonido, otros lo modifican, otros controlan su volumen o hacen que cambie con el tiempo. Al combinar estos módulos es posible obtener una enorme variedad de resultados sonoros.

Primero que nada, me parece sensato expresar que los sintetizadores tienen muchísimas funciones. Puede llegar a ser agobiante comprender la profundidad de su funcionamiento, pero no es necesario entenderlo todo para disfrutar y jugar con un sinte. Gran parte del aprendizaje consiste en mover perillas, escuchar qué cambia y comenzar a relacionar cada control con el resultado que produce.

![foto](./../recursos/is-sintes.jpeg)

### Rutas de conexión

Los sintetizadores son máquinas que modifican señales, en un comienzo, todos eran modulares. Esto quiere decir que las funciones con las que podían alterar estas señales, como el oscilador, el filtro o el secuenciador, existían en módulos independientes que debían conectarse mediante cables.

Esto permite personalización y control de cada componente, creando rutas de señal. Actualmente, estas conexiones también pueden estar preestablecidas, como ocurre en los sintetizadores de arquitectura fija, que cuentan con un cableado integrado.

Por último, también existen los sintetizadores semimodulares, que poseen rutas de conexión preestablecidas e integradas, pero además incluyen un patch panel, que es un panel de conexiones que permite utilizar cables para modificar estas rutas y crear diversos resultados.

Entonces, como mencioné, existen tres tipos principales: los modulares, los de arquitectura fija (o tradicionales) y los semimodulares.

### Analógico o Digital

Tenemos lo que son las **señales analógicas** y las **señales digitales**, entendiendo las señales como información que se traslada.

Las señales analógicas varían de manera continua y pueden tomar infinitos valores dentro de un rango. En cambio, las señales digitales están compuestas por valores definidos, representados mediante números, por lo que la información se almacena y procesa en pasos específicos.

A partir de esta diferencia, un sintetizador analógico genera y procesa el sonido mediante circuitos electrónicos que trabajan con señales continuas. Por otro lado, un sintetizador digital genera y procesa el sonido mediante cálculos realizados por un procesador, representando la señal como información digital.

### Monofónico y Polifónico

Los sintetizadores pueden clasificarse como **monofónicos** o **polifónicos** según la cantidad de notas que pueden reproducir al mismo tiempo.

Un sintetizador monofónico solo puede emitir una nota a la vez. Aunque puede generar sonidos complejos mediante múltiples osciladores, todas las frecuencias se organizan en torno a una única nota.

Por otro lado, un sintetizador polifónico puede reproducir varias notas simultáneamente, permitiendo tocar acordes y armonías complejas. Para esto, tiene múltiples voces, cada una capaz de generar y procesar una nota de manera independiente.

La diferencia principal entre ambos es la cantidad de notas que pueden sonar al mismo tiempo.

---

## Principales módulos y sus funciones

### Osciladores

Los osciladores **VCO Voltage Controlled Oscillator** son la fuente principal de sonido del sintetizador. Generan la onda sonora y determinan su frecuencia, si el sonido será más agudo o más grave. En muchos sintetizadores pueden generar distintos tipos de onda, como seno, triángulo, diente de sierra o cuadrada.

### Filtros

Los filtros **VCF Voltage Controlled Filter** modifican el contenido armónico del sonido generado por los osciladores. Permiten atenuar frecuencias, haciendo que el sonido sea más brillante, más opaco. El filtro no genera sonido, solo transforma.

### Envolventes ADSR

Las **envolventes ADSR** controlan cómo evoluciona un sonido en el tiempo, dividiéndolo en distintas etapas.

- **A (Attack)**: cuánto demora el sonido en llegar a su volumen máximo.

- **D (Decay)**: qué ocurre después del ataque, el tiempo que tarda en bajar desde el volumen máximo hasta el nivel de sostenimiento.

- **S (Sustain)**: el nivel de volumen en el que se mantiene el sonido mientras la nota continúa activa.

- **R (Release)**: qué ocurre después de soltar la nota, el tiempo que tarda el sonido en desaparecer.

### LFO

El **LFO Low Frequency Oscillator** (Oscilador de Baja Frecuencia) se utiliza para modular distintos parámetros del sonido, creando efectos como vibrato, trémolo o movimientos en el filtro. Esta sección no agrega un sonido nuevo, sino que modifica el comportamiento de otros parámetros del sintetizador.

El LFO puede modular:

- **VCO (Voltage Controlled Oscillator)**: Oscilador controlado por voltaje. Modifica la afinación del oscilador, generando un efecto de vibrato.

- **VCF (Voltage Controlled Filter)**: Filtro controlado por voltaje. Modifica la frecuencia de corte del filtro, haciendo que el sonido se abra y se cierre de manera periódica.

- **VCA (Voltage Controlled Amplifier)**: Amplificador controlado por voltaje. Modifica el volumen del sonido, generando un efecto de trémolo.

---

## Mi aprendizaje con el Subharmonicon

### Cómo llegué a utilizar el Subharmonicon

El primer semestre de 2025 tomé el **taller Diseño de Máquinas Electrónicas**, en donde todo este universo de la electrónica se me hizo fascinante. Comencé a ir mucho más al **Laboratorio de Interacción Digital**, en donde me encontré, en una de estas ocasiones, con Aarón utilizando un sintetizador. Estaba utilizando un tríptico de **sintetizadores modulares Moog**. Ahí le pedí si me podía enseñar a utilizarlos, y me mostró unos sonidos que me dejaron encantada.

Recuerdo que hablamos de que me gustaba escuchar música más lenta, casi espiritual, ya que en ese momento estaba pasando por mucho estrés, y me dijo que utilizara el sintetizador Subharmonicon, ya que es un sintetizador con armónicos muy interesantes. Además me enseñó la música de **Kaitlyn Aurelia Smith**, la cual ha sido una referente constante dentro de la música electrónica para mí.

Desde ahí **aprendí a encenderlo** y conectarlo al adaptador y al amplificador, e iba al laboratorio a utilizarlo cuando no estaba en clases.

No podría decir que entendía lo que hacía; **solo me gustaba hacer sonidos**, filtrar los agudos y escuchar cómo se repetían. Como mencioné, para mí esto fue una manera de mantenerme distraída y acompañada durante ese semestre.

Ahora, en el primer semestre de 2026, junto con la **práctica electiva**, pedí prestado al **Laboratorio de Interacción Digital** el Subharmonicon. No era la primera vez que me había llevado un sinte; también me había llevado el **Moog Mavis**, el cual, supongo que por la falta de secuenciador, no me terminó de encantar y lo devolví, ya que me agobié por mi falta de conocimiento.

---

### Encendido y amplificación del sonido

El Subharmonicon funciona con una alimentación de 12 V. En Chile la red eléctrica doméstica entrega 220-240 V, por lo que es necesario utilizar su fuente de poder, la cual transforma el voltaje de la red en 12 V para alimentar el sintetizador. La fuente acepta una entrada de 100-240 V, por lo que puede utilizarse en Chile sin problemas y únicamente requiere el adaptador de enchufe correspondiente, si fuese necesario.

En el laboratorio existen varias fuentes de poder para los sintetizadores Moog, las cuales entregan una salida de 12 V. También se encuentra el transformador chocolate, una fuente de alimentación regulable que permite seleccionar distintos voltajes de salida para alimentar diversos dispositivos electrónicos.

El Subharmonicon, y en general los sintetizadores semimodulares de Moog, no tienen un botón de encendido y apagado. Una vez que se conecta correctamente a su fuente de poder, el sintetizador se enciende automáticamente y los botones se iluminan con luces rojas, indicando que está funcionando. El botón Play no enciende el sintetizador, solo inicia o detiene el secuenciador interno.

Para poder escuchar el sonido del Subharmonicon es necesario conectar la salida de audio a un amplificador para instrumentos electrónicos que entregan una señal de línea, o a una interfaz de audio. La salida de audio utiliza un cable jack de 1/4 mono, el cual transmite la señal desde el sintetizador hasta el dispositivo de audio.

---

### Secuenciadores

El Subharmonicon tiene dos secuenciadores de cuatro pasos. Son cuatro perillas las que conforman el orden, o las notas que van a sonar. La Secuencia 1 corresponde al Oscilador 1 y la Secuencia 2 corresponde al Oscilador 2.

Este secuenciador es una muy buena base para crear patrones interesantes, ya que posteriormente se pueden modificar muchos parámetros y obtener resultados más variados. De todas maneras, si lo que más te interesa es crear secuencias más complejas o de mayor longitud, recomiendo utilizar un secuenciador analógico externo o un controlador MIDI.

![foto](./../recursos/is-secuenciadores.jpeg)

### Polirritmos

Justo abajo de las **secuencias** se encuentran los **polirritmos**. Estos ritmos corresponden a la velocidad en la que se va a reproducir esta frecuencia; es el tiempo específico para cierta secuencia. Se le pueden determinar a la **secuencia 1** o a la **secuencia 2**, o incluso a ambas.

En un principio suele ser más difícil asignar ambas secuencias a un mismo ritmo. Trabajar cada una por separado ayuda a distinguir mejor cómo funciona cada secuencia, ya que después puedes subir o bajar su volumen de manera independiente y comprender con mayor claridad cómo interactúan entre sí.

![foto](./../recursos/is-polirritmos.jpeg)

### Tempo

Los ritmos están regidos por el **tempo**, que es el tiempo general del sintetizador, ya que los **polirritmos** son divisiones que se van escalando de manera proporcional entre sí.

Al modificar el **tempo**, aumenta o disminuye la velocidad de reproducción de todas las **secuencias** y **polirritmos**, pero sin alterar la relación entre ellos. Esto permite experimentar con una misma composición a distintas velocidades, manteniendo siempre la estructura rítmica.

### Osciladores

Los osciladores son lo que produce y comienza el sonido. Estos tienen formas de onda, **VCO 1 WAVE** y **VCO 2 WAVE**, que es el tipo de señal que va a producir el **oscilador**. La de arriba es una **onda cuadrada**, abajo es una **onda diente de sierra** y, por último, en medio incluye un **modo híbrido** donde se asigna una onda cuadrada al oscilador y ondas de diente de sierra a los subarmónicos.

![foto](./../recursos/is-vco-wave.jpeg)

Los osciladores tienen frecuencias, **VCO 1 FREQ** y **VCO 2 FREQ**. VCO quiere decir Voltage Controlled Oscillator (Oscilador Controlado por Voltaje). Estas perillas controlan la altura del sonido, haciéndolo más agudo o más grave, ya que modifican la frecuencia a la que oscila la señal.

También tenemos las subfrecuencias, **SUB 1 FREQ** y **SUB 2 FREQ**, que generan divisiones de la frecuencia del oscilador para crear subarmónicos. Estas perillas controlan la relación entre el oscilador y sus subfrecuencias, permitiendo obtener sonidos más complejos.

Al combinar los dos osciladores con sus respectivas subfrecuencias es posible crear intervalos y acordes, esta es una de las secciones que le da su sonido tan particular a este sintetizador.

![foto](./../recursos/is-vco-freq.jpeg)

Abajo están el **VCO 1 LEVEL** y **VCO 2 LEVEL**, que controlan el volumen con el que van a sonar los osciladores. También están el **SUB 1 LEVEL** y **SUB 2 LEVEL**, que controlan el volumen con el que van a sonar las sub frecuencias.

Estas perillas permiten mezclar la cantidad de sonido que aporta cada oscilador y cada subfrecuencia. Solo ajustan su volumen, pero esto puede ayudar a darle más presencia o jerarquía a ciertos sonidos dentro de la composición.

![foto](./../recursos/is-vco-level.jpeg)

### Envolventes ADSR

En el caso del Subharmonicon, este utiliza una envolvente **Attack Decay**, por lo que no cuenta con controles de Sustain ni Release. Esto significa que el sonido solo tiene una etapa de ataque y una de decaimiento. Aun así, comprender el funcionamiento de una envolvente ADSR ayuda a entender cómo se modela el comportamiento del sonido en otros sintetizadores.

### Mi uso con el sintetizador Subharmonicon

Generalmente, lo que hago es crear una secuencia en escala ascendente o descendente con la Secuencia 1, a la que le doy una frecuencia un poco más aguda. Luego con la Secuencia 2, creo un patrón más repetitivo y plano, asignándole una frecuencia más grave para que funcione como base.

Utilizo el Ritmo 1 con la Secuencia 1, dejando la perilla aproximadamente en la mitad y el Ritmo 2 con la Secuencia 2, con la perilla al máximo.

En un principio no utilicé mucho las subfrecuencias, ya que recién lograba comprender esta primera parte del sintetizador. Mi intención era familiarizarme primero con el funcionamiento de las secuencias y los ritmos antes de comenzar a experimentar con las subfrecuencias y el resto de las posibilidades que ofrece el instrumento.

### Interfaz

El audio del sintetizador es enviado a una interfaz de audio Focusrite Scarlett mediante un cable jack. La interfaz convierte la señal analógica en digital y la transmite al computador a través de una conexión USB, donde es reproducida y procesada en Ableton Live. En este caso, el computador actúa como soporte para el procesamiento del audio y, cuando corresponde, también como fuente de alimentación del sintetizador.

![foto](./../recursos/is-subharmonicon.jpeg)

## Bibliografia

https://share.google/AHJt1y3yooV8h4IqP

https://www.perfectcircuit.com/?srsltid=AfmBOordmY1Ce_huen9OowtZ2055P7SbcX1BBSRIkrmQMT2tmqPJ-_Tj

https://share.google/cu1LgA7NmM22lK7bO

https://www.perfectcircuit.com/signal/synth-glossary


