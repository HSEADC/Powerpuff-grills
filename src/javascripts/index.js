import '../stylesheets/style.css'

document.addEventListener('DOMContentLoaded', function () {
  //переключение галереи
  const switchBack = document.querySelector('.switchBack')
  const switchFurther = document.querySelector('.switchFurther')
  const galleryImages = document.querySelectorAll('.gallery_image')
  let isFirstSetVisible = true

  function toggleImages() {
    galleryImages.forEach((img) => {
      img.classList.toggle('hideImg')
    })
    isFirstSetVisible = !isFirstSetVisible
  }

  switchBack.addEventListener('click', toggleImages)
  switchFurther.addEventListener('click', toggleImages)

  //Появление подписки на рассылку
  const hidden = document.querySelectorAll('.hidden')
  const button = document.querySelector('.email')

  button.addEventListener('click', function () {
    hidden.forEach((div) => {
      div.classList.remove('hidden')
    })
  })
})
