import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
  <div className='h-screen'>
   <div className="flex flex-col md:flex-row p-4 justify-center items-center">
    <div className='text-center md:text-left px-2 md:p-0'>
      <h1 className="text-4xl font-bold">Hi I'm
        <span 
        className="
          pl-3
          bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400
          text-transparent
          bg-clip-text
        ">
          Janith Perera
      </span>✌️</h1>
      <h2 className="text-2xl md:text-3xl font-bold pt-2" >I'm a <span className="underline">Full Stack</span> Developer.</h2>
      <p className="md:text-lg w-2xl p-2 pl-0" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ipsam hic vel, modi tempora nesciunt praesentium aperiam laboriosam 
        necessitatibus in quia minima, quod nihil fugiat voluptatum. 
        Nam dolores placeat assumenda quidem.</p>
      <ul className="md:text-lg w-xl p-2 pl-0" >
        <li>☕Coffee is my favourite</li>
        <li>☕Coffee is my favourite</li>
        <li>☕Coffee is my favourite</li>
        <li>☕Coffee is my favourite</li>
      </ul>
    </div>
    <img src="/me-no-bg.png" className='w-[550px]' alt='Image of me' />
   </div>
    <div className='flex gap-3 justify-center' >
      <Facebook />
      <Instagram />
      <Github />
      <Linkedin />
      <Twitter />
    </div>
  </div>
   
  )
}

export default App
