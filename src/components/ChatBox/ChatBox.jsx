import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

export default function ChatBox() {


  useEffect(() => {

  }, []);

  return (
    <div className="fixed inset-y-0 right-0 w-16 border-black shadow-md bg-white drop-shadow-md">
      <button className="fixed">
        <FontAwesomeIcon className="w-10 h-10 -left-3" icon={faArrowCircleLeft} />
      </button>
    </div>
  );
}
