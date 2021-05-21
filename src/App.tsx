import "./App.css";
import abcjs from "abcjs";

function App() {
  const code = `
  X:1
  M:4/4
  K:E
  L:1/16
  V:1
  V:2 clef=bass
  [V:1] (6:2:3EB,G, |: zG,DB, EG,DB, EG,DB, EG,DB, | zA,DB, EA,DB, EA,DB, EA,DB, :|
  [V:2] z |: E,,15 B,, | E,,15 B,, :|
  `;

  const sound = () => {
    const ctx = new AudioContext();
    console.log("click");
    const osc = ctx.createOscillator();
    osc.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.value = 1000;
    // osc.start(0);
    // osc.stop(1);

    abcjs.renderAbc("paper", code, {
      responsive: "resize",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id="paper"></div>
        <button onClick={sound} className="Sound-Button">Play</button>
      </header>
    </div>
  );
}

export default App;
