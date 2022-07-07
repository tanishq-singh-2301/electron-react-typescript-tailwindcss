import Index from '../pages';
import { MemoryRouter, Routes, Route, } from 'react-router-dom';

const Router = () => {
    return (
        <MemoryRouter>
            <Routes>
                <Route path='/' element={<Index />} />
            </Routes>
        </MemoryRouter>
    )
}

export default Router;