export function Triangle({
	size,
	opacity = 1,
	color1 = '#42e9f5',
	color2 = '#4290f5',
	idSlug = `gradient${color1 + color2}`.replaceAll('#', '')
}) {
	return (
		<svg
			width={size}
			height={size}
			style={{
				opacity,
				width: size,
				height: size,
				position: 'absolute',
				transform: 'rotate(90deg)',
			}}
			viewBox="0 0 400 400"
		>
			<defs>
				<linearGradient id={idSlug}>
					<stop stopColor={color1} stopOpacity={1} offset="0" />
					<stop stopColor={color2} stopOpacity={1} offset="100%" />
				</linearGradient>
			</defs>
			<g stroke={`url(#${idSlug})`} strokeWidth="100" strokeLinejoin="round">
				<path
					fill={`url(#${idSlug})`}
					d="M 102 272 a 196 100 0 0 0 195 5 A 196 240 0 0 0 200 102.259 A 196 240 0 0 0 102 272 z" />
			</g>
		</svg>
	)
};
