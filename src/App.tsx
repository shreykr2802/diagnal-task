import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { Provider } from 'react-redux';
import store from './store/store';
import Bottom from './components/Bottom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Content />
        <Bottom />
      </div>
    </Provider>
  );
}

export default App;
