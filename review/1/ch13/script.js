const title = document.querySelector('#title');
title.onclick = function() {
    this.style.color = 'red';
    console.log(this.style.color);
}
title.addEventListener('click', function() {
    alert('클릭!');
})