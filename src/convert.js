import {useVideoConfig} from 'remotion'

export function seconds(sec){
	const videoConfig = useVideoConfig()
	return sec * videoConfig.fps
}

export function vh(h){
	const videoConfig = useVideoConfig()
	return h * videoConfig.height * 0.01
}

export function vw(w){
	const videoConfig = useVideoConfig()
	return w * videoConfig.width * 0.01
}

export function vmax(w){
	const videoConfig = useVideoConfig()
	return w * Math.max(videoConfig.height,videoConfig.width) * 0.01
}

export function vmin(w){
	const videoConfig = useVideoConfig()
	return w * Math.min(videoConfig.height,videoConfig.width) * 0.01
}
