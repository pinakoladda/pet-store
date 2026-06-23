import { BrowserRouter, Routes, Route } from 'react-router'
import { CategoryPage } from './features/CategoryPage'
import { MainPage } from './features/MainPage'
import { ProductDetailPage } from './features/ProductDetailPage'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/product" element={<ProductDetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
