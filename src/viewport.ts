export function disableTouchManipulationGestures() {
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
  });

  document.addEventListener('gesturechange', (e) => {
    e.preventDefault();
  });

  document.addEventListener('gestureend', (e) => {
    e.preventDefault();
  });

  document.addEventListener('scroll', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
}

export function observeVisualViewport(callback: (visualViewport: VisualViewport) => unknown) {
  let pendingUpdate = false;

  function update() {
    // If we're already going to handle an update, return
    if (pendingUpdate) return;

    pendingUpdate = true;

    // Use requestAnimationFrame so the update happens before next render
    requestAnimationFrame(() => {
      pendingUpdate = false;

      // Handle update here
      callback(window.visualViewport)
      const appContainer = document.getElementById('appContainer')
      if (appContainer !== null) {
        callback(window.visualViewport)
        appContainer.style.height = window.visualViewport.height + 'px'
        let root = document.documentElement;
        root.style.setProperty('--app-height', appContainer.style.height);
      }
    });
  }

  visualViewport.addEventListener('scroll', update);
  visualViewport.addEventListener('resize', update);
  addEventListener('scroll', update);

  // Trigger an update the first time the event listeners are added
  update();
}
