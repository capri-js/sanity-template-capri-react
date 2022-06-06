import "./global.css";

import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { Preview } from "./Preview";
import { Page } from "./Page";

export function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/preview" element={<Preview />} />
        <Route path="*" element={<Page />} />
      </Routes>
    </Suspense>
  );
}
