
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='pt-96 text-center '>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;