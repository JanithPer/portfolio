import { 
    Facebook, 
    Github, 
    Instagram, 
    Linkedin, 
    Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <div className="flex gap-3 justify-center py-1 pt-5 text-gray-900 dark:text-white transition-colors duration-300">
      <Facebook className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" />
      <Instagram className="cursor-pointer hover:text-pink-600 dark:hover:text-pink-400" />
      <Github className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300" />
      <Linkedin className="cursor-pointer hover:text-blue-700 dark:hover:text-blue-500" />
      <Twitter className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-300" />
    </div>
  )
}

export default Footer