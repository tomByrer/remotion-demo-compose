import {Composition} from 'remotion';
import {resChart} from './vidsize'

export function AdvancedComposition({
	component,
	fps=30,
	durationInSeconds=5,
	durationInFrames=durationInSeconds*fps,
	resolution='1080p',
	width=resChart[resolution].w || 1920,
	height=resChart[resolution].h || 1080,
	defaultProps={},
	id=`${component.name}-${width}x${height}-${fps}fps`,
}){
	console.log(`${resolution} = ${resChart[resolution].h}`)
	return (
		<Composition
				id={id}
				component={component}
				fps={fps}
				durationInFrames={durationInFrames}
				width={width}
				height={height}
				defaultProps={defaultProps}
			/>
	)
}
