import ProfileImg from '../assets/image.png';

function About() {
  return (
    <section>
      <h2 className='text-3xl font-bold mb-4'>About Me</h2>
      <div className='flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8'>
        <img
          src={ProfileImg}
          alt='Your Name'
          className='w-64 h-64 rounded-full object-cover'
        />
        <div>
          <p className='mb-4'>
            Hello! I am a passionate web developer with expertise in modern
            frontend technologies and some backend skills. I love creating
            responsive and user-friendly full stack web applications that solve
            real-world problems.
          </p>
          <p>
            When I am not coding, you can find me exploring new technologies,
            contributing to open-source projects, or enjoying the nature. I am
            always looking for new challenges and opportunities to grow my
            skills and knowledge.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
