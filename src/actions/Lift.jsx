import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export function Lift({transitionStart = 25, ...props}){
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
		[0, -150]
	);

	return (
		<div style={{
			transform: `translateY(${translation}px)`,
		}}>
			{props.children}
		</div>
	)
}
