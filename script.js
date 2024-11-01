document.querySelectorAll('.img-galery').forEach(img => {
    img.addEventListener('click', function(){
        document.getElementById('modal-img').src = this.src
        document.getElementById('download').getAttribute('href') = this.src
    })
})

// foreach untuk perulangan