
/*CHANGING EMAIL ICON IN FOOTER ON MOUSEOVER */
let email_img = document.querySelector('.email-logo');



function changeIconEmail(){
    email_img.src = './media/logos/email-onclick.png'
    
}

function changeBackEmail(){
    email_img.src = './media/logos/email.png'

 }


 email_img.onmouseover = changeIconEmail;
 email_img.onmouseout = changeBackEmail;

 
/*CHANGING GITHUB ICON IN FOOTER ON MOUSEOVER */
let github_img = document.querySelector('.github-logo');


function changeIconGitHub(){
    github_img.src = './media/logos/GitHub-onclick.png'
    
}

function changeBackGitHub(){
    github_img.src = './media/logos/GitHub.png'

 }


 github_img.onmouseover = changeIconGitHub;
 github_img.onmouseout = changeBackGitHub;

 /*CHANGING LinkedIN ICON IN FOOTER ON MOUSEOVER */
let in_img = document.querySelector('.linkedin-logo');


function changeIconIn(){
    in_img.src = './media/logos/Linkedin-onclick.png'
    
}

function changeBackIn(){
    in_img.src = './media/logos/Linkedin.png'

 }


 in_img.onmouseover = changeIconIn;
 in_img.onmouseout = changeBackIn;