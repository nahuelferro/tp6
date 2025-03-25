window.addEventListener("load", () => {
    const btn = document.createElement("button");
    btn.id = "recordarEstilo";
    btn.textContent = "Recordar";
    btn.style.position = "fixed";
    btn.style.top = "110px";
    btn.style.right = "10px";
    btn.style.width = "180px";
    btn.style.zIndex = "9999";
    btn.className = "btn";

    document.body.prepend(btn);

    // Estado inicial del botón
    const estiloGuardado = localStorage.getItem("estilo-recordado");
    if (estiloGuardado && estilos.includes(estiloGuardado)) {
        estilos.forEach(id => document.getElementById(id).disabled = true);
        document.getElementById(estiloGuardado).disabled = false;
        indice = estilos.indexOf(estiloGuardado);
        btn.classList.add("activo");
    }

    btn.addEventListener("click", () => {
        const activo = btn.classList.toggle("activo");

        if (activo) {
            localStorage.setItem("estilo-recordado", estilos[indice]);
        } else {
            localStorage.removeItem("estilo-recordado");
        }
    });
});
