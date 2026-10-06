/* =========================
   MENÚ RESPONSIVE
========================= */

function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }

}


/* =========================
   EJEMPLO JAVASCRIPT
========================= */

function saludarUsuario() {

    const nombre = "estudiante";

    const mensaje =
        document.getElementById("mensajeJS");

    if (mensaje) {

        mensaje.textContent =
            "¡Hola " + nombre +
            "! JavaScript está funcionando correctamente. 🚀";

    }

}


/* =========================
   JQUERY
========================= */

$(document).ready(function () {

    $("#botonJquery").click(function () {

        $("#cajaJquery").slideToggle(500);

    });

});


/* =========================
   CONVERTIR OBJETO A JSON
========================= */

function mostrarJSON() {

    const usuario = {

        nombre: "William",

        edad: 16,

        estudiante: true,

        tecnologias: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    };

    const resultado =
        JSON.stringify(usuario, null, 4);

    const elemento =
        document.getElementById("resultadoJSON");

    if (elemento) {

        elemento.textContent = resultado;

    }

}


/* =========================
   CUESTIONARIO
========================= */

function calificarQuiz() {

    const respuestasCorrectas = {

        q1: "b",

        q2: "a",

        q3: "b",

        q4: "b",

        q5: "a",

        q6: "b",

        q7: "a",

        q8: "a",

        q9: "a",

        q10: "b"

    };


    let puntos = 0;

    let contestadas = 0;


    for (let pregunta in respuestasCorrectas) {

        const respuesta =
            document.querySelector(
                'input[name="' +
                pregunta +
                '"]:checked'
            );


        if (respuesta) {

            contestadas++;

            if (
                respuesta.value ===
                respuestasCorrectas[pregunta]
            ) {

                puntos++;

            }

        }

    }


    const resultado =
        document.getElementById("resultadoQuiz");


    if (contestadas < 10) {

        resultado.textContent =
            "⚠️ Debes responder las 10 preguntas antes de ver tu resultado.";

        resultado.style.background =
            "#fef3c7";

        resultado.style.color =
            "#92400e";

        return;

    }


    const porcentaje =
        puntos * 10;


    let mensaje = "";


    if (puntos === 10) {

        mensaje =
            "🏆 ¡Excelente! Dominaste los temas.";

    }

    else if (puntos >= 8) {

        mensaje =
            "🎉 ¡Muy bien! Tienes un buen conocimiento.";

    }

    else if (puntos >= 6) {

        mensaje =
            "👍 Buen trabajo, pero puedes seguir repasando.";

    }

    else {

        mensaje =
            "📚 Te recomiendo volver a estudiar las páginas.";

    }


    resultado.innerHTML =
        `
        <h2>${puntos}/10</h2>
        <p>${porcentaje}% de respuestas correctas</p>
        <p>${mensaje}</p>
        `;


    if (puntos >= 6) {

        resultado.style.background =
            "#dcfce7";

        resultado.style.color =
            "#166534";

    }

    else {

        resultado.style.background =
            "#fee2e2";

        resultado.style.color =
            "#991b1b";

    }

}