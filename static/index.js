const toggle = document.getElementById('toggle');

function fun(){
    if(document.getElementById("navbar").style.height != "205px"){
        document.getElementById("navbar").style.height = "205px";
        document.getElementById("navItems").style.top = "0px";
        toggle.innerHTML = "Hide";
    }
    else{
        document.getElementById("navbar").style.height = "60px";
        document.getElementById("navItems").style.top = "-205px";
        toggle.innerHTML = "Show";
    }
}
