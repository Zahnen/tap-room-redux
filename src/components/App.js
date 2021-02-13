import React from "react";
import Header from "./Header";
import KegControl from "./KegControl"
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return(
    <>
      <Header />
      <div class="container">
        <KegControl />
      </div>
    </>
  );
}

export default App;
