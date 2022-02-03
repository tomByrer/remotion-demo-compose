import {Series} from "remotion"
import * as useConvert from '../helpers/useConvert'

import * as Slide from '../actions/Slide';
import {MovieCameraIcon} from '../parts/MovieCameraIcon';
import {ReactLogo} from '../parts/ReactLogo';
import {RemotionLogo} from '../parts/RemotionLogo';
import {IntroCode} from '../parts/IntroCode';
import {LogoTwoTitle} from '../segments/LogoTwoTitle';

export function AboutRemotion({
	introText='Intro Text'
}) {
	return (<Series>
		<Series.Sequence durationInFrames={useConvert.seconds(2)}>
			<IntroCode
				// titleText='What would you build if you could...'
				titleText={introText}
				frontColor='#d9d0c6'
				backColor='#10131f'
			/>
		</Series.Sequence>
		<Series.Sequence durationInFrames={useConvert.seconds(4)}>
			<LogoTwoTitle
				logo={
					<Slide.Lift>
						<ReactLogo />
					</Slide.Lift>
				}
				titleText='use ReactJS to build animations...'
				subtitleText='Animate with web technologies you know & love.'
				frontColor='#e9e4d7'
				backColor='#161b28'
			/>
		</Series.Sequence>
		<Series.Sequence durationInFrames={useConvert.seconds(4)}>
			<LogoTwoTitle
				logo={
					<Slide.Right pcLeftStart={-83.81}>
						<MovieCameraIcon color='#acb0bd'/>
					</Slide.Right>
				}
				titleText='then capture them as a movie... '
				subtitleText='Export a MP4 file or use the &lt;Player&gt;.'
				frontColor='#d7d9df'
				backColor='#21304c'
			/>
		</Series.Sequence>
		<Series.Sequence durationInFrames={useConvert.seconds(4)}>
			<LogoTwoTitle
				logo={<>
					<RemotionLogo scalePercent={261.8}/>
					<Slide.Lift>
						<RemotionLogo scalePercent={42.4}/>
					</Slide.Lift>
				</>}
				titleText='with Remotion'
				subtitleText='Create videos programmatically in React!'
				frontColor='white'
				backColor='#21304c'
			/>
		</Series.Sequence>
	</Series>)
}
