import {Lift} from '../actions/Lift';
import {MovieCameraIcon} from '../parts/MovieCameraIcon';
import {ReactLogo} from '../parts/ReactLogo';
import {RemotionLogo} from '../parts/RemotionLogo';
import {LogoTwoTitle} from '../segments/LogoTwoTitle';
import {OneTitle} from '../segments/OneTitle';

export function AboutRemotion() {
	return (<>
		<OneTitle
			duration={60}
			titleText='What would you build if you could...'
			frontColor='#d9d0c6'
			backColor='#10131f'
		/>
		<LogoTwoTitle
			from={60}
			logo={<Lift><ReactLogo /></Lift>}
			titleText='use ReactJS to build animations...'
			subtitleText='Animate with web technologies you know & love.'
			frontColor='#e9e4d7'
			backColor='#161b28'
		/>
		<LogoTwoTitle
			from={180}
			titleText='then capture them as a movie... '
			subtitleText='Export a MP4 file or use the &lt;Player&gt;.'
			frontColor='#d7d9df'
			backColor='#21304c'
			logo={<Lift><MovieCameraIcon color='#acb0bd'/></Lift>}
		/>
		<LogoTwoTitle
			from={300}
			logo={<Lift><RemotionLogo scaleOuter={3.3} /></Lift>}
			titleText='with Remotion'
			subtitleText='Create videos programmatically in React!'
			frontColor='#deefed'
			backColor='#2b4673'
		/>
	</>)
}
