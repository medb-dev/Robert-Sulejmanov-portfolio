function fromHomeToAbout(){
    window.location.href = '#foo';
}

const buttonScrollDown = document.querySelectorAll("a.scrolldown-btn"); 
buttonScrollDown.forEach(b=>{
    b.addEventListener('click', fromHomeToAbout); 
    console.log('scrolling down');
});   
