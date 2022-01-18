import React from "react";
import MarkDown from "markdown-to-jsx";
import markdown from "./markdown";
import { useParams } from "react-router-dom";
import "./MarkdownContent.css";

function MarkdownContent() {
  const { mindex } = useParams();

  return (
    <div className="markdownContent">
      <MarkDown>
        {markdown[mindex] ? markdown[mindex] : markdown["404"]}
      </MarkDown>
    </div>
  );
}

export default MarkdownContent;
