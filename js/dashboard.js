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

    document.querySelectorAll('.checkbox').forEach(function(checkbox) {
        let checkAll = document.querySelector(".check-all")
        checkbox.addEventListener('change', function() {
            const row = this.closest('tr');
            if (this.checked) {
                row.style.background = "#70747b";
                row.style.color = "white";
            } else {
                row.style.background = "#ebf0f7";
                row.style.color = "#70747b";
            }
        });
        checkAll.addEventListener('change', function() {
            const row = checkbox.closest('tr');
            if(this.checked) {
                checkbox.checked = true
                row.style.background = "#70747b";
                row.style.color = "white";
            } else {
                checkbox.checked = false
                row.style.background = "#ebf0f7";
                row.style.color = "#70747b";
            }
        })
    });
})