import Navigation from './Navigation';

function Header() {
  return (
    <header className='bg-gray-800 text-white py-4'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Your Name</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
