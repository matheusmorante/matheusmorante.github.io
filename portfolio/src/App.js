import Home from './components/Home';
import './assets/css/style.css';
import Header from './components/Header';
import { ProjectProvider } from './contexts/ProjectContext';

function App() {
  return (
    <ProjectProvider>
      <>
        <Header />
        <Home />
      </>
    </ProjectProvider>

  );
}

export default App;
