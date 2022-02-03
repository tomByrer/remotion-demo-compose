import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion'
import * as useConvert from '../helpers/useConvert';

export function fadeIn(seconds=0.5){
	const frame = useCurrentFrame()
	return interpolate(
		frame,
		[0, useConvert.seconds(seconds)],
		[0, 1]
	)
}

export function fadeOut(seconds=0.5) {
	const frame = useCurrentFrame()
	return interpolate(
		frame,
		[0, useConvert.seconds(seconds)],
		[1, 0]
	)
}

export function fadeInOutTapered(seconds, widen) {
	const frame = useCurrentFrame()
	const videoConfig = useVideoConfig()
	const frameLen = (typeof seconds !== 'undefined')
							? useConvert.seconds(seconds)
							: videoConfig.fps * 2
	const step = (typeof widen !== 'undefined')
							? frameLen * widen
							: frameLen * 0.25
	return interpolate(
		frame,
		[0, step, frameLen - step, frameLen],
		[0, 1, 0.8382, 0]
	)
}

// export function useFadeOutTaperedSeconds(startSecs, durationSecs) {
// 	const frame = useCurrentFrame()
// 	const videoConfig = useVideoConfig()
// 	const startFrames = startSecs * videoConfig.fps
// 	durationSecs ??= 1
// 	const durationFrames = durationSecs * videoConfig.fps
// 	const endFrames = startFrames + durationFrames
// 	const stepFrames = startFrames + (durationFrames * 0.7)
// 	return interpolate(
// 		frame,
// 		[startFrames, stepFrames, endFrames],
// 		[1, 0.9, 0]
// 	)
// }
