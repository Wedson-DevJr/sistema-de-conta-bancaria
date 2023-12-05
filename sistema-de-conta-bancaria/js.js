const inputSaque = document.getElementById("inputSaque");
const buttonSaque = document.getElementById("buttonSaque");
const valorDoSaldo = document.getElementById("valorDoSaldo");
const valorDoSaque = document.getElementById("valorDoSaque");

const valorDoDeposito = document.getElementById("valorDoDeposito");
const inputDeposito = document.getElementById("inputDeposito");
const buttonDeposito = document.getElementById("buttonDeposito");


const inputTransferencia = document.getElementById("inputTransferencia");
const buttonTransferencia = document.getElementById("buttonTransferencia");

const boxMsg = document.getElementById("msg");

buttonSaque.addEventListener("click", () => {
    const value = inputSaque.value;
    if (isNaN(Number(value)) || Number(value) <= 0) {
        boxMsg.innerHTML = "Valor inválido";
    } else if (Number(value) > Number(valorDoSaldo.innerText)) {
        boxMsg.innerHTML = "Saldo insuficiente";
    } else {
        const saldoValue = Number(valorDoSaldo.innerText) - Number(value);
        const saqueValue = Number(valorDoSaque.innerText) + Number(value);
        valorDoSaque.innerText = saqueValue;
        valorDoSaldo.innerText = saldoValue;
        inputSaque.value = "";
        boxMsg.innerHTML = "";
    }
})

buttonDeposito.addEventListener("click", () => {
    const value = inputDeposito.value;
    if (isNaN(Number(value)) || Number(value) <= 0) {
        boxMsg.innerHTML = "Valor inválido";
    } else {
        const depositoValue = Number(valorDoDeposito.innerText) + Number(value);
        const saldoValue = Number(valorDoSaldo.innerText) + Number(value);
        valorDoDeposito.innerText = depositoValue;
        valorDoSaldo.innerText = saldoValue;
        inputDeposito.value = "";
        boxMsg.innerHTML = "";
    }
})

buttonTransferencia.addEventListener("click", () => {
    const value = inputTransferencia.value;

    // Verifica se o valor é inválido
    if (isNaN(Number(value)) || Number(value) <= 0) {
        boxMsg.innerHTML = "Valor inválido";
        return;
    }

    // Verifica se há saldo suficiente para a transferência
    if (Number(value) > Number(valorDoSaldo.innerText)) {
        boxMsg.innerHTML = "Saldo insuficiente";
        return;
    }

    // Executa a transferência
    const saldoValue = Number(valorDoSaldo.innerText) - Number(value);
    const transferenciaValue = Number(valorDoTransferencia.innerText) + Number(value);
    valorDoTransferencia.innerText = transferenciaValue;
    valorDoSaldo.innerText = saldoValue;
    inputTransferencia.value = "";
    boxMsg.innerHTML = "Transferência realizada com sucesso";
});
