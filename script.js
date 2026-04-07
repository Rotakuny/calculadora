
function calcularTodo(){
    try{
        const contenedor = document.getElementById("mostrarResultados");
        contenedor.innerHTML = "";
        let n2 = parseFloat(document.getElementById("numero2").value);
        let n1 = parseFloat(document.getElementById("numero1").value);

        if(isNaN(n1) || isNaN(n2)) return alert("hay campos vacios");
        let suma = n1+n2;
        let resta = n1-n2;
        let producto = n1*n2;
        let division = n1/n2;

        const pSuma = document.createElement("p");
        const pResta = document.createElement("p");
        const pProducto = document.createElement("p");
        const pDivision = document.createElement("p");
        
        pSuma.textContent = `la suma de ${n1} + ${n2} = ${suma}`;
        pResta.textContent = `la resta de ${n1} - ${n2} = ${resta}`;
        pProducto.textContent = `la multiplicacion de ${n1} x ${n2} = ${producto}`;
        pDivision.textContent = `la division de ${n1} / ${n2} = ${division}`;
        if(isNaN(division)) pDivision.textContent = "No se puede dividir";

        pSuma.classList = "valor";
        pResta.classList = "valor";
        pProducto.classList = "valor";
        pDivision.classList = "valor";

        contenedor.appendChild(pSuma)
        contenedor.appendChild(pResta);
        contenedor.appendChild(pProducto);
        contenedor.appendChild(pDivision);
    }
    catch(err){
        alert(`Ha ocurrido un problema: ${err}`)
    }
}
function suma(){
    const contenedor = document.getElementById("mostrarResultados");
    contenedor.innerHTML = "";
    let n2 = parseFloat(document.getElementById("numero2").value);
    let n1 = parseFloat(document.getElementById("numero1").value);
    if(isNaN(n1) || isNaN(n2)) return alert("hay campos vacios");
    let suma = n1+n2;
    const p = document.createElement("p");
    p.textContent = `la suma de ${n1} + ${n2} = ${suma}`;
    p.classList = "valor";
    contenedor.appendChild(p)
}

function resta(){
    const contenedor = document.getElementById("mostrarResultados");
    contenedor.innerHTML = "";
    let n2 = parseFloat(document.getElementById("numero2").value);
    let n1 = parseFloat(document.getElementById("numero1").value);
    if(isNaN(n1) || isNaN(n2)) return alert("hay campos vacios");
    let resta = n1-n2;
    const p = document.createElement("p");
    p.textContent = `la resta de ${n1} - ${n2} = ${resta}`;
    p.classList = "valor";
    contenedor.appendChild(p)
}
function multiplicacion(){
    const contenedor = document.getElementById("mostrarResultados");
    contenedor.innerHTML = "";
    let n2 = parseFloat(document.getElementById("numero2").value);
    let n1 = parseFloat(document.getElementById("numero1").value);
    if(isNaN(n1) || isNaN(n2)) return alert("hay campos vacios");
    let producto = n1*n2;
    const p = document.createElement("p");
    p.textContent = `la multiplicacion de ${n1} x ${n2} = ${producto}`;
    p.classList = "valor";
    contenedor.appendChild(p)
}
function division(){
    const contenedor = document.getElementById("mostrarResultados");
    contenedor.innerHTML = "";
    let n2 = parseFloat(document.getElementById("numero2").value);
    let n1 = parseFloat(document.getElementById("numero1").value);
    if(isNaN(n1) || isNaN(n2)) return alert("hay campos vacios");
    let division= n1/n2;
    
    const p = document.createElement("p");
    p.textContent = `la division de ${n1} / ${n2} = ${division}`;
    if(isNaN(division)) p.textContent = "No se puede dividir";
    p.classList = "valor";
    contenedor.appendChild(p)
}
function limpiarCampos(){
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("mostrarResultados").innerHTML = "";
    document.getElementById("numero1").focus();
}