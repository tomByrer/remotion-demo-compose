import {Composition} from 'remotion';
import {res} from './vidsize'

import {AboutRemotion} from './arrangements/AboutRemotion';
import {ReactLogo} from './parts/ReactLogo';
import {Title} from './parts/Title';

export function RemotionVideo() {
	return (
		<>
			<Composition
				id="AboutRemotion-1080p"
				component={AboutRemotion}
				fps={30}
				durationInFrames={420}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Introduction',
					frontColor: 'black',
				}}
			/>
			<Composition
				id="AboutRemotion-720p"
				component={AboutRemotion}
				fps={30}
				durationInFrames={420}
				width={res.p720.w}
				height={res.p720.h}
				defaultProps={{
					titleText: 'Introduction',
					frontColor: 'black',
				}}
			/>
			<Composition
				id="AboutRemotion-XGA"
				component={AboutRemotion}
				fps={30}
				durationInFrames={420}
				width={res.xga.w}
				height={res.xga.h}
				defaultProps={{
					titleText: 'Introduction',
					frontColor: 'black',
				}}
			/>
			<Composition
				id="AboutRemotion-UXGA"
				component={AboutRemotion}
				fps={30}
				durationInFrames={420}
				width={res.uxga.w}
				height={res.uxga.h}
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
				id="Title-1080p"
				component={Title}
				fps={30}
				durationInFrames={100}
				width={res.p1080.w}
				height={res.p1080.h}
			/>
			<Composition
				id="Title-720p"
				component={Title}
				fps={30}
				durationInFrames={100}
				width={res.p720.w}
				height={res.p720.h}
			/>
			<Composition
				id="Title-XGA"
				component={Title}
				width={res.xga.w}
				height={res.xga.h}
				fps={30}
				durationInFrames={100}
			/>
			<Composition
				id="Title-UXGA"
				component={Title}
				fps={30}
				durationInFrames={100}
				width={res.uxga.w}
				height={res.uxga.h}
			/>
		</>
	)
}
