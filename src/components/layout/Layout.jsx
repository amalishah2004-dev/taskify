import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="pt-4 font-sans ">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
