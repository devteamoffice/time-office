import './App.css';
import ComingPage from './component/ComingPage';
import Contact from './component/Contact/Contact';

import Error404New from './component/Error404New';
import Error505 from './component/Error505';
import Slider_exa from './component/Slider_exa';




const token = localStorage.getItem("token");
if (token) {
  setToken(token);
  // authenticate routes
  store.dispatch({ type: SET_AUTH });
}
function App() {
  return (
    <>



      {/* <Slidernew /> */}
      <Error404New />

      <hr />

      <Error505 />
      <hr />

      <hr />
      <ComingPage />
      <hr />

      <Contact />
      <hr />

      <Slider_exa />

      <hr />






    </>
  );
}

export default App;
