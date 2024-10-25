

import React from "react";
import About from "./pages/about";
import Events from "./pages/events";
import Reservation from "./pages/reservation";
import Rooms from "./pages/rooms";
import Contact from "./pages/contact";
import Index from "./pages/index";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
