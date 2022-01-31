import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion'

export function FadeIn() {
	const frame = useCurrentFrame()
	const videoConfig = useVideoConfig()
	return interpolate(
		frame,
		[0, videoConfig.fps * 0.5],
		[0, 1]
	)
}

export function FadeOut() {
	const frame = useCurrentFrame()
	const videoConfig = useVideoConfig()
	return interpolate(
		frame,
		[0, videoConfig.fps * 0.5],
		[1, 0]
	)
}

export function FadeOutTapered(duration, step) {
	const frame = useCurrentFrame()
	const videoConfig = useVideoConfig()
	duration = (typeof duration !== 'undefined')
							? duration
							: videoConfig.fps
	return interpolate(
		frame,
		[0, step*0.5, step-1, duration],
		[1, 0.9, 0.6, 0]
	)
}

export function FadeOutTaperedSeconds(startSecs, durationSecs) {
	const frame = useCurrentFrame()
	const videoConfig = useVideoConfig()
	const startFrames = startSecs * videoConfig.fps
	durationSecs ??= 1
	const durationFrames = durationSecs * videoConfig.fps
	const endFrames = startFrames + durationFrames
	const stepFrames = startFrames + (durationFrames * 0.7)
	return interpolate(
		frame,
		[startFrames, stepFrames, endFrames],
		[1, 0.9, 0]
	)
}
