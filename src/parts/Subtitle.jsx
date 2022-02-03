import * as useConvert from '../helpers/useConvert';
import * as useAnimation from '../actions/useAnimation';

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
				opacity: useAnimation.fadeIn(),
			}}
		>
			{displayText}
		</div>
	)
}
