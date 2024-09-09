import "./App.css";
import Router from "./routes/Router";

// const token = localStorage.getItem("token");
// if (token) {
//   setToken(token);
//   // authenticate routes
//   store.dispatch({ type: SET_AUTH });
// }
function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
