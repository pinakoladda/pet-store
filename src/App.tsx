import { BrowserRouter, Routes, Route } from 'react-router'
import { Category } from './features/Category'
import { MainPage } from './features/MainPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
            <Routes>
                <Route path="/category" element={<Category />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
