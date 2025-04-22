// Cotacao de moedas do dia 21/04/2025.

const USD = 5.80
const EUR = 6.68
const GBP = 7.77


// Obmentendo os elementos
const Form = document.querySelector("form")
const Amount = document.getElementById("amount")
const Currency = document.getElementById("currency")
const Footer = document.querySelector("main footer")
const Description = document.getElementById("description")
const Result = document.getElementById("result")

// Manipulando o input amount para receber somente numeros
Amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    Amount.value = Amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit do formulario
Form.onsubmit = (event) =>{
    event.preventDefault()

    switch (Currency.value) {
        case "USD":
            convertCurrency(Amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(Amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(Amount.value, GBP, "£")
            break
    }
}

// Funcao ara converter a moeda

function convertCurrency(amount, price, symbol) {
    try {
        // Exeibindo a cotacao da moeda selecionada
        Description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
        
        // Calcular o total
        let total = amount * price
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibir o resultado total
        Result.textContent = `${total} Reais`

        // Aplica a classe que exibe o footer
        Footer.classList.add("show-result")

    } catch (error) {
        console.log(error)
        // Remove a classe do footer removendo ele da tela
        Footer.classList.remove("show-result")
        alert("Tente novamente mais tarde")
    }
}

// Formata a morda em Real Brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}
