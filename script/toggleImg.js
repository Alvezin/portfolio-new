
const btnAvanco = document.getElementById('frente');
const btnVoltar = document.getElementById('voltar');

btnAvanco.addEventListener('click', function(){
    const projetos = document.querySelector('.container').children;
    

    let i;
    for (i = 0; i < projetos.length; i++){
        
        if (projetos[i].classList.contains('active')){

            projetos[i].classList.remove('active')
            
            projetos[i++].classList.add('active')
        }
        
    }
    
    

})
