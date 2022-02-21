# spoiler

A simple app for sharing [Base64](https://en.wikipedia.org/wiki/Base64) encoded spoilers.

Visit https://spoiler.leifgehrmann.com/ to see it live.

## Demo

A short demonstration of decoding a message, then encoding a different message.

https://user-images.githubusercontent.com/3501061/154963211-18b8ac3d-4373-4bc1-aa5d-ee4f9a83bc61.mp4

## Why?

In a messaging thread I'm in we've been using Base64 to share spoilers to a puzzle game. We chose Base64 because it's more cryptic than [ROT13](https://en.wikipedia.org/wiki/ROT13), and less complex than a sophisticated [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

There are already a number of online apps that encode/decode Base64 text, but pretty much all of them are frustrating to use for a few reasons:

* They are not mobile friendly
* They are plastered with ads
* They have site trackers and Google Analytics plugins installed
* They do server-side processing of the base64 data, when it could easily be done on the frontend

This spoiler app solves all of those problems by being designed for mobile, having no ads, no trackers, and absolutely no personal data is shared server-side since it's a static web-application that performs 0 ajax calls.

## Development

```commandline
# Install dependencies
npm install

# Development
npm run dev

# Build and serve
npm run build
npm run preview
```
