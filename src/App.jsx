import { useState } from "react";
import "@gorules/jdm-editor/dist/style.css";
import { DecisionGraph, JdmConfigProvider } from "@gorules/jdm-editor";

function App() {
  const [graph, setGraph] = useState("");

  return (
    <JdmConfigProvider>
      <DecisionGraph value={graph} onChange={(val) => setGraph(val)} />
    </JdmConfigProvider>
  );
}

export default App;
