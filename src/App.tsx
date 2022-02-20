import {useRef, useState} from 'react'
import crossLight from './assets/cross-light.svg'
import crossDark from './assets/cross-dark.svg'
import infoLight from './assets/info-light.svg'
import infoDark from './assets/info-dark.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const base64Input = useRef(null)

  function handleFocus(){
    const base64InputElement = base64Input.current as HTMLTextAreaElement|null
    if (base64InputElement !== null) {
      let startTime = performance.now()

      function keepAtTopOfPage() {
        window.scrollTo(0, 0);
        if ((performance.now()) - startTime > 1000) {
          return
        }
        requestAnimationFrame(() => {
          keepAtTopOfPage()
        });
      }

      keepAtTopOfPage()
    }
  }

  let webkitHack  = {
    'outline': '0px'
  }
  let webkitHack2  = {
    'outline': '0px',
    'padding-top': 'calc(var(--app-height) / 2 + 1rem)'
  }
  let webkitHack3 = {
    'margin-top': 'calc(var(--app-height) / 2 + 0.5rem)'
  }
  let webkitHack4 = {
    'height': 'calc(var(--app-height) / 2)'
  }
  let webkitHack5 = {
    'top': 'calc(var(--app-height) - 4.5rem - env(safe-area-inset-bottom))'
  }

  return (
    <div className="App mx-auto" id="appContainer">
      <div className="absolute w-full h-full">
        <div className="relative h-full">
          <textarea
            ref={base64Input}
            onFocus={handleFocus}
            placeholder="Enter Base64"
            tabIndex={3}
            className="
              appearance-none bg-transparent text-md resize-none align-bottom
              h-full w-full rounded-none
              p-4 pr-12
              font-mono
              placeholder-slate-400 dark:placeholder-slate-600"
            style={webkitHack2}
          >
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
          </textarea>
          <button
            onClick={()=>{alert('hmmmmm'); base64Input?.focus()}}
            aria-label="Close"
            className="absolute right-0 m-2 p-2 rounded-lg"
            tabIndex={4}
            style={webkitHack3}>
            <picture>
              <source
                srcSet={crossDark}
                media="(prefers-color-scheme: dark)"/>
              <img src={crossLight} alt="Clear"/>
            </picture>
          </button>
          <button
            onClick={()=>{alert('What is this?'); base64Input?.focus()}}
            tabIndex={5}
            className="absolute left-0 m-4 text-slate-600 backdrop-blur dark:text-slate-400 bg-slate-300/20 dark:bg-slate-700/20 p-2 px-4 rounded-lg" style={webkitHack5}>
            <picture>
              <source
                srcSet={infoDark}
                media="(prefers-color-scheme: dark)"/>
                <img src={infoLight} alt="Close"/>
            </picture>
          </button>
          <button
            onClick={()=>{alert('sdfsd'); base64Input?.focus()}}
            tabIndex={6}
            className="absolute right-0 m-4 text-slate-600 backdrop-blur dark:text-slate-400 bg-slate-300/20 dark:bg-slate-700/20 p-2 px-4 rounded-lg font-semibold" style={webkitHack5}>Copy to clipboard</button>
        </div>
      </div>
      <div className="absolute top-0 w-full" style={webkitHack4}>
        <div className="h-full relative bg-slate-50 dark:bg-slate-900 border-b-2 border-dashed border-slate-300 dark:border-slate-700">
          <textarea
            placeholder="Enter text"
            className="
            appearance-none bg-transparent text-lg resize-none align-bottom
            h-full w-full rounded-none
            p-4 pr-12
            placeholder-slate-400 dark:placeholder-slate-600
            "
            tabIndex={1}
            style={webkitHack}
          >
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
            sdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd
          </textarea>
          <button
            onClick={()=>{alert('focus on text');}}
            aria-label="Close"
            className="absolute top-0 right-0 m-2 p-2 rounded-lg"
            tabIndex={2}
          >
            <picture>
              <source
                srcSet={crossDark}
                media="(prefers-color-scheme: dark)"/>
              <img src={crossLight} alt="Clear"/>
            </picture>
          </button>
        </div>
      </div>
    </div>
  )
}

// Prevent pinch gestures
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

// Add listeners
visualViewport.addEventListener('scroll', update);
visualViewport.addEventListener('resize', update);
addEventListener('scroll', update);

let pendingUpdate = false;

function update() {
  // If we're already going to handle an update, return
  if (pendingUpdate) return;

  pendingUpdate = true;

  // Use requestAnimationFrame so the update happens before next render
  requestAnimationFrame(() => {
    pendingUpdate = false;

    // Handle update here
    const appContainer = document.getElementById('appContainer')
    if (appContainer !== null) {
      appContainer.style.height = window.visualViewport.height + 'px'
      let root = document.documentElement;
      root.style.setProperty('--app-height', appContainer.style.height);
    }
  });
}

update()

export default App
