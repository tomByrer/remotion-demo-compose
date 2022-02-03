# Remotion demo video

<p align="center">
  <a href="https://github.com/tomByrer/remotion-demo-compose">
    <img src="remotion-logo.png">
  </a>
</p>

Here is a [ReactJS](https://reactjs.org/) project to show off the [Remotion animation/movie making system](https://www.remotion.dev/).  Several parts in JSX are composed in a way to build several scene segments, which are then arranged to make a movie.  That 'movie' my be played directly in a web-browser, or rendered into a .mp4 video file!

This repo is built to experiment with the following goals:

* split & compose segments for better reuse
* build 'parts' (functions, elements) to be 'responsive':
  * resizable while keeping layout
  * flexable aspect ratios (might still need ajusting)
  * adjustable FramesPerSecond
* create helper components with common default parameters, calculating missing inputs

## Folder structure

All of the Remotion 'movie' files are in the `/src` folder:

* **actions**: animatons & animation helpers
* **arrangements**: movie file; compleate timeline
* **helpers**: hooks and settings for resolutions, colors, etc
* **parts**: elements and fragments to build segments and arrangements
* **segments**: partially or fully complete movie moments
* `RemotionVideo.jsx`: configureations for arrangment & parts in various resolutions for previewing

## TODO

Responsiveness works 90% well, though extreame resolutions like 'story' (1080x1920) & 'ultrawide' (3440x1440) could use some automated adjusting for fontsize & layouts.

## Commands

After [installing](https://youtu.be/OCiiJi7Bl18?t=98) the NodeJS, npm, git dependancies & this repo:

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Server render demo**

```console
npm run server
```

See [docs for server-side rendering](https://www.remotion.dev/docs/ssr) here.

**Upgrade Remotion**

```console
npm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/JonnyBurger/remotion/issues/new).

## License

Notice that for some entities a company license is needed. Read [the terms here](https://github.com/JonnyBurger/remotion/blob/main/LICENSE.md).
