import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import * as AnimateValue from '../actions/AnimateValue';

export function Subtitle({ displayText, frontColor }) {
	return (
		<div
			style={{
				color: frontColor,
				fontFamily: 'Helvetica, Arial',
				fontSize: 70,
				textAlign: 'center',
				position: 'absolute',
				bottom: 140,
				width: '100%',
				opacity: AnimateValue.FadeIn(),
			}}
		>
			{displayText}
		</div>
	)
}
