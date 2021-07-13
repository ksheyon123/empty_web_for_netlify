import React, { useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
const App: React.FC = () => {
  useEffect(() => {
    window.removeEventListener("message", eventHandler);
    window.addEventListener("message", eventHandler);

  }, [])


  const eventHandler = async (event: any) => {
    const { data } = event;
    const parsedData = JSON.parse(data);
    const { error } = parsedData;
    console.log("data", data);
    console.log("error", error);
  };

  return (
    <div className="App">
      <iframe
        title="test"
        src="https://hardwallet.icon.foundation/index_jw.html?method=getBalance&lang=en&networkVer=v3&popupType=INITIAL"
        width="400px"
        height="400px"
      />
      <iframe
        title="test"
        src="http://localhost:3000?method=getBalance&lang=en&networkVer=v3&popupType=INITIAL"
        width="400px"
        height="400px"
        sandbox="allow-forms allow-scripts allow-same-origin"
      />
    </div>
  );
}

export default App;
