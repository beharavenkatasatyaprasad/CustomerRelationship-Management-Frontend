import "./App.css";
import routes from "./Config/routes.js";
import { AuthProvider } from "./Context";
import AppRoute from "./components/AppRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
              {routes.map((route) => (
                <AppRoute
                  key={route.path}
                  path={route.path}
                  component={route.component}
                  isPrivate={route.isPrivate}
                />
              ))}
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
