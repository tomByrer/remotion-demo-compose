import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import * as useConvert from '../helpers/useConvert';

export function Lift({
	transitionStart=useConvert.seconds(0.833333),
	...props
}){
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const translation = interpolate(
		spring({
			frame: frame - transitionStart,
			fps: videoConfig.fps,
			config: {
				damping: 100,
				mass: 0.5,
			},
		}),
		[0, 1],
		[0, useConvert.vh(-13.8888)]
	);

	return (
		<div style={{
			transform: `translateY(${translation}px)`,
		}}>
			{props.children}
		</div>
	)
}
