const frm = document.querySelector("form")
const filme = document.getElementById("filme")
const duracao = document.getElementById("duracao")

frm.addEventListener("submit", (e)=>{
    const nomeFilme = frm.nomeFilme.value
    const tempoDuracao = ((frm.tempoDuracao.value / 60 ) >> 0)
    const tempoRestante = (frm.tempoDuracao.value % 60)
    filme.innerText = `Filme: ${nomeFilme}`
    duracao.innerText = `Tempo: ${tempoDuracao} horas e ${tempoRestante} minutos`
    e.preventDefault()
})

