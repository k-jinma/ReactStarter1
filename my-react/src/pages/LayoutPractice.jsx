import "./LayoutPractice.css";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
import Footer from "../components/Footer.jsx";

export default function LayoutPractice() {
  return (
    <div className="lp-page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}