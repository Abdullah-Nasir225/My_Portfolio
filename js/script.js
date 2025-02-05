
const bodyid = document.body.id;

window.addEventListener('load',(()=>{
  let loader = document.querySelector('.load');
  loader.classList.add('load-hidden');
  loader.addEventListener('transitionend',(()=>{
    document.removeChild('loader');
  }))
}))

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
      second.classList.toggle('opac');
    },0)
    
    setTimeout(()=>{
      second.textContent = 'CSS3'
      second.classList.toggle('opac');
    },1000)
    setTimeout(()=>{
      second.textContent = 'JavaScript'
      second.classList.toggle('opac');
    },2000)
    
    setTimeout(()=>{
      second.textContent = 'BootStrap'
      second.classList.toggle('opac');
    },3000)
  }
  Change();
  setInterval(Change,4000)
  
  
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
    let pro_img =  document.querySelector('.proj-img');
    let proj_name  =  document.querySelector('.heading');
    let proj = document.querySelector('.proj-contain');
  function btn1(){
    pro_img.src = 'img/Capture1.png';
  
    proj_name.innerHTML = 'Design & Develop Responsive Agriculture Site';
    pro_img.classList.add('text-focus-in');
    proj_name.classList.add('text-focus-in');
    setTimeout(()=>{
      pro_img.classList.remove('text-focus-in');
      proj_name.classList.remove('text-focus-in');
    },1000)
  }
  function btn2(){
    pro_img.src = 'img/Capture.png';
    proj_name.innerHTML = 'Design & Develop Responsive Luxury Restaurant Site';
    pro_img.classList.add('text-focus-in');
    proj_name.classList.add('text-focus-in');
    setTimeout(()=>{
      pro_img.classList.remove('text-focus-in');
      proj_name.classList.remove('text-focus-in');
    },1000)
  }
  }

  const blink = document.querySelector('.cursor-div');
  // const para = document.querySelector('.standard-para');
  blink.classList.add('dis');
  
    setTimeout(() => {
      blink.classList.remove('dis');
      // para.classList.remove('dis');
    }, 1000);    
  setInterval(()=>{
        blink.classList.toggle('blink');
      },100)
      
  // })();
  
  // This will load the animation
    
  function Sub(){
  
    let mail = document.querySelector('.input-mail').value;
    let mail_val = document.querySelector('.input-mail');
  
    let para = document.querySelector('.sub-para');
    
    if(mail.includes("@") ){
      para.innerHTML = "Submitted"
      mail_val.value = "";
    
      setTimeout(()=>{
        window.location.reload();
      },2000)
    
    }
    else{
      para.innerHTML = "Enter a valid email address...";
    }
  }

