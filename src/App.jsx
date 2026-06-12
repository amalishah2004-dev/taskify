import Layout from "./components/layout/Layout";
import Home from "./pages/Home";


function App() {
  return (
    <div className="bg-[#EEF0F2] w-screen min-h-screen" >
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;