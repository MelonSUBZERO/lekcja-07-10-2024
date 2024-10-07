const body = document.querySelector("body")
// ZADANIE 1
// const div = document.createElement("div")
// body.appendChild(div)
// div.style.width = "300px"
// div.style.height = "300px"
// div.style.border = "2px solid black"
// const p = document.createElement("p")
// p.innerHTML = "To jest paragraf"
// div.appendChild(p)
// p.style.textAlign = "center"
// const btn1 = document.createElement("button")
// const btn2 = document.createElement("button")
// const br = document.createElement("br")
// p.appendChild(br)
// p.appendChild(btn1)
// p.appendChild(btn2)
// const br2 = document.createElement("br")
// p.appendChild(br2)
// const usun = document.createElement("button")
// p.appendChild(usun)
// usun.innerHTML = "USUŃ"
// usun.addEventListener("click", ()=>{
//     p.remove()
//     usun.remove()
//     div.appendChild(br)
//     div.appendChild(btn1)
//     div.appendChild(btn2)
//     div.appendChild(br2)
//     div.style.textAlign = "center"
// })
// btn1.innerHTML = "CZERWONY"
// btn2.innerHTML = "ZIELONY"
// btn1.addEventListener("click", ()=>{
//     div.style.backgroundColor = "red"
//     p.style.color = "white"
//     btn1.style.backgroundColor = "red"
//     btn2.style.backgroundColor = "green"
//     btn1.style.color = "white"
//     btn2.style.color = "white"
// })
// btn2.addEventListener("click", ()=>{
//     div.style.backgroundColor = "green"
//     p.style.color = "white"
//     btn2.style.backgroundColor = "green"
//     btn1.style.backgroundColor = "red"
//     btn1.style.color = "white"
//     btn2.style.color = "white"
// }) 
// ZADANIE 2
// const inp = document.createElement("input")
// body.appendChild(inp)
// const dodaj = document.createElement("button")
// body.appendChild(dodaj)
// dodaj.innerHTML = "ADD"
// const br4 = document.createElement("br")
//     body.appendChild(br4)
// dodaj.addEventListener("click", ()=>{
//     const value = inp.value;
//     const ul = document.createElement("ul")
//     body.appendChild(ul);
//     const li = document.createElement("li")
//     ul.appendChild(li)
//     li.innerHTML = value
// })
// inp.style.marginRight = "15px"
// ZADANIE 3
const inp = document.createElement("input")
body.appendChild(inp)
const ok = document.createElement("button")
body.appendChild(ok)
ok.innerHTML = "OK"
ok.addEventListener("click", ()=>{
    const value = inp.value;
    const a = document.createElement("a")
    const br = document.createElement("br")
    a.setAttribute("href", `https://${value}`)
    a.setAttribute("target", "_blank")
    a.innerHTML = value
    body.appendChild(br)
    body.appendChild(a)
 })
