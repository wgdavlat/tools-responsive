import React from 'react'

export const Home = () => {
	return (
		<section className='home mx-8 my-10 text-center'>
			{/* Header */}
			<div className='mb-10'>
				<h1 className='text-3xl font-bold p-4 rounded-xl bg-green-700 text-white inline-block shadow-lg'>
					All tools in one place!
				</h1>
			</div>

			{/* Tool cards section */}
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				<Card title='Password Generator' />
				<Card title='Pomodoro Timer' />
				<Card title='Weather Checker' />
				<Card title='Unit Converter' />
				<Card title='Palette Generator' />
			</div>
		</section>
	)
}

// Card component
const Card = ({ title }) => {
	return (
		<div className='p-6 bg-gray-300 rounded-xl text-gray-900 font-semibold text-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer'>
			{title}
		</div>
	)
}
