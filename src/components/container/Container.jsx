import { twMerge } from 'tailwind-merge'

export default function Container({ className = '', children }) {
	return <section className={twMerge('w-full max-w-[1600px] px-4 mx-auto', className)}>{children}</section>
}
