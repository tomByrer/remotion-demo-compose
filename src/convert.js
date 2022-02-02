import {useVideoConfig} from 'remotion'

export function seconds(sec){
	const videoConfig = useVideoConfig()
	return sec * videoConfig.fps
}
