//elementos e variaveis
const frmSelClassificacao = document.querySelector("#lancamento-sel-classificacao");
const frmBtnSave = document.querySelector("#lancamento-bnt-save");

const lsLancamentosName = "AppFinV1.0";
//funções

const save = (classificacao) => {
    const dataLSLancamentos = getLSLancamentos();
    console.log(dataLSLancamentos);
}

const getLSLancamentos = () => {
    const dataLSLancamentos = JSON.parse(localStorage.getItem(lsLancamentosName)) || [];  
    return dataLSLancamentos;
};

const updateLSLancamento = (lancamento) => {
    const dataLSLancamentos = getLSLancamentos();
    dataLSLancamentos.push(lancamento);
    localStorage.setItem(lsLancamentosName, JSON.stringify(dataLSLancamentos));
}

//eventos
frmBtnSave.addEventListener("click", (e) => {
    e.preventDefault();
    let lancamento = {classificacao:frmSelClassificacao.value
                     ,opcao:'0'
                     ,tipo:'0'
                     ,efetivo:'0'
                     ,descricao:"descricao"
                     ,data:"19/02/2023"
                     ,valor:0
                     ,observacao:"Sem observação"
                     };
    updateLSLancamento(lancamento);
    console.log(getLSLancamentos());
});

