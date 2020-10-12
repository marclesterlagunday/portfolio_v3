let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('default');
}else{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for(var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

function setTheme(mode){
    if(mode == 'default'){
        document.getElementById('theme-style').href = 'default.css';
        document.getElementById('url-color-1').content = '#eaeaea';
        document.getElementById('url-color-2').content = '#eaeaea';
        document.getElementById('url-color-3').content = '#eaeaea';
    }

    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
        document.getElementById('url-color-1').content = '#15202b';
        document.getElementById('url-color-2').content = '#15202b';
        document.getElementById('url-color-3').content = '#15202b';
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css';
        document.getElementById('url-color-1').content = '#606b56';
        document.getElementById('url-color-2').content = '#606b56';
        document.getElementById('url-color-3').content = '#606b56';
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css';
        document.getElementById('url-color-1').content = '#46344e';
        document.getElementById('url-color-2').content = '#46344e';
        document.getElementById('url-color-3').content = '#46344e';
    }

    localStorage.setItem('theme', mode);
}