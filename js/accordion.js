const accordions = document.getElementsByClassName('question-cont');

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        const content = this.querySelector('.question-content');
        if (this.classList.contains('active')) {
            this.classList.remove('active');
            content.style.maxHeight = null;
        } else {
            this.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}