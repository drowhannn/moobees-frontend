import React, { useEffect, useState } from "react";
import MarkDown from "markdown-to-jsx";
import markdown from "./markdown";
import { useParams } from "react-router-dom";
import "./MarkdownContent.css";

function MarkdownContent() {
  const { mindex } = useParams();

  const [filename, setFilename] = useState("");

  const [content, setContent] = useState("");

  useEffect(() => {
    const fname = markdown[mindex] ? markdown[mindex] : "404.md";
    setFilename(fname);

    import(`./Markdowns/${filename}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [mindex, filename]);

  return (
    <div className="markdownContent">
      <MarkDown>{content}</MarkDown>
    </div>
  );
}

export default MarkdownContent;
