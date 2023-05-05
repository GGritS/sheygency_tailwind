import { Home } from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/about";
import { Clients } from "./pages/clients";
import { Contact } from "./pages/contact";
import { Layout } from "./components/layout";

const routes = [
  { path: "/", title: "home", component: <Home /> },
  { path: "/about", title: "about", component: <About /> },
  { path: "/clients", title: "clients", component: <Clients /> },
  { path: "/contact", title: "contact", component: <Contact /> },
];

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={route.component}
              key={route.title}
            />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
