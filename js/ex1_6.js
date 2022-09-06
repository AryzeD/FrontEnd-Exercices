function  mostrarManutencao()
{
    const  manutencao = {
        aeronave:"bandeirante",
        observacao:"está em mantenção até amanhã",
        valorDasPecas:1500,
        valorDoServico:5000
    }

    document.getElementById("aeronave").innerHTML = `Aeronave: ${manutencao.aeronave}`
    document.getElementById("observacao").innerHTML = `Observação: ${manutencao.observacao}`
    document.getElementById("valorDasPecas").innerHTML = `Valor das Peças: ${manutencao.valorDasPecas}`
    document.getElementById("valorDoServico").innerHTML = `Valor do Serviço: ${manutencao.valorDoServico}`
    const total = manutencao.valorDasPecas + manutencao.valorDoServico
    document.getElementById("valorTotal").innerHTML = `Total: ${total}`
}
