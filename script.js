
const gift = document.getElementById("gift"); 
const intro = document.getElementById("intro"); 
const giftSection = document.getElementById("giftSection"); 
const letterSection = document.getElementById("letterSection"); 
 
let opened = false; 
 
gift.addEventListener("click", () => { 
 
    if (opened) return; 
 
    opened = true; 
 
    /* Gift opens */ 
    gift.classList.add("open"); 
 
    /* Hide little instruction */ 
    document.querySelector(".open-text").style.opacity = "0"; 
 
    /* Move intro away */ 
    setTimeout(() => { 
        intro.style.opacity = "0"; 
        intro.style.transform = "translateX(-50%) translateY(-30px)"; 
    }, 300); 
 
    /* Hide gift */ 
    setTimeout(() => { 
        giftSection.style.opacity = "0"; 
        giftSection.style.transform = 
            "translateX(-50%) translateY(30px)"; 
    }, 900); 
 
    /* Show letter */ 
    setTimeout(() => { 
        letterSection.classList.add("show"); 
    }, 1300); 
 
});

