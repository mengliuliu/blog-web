import Header from "./globalComponents/header.tsx";
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
  Redirect,
} from "react-router-dom";
import { urlList } from "./router/index";
import "./assets/styles/common.less";

function App() {
  const getRoutes = () => {
    const routes = [];
    urlList.forEach((route) => {
      routes.push(
        <Route
          key={route.name}
          path={route.url}
          component={route.component}
        ></Route>
      );
    });
    return routes;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div className="App-body">
        <HashRouter>
          <Routes>
            {getRoutes()}
            {/* <Redirect to="/content/list"></Redirect> */}
            {/* <Navigate to="/content/list"/> */}
            <Route path="/" element={<Navigate replace to="/content/list" />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
