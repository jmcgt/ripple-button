const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => {
    btn.addEventListener('mouseenter', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        let ripples = document.createElement('span');
        ripples.className = 'ripples';
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        
        this.appendChild(ripples);
        
        setTimeout(() => {
            ripples.remove()
        }, 1000);
    });
    
    /*btn.addEventListener('animationend', () => {
        var ondas = document.getElementsByClassName('ripples');
        while(ondas[0])
        {
            ondas[0].remove();
        }
    });*/
});