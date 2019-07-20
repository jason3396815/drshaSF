import { Provider, connect } from 'preact-redux';
import { h, render, Component } from 'preact';
import App from './App';
//import App from "./js/components/App.jsx";
//import App from './App-TEST';
//import store from './redux/store';
//import { store } from './redux';
//import { store } from './js/store/index.js';
//import store from "./js/store/index";
import store from './redux';

class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

render( <Main />, document.getElementById('root') );
