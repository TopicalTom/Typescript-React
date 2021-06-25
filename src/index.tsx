import ReactDom from 'react-dom';
//import { GuestList } from './state/GuestList';
import { UserSearch } from './state/UserSearch';

const App = () => {
    return (
        <div>
            <UserSearch />
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));