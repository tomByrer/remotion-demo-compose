import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import * as convert from '../convert';

import {Subtitle} from '../parts/Subtitle';
import {Title} from '../parts/Title';

export function LogoTwoTitle({
		from=0,
		duration=convert.seconds(4),
		logo,
		titleText='title text',
		subtitleText='subtitle text',
		frontColor,
		backColor,
		...props
}) {
	return (<>
		<Sequence from={from} durationInFrames={duration}>
			<div style={{flex: '100', backgroundColor: backColor}}>
				{logo}
			</div>
		</Sequence>
		<Sequence from={from+(duration*0.25)} durationInFrames={duration*0.75}>
			<Title displayText={titleText} frontColor={frontColor} />
		</Sequence>
		<Sequence from={from+(duration*0.50)} durationInFrames={duration*0.50}>
			<Subtitle displayText={subtitleText} frontColor={frontColor} />
		</Sequence>
	</>)
}
