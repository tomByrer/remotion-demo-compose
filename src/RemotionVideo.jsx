import {Composition} from 'remotion';
import {resChart} from './helpers/vidsize'
import * as Helper from './helpers/helper'

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
				width={resChart['720p'].w}
				height={resChart['720p'].h}
				defaultProps={{
					titleText: 'Introduction',
					frontColor: 'black',
				}}
			/>
			<Composition
				id="AboutRemotion-720p60fps"
				component={AboutRemotion}
				fps={60}
				durationInFrames={840}
				width={resChart['720p'].w}
				height={resChart['720p'].h}
				defaultProps={{
					titleText: 'Introduction',
					frontColor: 'black',
				}}
			/>
			<Composition
				id="AboutRemotion-xga"
				component={AboutRemotion}
				fps={30}
				durationInFrames={420}
				width={resChart['xga'].w}
				height={resChart['xga'].h}
				defaultProps={{
					titleText: 'Introduction',
					frontColor: 'black',
				}}
			/>
			<Composition
				id="AboutRemotion-uxga"
				component={AboutRemotion}
				fps={30}
				durationInFrames={420}
				width={resChart['uxga'].w}
				height={resChart['uxga'].h}
				defaultProps={{
					titleText: 'Introduction',
					frontColor: 'black',
				}}
			/>

			<Helper.AdvancedComposition
				component={AboutRemotion}
				durationInSeconds={14}
				resolution='square'
				defaultProps={{
					titleText: 'Introduction',
					frontColor: 'black',
				}}
			/>
			<Helper.AdvancedComposition
				component={AboutRemotion}
				durationInSeconds={14}
				resolution='story'
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
				width={resChart['1080p'].w}
				height={resChart['1080p'].h}
			/>
			<Composition
				id="Title-720p"
				component={Title}
				fps={30}
				durationInFrames={100}
				width={resChart['720p'].w}
				height={resChart['720p'].h}
			/>
			<Composition
				id="Title-xga"
				component={Title}
				width={resChart['xga'].w}
				height={resChart['xga'].h}
				fps={30}
				durationInFrames={100}
			/>
			<Composition
				id="Title-uxga"
				component={Title}
				fps={30}
				durationInFrames={100}
				width={resChart['uxga'].w}
				height={resChart['uxga'].h}
			/>
		</>
	)
}
