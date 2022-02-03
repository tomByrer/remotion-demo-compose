import * as convert from '../helpers/convert';

import * as AnimateValue from '../actions/AnimateValue';

export function IntroCode({
	titleText='title text',
	frontColor='#e9e4d7',
	backColor='#161b2872',
}) {
	return (
		<div style={{flex: '100', backgroundColor: backColor}}>
			<code
				style={{
					color: frontColor,
					fontFamily: 'monospace',
					fontSize: convert.vw(3.7234),
					textAlign: 'center',
					position: 'absolute',
					bottom: convert.vh(12.9629),
					width: '100%',
					opacity: AnimateValue.useFadeInOutTapered(2, 0.1618),
				}}
			>
				{titleText}
			</code>
		</div>
	)
}
