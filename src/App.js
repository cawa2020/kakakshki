import Auth from './components/Auth.tsx';
import Header from './components/Header.tsx';
import Recommendations from './components/Recommendations/Recommendations.tsx';
import UserPage from './components/UserPage.tsx';
import Home from './pages/Home.tsx';

function App() {
  return (
    <>
      <div className='welcome-block'>
        <Header />
      </div>
      <main>
        <Home />
        <Recommendations />
        <Auth />
        <UserPage />
      </main>
    </>
  );
}

export default App;
