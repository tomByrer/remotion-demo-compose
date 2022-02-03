import * as useConvert from '../helpers/useConvert';

import * as AnimateValue from '../actions/AnimateValue';

export function Subtitle({ displayText, frontColor }) {
	return (
		<div
			style={{
				color: frontColor,
				fontFamily: 'Helvetica, Arial',
				fontSize: useConvert.vw(3.7234),
				textAlign: 'center',
				position: 'absolute',
				bottom: useConvert.vh(12.9629),
				width: '100%',
				opacity: AnimateValue.useFadeIn(),
			}}
		>
			{displayText}
		</div>
	)
}
