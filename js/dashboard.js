document.addEventListener("DOMContentLoaded", function() {

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