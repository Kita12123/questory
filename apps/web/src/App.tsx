import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PuckEditorPage } from "./pages/PuckEditorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 開発用 */}
        <Route path="/editor" element={<PuckEditorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;