function Resume() {
  const frontendProficiencies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Redux',
    'Next.js',
    'Tailwind CSS',
    'Material UI',
  ];

  const backendProficiencies = [
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST',
    'API',
    'GraphQL',
    'PostgreSQL',
  ];

  return (
    <section>
      <h2 className='text-3xl font-bold mb-4'>Resume</h2>
      <p className='mb-8'>
        Download my{' '}
        <a href='#' className='text-blue-500 hover:underline'>
          Resume
        </a>
      </p>
      <h3 className='text-2xl font-semibold mb-2'>Frontend Proficiencies</h3>
      <ul className='list-disc list-inside'>
        {frontendProficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3 className='text-2xl font-semibold mb-2 mt-8'>
        Backend Proficiencies
      </h3>
      <ul className='list-disc list-inside'>
        {backendProficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
