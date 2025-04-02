const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 justify-center items-center min-h-[calc(100vh-100px)]">
      {/* Text Content */}
      <div className='text-center md:text-left px-2 md:px-10 md:w-1/2'>
        <h1 className="text-3xl sm:text-4xl font-bold">
          Hi I'm
          <span 
            className="
              pl-2 md:pl-3
              bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400
              text-transparent
              bg-clip-text
            ">
            Janith Perera
          </span>✌️
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold pt-2">
          I'm a <span className="underline">Full Stack</span> Developer.
        </h2>
        <p className="text-base md:text-lg max-w-2xl py-2 md:py-4">
          Second year Software Engineering student from Sri Lanka. I am the founder, and primary developer at <a 
          href="https://kolvio.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Kolvio</a>.
          I turn coffee into clean code and complex problems into elegant solutions across the full stack.
        </p>
        <ul className="text-base md:text-lg space-y-1 md:space-y-2 py-2">
          <li>☕ My code runs purely on Coffee</li>
          <li>🥷 TypeScript ninja at night</li>
          <li>🤖 Teaching machines to think</li>
          <li>⌨️ Avid keyboard enthusiast</li>
          <li>🤝 Best friends with `console.log()`</li> 
        </ul>
      </div>

      {/* Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img 
          src="/Me-no-bg.png" 
          className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px]' 
          alt='Image of me' 
        />
      </div>
    </div>
  )
}

export default HomePage