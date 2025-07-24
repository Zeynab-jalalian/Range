const sliderValueSpan=document.querySelector(".sliderValue span"),
     input=document.querySelector("input");

input.oninput=(()=>{
    let value=input.value;
    sliderValueSpan.textContent=value;
    sliderValueSpan.style.left=(value/2) + '%';
    sliderValueSpan.classList.add("show");
})

input.onblur=(()=>{
       sliderValueSpan.classList.remove("show");
})