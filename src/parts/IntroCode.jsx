import * as useConvert from '../helpers/useConvert';

import * as AnimateValue from '../actions/AnimateValue';

export function IntroCode({
	titleText='title text',
	frontColor='#e9e4d7',
	backColor='#161b2872',
}) {
	return (
		<div style={{flex: '90', backgroundColor: backColor}}>
			<pre><code
				style={{
					position: 'absolute',
					margin: '0 6.18%',
					bottom: useConvert.vh(12.9629),
					color: frontColor,
					fontFamily: 'monospace',
					fontSize: useConvert.vw(3.7234),
					textAlign: 'left',
					opacity: AnimateValue.useFadeInOutTapered(2, 0.1618),
				}}
			>
				{titleText}
			</code></pre>
		</div>
	)
}
