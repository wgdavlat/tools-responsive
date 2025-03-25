import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineCoffee } from 'react-icons/ai'
import { BsCalendar2Date } from 'react-icons/bs'
import { LuClock10 } from 'react-icons/lu'
import { MdOutlineWbCloudy, MdOutlineWbSunny } from 'react-icons/md'

const API_KEY = '' // 🔥 Вставь свой ключ OpenWeather
const CITY = 'Tashkent'

export const App = () => {
	const [weather, setWeather] = useState(null)
	const [temp, setTemp] = useState(null)
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const res = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=en`
				)
				const data = res.data
				setWeather(data.weather[0].main.toLowerCase()) // Приводим к нижнему регистру (rain, sunny)
				setTemp(Math.round(data.main.temp)) // Округляем температуру
			} catch (error) {
				console.error('Ошибка загрузки данных:', error)
			}
		}

		fetchWeather()
		const interval = setInterval(() => setDate(new Date()), 60000) // Обновляем каждую минуту
		return () => clearInterval(interval)
	}, [])

	if (!weather || temp === null)
		return <h1 className='text-center mt-10'>Загрузка...</h1>

	return (
		<div className='layout p-2'>
			<div className='flex items-center justify-center'>
				<div
					className={`p-4 overflow-hidden w-5/12 relative rounded-2xl flex items-center justify-between ${
						weather === 'clear'
							? 'bg-amber-500'
							: weather === 'clouds'
							? 'bg-blue-500'
							: weather === 'rain'
							? 'bg-gray-600'
							: 'bg-purple-600'
					} text-white`}
				>
					{/* ☀️ Солнце / ☁️ Облака / 🌧 Дождь */}
					{weather === 'clear' ? (
						<div className='sun bg-amber-300 flex items-center justify-center absolute w-52 h-52 rounded-full'>
							<div className='bg-amber-400 flex items-center justify-center absolute w-4/5 h-4/5 rounded-full'>
								<div className='bg-amber-600 absolute w-4/5 h-4/5 rounded-full'></div>
							</div>
						</div>
					) : weather === 'rain' ? (
						<div className='rainy absolute flex gap-2 mt-2'>
							<div className='w-2 h-12 bg-blue-400 rounded-full animate-bounce'></div>
							<div className='w-2 h-7 bg-blue-400 rounded-full animate-bounce delay-100'></div>
							<div className='w-2 h-9 bg-blue-400 rounded-full animate-bounce delay-200'></div>
							<div className='w-2 h-12 bg-blue-400 rounded-full animate-bounce delay-300'></div>
						</div>
					) : (
						''
					)}

					<div className='left'>
						<p className='mb-2 p-3 bg-gray-600/50 rounded-2xl flex items-center justify-between'>
							{weather.charAt(0).toUpperCase() + weather.slice(1)}{' '}
							{weather === 'rain' ? (
								<MdOutlineWbCloudy />
							) : weather === 'clear' ? (
								<MdOutlineWbSunny />
							) : (
								<AiOutlineCoffee />
							)}
						</p>
						<h1 className='text-4xl font-bold p-3 bg-gray-600/50 rounded-2xl'>
							{temp}°C
						</h1>
					</div>
					<div className='right z-10'>
						<div className='mb-2 p-3 flex gap-4 items-center bg-gray-600/50 rounded-2xl'>
							<p className='flex items-center gap-1'>
								<LuClock10 />
								{date.toLocaleTimeString([], {
									hour: '2-digit',
									minute: '2-digit',
								})}
							</p>
							<p className='flex items-center gap-1'>
								<BsCalendar2Date />
								{date.toLocaleDateString('en-GB', {
									weekday: 'short',
									day: '2-digit',
									month: '2-digit',
								})}
							</p>
						</div>
						<p className='text-4xl font-bold p-3 bg-gray-600/50 rounded-2xl'>
							{CITY}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
