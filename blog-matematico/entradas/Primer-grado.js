contenidoEntrada = `
<section>
    <h2>Ecuaciones de primer grado</h2>
    <p>Una ecuación de primer grado es una igualdad matemática con un valor desconocido elevado a la potencia 1.</p>
    
    
    <h3>Procidimiento general de resolucion</h3>
    <ol>
        <li><strong>Eliminar signos de agrupación:</strong> Si existen paréntesis (), corchetes [] o llaves {}, elimina los signos multiplicando o aplicando las reglas de signos de adentro hacia afuera.</li>
        <li><strong>Eliminar denominadores:</strong> Si la ecuación contiene fracciones, calcula el Mínimo Común Múltiplo (MCM) de todos los denominadores y multiplica cada uno de los términos de ambos lados por este valor para convertirla en una ecuación entera.</li>
        <li><strong>Agrupar términos:</strong> Transpón todos los términos que contienen la incógnita a un lado de la igualdad y los términos independientes al otro lado. </li>
        <li><strong>Reducir términos semejantes:</strong> Suma o resta los términos en cada lado de la igualdad.</li>
        <li><strong>Despejar la incógnita:</strong> Divide ambos lados entre el coeficiente de la incógnita para aislarla completamente.</li>
        <li><strong>Comprobar el resultado:</strong> Sustituye el valor obtenido en la ecuación original para verificar que la igualdad se cumpla.</li>
    </ol>
    

    <h3>A) Ecuación Entera</h3>
    <p><strong>Ecuación:</strong> <code>4x - 9 = 2x + 7</code></p>
    <p><strong>Resolución:</strong></p>
    <ol>
        <li>Agrupar términos con <code>x</code> a la izquierda y constantes a la derecha:<br>
            <code>4x - 2x = 7 + 9</code></li>
        <li>Reducir términos semejantes:<br>
            <code>2x = 16</code></li>
        <li>Despejar <code>x</code>:<br>
            <code>x = 16 / 2</code> &rArr; <strong><code>x = 8</code></strong></li>
    </ol>
    <p><strong>Comprobación:</strong></p>
    <ul>
        <li>Izquierda: <code>4(8) - 9 = 32 - 9 = 23</code></li>
        <li>Derecha: <code>2(8) + 7 = 16 + 7 = 23</code></li>
        <li><strong><code>23 = 23</code> &check;</strong></li>
    </ul>
   

    <h3>B) Ecuación Fraccionaria</h3>
    <p><strong>Ecuación:</strong> <code>(x / 3) + (x / 5) = 8</code></p>
    <p><strong>Resolución:</strong></p>
    <ol>
        <li>Calcular el MCM de los denominadores (3 y 5): MCM = 15.</li>
        <li>Multiplicar cada término por 15:<br>
            <code>15 &middot; (x / 3) + 15 &middot; (x / 5) = 15 &middot; 8</code><br>
            <code>5x + 3x = 120</code></li>
        <li>Reducir términos semejantes:<br>
            <code>8x = 120</code></li>
        <li>Despejar <code>x</code>:<br>
            <code>x = 120 / 8</code> &rArr; <strong><code>x = 15</code></strong></li>
    </ol>
    <p><strong>Comprobación:</strong></p>
    <ul>
        <li>Izquierda: <code>(15 / 3) + (15 / 5) = 5 + 3 = 8</code></li>
        <li>Derecha: <code>8</code></li>
        <li><strong><code>8 = 8</code> &check;</strong></li>
    </ul>

    
    <h3>C) Ecuación con Signos de Agrupación</h3>
    <p><strong>Ecuación:</strong> <code>4(x - 3) - 2(x + 1) = 6</code></p>
    <p><strong>Resolución:</strong></p>
    <ol>
        <li>Eliminar paréntesis distribuyendo los coeficientes:<br>
            <code>4x - 12 - 2x - 2 = 6</code></li>
        <li>Reducir términos en la izquierda:<br>
            <code>2x - 14 = 6</code></li>
        <li>Agrupar constantes a la derecha:<br>
            <code>2x = 6 + 14</code><br>
            <code>2x = 20</code></li>
        <li>Despejar <code>x</code>:<br>
            <code>x = 20 / 2</code> &rArr; <strong><code>x = 10</code></strong></li>
    </ol>
    <p><strong>Comprobación:</strong></p>
    <ul>
        <li>Izquierda: <code>4(10 - 3) - 2(10 + 1) = 4(7) - 2(11) = 28 - 22 = 6</code></li>
        <li>Derecha: <code>6</code></li>
        <li><strong><code>6 = 6</code> &check;</strong></li>
    </ul>


    <h3>D) Ecuación con Literales</h3>
    <p><strong>Ecuación:</strong> Despejar <code>x</code> de la ecuación <code>m(x - 2) = nx + 4</code> (donde <code>m &ne; n</code>)</p>
    <p><strong>Resolución:</strong></p>
    <ol>
        <li>Eliminar paréntesis aplicando propiedad distributiva:<br>
            <code>mx - 2m = nx + 4</code></li>
        <li>Agrupar los términos que contienen <code>x</code> a la izquierda y el resto a la derecha:<br>
            <code>mx - nx = 4 + 2m</code></li>
        <li>Factorizar <code>x</code> por término común:<br>
            <code>x(m - n) = 2m + 4</code></li>
        <li>Despejar <code>x</code> dividiendo entre <code>(m - n)</code>:<br>
            <strong><code>x = (2m + 4) / (m - n)</code></strong> (para <code>m &ne; n</code>)</li>
    </ol>
    <p><strong>Comprobación numérica:</strong> (Asumiendo <code>m = 3</code>, <code>n = 1</code>)</p>
    <ul>
        <li>Sustituyendo en la fórmula despejada: <code>x = (2(3) + 4) / (3 - 1) = 10 / 2 = 5</code></li>
        <li>Verificación en la ecuación original:
            <ul>
                <li>Izquierda: <code>3(5 - 2) = 3(3) = 9</code></li>
                <li>Derecha: <code>1(5) + 4 = 9</code></li>
            </ul>
        </li>
        <li><strong><code>9 = 9</code> &check;</strong></li>
    </ul>


    <h2>Problema de Planteamiento Propio </h2>
    
    <p><strong>Enunciado del Problema:</strong></p>
    <blockquote style="background: #f9f9f9; border-left: 4px solid #ccc; margin: 1.5em 10px; padding: 0.5em 10px;">
      Una desarrolladora independiente gasta la mitad de sus ahorros en la licencia anual de un motor de videojuegos, la tercera parte de lo que le quedaba en suscripciones a servidores en la nube, y le quedan exactamente $1,200 MXN para publicidad. ¿Cuánto dinero tenía ahorrado inicialmente?
    </blockquote>

    <div class="paso-box">
      <h3>Paso 1: Definición de la Incógnita</h3>
      <p><code>x</code> = Dinero total ahorrado inicialmente en pesos (MXN).</p>
    </div>

    <div class="paso-box">
      <h3>Paso 2: Traducción al Lenguaje Algebraico</h3>
      <ul>
        <li>Gasto en licencia del motor: <code>x / 2</code></li>
        <li>Remanente tras la licencia: <code>x - (x / 2) = x / 2</code></li>
        <li>Gasto en servidores (un tercio de lo que le quedaba): <code>(1 / 3) &middot; (x / 2) = x / 6</code></li>
        <li>Remanente para publicidad: <code>$1,200</code></li>
      </ul>
    </div>

    <div class="paso-box">
      <h3>Paso 3: Planteamiento de la Ecuación</h3>
      <p><code>(x / 2) + (x / 6) + 1200 = x</code></p>
    </div>

    <div class="paso-box">
      <h3>Paso 4: Solución de la Ecuación</h3>
      <ol>
        <li>Multiplicar toda la ecuación por el MCM de los denominadores (MCM = 6):<br>
            <code>6 &middot; (x / 2) + 6 &middot; (x / 6) + 6 &middot; 1200 = 6 &middot; x</code><br>
            <code>3x + x + 7200 = 6x</code></li>
        <li>Reducir términos semejantes:<br>
            <code>4x + 7200 = 6x</code></li>
        <li>Agrupar <code>x</code> de un lado:<br>
            <code>7200 = 6x - 4x</code><br>
            <code>7200 = 2x</code></li>
        <li>Despejar <code>x</code>:<br>
            <code>x = 7200 / 2</code> &rArr; <strong><code>x = 3600</code></strong></li>
      </ol>
    </div>

    <div class="paso-box">
      <h3>Paso 5: Validación contra el Enunciado</h3>
      <ul>
        <li><strong>Dinero inicial:</strong> $3,600 MXN.</li>
        <li><strong>Gasto en licencia:</strong> La mitad de $3,600 &rArr; $1,800.</li>
        <li><strong>Dinero sobrante tras la licencia:</strong> $3,600 - $1,800 = $1,800.</li>
        <li><strong>Gasto en servidores:</strong> Un tercio de $1,800 &rArr; $600.</li>
        <li><strong>Restante final:</strong> $1,800 - $600 = $1,200.</li>
      </ul>
      <p>Coincide exactamente con el dinero disponible para publicidad enunciado en el problema. Además, la solución es una cantidad positiva y entera razonable para un presupuesto, por lo que es totalmente válida.</p>
      <p><strong>Resultado:</strong> La desarrolladora tenía ahorrados <strong>$3,600 MXN</strong>.</p>
    </div>


   
</section>`;
