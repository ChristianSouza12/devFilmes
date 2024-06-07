


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Movies from '../containers/Movies';
import Series from '../containers/Series';
import DefaultLayout from '../layout/DefaultLayout';
import Detail from '../containers/Detail';
import DetailSeries from '../containers/DetailSeries';
import DetailMovies from "../containers/DetailsMovies"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout/>}>

                <Route path="/" element={<Home />} />
                <Route path="/filmes" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/detalhe/:id" element={<Detail />} />
                <Route path="/detalhe-filme/:id" element={<DetailMovies />} />
                <Route path="/detalhe-serie/:id" element={<DetailSeries />} />

                </Route>
              
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
