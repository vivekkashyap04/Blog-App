import React from 'react';
import Headers from './component/Header';

//component
import ArticleList from './component/ArticleList';
class App extends React.Component {
  render() {
    return (
        <>
        <Headers />
        <ArticleList />;
        </>
    )
  
  }
}

export default App;
