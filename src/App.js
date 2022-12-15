import { Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Home";
import Nav from "./Components/Pages/Navbar";
import Footer from "./Components/Pages/Footer";
import Detail from "./Components/Details/Detail";
import Detail1 from "./Components/Details/Detail1";
import Detail2 from "./Components/Details/Detail2";
import Detail3 from "./Components/Details/Detail3";
import Detail4 from "./Components/Details/Detail4";
import Detail5 from "./Components/Details/Detail5";
import Detail6 from "./Components/Details/Detail6";
import Detail7 from "./Components/Details/Detail7";
import Detail8 from "./Components/Details/Detail8";
import Detail9 from "./Components/Details/Detail9";
import Detail10 from "./Components/Details/Detail10";
import Soul from "./Components/Details/Soul";
import Moana from "./Components/Details//Moana";
import Details from "./Components/Details/Details";
import Inside from "./Components/Details/Inside";
import Black from "./Components/Details//Black";
import NotFound from "./NotFound/NotFound";
import Vid1 from "./Video/vid1";
import Explore from "./Components/Pages/Explore";
import Movie from "./Components/Pages/Movie";
function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/459i5y5iy" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/detail/463m6nlk36j3jn" element={<Detail1 />} />
        <Route path="/detail/463m6nlk33jn" element={<Detail2 />} />
        <Route path="/detail/KDS88Y8SV" element={<Detail3 />} />
        <Route path="/detail/34906djkg" element={<Detail4 />} />
        <Route path="/detail/dkjn894m" element={<Detail5 />} />
        <Route path="/detail/dk98JKjn894m" element={<Detail6 />} />
        <Route path="/detail/dk98JK4n894m" element={<Detail7 />} />
        <Route path="/detail/dk98JK494m" element={<Detail8 />} />
        <Route path="/detail/dk98JKljv9m" element={<Detail9 />} />
        <Route path="/detail/dk98JKlkndg9" element={<Detail10 />} />
        <Route path="/detail/dk98JKlkndd8" element={<Soul />} />
        <Route path="/detail/dk98JKlkmjkd9" element={<Moana />} />
        <Route path="/detail/JKKJBJK98hh9" element={<Details />} />
        <Route path="/detail/JKergJ98mhd" element={<Inside />} />
        <Route path="/detail/JKergJ8mhd" element={<Black />} />
        <Route path="/vid1" element={<Vid1 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
