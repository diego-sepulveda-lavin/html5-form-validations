let formulario = document.getElementById('formulario')
let test1 = document.getElementById('ccardnum')
let test2 = document.getElementById('cvc')
let test3 = document.getElementById('amount')
let test4 = document.getElementById('fname')
let test5 = document.getElementById('lname')
let test6 = document.getElementById('city')
let test7 = document.getElementById('state')
let test8 = document.getElementById('zip')
let test9 = document.getElementById('payment')
let alerta = document.getElementById('alerta')





formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let ccardnum = formulario.ccardnum.value;
    let cvc = formulario.cvc.value;
    let amount = formulario.amount.value;
    let fname = formulario.fname.value;
    let lname = formulario.lname.value;
    let city = formulario.city.value;
    let state = formulario.state.value
    let zip = formulario.zip.value
    

    if (ccardnum !== ""){
        test1.classList.remove("alert-danger")


    } else {
        test1.classList.add("alert-danger");
        let node = document.createElement("LI")
        let textnode = document.createTextNode("Credit card number missing");
        node.appendChild(textnode);
        document.getElementById("alerta").appendChild(node);
    }

    if (cvc !== ""){
        test2.classList.remove("alert-danger")
    } else {
        test2.classList.add("alert-danger");
        let node = document.createElement("LI")
        let textnode = document.createTextNode("CVC missing");
        node.appendChild(textnode);
        document.getElementById("alerta").appendChild(node);
    }
    
    if (amount !== ""){
        test3.classList.remove("alert-danger")
    } else {
        test3.classList.add("alert-danger");
        let node = document.createElement("LI")
        let textnode = document.createTextNode("Amount missing");
        node.appendChild(textnode);
        document.getElementById("alerta").appendChild(node);
    }

    if (fname !== ""){
        test4.classList.remove("alert-danger")
    } else {
        test4.classList.add("alert-danger");
        let node = document.createElement("LI")
        let textnode = document.createTextNode("First name missing");
        node.appendChild(textnode);
        document.getElementById("alerta").appendChild(node);
    }

    if (lname !== ""){
        test5.classList.remove("alert-danger")
    } else {
        test5.classList.add("alert-danger");
        let node = document.createElement("LI")
        let textnode = document.createTextNode("Last name missing");
        node.appendChild(textnode);
        document.getElementById("alerta").appendChild(node);
    }
    
    if (city !== ""){
        test6.classList.remove("alert-danger")
    } else {
        test6.classList.add("alert-danger");
        let node = document.createElement("LI")
        let textnode = document.createTextNode("City missing");
        node.appendChild(textnode);
        document.getElementById("alerta").appendChild(node);
    }

    if (state !== ""){
        test7.classList.remove("alert-danger")
    } else {
        test7.classList.add("alert-danger");
        let node = document.createElement("LI")
        let textnode = document.createTextNode("State missing");
        node.appendChild(textnode);
        document.getElementById("alerta").appendChild(node);
    }

    if (zip !== ""){
        test8.classList.remove("alert-danger")
    } else {
        test8.classList.add("alert-danger");
        let node = document.createElement("LI")
        let textnode = document.createTextNode("ZIP missing");
        node.appendChild(textnode);
        document.getElementById("alerta").appendChild(node);
    }

    if (ccardnum != "" && cvc !== "" && amount !== "" && fname !== "" && lname !== "" && city !== "" && state !== "" && zip !== "") {
        e.target.submit();
    } else {
        document.querySelector('.alert').classList.remove('d-none')
    }




});