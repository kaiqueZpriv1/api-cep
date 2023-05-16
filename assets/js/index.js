alert("Está pagina é meramente ilustrativa, e fo feita no intuito de aprimorar meus conhecimentos ! digite: 01001000 no campo de pesquisa. Para obter resultados")

const contentElement = document.querySelector('#content');

saidas = () => {
        contentElement.innerHTML+=`
        <div class="saida">
                <div class="resultado">
                    <p id="cep-reveal">CEP: <span></span></p>
                    <p id="logradouro">Logradouro: <span></span></p>
                    <p id="complemento">Complemento: <span></span></p>
                    <p id="bairro">Bairro: <span></span></p>
                    <p id="ddd">DDD: <span></span></p>
                    <div class="local-box">
                        <p id="localidade">Localidade: <span></span></p>
                        <p id="uf"><span></span></p>
                    </div>
                </div>
            </div>
        `
};
saidas();

const cepInput = document.querySelector('#cep-input');
const cepBtn = document.querySelector('#cep-btn');
 
const cepElement = document.querySelector('#cep-reveal span')
const logradouroElement = document.querySelector('#logradouro span');
const complementoElement = document.querySelector('#complemento span');
const bairroElement = document.querySelector('#bairro span');
const dddElement = document.querySelector('#ddd span')
const localidadeElement = document.querySelector('#localidade span');
const ufElement = document.querySelector('#uf span')
//  api system
const getCepData = async(cep) => {
    const apiCepURL = `https://viacep.com.br/ws/01001000/json/`;
    const res = await fetch(apiCepURL);
    const data = res.json();
    return data;
};
const bodyElement = document.body;
// funcão de click em botão
cepBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const cep = cepInput.value;
    showCepData(cep);
    bodyElement.style.background = "url(./assets/img/sé.jpg) no-repeat center"
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

    cepElement.textContent = `${data.cep}`;
    logradouroElement.textContent = `${data.logradouro}`;
    complementoElement.textContent = `${data.complemento}`;
    bairroElement.textContent = `${data.bairro}`;
    dddElement.textContent = `${data.ddd}`;
    localidadeElement.textContent = `${data.localidade},`;
    ufElement.textContent = data.uf;
};
