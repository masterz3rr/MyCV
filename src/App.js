import Header from './components/Header';
import Stack from './components/Stack';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className='px-0' >
      <Header />
      <Stack />
      <Timeline />
      
      <div className="w-full" >
        <div className='relative '>
          <img className='absolute -right-44 -top-96 p-0 h-72 rotate-90  pointer-events-none'  src={process.env.PUBLIC_URL + '/icons/Shape.svg'} alt="gmail"/> 
        </div>
      </div>
    </div>
  );
}

export default App;
