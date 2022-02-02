import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import * as convert from '../convert';

export const Title = ({
	displayText='Default title text',
	frontColor='black',
}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const text = displayText.split(' ').map(function (t) {
			return ` ${t} `
		});
	return (
		<h1
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				fontSize: convert.vw(5.0505),
				textAlign: 'center',
				position: 'absolute',
				bottom: convert.vh(14.81481),
				width: '100%',
			}}
		>
			{text.map(function (t, i) {
					return (
						<span
							key={t}
							style={{
								color: frontColor,
								marginLeft: convert.vw(0.50505),
								marginRight: convert.vw(0.50505),
								transform: `scale(${spring({
									fps: videoConfig.fps,
									frame: frame - i * convert.seconds(0.16666),
									config: {
										damping: 100,
										stiffness: 200,
										mass: 0.5,
									},
								})})`,
								display: 'inline-block',
							}}
						>
							{t}
						</span>
					)
				})}
		</h1>
	);
};
