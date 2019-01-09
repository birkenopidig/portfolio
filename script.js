window.addEventListener("load", sidenVises);
function sidenVises() {
    console.log("siden vises");
    document.querySelector(".button1").addEventListener("click", hideForside);
    document.querySelector(".button2").addEventListener("click", hideForside2);
}

let count = 0;

function hideForside() {
    console.log("forside gemmes")
    document.querySelector("#forside").classList.add("fade_out");
    showPortfolio();
}

function hideForside2() {
    console.log("forside gemmes");
    document.querySelector("#forside").classList.add("fade_out");
    showCvForside();
}

function showCvForside(){
    console.log("count"+count);
    console.log("CV Vises fra forside");
    document.querySelector("#cv").classList.remove("hide");
    document.querySelector("#cv").classList.add("fade_in");
    document.querySelector(".button5").addEventListener("click", hideCvShowForside);
    document.querySelector(".button6").addEventListener("click", hideCvShowPortfolio);
    document.querySelector("#choice1").addEventListener("click", whereUFrom);
    document.querySelector("#choice2").addEventListener("click", myWork);
    document.querySelector("#choice3").addEventListener("click", whatUDo);
    document.querySelector("#choice4").addEventListener("click", sales);
    document.querySelector("#choice5").addEventListener("click", some);
    document.querySelector("#choice6").addEventListener("click", webshop);
    document.querySelector("#choice7").addEventListener("click", kontakt);


}

function myWork(){
    console.log("Hvad har du lavet førhen?");
    console.log("count"+count);
    document.querySelector("#mywork").classList.remove("hide")
    document.querySelector("#whatdoyoudo").classList.add("hide");;
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#imfrom").classList.add("hide");
    document.querySelector("#choice2").classList.add("fade_out");
    count++;
    status();
}

function whereUFrom(){
    console.log("hvor er du fra mads?");
    console.log("count"+count);
    document.querySelector("#whatdoyoudo").classList.add("hide");
    document.querySelector("#imfrom").classList.remove("hide");
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#mywork").classList.add("hide");
    document.querySelector("#choice1").classList.add("fade_out");
    count++;
    status();
}

function whatUDo(){
    console.log("hvad laver du mads?");
    console.log("count"+count);
    document.querySelector("#whatdoyoudo").classList.remove("hide");
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#mywork").classList.add("hide");
    document.querySelector("#imfrom").classList.add("hide");
    document.querySelector("#choice3").classList.add("fade_out");
    count++;
    status();
}

function status() {
    console.log("status");
    if (count === 3) {
        showNewButtons();
    }
    else if (count === 6) {
        showFinalButtons();
    }
}
function showNewButtons(){
    console.log("viser nye knapper")
    document.querySelector("#choices2").classList.remove("hide");
}

function showFinalButtons(){
    console.log("viser sidste knapper")
    document.querySelector("#choices3").classList.remove("hide");
}

function sales(){
    console.log("sales");
    document.querySelector("#sales").classList.remove("hide");
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#some").classList.add("hide");
    document.querySelector("#mywork").classList.add("hide");
    document.querySelector("#imfrom").classList.add("hide");
    document.querySelector("#whatdoyoudo").classList.add("hide");
    document.querySelector("#choice4").classList.add("fade_out");
    count++;
    status();
}

function some(){
    console.log("some");
    document.querySelector("#some").classList.remove("hide");
    document.querySelector("#sales").classList.add("hide");
    document.querySelector("#webshop").classList.add("hide");
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#mywork").classList.add("hide");
    document.querySelector("#imfrom").classList.add("hide");
    document.querySelector("#whatdoyoudo").classList.add("hide");
    document.querySelector("#choice5").classList.add("fade_out");
    count++;
    status();
}

function webshop(){
    console.log("webshop");
    document.querySelector("#webshop").classList.remove("hide");
    document.querySelector("#sales").classList.add("hide");
    document.querySelector("#some").classList.add("hide");
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#mywork").classList.add("hide");
    document.querySelector("#imfrom").classList.add("hide");
    document.querySelector("#whatdoyoudo").classList.add("hide");
    document.querySelector("#choice6").classList.add("fade_out");
    count++;
    status();
}

function kontakt(){
    console.log("kontakt");
    document.querySelector("#kontakt").classList.remove("hide");
    document.querySelector("#webshop").classList.add("hide");
    document.querySelector("#sales").classList.add("hide");
    document.querySelector("#some").classList.add("hide");
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#mywork").classList.add("hide");
    document.querySelector("#imfrom").classList.add("hide");
    document.querySelector("#whatdoyoudo").classList.add("hide");
    document.querySelector("#choice7").classList.add("fade_out");
    document.querySelector("#buttons3").classList.remove("hide");

}


function hideCvShowPortfolio(){
    console.log("cv gemmes");
    document.querySelector("#cv").classList.add("fade_out");
    document.querySelector("#cv").classList.add("hide");
    showPortfolio();
}

function hideCvShowForside(){
    console.log("CV gemmes");
    document.querySelector("#cv").classList.add("fade_out");
    document.querySelector("#cv").classList.add("hide");
    showForside();

}

function showPortfolio() {
    console.log("portfolio vises")
    document.querySelector("#portfolio").classList.remove("hide");
    document.querySelector("#portfolio").classList.add("fade_in");
    document.querySelector(".box1").addEventListener("click", showWebdesign);
    document.querySelector(".box2").addEventListener("click", showIndhold);
    document.querySelector(".box3").addEventListener("click", showAnimation1);
    document.querySelector(".box4").addEventListener("click", showAnimation2);
    document.querySelector(".box5").addEventListener("click", showUx);
    document.querySelector(".button3").addEventListener("click", showForside);
    document.querySelector(".button4").addEventListener("click", hidePortfolioShowCv);
}

function hidePortfolioShowCv() {
    console.log("portfolio skjules, cv vises");
    document.querySelector("#portfolio").classList.add("fade_out");
    document.querySelector("#portfolio").classList.add("hide");
    showCvForside();
}

function showForside() {
    console.log("viser forside");
    document.querySelector("#portfolio").classList.add("fade_out");
    document.querySelector("#portfolio").classList.add("hide");
    document.querySelector("#portfolio").classList.remove("fade_in");
    document.querySelector("#forside").classList.remove("fade_out");
    document.querySelector(".button1").addEventListener("click", hideForside);
    document.querySelector(".button2").addEventListener("click", hideForside2);
}

function showWebdesign() {
    console.log("viser webdesign")
    document.querySelector("#webdesign").classList.remove("hide");
    document.querySelector("#webdesign").classList.remove("fade_out");
    document.querySelector("#portfolio").classList.add("fade_out");
    document.querySelector("#portfolio").classList.remove("fade_in");
    document.querySelector("#back").addEventListener("click", hideWebdesign);
    hideBack();
}

function hideWebdesign() {
    console.log("gemmer webdesign")
    document.querySelector("#webdesign").classList.remove("fade_in");
    document.querySelector("#webdesign").classList.add("fade_out");
    document.querySelector("#webdesign").classList.add("hide");
    showPortfolio();
}

function showIndhold() {
    console.log("viser indhold")
    document.querySelector("#indhold").classList.remove("hide");
    document.querySelector("#indhold").classList.remove("fade_out");
    document.querySelector("#portfolio").classList.add("fade_out");
    document.querySelector("#portfolio").classList.remove("fade_in");
    document.querySelector("#back2").addEventListener("click", hideIndhold);
}

function hideIndhold() {
    console.log("gemmer indhold")
    document.querySelector("#indhold").classList.remove("fade_in");
    document.querySelector("#indhold").classList.add("fade_out");
    document.querySelector("#indhold").classList.add("hide");
    showPortfolio();
}

function showAnimation1() {
    console.log("viser britta")
    document.querySelector("#animation1").classList.remove("hide");
    document.querySelector("#animation1").classList.remove("fade_out");
    document.querySelector("#portfolio").classList.add("fade_out");
    document.querySelector("#portfolio").classList.remove("fade_in");
    document.querySelector("#back3").addEventListener("click", hideAnimation1);
}

function hideAnimation1() {
    console.log("gemmer britta")
    document.querySelector("#animation1").classList.remove("fade_in");
    document.querySelector("#animation1").classList.add("fade_out");
    document.querySelector("#animation1").classList.add("hide");
    showPortfolio();
}
function showAnimation2() {
    console.log("viser delerdu")
    document.querySelector("#animation2").classList.remove("hide");
    document.querySelector("#animation2").classList.remove("fade_out");
    document.querySelector("#portfolio").classList.add("fade_out");
    document.querySelector("#portfolio").classList.remove("fade_in");
    document.querySelector("#back4").addEventListener("click", hideAnimation2);
}

function hideAnimation2() {
    console.log("gemmer delerdu")
    document.querySelector("#animation2").classList.remove("fade_in");
    document.querySelector("#animation2").classList.add("fade_out");
    document.querySelector("#animation2").classList.add("hide");
    showPortfolio();
}

function showUx() {
    console.log("viser UX")
    document.querySelector("#ux").classList.remove("hide");
    document.querySelector("#ux").classList.remove("fade_out");
    document.querySelector("#portfolio").classList.add("fade_out");
    document.querySelector("#portfolio").classList.remove("fade_in");
    document.querySelector("#back5").addEventListener("click", hideUx);
}

function hideUx() {
    console.log("gemmer UX")
    document.querySelector("#ux").classList.remove("fade_in");
    document.querySelector("#ux").classList.add("fade_out");
    document.querySelector("#ux").classList.add("hide");
    showPortfolio();
}


