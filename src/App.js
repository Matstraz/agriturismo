import { useTranslation } from "react-i18next";
import i18n from "./utilities/i18n";

function App() {
  const { t } = useTranslation();

  function handleLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <div>
      <div>{t("title")}</div>;
      <button onClick={handleLanguage} value={"en"}>
        english
      </button>
      <button onClick={handleLanguage} value={"it"}>
        italian
      </button>
    </div>
  );
}

export default App;
