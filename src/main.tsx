import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { store } from "./redux/store/store";
import routes from "./constants/routes";
import styleSpinner from "./components/games/card-game/cardGame.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./styles/main.scss";

function AppContainer(props: Parameters<React.FC>[0]): ReturnType<React.FC> {
  return (
    <StrictMode>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="*" element={<Navigate to="/home" />} />
            {routes.map(({ path, component: Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Suspense fallback={<CircularProgress className={styleSpinner.spinner} color="secondary" />}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </StrictMode>
  );
}

const container = document.getElementById("app");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<AppContainer />);
