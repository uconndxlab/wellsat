document.addEventListener("DOMContentLoaded", function() {

    let create = document.querySelector(".policy-btn")
    let preInfo = document.querySelector(".pre-assess")
    let exit = document.querySelector(".pre-exit")

    preInfo.style.opacity = "0"
    preInfo.style.display = "none"

    create.addEventListener("click", preOpen)
    exit.addEventListener("click", preClose)

    function preOpen() {
        preInfo.style.display = "block"
        setTimeout(function(){
            preInfo.style.opacity =  "1"
        }, 10)
    }

    function preClose() {
        preInfo.style.opacity =  "0"
        setTimeout(function(){
            preInfo.style.display = "none"
        }, 300)
    }

})