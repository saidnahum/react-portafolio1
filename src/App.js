import { Intro } from "./components/Intro";


function App() {
	return (
		<div className='flex h-screen'>
			<div className='flex-1 flex items-center justify-center'>
				<div className='p-14 h-2/5 flex flex-col justify-between'>
					<h2 className='text-3xl'>Hello, My name is</h2>
					<h1 className='text-6xl font-bold'>John Burton</h1>

					<div className='h-14 overflow-hidden'>
						<div className='h-full animate-move'>
							<div className='h-14 text-3xl font-bold text-custom-green flex items-center'>Web Developer</div>
							<div className='h-14 text-3xl font-bold text-custom-green'>UI/UX Designer</div>
							<div className='h-14 text-3xl font-bold text-custom-green'>Pothographer</div>
							<div className='h-14 text-3xl font-bold text-custom-green'>Writer</div>
							<div className='h-14 text-3xl font-bold text-custom-green'>Content Creator</div>
						</div>
					</div>

					<div>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, dolores! Laborum culpa esse eveniet error soluta debitis maxime et corrupti qui quod doloremque, assumenda numquam facilis eligendi impedit sequi nostrum?
					</div>
				</div>
			</div>

			<div className='flex-1'>
				Right
			</div>
		</div>
	);
}

export default App;

