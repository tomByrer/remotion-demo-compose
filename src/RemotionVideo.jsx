import {Composition} from 'remotion';
import {AboutRemotion} from './arrangements/AboutRemotion';
import {ReactLogo} from './parts/ReactLogo';
import {Title} from './parts/Title';

export function RemotionVideo() {
	return (
		<>
			<Composition
				id="AboutRemotion"
				component={AboutRemotion}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={420}
				defaultProps={{
					titleText: 'Introduction',
					frontColor: 'black',
				}}
			/>
			<Composition
				id="ReactLogo"
				component={ReactLogo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	)
}
