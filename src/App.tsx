import { Suspense } from 'react';
import routes from '~react-pages';

function App() {
  console.log(routes);

  return <Suspense fallback={<p>Loading.asdasd.22.</p>}>{useRoutes(routes)}</Suspense>;
}

export default App;
