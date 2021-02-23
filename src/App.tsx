import React, { useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const _getDeviceInfo = useCallback(async () => {
    try {
      const constraints = { video: { facingMode: 'user' } };
      console.log("tt");
      console.log("navigator.mediaDevices", navigator.mediaDevices);
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log("i")
        let a = await navigator.mediaDevices.getUserMedia(constraints);
        console.log(a);
        handleSuccess(a);
      }
    } catch (e) {
      handleError(e);
      throw e;
    }
  }, []);
  const handleSuccess = (stream : any) => {
    console.log(stream);
  }
  const handleError = (error : any) => {
    console.error('Error: ', error);
  }

  useEffect(() => {
    _getDeviceInfo();
  }, [_getDeviceInfo]);

  return (
    <div className="App">
      <input placeholder="텍스트" />
    </div>
  );
}

export default App;
