//Hide the loader and show the main content
function hideLoader() {
  gsap.to(".loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.querySelector(".loader").style.display = "none";
      document.querySelector(".main-content").style.display = "block";
    },
  });
}

// Animate letters
function animateLetters() {
  const letters = gsap.utils.toArray(".letter");

  // Bounce animation
  gsap.fromTo(
    letters,
    { opacity: 0.1, scale: 0.5 },
    {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      stagger: 0.5,
      repeat: -1,
      ease: "bounce.out",
    }
  );

  // Hide indicator after a delay
  gsap.delayedCall(7, hideLoader);
}

// Start the animation
animateLetters();
