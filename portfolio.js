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

