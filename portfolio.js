

/* Skills.html - BUTTONS */
//Information texts
let htmlText = document.getElementById('html');
let cssText = document.getElementById('css');
let jsText = document.getElementById('JavaScript');
let pythonText = document.getElementById('python');
let gitText = document.getElementById('git');
let nodeText = document.getElementById('node');
let PHPText = document.getElementById('PHP');
let jQueryText = document.getElementById('jQuery');
let bootstrapText = document.getElementById('bootstrap')

//logo buttons
let htmlButton = document.getElementById('html-logo');
let cssButton = document.getElementById('css-logo');
let jsButton = document.getElementById('js-logo');
let pythonButton = document.getElementById('python-logo');
let gitButton = document.getElementById('git-logo');
let nodeButton = document.getElementById('node-logo');
let PHPButton = document.getElementById('PHP-logo');
let jQueryButton = document.getElementById('jQuery-logo');
let bootstrapButton = document.getElementById('bootstrap-logo');


//Open HTML function & event listener
let openHTML = function(){
    cssText.style.display = 'none'
    jsText.style.display = 'none';
    pythonText.style.display = 'none';
    gitText.style.display = 'none';
    nodeText.style.display = 'none';
    PHPText.style.display = 'none';
    jQueryText.style.display = 'none';
    bootstrapText.style.display = 'none';

    htmlText.style.display = 'flex';
    htmlButton.style.opacity = '100%';

    cssButton.style.opacity = '30%';
    jsButton.style.opacity = '30%';
    pythonButton.style.opacity='30%';
    gitButton.style.opacity='30%';
    nodeButton.style.opacity = '30%';
    PHPButton.style.opacity = '30%';
    jQueryButton.style.opacity = '30%';
    bootstrapButton.style.opacity = '30%';
};

htmlButton.addEventListener('click', openHTML);


//Open CSS function & event listener
let openCSS = function(){
    htmlText.style.display = 'none';
    jsText.style.display = 'none';
    pythonText.style.display = 'none'
    gitText.style.display = 'none';
    nodeText.style.display = 'none';
    PHPText.style.display = 'none';
    jQueryText.style.display = 'none';
    bootstrapText.style.display = 'none';

    cssText.style.display = 'flex';
    cssButton.style.opacity = '100%';

    htmlButton.style.opacity = '30%';
    jsButton.style.opacity = '30%';
    pythonButton.style.opacity='30%';
    gitButton.style.opacity='30%';
    nodeButton.style.opacity = '30%';
    PHPButton.style.opacity = '30%';
    jQueryButton.style.opacity = '30%';
    bootstrapButton.style.opacity = '30%';
};

cssButton.addEventListener('click',openCSS);

//Open JavaScript function & event listener

let openJS = function(){
    htmlText.style.display = 'none';
    cssText.style.display = 'none';
    pythonText.style.display = 'none';
    gitText.style.display = 'none';
    nodeText.style.display = 'none';
    PHPText.style.display = 'none';
    jQueryText.style.display = 'none';
    bootstrapText.style.display = 'none';

    jsText.style.display = 'flex';
    jsButton.style.opacity = '100%';

    htmlButton.style.opacity = '30%';
    cssButton.style.opacity = '30%';
    pythonButton.style.opacity='30%';
    gitButton.style.opacity='30%';
    nodeButton.style.opacity = '30%';
    PHPButton.style.opacity = '30%';
    jQueryButton.style.opacity = '30%';
    bootstrapButton.style.opacity = '30%';
};

jsButton.addEventListener('click', openJS);

//Open jQuery function & event listener

let openjQuery = function(){
    htmlText.style.display = 'none';
    cssText.style.display = 'none';
    pythonText.style.display = 'none';
    gitText.style.display = 'none';
    nodeText.style.display = 'none';
    PHPText.style.display = 'none';
    jsText.style.display = 'none';
    bootstrapText.style.display = 'none';

    jQueryText.style.display = 'flex';
    jQueryButton.style.opacity = '100%';
    
    htmlButton.style.opacity = '30%';
    cssButton.style.opacity = '30%';
    pythonButton.style.opacity='30%';
    gitButton.style.opacity='30%';
    nodeButton.style.opacity = '30%';
    PHPButton.style.opacity = '30%';
    jsButton.style.opacity = '30%';
    bootstrapButton.style.opacity = '30%';
};

jQueryButton.addEventListener('click', openjQuery);

//Open bootstrap function & event listener

let openBootstrap = function(){
    htmlText.style.display = 'none';
    cssText.style.display = 'none';
    pythonText.style.display = 'none';
    gitText.style.display = 'none';
    nodeText.style.display = 'none';
    PHPText.style.display = 'none';
    jsText.style.display = 'none';
    jQueryText.style.display = 'none';
    
    bootstrapText.style.display = 'flex';
    bootstrapButton.style.opacity = '100%';

    htmlButton.style.opacity = '30%';
    cssButton.style.opacity = '30%';
    pythonButton.style.opacity='30%';
    gitButton.style.opacity='30%';
    nodeButton.style.opacity = '30%';
    PHPButton.style.opacity = '30%';
    jsButton.style.opacity = '30%';
    jQueryButton.style.opacity = '30%';
};

bootstrapButton.addEventListener('click', openBootstrap);

//Open PHP function & event listener

let openPHP = function(){
    htmlText.style.display = 'none';
    cssText.style.display = 'none';
    pythonText.style.display = 'none';
    gitText.style.display = 'none';
    nodeText.style.display = 'none';
    jsText.style.display = 'none';
    jQueryText.style.display = 'none';
    bootstrapText.style.display = 'none';

    PHPText.style.display = 'flex';
    PHPButton.style.opacity = '100%';

    htmlButton.style.opacity = '30%';
    cssButton.style.opacity = '30%';
    pythonButton.style.opacity='30%';
    gitButton.style.opacity='30%';
    nodeButton.style.opacity = '30%';
    jsButton.style.opacity = '30%';
    jQueryButton.style.opacity = '30%';
    bootstrapButton.style.opacity = '30%';
};

PHPButton.addEventListener('click', openPHP);

//Open Python function & event listener

let openPython = function(){
    htmlText.style.display = 'none';
    cssText.style.display = 'none';
    jsText.style.display = 'none';
    gitText.style.display = 'none';
    nodeText.style.display = 'none';
    PHPText.style.display = 'none';
    jQueryText.style.display = 'none';
    bootstrapText.style.display = 'none';

    pythonText.style.display = 'flex'
    pythonButton.style.opacity='100%'

    htmlButton.style.opacity = '30%';
    cssButton.style.opacity = '30%';
    jsButton.style.opacity='30%';
    gitButton.style.opacity='30%';
    nodeButton.style.opacity = '30%';
    PHPButton.style.opacity = '30%';
    jQueryButton.style.opacity = '30%';
    bootstrapButton.style.opacity = '30%';
}

pythonButton.addEventListener('click', openPython)

//Open Git function & event listener

let openGit = function(){
    htmlText.style.display = 'none';
    cssText.style.display = 'none';
    jsText.style.display = 'none';
    pythonText.style.display = 'none'
    nodeText.style.display = 'none';
    PHPText.style.display = 'none';
    jQueryText.style.display = 'none';
    bootstrapText.style.display = 'none';

    gitText.style.display = 'flex';
    gitButton.style.opacity = '100%';

    htmlButton.style.opacity = '30%';
    cssButton.style.opacity = '30%';
    jsButton.style.opacity ='30%';
    pythonButton.style.opacity = '30%';
    nodeButton.style.opacity = '30%';
    PHPButton.style.opacity = '30%';
    jQueryButton.style.opacity = '30%';
    bootstrapButton.style.opacity = '30%';

}

gitButton.addEventListener('click', openGit)

//Open Node function & event listener


let openNode = function(){
    htmlText.style.display = 'none';
    cssText.style.display = 'none';
    jsText.style.display = 'none';
    pythonText.style.display = 'none'
    gitText.style.display = 'none'; 
    PHPText.style.display = 'none';
    jQueryText.style.display = 'none';
    bootstrapText.style.display = 'none';

    nodeText.style.display= 'flex';
    nodeButton.style.opacity = '100%'

    htmlButton.style.opacity = '30%';
    cssButton.style.opacity = '30%';
    jsButton.style.opacity ='30%';
    pythonButton.style.opacity = '30%';
    gitButton.style.opacity = '30%';
    PHPButton.style.opacity = '30%';
    jQueryButton.style.opacity = '30%';
    bootstrapButton.style.opacity = '30%';
}

nodeButton.addEventListener('click', openNode)

/** FOOTER */
//Changing the GITHUB icon onmouseover




//function to be called with event listener




//Changing the GITHUB icon onmouseover
let gitHubLogo = document.getElementById('github-logo');

//function to be called with event listener
function changeLogoGitHub(){
    gitHubLogo.src = './media/logos/GitHub-onclick.png';
}
function changeBackGitHub(){
    gitHubLogo.src ='./media/logos/GitHub.png';
}

gitHubLogo.onmouseover = changeLogoGitHub;
gitHubLogo.onmouseout = changeBackGitHub;

//Changing the Linkedin icon onmouseover

let linkedinLogo = document.getElementById('linkedin-logo');

function changeLogoLinkedIn(){
    linkedinLogo.src ='./media/logos/Linkedin-onclick.png';
    
}

function changeBackLinkedIn(){
    linkedinLogo.src='./media/logos/Linkedin.png';
}

linkedinLogo.onmouseover = changeLogoLinkedIn;
linkedinLogo.onmouseout = changeBackLinkedIn;

