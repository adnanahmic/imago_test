import { RouterProvider } from 'react-router-dom';
import router from './routes';
import AppHeader from './components/AppHeader/AppHeader';

const App = () => (
  <>
    <AppHeader />
    <section className="page">
      <RouterProvider router={router} />
    </section>
  </>
);

export default App;
