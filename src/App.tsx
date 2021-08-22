import UsersSearch from 'features/usersSearch/components/UsersSearch/UsersSearch';

import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>github-search-tool-rest</title>
        <link rel="canonical" href="https://rundownelldrich.github.io/github-search-tool-rest/" />
      </Helmet>
      <UsersSearch />
    </>

  );
}

export default App;
