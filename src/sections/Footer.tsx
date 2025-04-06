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
      <a
        href="https://web.facebook.com/profile.php?id=100090011271975"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" />
      </a>
      <a
        href="https://www.instagram.com/thejanith/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="cursor-pointer hover:text-pink-600 dark:hover:text-pink-400" />
      </a>
      <a
        href="https://github.com/JanithPer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300" />
      </a>
      <a
        href="https://lk.linkedin.com/in/janith-perera-959b62279?trk=org-employees"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="cursor-pointer hover:text-blue-700 dark:hover:text-blue-500" />
      </a>
      <a
        href="https://x.com/janithper9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-300" />
      </a>
 
    </div>
  )
}

export default Footer