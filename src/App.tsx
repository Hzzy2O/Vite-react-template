import { Suspense } from 'react';
import routes from '~react-pages';

function App() {
  console.log(routes);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <main>{useRoutes(routes)}</main>
    </Suspense>
  );
}

export default App;
