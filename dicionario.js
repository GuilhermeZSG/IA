// instalar depedencia ou biblioteca
// npm install @google/generative-ai

// Importar a biblioteca
const { GoogleGenerativeAI } = require("@google/generative-ai")

// Inicializando o modelo de inteligencia artificial, usando a chave API como autenticação.
const googleIA = new GoogleGenerativeAI("AIzaSyC99NuCRrD6yybL15u_ye_OAzQA617sfKE")  // Insira a chave da API
const model = googleIA.getGenerativeModel({
    model: "gemini-2.5-flash"
})

const palavras = ["Resiliencia", "Algoritmo", "Efemero", "Escopo", "Paralelograma"]

async function criarDicionario() {
    console.log("--- Dicionario Gerado por IA ---\n")

    for (const palavra of palavras){
        const prompt = `Atue como um dicionario. Forneça uma definição para a palavra: ${palavra}`

        const resultado = await model.generateContent(prompt)
        const resposta = await resultado.response
        const definicao = resposta.text()

        console.log(`Palavra ${palavra}`)
        console.log(`Definição ${definicao}`)
        console.log(`-----------------------`)
    }

}

criarDicionario()