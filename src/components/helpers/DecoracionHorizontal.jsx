import { twMerge } from 'tailwind-merge'
import Decoracion2 from '../../img/decoracion2.svg'

export default function DecoracionHorizontal({ className = '' }) {
	return (
		<div
			className={twMerge('bg-repeat-x bg-contain bg-center h-[35px] md:h-[50px] lg:h-[65px]', className)}
			style={{ backgroundImage: 'url("' + Decoracion2 + '")' }}></div>
	)
}
