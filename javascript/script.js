// let menu = document.getElementById("menu");
// menu.addEventListener(onclick, displaymenu());
let isclicked = false;
function displaymenu(){
    if(!isclicked){
        document.getElementById("menutable").style.display = "flex";
        window.body.style.backgroundColor = "var(--secondcolor)";
        let pos = -150;
        let inter = setInterval(() => {
            if(pos < 35){
                window.menutable.style.top = pos + "px";
                pos+= 3;
            }
            else{
                clearInterval(inter);
            }
        }, 5);
        window.menu.style.gap = "0px";
        let dv = document.getElementsByClassName("dv");
        dv[0].style.display = "none";
        dv[1].style.position = "absolute";
        dv[1].style.transform = "rotate(-45deg)";
        dv[2].style.transform = "rotate(45deg)";
        isclicked = true;
    }
    else{
        let pos = 35;
        let inter = setInterval(() => {
            if(pos > -150){
                window.menutable.style.top = pos + "px";
                pos-= 3;
            }
            else{
                document.getElementById("menutable").style.display = "none";
                window.body.style.backgroundColor = "var(--primarycolor)";
                window.menu.style.gap = "3px";
                let dv = document.getElementsByClassName("dv");
                dv[0].style.display = "block";
                dv[1].style.position = "static";
                dv[1].style.transform = "rotate(0deg)";
                dv[2].style.transform = "rotate(0deg)";
                isclicked = false;
                clearInterval(inter);
            }
        }, 5);
    }
}
