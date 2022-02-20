import React, {useRef, useState} from 'react'
import { encode, decode } from 'js-base64';
import InfoButton from "./components/InfoButton";
import CopyToClipboardButton from "./components/CopyToClipboardButton";
import ClearButton from "./components/ClearButton";
import {disableTouchManipulationGestures, observeVisualViewport} from "./viewport";

function App() {
  const textInputRef = useRef(null)
  const base64InputRef = useRef(null)
  const focusOnInput = (inputRef: React.MutableRefObject<null>) => {
    const inputElement = inputRef.current as HTMLTextAreaElement|null
    if (inputElement !== null) {
      inputElement.focus()
    }
  }

  const [textMessage, setTextMessage] = useState('')
  const [base64Message, setBase64Message] = useState('')
  const updateTextMessage: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setTextMessage(e.target.value)
    setBase64Message(encode(e.target.value))
  }
  const updateBase64Message: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setBase64Message(e.target.value)
    setTextMessage(decode(e.target.value))
  }
  const clearBase64Message: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setTextMessage('')
    setBase64Message('')
    focusOnInput(base64InputRef)
  }
  const clearTextMessage: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setTextMessage('')
    setBase64Message('')
    focusOnInput(textInputRef)
  }
  const copyBase64MessageToClipboard: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    try {
      window.navigator.clipboard.writeText(base64Message).then(() => {
        alert('Copied message to clipboard')
      }).catch(() => {
        alert('Failed to copy message to clipboard')
      });
    } catch (e) {
      alert('Failed to copy message to clipboard. HTTPS is required.')
    }
  }

  function textMessageHasContent(): Boolean {
    return textMessage.length > 0
  }

  function base64MessageHasContent(): Boolean {
    return base64Message.length > 0
  }

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
            ref={base64InputRef}
            placeholder="Enter Base64"
            tabIndex={3}
            className="
              appearance-none bg-transparent text-md resize-none align-bottom
              h-full w-full rounded-none
              p-4 pr-12
              font-mono
              placeholder-slate-400 dark:placeholder-slate-600"
            style={base64InputCssHack}
            value={base64Message}
            onChange={updateBase64Message}
          />
          { base64MessageHasContent() &&
            <div className="absolute right-0 m-2" style={clearBase64InputCssHack}>
              <ClearButton
                onClick={clearBase64Message}
                tabIndex={4}
              />
            </div>
          }
          <div className="absolute left-0 m-4" style={bottomButtonsCssHack}>
            <InfoButton
              onClick={() => {alert('Encode and decode messages to share spoilers with friends!\n\n' +
                'To share a message with spoilers, type a message in the top section, then copy the output in the bottom.\n\n' +
                'To decode a spoiler, paste the encoded message in the bottom section and you\'ll see the secret message at the top.'
              )}}
              tabIndex={5}
            />
          </div>
          <div className="absolute right-0 m-4" style={bottomButtonsCssHack}>
            <CopyToClipboardButton
              onClick={copyBase64MessageToClipboard}
              tabIndex={6}
            />
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
            ref={textInputRef}
            placeholder="Enter text"
            className="
            appearance-none bg-transparent text-lg resize-none align-bottom
            h-full w-full rounded-none
            p-4 pr-12
            placeholder-slate-400 dark:placeholder-slate-600
            "
            tabIndex={1}
            style={textInputCssHack}
            value={textMessage}
            onChange={updateTextMessage}
          />
          { textMessageHasContent() &&
            <div className="absolute top-0 right-0 m-2">
              <ClearButton
                tabIndex={2}
                onClick={clearTextMessage}
              />
            </div>
          }
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
