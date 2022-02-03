import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import * as useConvert from '../helpers/useConvert';

import {Triangle} from './Triangle';

const centered = {
	justifyContent: 'center',
	alignItems: 'center',
};

export function RemotionLogo({
	scalePercent = 50,
}) {
	const frame = useCurrentFrame()
	const videoConfig = useVideoConfig()
	function scale(index) {
		return spring({
			frame: frame - index * useConvert.seconds(0.33333),
			fps: videoConfig.fps,
			config: {
				mass: 2,
				damping: 200,
			},
		})
	}
	const baseSize = useConvert.vmin(scalePercent)
	const sizes = [
		baseSize*1.85714,
		baseSize*1.57142,
		baseSize*1.28571,
		baseSize,
	]

	return (
		<AbsoluteFill
			style={{
				...centered,
				width: videoConfig.width,
				height: videoConfig.height,
			}}
		>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(0)})`,
				}}
			>
				<Triangle size={sizes[0]} color1='white' color2='white' />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(0.6)})`,
				}}
			>
				<Triangle size={sizes[1]} opacity={0.2} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(1)})`,
				}}
			>
				<Triangle size={sizes[2]} opacity={0.4} />
			</AbsoluteFill>
			<AbsoluteFill
				style={{
					...centered,
					transform: `scale(${scale(2)})`,
				}}
			>
				<Triangle size={sizes[3]}/>
			</AbsoluteFill>
		</AbsoluteFill>
	)
}
