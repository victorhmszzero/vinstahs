import './styles/globals.css'
import { InstaBar } from './components/InstaBar';
import { Layout } from './components/Layout';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <html> <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <InstaBar/>
        <Layout/>
    </html>
  );
}

export default App;