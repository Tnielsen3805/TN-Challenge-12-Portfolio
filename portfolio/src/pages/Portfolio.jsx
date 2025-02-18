import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'https://placehold.co/600x400?text=Project+1',
      deployedLink: 'https://project1.com',
      githubLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      image: 'https://placehold.co/600x400?text=Project+2',
      deployedLink: 'https://project2.com',
      githubLink: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Project 3',
      image: 'https://placehold.co/600x400?text=Project+3',
      deployedLink: 'https://project3.com',
      githubLink: 'https://github.com/yourusername/project3',
    },
    {
      title: 'Project 4',
      image: 'https://placehold.co/600x400?text=Project+4',
      deployedLink: 'https://project4.com',
      githubLink: 'https://github.com/yourusername/project4',
    },
    {
      title: 'Project 5',
      image: 'https://placehold.co/600x400?text=Project+5',
      deployedLink: 'https://project5.com',
      githubLink: 'https://github.com/yourusername/project5',
    },
  ];

  return (
    <section>
      <h2 className='text-3xl font-bold mb-4'>Portfolio</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
