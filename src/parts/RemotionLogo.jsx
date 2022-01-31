import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Triangle} from './Triangle';

const centered = {
	justifyContent: 'center',
	alignItems: 'center',
};

export function RemotionLogo({
	scaleOuter = 1.3,
}) {
	const frame = useCurrentFrame()
	const videoConfig = useVideoConfig()
	function scale(index) {
		return spring({
			frame: frame - index * 10,
			fps: videoConfig.fps,
			config: {
				mass: 2,
				damping: 200,
			},
		})
	}

	return (
		<AbsoluteFill
			style={{
				...centered,
				width: videoConfig.width,
				height: videoConfig.height,
				transform: `scale(${scaleOuter})`,
			}}
		>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(0)})`,
				}}
			>
				<Triangle size={245} color1='white' color2='white' />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(0)})`,
				}}
			>
				<Triangle size={220} opacity={0.2} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(1)})`,
				}}
			>
				<Triangle size={180} opacity={0.4} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(2)})`,
				}}
			>
				<Triangle size={140}/>
			</AbsoluteFill>
		</AbsoluteFill>
	)
}
