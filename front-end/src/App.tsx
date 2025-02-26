import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/header';
import Layout from './components/layout';
import Accounts from './components/accounts/accounts';
import Clients from './components/clients/clients';
import NotFound from './components/404/notFound';

const App = () => {
    return (  
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Accounts/>} />
                    <Route path='clients' element={<Clients/>} />
                </Route>
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </>
    );
}
 
export default App;
