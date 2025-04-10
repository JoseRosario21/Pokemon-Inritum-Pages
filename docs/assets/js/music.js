if (!window.bgMusic) {
    window.bgMusic = new Audio("/assets/audio/inritum-theme.ogg");
    window.bgMusic.loop = true;
    window.bgMusic.volume = 0.2;
  
    // Try playing on load (will fail silently on some browsers)
    window.bgMusic.play().catch(() => {
      console.log("Autoplay blocked. Waiting for user interaction.");
    });
  
    // Start music on user interaction (e.g. click anywhere)
    document.addEventListener("click", () => {
      if (window.bgMusic.paused) {
        window.bgMusic.play();
      }
    });
  }