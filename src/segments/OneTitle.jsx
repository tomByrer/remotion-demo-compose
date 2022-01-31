import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Subtitle} from '../parts/Subtitle'

export function OneTitle({
	from=0,
	duration=30,
	titleText='title text',
	frontColor='#e9e4d7',
	backColor='#161b2872',
	...props
}) {
	return (<>
		<Sequence from={from} durationInFrames={duration}>
			<div style={{flex: '100', backgroundColor: backColor}}>
				<Subtitle displayText={titleText} frontColor={frontColor} />
			</div>
		</Sequence>
	</>)
}
