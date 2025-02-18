import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto px-4 flex justify-center space-x-8'>
        <a
          href='https://github.com/yourusername'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400'
        >
          <FaGithub className='size-8' />
        </a>
        <a
          href='https://linkedin.com/in/yourusername'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400'
        >
          <FaLinkedin className='size-8' />
        </a>
        <a
          href='https://stackoverflow.com/users/youruserid'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-blue-400'
        >
          <FaStackOverflow className='size-8' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
