let btn = document.querySelector(".toggler-btn")
let mode = "Light"
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
btn.addEventListener("click",() => {
    if(mode === "Light")
      {
        mode = "Dark";
        let node = document.querySelector("body");
        node.style.backgroundColor = "Black";
        node.style.color = "white";
        img1.style.display = "none";
        img2.style.display = "flex";
      }
    else if (mode === "Dark")
       {
        mode = "Light";
        let node = document.querySelector("body");
        node.style.backgroundColor = "White";
        node.style.color = "black";
        img1.style.display = "flex";
        img2.style.display = "none";}
    else{console.log("Error")}
})