import { Decoracion } from './Icons'
import { generarId } from './helpers'

export default function DecoracionVertical({
	repeat = 8,
	className = '',
	options = { className: 'w-[77px]', stroke: '#D5B183' },
}) {
	return (
		<div className={className}>
			{[...Array(repeat)].map(k => (
				<Decoracion
					key={generarId(7)}
					stroke={options.stroke}
					className={options.className}
				/>
			))}
		</div>
	)
}
