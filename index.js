let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let h3 = document.querySelector("h3");
    let random_number = get_random_number();
    h3.innerText= random_number;

    let back = document.querySelector("div");
    back.style.backgroundColor = random_number;

})

function get_random_number(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}




