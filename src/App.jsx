import "./App.css";
import Layout from "./components/layout/Layout";
import AppContextProvider from "./context/AppContext";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    <>
      <AppContextProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </AppContextProvider>
    </>
  );
}

export default App;
