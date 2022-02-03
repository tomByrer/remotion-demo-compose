import * as convert from '../helpers/convert';

import * as AnimateValue from '../actions/AnimateValue';

export function Subtitle({ displayText, frontColor }) {
	return (
		<div
			style={{
				color: frontColor,
				fontFamily: 'Helvetica, Arial',
				fontSize: convert.vw(3.7234),
				textAlign: 'center',
				position: 'absolute',
				bottom: convert.vh(12.9629),
				width: '100%',
				opacity: AnimateValue.FadeIn(),
			}}
		>
			{displayText}
		</div>
	)
}
