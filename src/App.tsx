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
        await navigator.mediaDevices.getUserMedia(constraints).then(stream => {
          console.log("stream", stream);
        })
      }
    } catch (e) {
      console.log(e);
      throw e;
    }
  }, []);

  useEffect(() => {
    _getDeviceInfo();
  }, [_getDeviceInfo]);

  return (
    <div className="App">
      <input placeholder="텍스트" />
      <video id="vid" height="120" width="160"></video>
    </div>
  );
}

export default App;
