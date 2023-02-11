const displayContent = (id) => {
    if (document.getElementById) {
      let linkId = document.getElementById(id);
      let content = document.getElementsByClassName("contenttohide");
      for (let i = 0; i < content.length; i++) {
         content[i].style.display = "none";
      }
      linkId.style.display = "flex";
      document.getElementById("mobilemenu").style.display = "none";
      document.getElementById("header_text").innerText = id;
    } 
    return false;
}

const showMobileMenu = (state) => {
    state ? document.getElementById("mobilemenu").style.display = "flex" : document.getElementById("mobilemenu").style.display = "none";
}

const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("content__about_skills_experience_item");
    let dots = Array.from(document.getElementsByClassName("expdot"));

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < slides.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

let slideIndex = 1;
showSlides(slideIndex);

const increaseSlide = (n) => {
    showSlides(slideIndex += n);
}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
}