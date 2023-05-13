alert("Está pagina é meramente ilustrativa, e fo feita no intuito de aprimorar meus conhecimentos ! digite: 01001000. Para obter resultados na caixa de pesquisa.")



const cepInput = document.querySelector('#cep-input');
const cepBtn = document.querySelector('#cep-btn');
 
const cepElement = document.querySelector('#cep-reveal span')
const logradouroElement = document.querySelector('#logradouro span');
const complementoElement = document.querySelector('#complemento span');
const bairroElement = document.querySelector('#bairro span');
const dddElement = document.querySelector('#ddd')
const localidadeElement = document.querySelector('#localidade');
const ufElement = document.querySelector('#uf span')
//  api system
const getCepData = async(cep) => {
    const apiCepURL = `https://viacep.com.br/ws/01001000/json/`;
    const res = await fetch(apiCepURL);
    const data = res.json();
    return data;
};
// funcão de click em botão
cepBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const cep = cepInput.value;
    showCepData(cep);
});
// limitando numeros no input
cepInput.addEventListener('input', function() {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
    }
});
// informaçoes sendo exibidas da api
const showCepData = async (cep) => {
    const data = await getCepData(cep);

    cepElement.textContent = `CEP: ${data.cep}`;
    logradouroElement.textContent = `Logradouro:${data.logradouro}`;
    complementoElement.textContent = `Complemento:${data.complemento}`;
    bairroElement.textContent = `Bairro:${data.bairro}`;
    dddElement.textContent = `DDD:${data.ddd}`;
    localidadeElement.textContent = `${data.localidade},`;
    ufElement.textContent = data.uf;
};
