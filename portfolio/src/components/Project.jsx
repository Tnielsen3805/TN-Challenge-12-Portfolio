import Placeholder from '../assets/placeholder.png';

function Project({ title, image, deployedLink, githubLink }) {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <img
        src={image || Placeholder}
        alt={title}
        className='w-full h-48 object-cover'
      />
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <div className='flex justify-between'>
          <a
            href={deployedLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            View Project
          </a>
          <a
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
