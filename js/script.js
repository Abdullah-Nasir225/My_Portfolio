
const bodyid = document.body.id;


// Toggler mavigation menu
const ham =  document.querySelector('.hamburgers');
ham.addEventListener('click',(()=>{
    const nav = document.querySelector('#nav');
    nav.classList.toggle('act');
    let s1 = document.querySelector('#sp1');
    let s2 = document.querySelector('#sp2');
    let s3 = document.querySelector('#sp3');
    s1.classList.toggle('rotate1');
    s2.classList.toggle('dis');
    s3.classList.toggle('rotate2');
    document.body.classList.toggle('fix');

  }))

 window.addEventListener('load',(()=>{
  let loader = document.querySelector('.load');
  loader.classList.add('load-hidden');
  loader.addEventListener('transitionend',(()=>{
    document.removeChild('loader');
  }))
}))

let nav = document.querySelectorAll('.nav-linked');

nav.forEach((element)=>{
  element.classList.add('clr');
  element.addEventListener('click',function(){
    nav.forEach((element)=>{
      element.classList.remove('activ');
    })
    this.classList.add('activ');
  })
})

document.querySelector('.img-logo').addEventListener('click',(()=>{
  location.href="index.html";
}))

let scroll = document.querySelector('.scrol');
window.addEventListener('scroll',(()=>{
  let scroll = document.querySelector('.scrol');
  if(window.scrollY >= 120){
    scroll.classList.remove('dis');
  }
  else{
    scroll.classList.add('dis');
  }
}))
scroll.addEventListener('click',(()=>{
  window.scrollTo(0,0);
}))

scroll.addEventListener('mouseenter',(()=>{
  let arr = document.querySelector('.arr');
  arr.style.Color = "rgb(248, 182, 60)";
}))

  const all_img1 = document.querySelectorAll('.small-img1');
  const big1 = document.querySelector('.big-img1');
  const all_img2 = document.querySelectorAll('.small-img2');
  const big2 = document.querySelector('.big-img2');
// First Project
    all_img1.forEach((element)=>{
      element.addEventListener('click',(()=>{
        big1.src = element.src;
        big1.classList.add('text-focus-in');
        setTimeout(()=>{
          big1.classList.remove('text-focus-in')
        },1000)
    }))
  })
// Second Project
  all_img2.forEach((element)=>{
      element.addEventListener('click',(()=>{
        big2.src = element.src;
        big2.classList.add('text-focus-in');
        setTimeout(()=>{
          big2.classList.remove('text-focus-in')
        },1000)
    }))
  })

if(bodyid === "home"){

    
  let second = document.querySelector('.second-text');
  function Change(){
    setTimeout(()=>{
      second.textContent = 'HTML5'
      second.classList.add('text-focus-in');
    },0)
    setTimeout(() => {
        second.classList.remove('text-focus-in');
    }, 1000);
    setTimeout(()=>{
      second.textContent = 'CSS3'
      second.classList.add('text-focus-in');
    },2000)
    setTimeout(() => {
      second.classList.remove('text-focus-in');
  }, 3000);

    setTimeout(()=>{
      second.textContent = 'JavaScript'
      second.classList.add('text-focus-in');
    },4000)
    setTimeout(() => {
      second.classList.remove('text-focus-in');
  }, 5000);
  
    setTimeout(()=>{
      second.textContent = 'BootStrap'
      second.classList.add('text-focus-in');
    },6000)
    setTimeout(() => {
        second.classList.remove('text-focus-in')
    }, 7000);
    
    setTimeout(()=>{
      second.textContent = 'Figma'
      second.classList.add('text-focus-in');
    },8000)
    setTimeout(() => {
        second.classList.remove('text-focus-in')
    }, 9000);
    setTimeout(()=>{
      second.textContent = 'React'
      second.classList.add('text-focus-in');
    },10000)
    setTimeout(() => {
        second.classList.remove('text-focus-in')
    }, 11000);
    setTimeout(()=>{
      second.textContent = 'WordPress'
      second.classList.add('text-focus-in');
    },12000)
    setTimeout(() => {
        second.classList.remove('text-focus-in')
    }, 13000);
    
    setTimeout(()=>{
      second.textContent = 'Material UI'
      second.classList.add('text-focus-in');
    },14000)
    setTimeout(() => {
        second.classList.remove('text-focus-in')
    }, 15000);
    
  }
  Change();
  setInterval(Change,16000)
  
  
  let pro  = document.querySelectorAll('.pro-btn');
  pro.forEach((element)=>{
    // element.classList.add('bg-yellow');
    element.addEventListener('click',function(){
      pro.forEach((element)=>{
        element.classList.remove('bg-yellow');
      })
      this.classList.add('bg-yellow');
    })
  })

     }

      
  // })();
  
  // This will load the animation
     
 
  function sendEmail() {
    window.location.href = "mailto:abdullahnasirab23@gmail.com?subject=Subject%20Here&body=Hello%20there!";
}

function submitted(){
  let first = document.querySelector('.fst-area').value;
  let last = document.querySelector('.lst-area').value;
  let mail = document.querySelector('.mal-area').value;
  let contact = document.querySelector('.cnt-area').value;
  let text = document.querySelector('.txt-area').value;


  if(first != null && last != null && mail != null && contact != null && text != null){
    alert("Thanks you!");
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
}
