import { twMerge } from 'tailwind-merge'

export default function Parrafo({ children, className = '' }) {
	return <p className={twMerge('mb-[30px] text-sm md:text-base', className)}>{children}</p>
}
