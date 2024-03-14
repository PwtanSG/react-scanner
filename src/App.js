import './App.css';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useState, useEffect, useRef } from 'react'

function App() {

  const mount = useRef(true);
  const [scanResult, setScanResult] = useState(null);
  const [validUrl, setValidUrl] = useState(false);

  useEffect(() => {

    function validateURL(url) {
      if (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(url)) {
        console.log('Valid');
        setValidUrl(true)
      } else {
        console.log('Not Valid');
      }
    }

    function onScanSuccess(decodedText, decodedResult) {
      // console.log(`Code matched = ${decodedText}`, decodedResult);
      validateURL(decodedText)
      setScanResult(decodedText)
    }

    function onScanFailure(error) {
      console.warn(`Code scan error = ${error}`);
    }

    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250
      },
      fps: 5
    });


    if (mount.current) {
      scanner.render(onScanSuccess, onScanFailure);
    }

    return () => {
      mount.current = false;
    }
  }, []);


  return (
    <div className="App">
      <h1>Scanner</h1>
      <div className='main'>
        <div id="reader"></div>
      </div>
      {scanResult
        ? validUrl
          ? <div><a href={scanResult}>{scanResult}</a></div>
          : <div>{scanResult}</div>
        : <div></div>
      }
      {/* <div id="reader1"></div> */}

    </div >
  );
}

export default App;
