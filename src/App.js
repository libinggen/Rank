import React from 'react';
import './App.css';

function App() {

  function StreamerList(props) {
    const [streamerItems, setStreamerItems] = React.useState(0);
    React.useEffect(() => {
      const interval = setInterval(
        () => setStreamerItems([
          { key: "streamer01", value: Math.floor((Math.random() * 100) + 1) },
          { key: "streamer02", value: Math.floor((Math.random() * 100) + 1) },
          { key: "streamer03", value: Math.floor((Math.random() * 100) + 1) },
          { key: "streamer04", value: Math.floor((Math.random() * 100) + 1) },
          { key: "streamer05", value: Math.floor((Math.random() * 100) + 1) },
          { key: "streamer06", value: Math.floor((Math.random() * 100) + 1) },
          { key: "streamer07", value: Math.floor((Math.random() * 100) + 1) },
          { key: "streamer08", value: Math.floor((Math.random() * 100) + 1) },
          { key: "streamer09", value: Math.floor((Math.random() * 100) + 1) },
          { key: "streamer10", value: Math.floor((Math.random() * 100) + 1) }
        ]
        .sort((a, b) => b.value - a.value)
        .map((item) => <li key={item.key}>{item.key} : {item.value}</li>)),
        1000
      );

      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
      <ul>{streamerItems}</ul>
    );
  }

  return (
    <div className="App">
      <StreamerList />
    </div>
  );
}

export default App;
