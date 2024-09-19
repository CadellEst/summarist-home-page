"use client";

import { Modal } from "@mui/material";
import { useState } from "react";
import Signup from "../Signup/signup";

export default function SignupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <button class="btn home__cta--btn" onClick={handleOpen}>
        Login
      </button>

      <Modal
        open={isOpen}
        onClose={handleClose}
        className="flex justify-center items-center"
      >
        <Signup />
      </Modal>
    </>
  );
}
