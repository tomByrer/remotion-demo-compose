import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import * as convert from '../helpers/convert';

import {Arc} from './Arc';
import {Atom} from './Atom';

export function ReactLogo({ transitionStart }) {
	const videoConfig = useVideoConfig()
	const frame = useCurrentFrame()

	const development = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	})

	const rotationDevelopment = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	})

	const scaleIn = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	})

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
		[0, convert.vh(-13.8888)]
	)

	const near2seconds = convert.seconds(1.66666)
	const scale = frame < near2seconds ? scaleIn : 1

	const logoRotation = interpolate(
		frame,
		[0, videoConfig.durationInFrames],
		[0, 360]
	)

	return (
		<div
			style={{
				position: 'absolute',
				width: videoConfig.width,
				height: videoConfig.height,
				transform: `scale(${scale}) translateY(${translation}px) rotate(${logoRotation}deg)`,
			}}
		>
			<Arc
				rotateProgress={rotationDevelopment}
				progress={development}
				rotation={30} />
			<Arc
				rotateProgress={rotationDevelopment}
				rotation={90}
				progress={development} />
			<Arc
				rotateProgress={rotationDevelopment}
				rotation={-30}
				progress={development} />
			<Atom scale={rotationDevelopment} />
		</div>
	)
}
