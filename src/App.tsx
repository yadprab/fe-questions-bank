import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button/Button";
import { Modal } from "./Components/Modal/Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen((open) => !open);
        }}
      >
        Modal
      </Button>
      <Modal
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}

export default App;
