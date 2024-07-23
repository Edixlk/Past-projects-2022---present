// for mobile navbar
let nav = document.getElementById("mnav-links")
nav.style.display ="none";

function ToggleNav  () {
    if (nav.style.display == "none") {
        nav.style.display ="block";
    }

    else {
        nav.style.display = "none";
    }

}

//for logo (redirects to homepage)

let logo = document.getElementById ("n-logo").onclick  = function Home () {
    window.location = "login.html";
   }


   // sign in dialog  (mobile)

function MobLogin() {
    window.location = "login.html";
}

function CloseBtn () {
    let signDia = document.getElementById("mobile-sign-in-dia")
    signDia.style.display ="none";
}

function MobLogin() {
    window.location = "login.html";
}

//sign in button ( for bigger screens )

function Login () {
    window.location = "login.html"
}
