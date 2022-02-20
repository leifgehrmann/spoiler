import {useRef, useState} from 'react'
import InfoButton from "./components/InfoButton";
import CopyToClipboardButton from "./components/CopyToClipboardButton";
import ClearButton from "./components/ClearButton";
import {disableTouchManipulationGestures, observeVisualViewport} from "./viewport";

function App() {
  const [count, setCount] = useState(0)

  let textInputCssHack  = {
    // For whatever reason, tailwindCSS's outline-0
    // doesn't actually disable focus outlines.
    'outline': '0px'
  }
  let base64InputCssHack  = {
    // For whatever reason, tailwindCSS's outline-0
    // doesn't actually disable focus outlines.
    'outline': '0px',
    // On iOS, focusing on inputs that are on the bottom half of the
    // screen cause the browser to scroll awkwardly. We avoid this
    // by positioning the text-area at the top of the page and by
    // giving it a massive top-padding so that the actual content
    // appears on the bottom half of the page. This surprisingly stops
    // Safari from awkwardly jumping.
    // The side-effects of this though are that the scroll-bar appears
    // to work incorrectly... But that's not a significant problem
    // compared the former visual glitch.
    'paddingTop': 'calc(var(--app-height) / 2 + 1rem)',
    // Make room for the buttons at the bottom of the page.
    'paddingBottom': '4rem'
  }
  let clearBase64InputCssHack = {
    'top': 'calc(var(--app-height) / 2)'
  }
  let textSectionCssHack = {
    'height': 'calc(var(--app-height) / 2)'
  }
  let bottomButtonsCssHack = {
    'top': 'calc(var(--app-height) - 4.5rem - env(safe-area-inset-bottom))'
  }

  return (
    <div className="App mx-auto" id="appContainer" style={{'height': 'var(--app-height)'}}>
      <div className="absolute w-full h-full">
        <div className="relative h-full">
          <textarea
            placeholder="Enter Base64"
            tabIndex={3}
            className="
              appearance-none bg-transparent text-md resize-none align-bottom
              h-full w-full rounded-none
              p-4 pr-12
              font-mono
              placeholder-slate-400 dark:placeholder-slate-600"
            style={base64InputCssHack}
          />
          <div className="absolute right-0 m-2" style={clearBase64InputCssHack}>
            <ClearButton tabIndex={4}/>
          </div>
          <div className="absolute left-0 m-4" style={bottomButtonsCssHack}>
            <InfoButton tabIndex={5}/>
          </div>
          <div className="absolute right-0 m-4" style={bottomButtonsCssHack}>
            <CopyToClipboardButton tabIndex={6}/>
          </div>
        </div>
      </div>
      <div className="absolute top-0 w-full" style={textSectionCssHack}>
        <div
          className="
            relative h-full
            bg-slate-50 dark:bg-slate-900
            border-b-2 border-dashed border-slate-300 dark:border-slate-700
          ">
          <textarea
            placeholder="Enter text"
            className="
            appearance-none bg-transparent text-lg resize-none align-bottom
            h-full w-full rounded-none
            p-4 pr-12
            placeholder-slate-400 dark:placeholder-slate-600
            "
            tabIndex={1}
            style={textInputCssHack}
          />
          <div className="absolute top-0 right-0 m-2">
            <ClearButton tabIndex={2}/>
          </div>
        </div>
      </div>
    </div>
  )
}

// Prevent pinch gestures
disableTouchManipulationGestures()
// Update the app-height when the viewport changes (including when the keyboard is displayed!)
observeVisualViewport(() => {
  let root = document.documentElement;
  root.style.setProperty('--app-height', window.visualViewport.height + 'px');
})

export default App
