import React from 'react'

export const Header = () => {
	const navItems = [
		{ name: 'Password Generator', link: '#' },
		{ name: 'Palette Generator', link: '#' },
		{ name: 'Weather Check', link: '#' },
		{ name: 'Unit Converter', link: '#' },
	]

	return (
		<header className='select-none w-full flex items-center justify-center py-4'>
			<nav className='bg-gray-900 text-white px-6 py-3 flex gap-4 rounded-full shadow-lg'>
				{/* Navigation Links */}
				{navItems.map((item, index) => (
					<a
						key={index}
						href={item.link}
						className='px-6 py-2 flex items-center justify-center rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/20'
					>
						{item.name}
					</a>
				))}
			</nav>
		</header>
	)
}
