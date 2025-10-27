// Slider Code...
function sliderWorking() {
    document.addEventListener("DOMContentLoaded", ()=>{
        const slider = document.querySelector(".slider");
        const slidesContainer = document.querySelector(".slides");
        const dots = document.querySelectorAll(".dot");
        if (!slider || !slidesContainer || dots.length === 0) {
            console.error("Slider, slides, or dots not found!");
            return;
        }
        let currentIndex = 0;
        const totalSlides = slidesContainer.children.length;
        let slideWidth = 0;
        let autoSlideInterval = null;
        // Start auto-slide
        const startAutoSlide = ()=>{
            if (autoSlideInterval) return;
            slideWidth = slider.offsetWidth;
            autoSlideInterval = setInterval(()=>{
                currentIndex = (currentIndex + 1) % totalSlides;
                goToSlide(currentIndex);
            }, 2000);
        };
        // Stop auto-slide
        const stopAutoSlide = ()=>{
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = null;
            }
        };
        // Go to specific slide
        const goToSlide = (index)=>{
            currentIndex = index;
            slider.scrollTo({
                left: currentIndex * slideWidth,
                behavior: "smooth"
            });
            updateDots();
        };
        // Update dots active state
        const updateDots = ()=>{
            dots.forEach((dot, i)=>{
                dot.style.backgroundColor = i === currentIndex ? "#1f2937" : "#d1d5db";
                dot.style.transform = i === currentIndex ? "scale(1.3)" : "scale(1)";
            });
        };
        // Initialize
        requestAnimationFrame(()=>{
            slideWidth = slider.offsetWidth;
            goToSlide(0);
            startAutoSlide();
        });
        // === DOT CLICK NAVIGATION ===
        dots.forEach((dot, index)=>{
            dot.addEventListener("click", ()=>{
                stopAutoSlide();
                goToSlide(index);
                startAutoSlide();
            });
        });
        // === PAUSE ON HOVER ===
        slider.addEventListener("mouseenter", stopAutoSlide);
        slider.addEventListener("mouseleave", startAutoSlide);
        // === MOBILE TOUCH SUPPORT ===
        slider.addEventListener("touchstart", stopAutoSlide);
        slider.addEventListener("touchend", startAutoSlide);
    });
}
sliderWorking();
// Form Code...
function sendToWhatsApp(event) {
    event.preventDefault(); // Stop normal form submit
    // Get all values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;
    const budget = document.getElementById("budget").value;
    const project = document.getElementById("subject").value;
    const details = document.getElementById("details").value;
    // Build message
    const message = `
        *New Project Inquiry!*

        *Name:* ${name}
        *Email:* ${email}
        *Location:* ${location}
        *Budget:* \u{20B9}${budget}
        *Project:* ${project}

        *Details:* 
        ${details}

        (Main aapke portfolio se hu!)`.trim();
    // Encode for URL
    const encoded = encodeURIComponent(message);
    const phone = "923243928582";
    // Open WhatsApp
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
}

//# sourceMappingURL=Porfolio.f3bd186e.js.map
