// LAYOUT COMPONENTS
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import IconBar from "./components/layout/Iconbar";
import Footer from "./components/layout/Footer";

// DATA
import comics from "./data/comics";

export default function App() {
  return (
    <>
      <Header />
      <Main comics={comics} />
      <IconBar />
      <Footer />
    </>
  );
}
