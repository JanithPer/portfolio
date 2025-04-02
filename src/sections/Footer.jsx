import { 
    Facebook, 
    Github, 
    Instagram, 
    Linkedin, 
    Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <div className='flex gap-3 justify-center py-1 pt-5' >
    <Facebook className='cursor-pointer' />
    <Instagram className='cursor-pointer' />
    <Github className='cursor-pointer' />
    <Linkedin className='cursor-pointer' />
    <Twitter className='cursor-pointer' />
  </div>
  )
}

export default Footer