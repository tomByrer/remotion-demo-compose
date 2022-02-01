import { Series } from "remotion"
import {Lift} from '../actions/Lift';
import {MovieCameraIcon} from '../parts/MovieCameraIcon';
import {ReactLogo} from '../parts/ReactLogo';
import {RemotionLogo} from '../parts/RemotionLogo';
import {SmallTitle} from '../parts/SmallTitle';
import {LogoTwoTitle} from '../segments/LogoTwoTitle';

export function AboutRemotion() {
	return (<Series>
		<Series.Sequence durationInFrames={60}>
			<SmallTitle
				titleText='What would you build if you could...'
				frontColor='#d9d0c6'
				backColor='#10131f'
			/>
		</Series.Sequence>
		<Series.Sequence durationInFrames={120}>
			<LogoTwoTitle
				logo={<Lift><ReactLogo /></Lift>}
				titleText='use ReactJS to build animations...'
				subtitleText='Animate with web technologies you know & love.'
				frontColor='#e9e4d7'
				backColor='#161b28'
			/>
		</Series.Sequence>
		<Series.Sequence durationInFrames={120}>
			<LogoTwoTitle
				logo={<Lift><MovieCameraIcon color='#acb0bd'/></Lift>}
				titleText='then capture them as a movie... '
				subtitleText='Export a MP4 file or use the &lt;Player&gt;.'
				frontColor='#d7d9df'
				backColor='#21304c'
			/>
		</Series.Sequence>
		<Series.Sequence durationInFrames={120}>
			<LogoTwoTitle
				logo={<Lift><RemotionLogo scaleOuter={3.3} /></Lift>}
				titleText='with Remotion'
				subtitleText='Create videos programmatically in React!'
				frontColor='#deefed'
				backColor='#2b4673'
			/>
		</Series.Sequence>
	</Series>)
}
