# Escala 02

## Encargo visualización Diseño Abierto

### Propuestas de temas que registrar

Nuestra propuesta es **mapear el patio central de SS a partir de un sistema mayor**, con sensores ubicados desde arriba que registren lo que ocurre en el espacio. En un principio pensamos en cámaras, pero para que no se parezca tanto al otro proyecto, nos inclinamos por **trabajar con micrófonos**.

Nos interesa **detectar patrones en cómo habla la gente**: cómo se comportan las voces de las personas dentro de un espacio, sus **tonos y entonaciones**, o **cuántos segundos duran las conversaciones**. Quizá hay espacios en los que se conversa de cierta forma y otros de otra, o lugares en los que **se habla más y otros en los que se habla menos**.

Orientarlo hacia **de qué habla la gente** es más difícil, ya que tendríamos que incorporar algún modo de **transcripción de audio a texto** y armar oraciones. Aun así, nos parece muy interesante; nos recuerda a un referente, que alguien estaba usando en su proyecto, que mostraba en pantallas lo que la gente escribía en Twitter.

agregar link del referente*

Para lograrlo, estas son algunas técnicas que podríamos investigar:

- **Procesamiento de audio espacial.**

- **Localización de fuente sonora (DOA):** saber desde qué dirección proviene una voz.

- **Beamforming:** enfocar la escucha del sistema hacia una dirección específica.

- **Intensidad sonora (SPL):** medir qué tan fuerte se habla.

- **Filtrado y detección de eventos:** separar las voces del ruido y reconocer cuándo comienza y termina una conversación.

Se nos ocurre que la pregunta podría ser **¿cómo habla la FAAD en Diseño Abierto?**, y que esto se pudiera ver en **otra facultad a través de una pantalla**, con la transcripción de lo que se está hablando en otros lugares. Sin embargo, esto podría **interferir con la privacidad** de las personas, algo que tenemos que considerar.

## Etapas de visualización de datos

Según **Ben Fry**:

### Adquirir

¿Qué podemos observar y cómo podemos registrar información?

Queremos que nuestros datos sean **las palabras transcritas**: a través de los micrófonos registramos las conversaciones del patio y, mediante un sistema de **transcripción de audio a texto**, las convertimos en palabras que podamos procesar y visualizar.

El lugar de registro será el **patio central**. Para saber **desde dónde surge cada voz** dentro de él, pensamos en ubicar un **arreglo de micrófonos en el centro del patio**, capaz de detectar la **dirección de la fuente sonora (DOA)**. Así, cada palabra queda asociada a un **punto específico del patio**.

Cada vez que se detecta una voz, el sistema registra:

- **La palabra o frase transcrita.**

- **La dirección** desde donde surgió, respecto al centro del patio.

- **La hora** en que se dijo.

- **La intensidad** con la que se habló.

- **La duración** de la conversación.

### Analizar

¿Qué información o datos estamos obteniendo?

Obtenemos una **tabla de registros**, en donde cada fila corresponde a una palabra dicha en un lugar y en un momento:

| Hora  | Dirección | Palabra  | Intensidad | Duración |
|-------|-----------|----------|------------|----------|
| 10:32 | 45°       | entrega  | media      | 12 s     |
| 10:33 | 180°      | almuerzo | alta       | 40 s     |
| 10:35 | 300°      | taller   | baja       | 8 s      |

*Ejemplo ilustrativo, no corresponde a datos reales.*

A partir de esta tabla podemos leer **qué se dice, dónde y cuándo**, aunque en bruto son muchas palabras sin orden aparente.

### Filtrar

¿Qué datos nos interesa conservar en nuestra investigación?

No todas las palabras nos sirven. Descartamos las **palabras vacías**, como artículos, preposiciones y conectores (*el, la, de, que, y*), que se repiten en todas partes pero no dicen nada del lugar. Conservamos principalmente **sustantivos, verbos y adjetivos**, que son los que dan cuenta de los temas.

También filtramos el **ruido** y las transcripciones erróneas, que en un espacio abierto pueden ser frecuentes.

Por último, para **cuidar la privacidad**, no guardamos el audio original ni frases completas, solo palabras sueltas, y eliminamos **nombres propios** o cualquier dato que pueda identificar a una persona.

### Minar

¿Qué patrones o relaciones podemos descubrir en estos datos?

- **Frecuencia por sector:** qué palabras se repiten más en cada parte del patio.

- **Palabras propias de un lugar:** aquellas que aparecen solo en un sector del patio y que, de alguna manera, lo caracterizan.

- **Palabras compartidas:** las que atraviesan todo el patio y hablan de la comunidad en general.

- **Variación en el tiempo:** si en la mañana se habla de cosas distintas que en la tarde.

- **Relaciones entre palabras:** cuáles suelen aparecer juntas en una misma conversación.

### Representar

¿Cómo podemos transformar estos datos en una forma perceptible?

Construimos un **mapa de palabras**: una planta del patio central en donde **cada palabra aparece en el lugar desde donde surgió**.

- **Posición:** la dirección desde donde se dijo, respecto al centro del patio.

- **Tamaño:** cuántas veces se ha repetido; las palabras más dichas se vuelven más grandes.

- **Opacidad:** qué tan reciente es; las palabras nuevas aparecen nítidas y se van desvaneciendo con el tiempo.

- **Color:** el momento del día en que se dijo.

Retomando la idea del **sonar**, una línea podría recorrer el mapa haciendo aparecer las palabras a su paso, como si el patio se escuchara a sí mismo.

### Afinar

¿Cómo podemos desarrollar un sistema funcional?

Tenemos que lograr que el sistema funcione **en tiempo real**: captar el audio, transcribirlo, filtrarlo y enviarlo a la visualización, que podríamos desarrollar en **p5.js**.

Debemos **calibrar los micrófonos** para que distingan bien las direcciones, ajustar la **legibilidad** del mapa cuando se acumulan muchas palabras en un mismo lugar y definir **cuánto tiempo permanece** cada palabra en pantalla.

### Interactuar

¿Cómo se relacionan las personas con el sistema?

Las personas que transitan por el patio **se convierten en parte de los datos**: al conversar, sus palabras aparecen en el mapa, y pueden ver cómo su voz se suma a la de los demás.

Al mismo tiempo, desde **otra facultad**, una pantalla permite **escuchar el patio a distancia**, leyendo de qué se habla en Diseño Abierto sin estar ahí. Quien mira podría **seleccionar un sector del patio** para ver sus palabras más frecuentes o recorrer cómo cambió la conversación durante el día.

## Propuestas de comunicación gráfica

Más que mostrar el audio tal cual, queremos buscar una forma de **transformar el sonido en una visualización que demuestre algo**; tiene que **responder una pregunta**.

Nos imaginamos una **especie de sonar**: una pantalla que muestre los **puntos de audio** en el espacio, indicando **en qué parte del patio se está hablando** y **de qué se está hablando** en cada una.

## Proceso

### Estrategia de registro

### Variables

## Primera entrega

### Correcciones

## Entrega final

### Simbología

### Tabla de datos

### Conclusiones

## Referentes 

- Mark Hansen and Ben Rubin: Listening Post, Real-Time Data Responsive Environment 2001 

- Messa di Voce (Performance version, 2003) 

- Voice Tunnel by Rafael Lozano-Hemmer 

- [La isla [reconocimiento]](https://rkrause.cl/web/)  
es un proyecto participativo: todos los habitantes y visitantes de Sudamérica pueden cooperar en la construcción de un mapa a base de sonidos grabados en sus costas. 
