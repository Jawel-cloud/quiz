
import Homepage from './Pages/homepage';
import CheckProvider, { CheckContext } from '../src/Context/CheckContext';
const App = () => {
  return (
    <div className='App'>
      <CheckProvider>
      <Homepage/>
      </CheckProvider>
    </div>
  );
}
 
export default App;
