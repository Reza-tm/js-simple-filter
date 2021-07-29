let abnarAval = [
    {prodName : 'socks'},
    {prodName : 'scarf'},
    {prodName : 'pants'},
    {prodName : 'handglow'},
    {prodName : 'Tshirt'},
] ;

let divContent = document.querySelector('.content');
let searchInput = document.querySelector('#search') ;
let body = document.querySelector('body');
let xIcon = document.querySelector('.close')
let filteration = '' ;

function renderFilter (anbar , filter) {
    let filterKey = anbar.filter((item)=>{
        return ( item.prodName.toLowerCase().includes(filter.toLowerCase()))
    })
    divContent.innerHTML= ''
    let eachItem = filterKey.forEach((item)=>{
      let h2 = document.createElement('h2') ;
      h2.textContent = item.prodName ;
      divContent.appendChild(h2)
    })
}
renderFilter(abnarAval , filteration)

searchInput.addEventListener('input' , (consept)=>{
    filteration = consept.target.value ;
    renderFilter(abnarAval , filteration)
})
searchInput.addEventListener('click' , ()=>{
    divContent.classList.add('change') ;
    xIcon.classList.add('xIcon');
})
xIcon.addEventListener('click' , ()=>{
    divContent.classList.remove('change');
    xIcon.classList.remove('xIcon')
})