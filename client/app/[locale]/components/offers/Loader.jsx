import clsx from "clsx";
import React from "react";
import { CgSpinnerTwoAlt } from "react-icons/cg";

function Loader({ className }) {
  return (
    <CgSpinnerTwoAlt className={clsx("animate-spin text-4xl", className)} />
  );
}

export default Loader;