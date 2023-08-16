import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import SearchAcoes from "../pages/Search/SearchAcoes"
import SearchCriptos from "../pages/Search/SearchCriptos"
import ErrorPage from "../pages/ErrorPage"
import Cotacoes from "../pages/cotacoes/Cotacoes"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="searchacoes" element={<SearchAcoes />} />
                <Route path="searchcriptos" element={<SearchCriptos />} />
                <Route path="cotacoes" element={<Cotacoes />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}