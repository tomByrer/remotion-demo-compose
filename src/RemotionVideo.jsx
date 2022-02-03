import {Composition} from 'remotion';
import {resChart} from './helpers/vidsize'
import * as Helper from './helpers/Helper'

import {AboutRemotion} from './arrangements/AboutRemotion';
import {ReactLogo} from './parts/ReactLogo';
import {RemotionLogo} from './parts/RemotionLogo';
import {Title} from './parts/Title';

export function RemotionVideo() {
	return (<>
{/* typical Remotion config */}
		<Composition
			id="AboutRemotion-1080p"
			component={AboutRemotion}
			fps={30}
			durationInFrames={420}
			width={1920}
			height={1080}
			defaultProps={{
				introText: `Remotion config: 1080p 30fps`,
			}}
		/>
{/* using lookup table for dimentions */}
		<Composition
			id="AboutRemotion-720p"
			component={AboutRemotion}
			fps={30}
			durationInFrames={420}
			width={resChart['720p'].w}
			height={resChart['720p'].h}
			defaultProps={{
				introText: `
width={resChart['720p'].w}
height={resChart['720p'].h}
30fps`,
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
				introText: `
width={resChart['720p'].w}
height={resChart['720p'].h}
60fps`,
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
				introText: `
width={resChart['xga'].w}
height={resChart['xga'].h}
30fps`,
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
				introText: `
width={resChart['uxga'].w}
height={resChart['uxga'].h}
30fps`,
			}}
		/>

{/* Composition helper wrapper; has several defaults & calculations */}
		<Helper.AdvancedComposition
			component={AboutRemotion}
			durationInSeconds={14}
			resolution='square'
			defaultProps={{
				introText: `
<Helper.AdvancedComposition
  component={AboutRemotion}
  durationInSeconds={14}
  resolution='square'
/>
// default 30fps,
// everything else is calculated`,
			}}
		/>
		<Helper.AdvancedComposition
			component={AboutRemotion}
			durationInSeconds={14}
			resolution='story'
			defaultProps={{
				introText: `
<Helper.AdvancedComposition
  component={AboutRemotion}
  durationInSeconds={14}
  resolution='story'
/>
// default 30fps,
// everything else is calculated`,
			}}
		/>

{/* /parts */}
		<Composition
			id="ReactLogo"
			component={ReactLogo}
			durationInFrames={200}
			fps={30}
			width={resChart['720p'].w}
			height={resChart['720p'].h}
		/>
		<Composition
			id="RemotionLogo"
			component={RemotionLogo}
			durationInFrames={200}
			fps={30}
			width={resChart['720p'].w}
			height={resChart['720p'].h}
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
	</>)
}
