const wrapper = document.querySelector('.wrapper')
const main = document.querySelector('.main')
const shoe = document.getElementById('shoe')
const backgroundShoe = document.querySelector('.background')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')


wrapper.addEventListener('mousemove', (e) => {
  let windowWidth = ((window.innerWidth / 2 - e.pageX) / 30);
  let windowHeight = ((window.innerHeight / 2 - e.pageY) / 30);
  wrapper.style.transform = `rotateX(${windowWidth}deg) rotateY(${windowHeight}deg)`
})

wrapper.addEventListener('mouseleave', (e) => {
  wrapper.style.transform = `rotateX(0deg) rotateY(0deg)`;
  wrapper.style.transition = `1s`;
  shoe.style.transform = 'translateZ(0)'
  backgroundShoe.style.transform = 'translateZ(0) translate(-50%,-50%)'
  shoe.style.transform = 'translateZ(0) translate(-50%,-50%)'
  h1.style.transform = 'translateZ(0) translateX(-50%) translateY(0)'
  h2.style.transform = 'translateZ(0)'
  h2.style.textShadow = 'none'
  h1.style.textShadow = 'none'
  backgroundShoe.style.boxShadow = 'none'
})
wrapper.addEventListener('mouseenter', () => {
  wrapper.style.transition = `0.1s`;
  console.log('dziala')
  backgroundShoe.style.transform = 'translateZ(30px) translateX(-50%)'
  shoe.style.transform = 'translateZ(40px) translateX(-50%)'
  h1.style.transform = 'translateZ(32px) translateX(-50%) translateY(60px)'
  h2.style.transform = 'translateZ(30px) translateY(20px)'
  h2.style.textShadow = '2px 2px 4px black'
  h1.style.textShadow = '2px 2px 4px black'
  backgroundShoe.style.boxShadow = '2px 2px 4px black'

})