const passwordG = (base, length) => {
    let password = ""
    
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * base.length)
        password += base.charAt(random)
    }
    return password
}

const generate = () => {
    
    let length = parseInt(cantidad.value)

    let base = "abcdefghijklmnopqrstuvwxyz"
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number = "0123456789"
    const symbols = "~!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/"

    if(check1.checked) base += mayus
    
    if(check2.checked) base += number
    if(check3.checked)  base += symbols
    
    GeneratedPass.innerText = passwordG(base, length)
}

window.addEventListener('DOMContentLoaded', () => {
    generar.addEventListener('click',() => {
        generate()
    })
})