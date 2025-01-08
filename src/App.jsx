import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './Routers';
import { DefaultComponents } from './components/DefaultComponents/DefaultComponents';
import { Fragment } from 'react';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {routes.map((route, index) => {
                        const Page = route.page;
                        const Layout = route.isShowHeader ? DefaultComponents : Fragment;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </>
    );
}

export default App;
