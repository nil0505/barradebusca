let boxbuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnfechar = document.querySelector('.btn-fechar');
lupa.addEventListener('click'.()=>{
    boxbuscar.classList.add('ativar')
})
btnfechar.addEventListener('click'.()=>{
    boxbuscar.classList.remove('ativar')

})