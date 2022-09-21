/* import { useTranslation } from "react-i18next"; */
import { Route, Routes } from "react-router";
import Gallery from "./components/gallery/Gallery";
import Homepage from "./components/homepage/Homepage";

/* import i18n from "./components/utilities/i18n"; */

function App() {
  /*   const { t } = useTranslation();

  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  } */

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}

export default App;
