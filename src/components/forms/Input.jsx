import { twMerge } from 'tailwind-merge'

export const Input = ({
	className = '',
	type = 'text',
	name = '',
	label = '',
	placeholder = '',
	onChange = false,
	value = '',
}) => {
	return (
		<div className={twMerge('relative z-0 w-full mb-[25px] md:mb-0 group', className)}>
			<input
				type={type}
				name={name}
				{...(onChange && { onChange })}
				id={name}
				className='block py-2.5 w-full text-sm text-white bg-transparent border border-dorado appearance-none !focus:outline-none focus:ring-0 focus:border-dorado peer px-3'
				placeholder={placeholder}
				required
				{...(value && { value })}
			/>
			<label
				htmlFor={name}
				className='bg-black peer-focus:font-medium absolute z-[1] text-sm text-dorado left-2 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
				{label}
			</label>
		</div>
	)
}
