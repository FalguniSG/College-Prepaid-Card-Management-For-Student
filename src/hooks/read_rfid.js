import { useState } from 'react';

export const useReadRfid = () => {
  const [rfidData, setRfidData] = useState(null);
  const [isScanning, setIsScanning] = useState(false)

  const handleFetchRFID = () => {
    const wsServerURL = 'ws://192.168.0.115:8765';

    // Open a WebSocket connection to the server
    const websocket = new WebSocket(wsServerURL);

    // Send a message to the server to request RFID data
    websocket.onopen = () => {
      websocket.send('scan_rfid');
      setIsScanning(true)
    };

    // Receive the response from the server
    websocket.onmessage = (event) => {
      console.log(event?.data)
      const data = JSON.parse(event.data)?.uid
      setRfidData(data)
      setIsScanning(false)
      
      // Close the WebSocket connection after receiving the data
      websocket.close();
    };

    // Handle WebSocket connection errors
    websocket.onerror = (error) => {
      console.error('WebSocket error:', error);
      websocket.close();
    };
  };

  return {
    rfidData,
    isScanning,
    scanRfid: handleFetchRFID,
  };
};
