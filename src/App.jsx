import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Import Libreria di routing
import HomePage from './pages/HomePage';                          // Import Pagina home
import ChiSiamoPage from './pages/ChiSiamoPage';                  // Import Pagina chi siamo
import ProdottiPage from './pages/ProdottiPage';                  // Import Pagina prodotti
import Layout from './layouts/Layout';                            // Import Pagina layout
import DettagliProdottoPage from './pages/DettagliProdottoPage';  // Import Pagina dettagli prodotto
import NotFoundPage from './pages/NotFoundPage';                  // Import Pagina Not Found
import { BudgetProvider } from './contexts/BudgetContext'             // Import Provider del contesto "BudgetContext"

function App() {

  return (
    <>
      {/*****************************
            GESTIONE DELLE ROTTE
      *******************************/}

    <BudgetProvider>
        <BrowserRouter>
          <Routes>

            {/* Rotta genitore - contenete il layout */}
            <Route element={<Layout/>}>

              {/* Rotte figlie - mostrate dentro <Outlet/> */}
              <Route path = "/" element={<HomePage/>} />
              <Route path = "/chi-siamo" element={<ChiSiamoPage/>} />
              <Route path = "/prodotti">    {/* Rotta Padre Prodotto */}
                <Route path = "" element={<ProdottiPage/>} />
                <Route path = ":id" element={<DettagliProdottoPage/>} />
              </Route>          
            </Route>

            <Route path="*" element={<NotFoundPage />} />    {/* Rotta 404 - per gestire percorsi inesistenti */}

          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  )
}

export default App
