import { createStore } from 'redux';
import reducer from '../redusers';

export default () => {
    const store = createStore(reducer)

    return store;
}
