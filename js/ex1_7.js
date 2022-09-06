const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    const nomePiloto = frm.nomePiloto.value
    resp.innerText = `Olá ${nomePiloto}`
    e.preventDefault()
})