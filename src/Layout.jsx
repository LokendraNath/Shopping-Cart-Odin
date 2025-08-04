import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Header />
      <main className="flex-1 p-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
