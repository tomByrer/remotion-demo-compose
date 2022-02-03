import * as convert from '../helpers/convert';

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
					bottom: convert.vh(12.9629),
					color: frontColor,
					fontFamily: 'monospace',
					fontSize: convert.vw(3.7234),
					textAlign: 'left',
					opacity: AnimateValue.useFadeInOutTapered(2, 0.1618),
				}}
			>
				{titleText}
			</code></pre>
		</div>
	)
}
