import * as CodeMirror from "codemirror";
import "codemirror/theme/darcula.css";
import "codemirror/lib/codemirror.css";

function drawEditor(selector) {
  const textareaElements = Array.prototype.slice.call(document.querySelectorAll(selector));

  for (const textareaElement of textareaElements) {
    CodeMirror.fromTextArea(textareaElement, {
      mode: "xml",
      theme: "darcula",
      lineNumbers: true,
    });
  }
}

function test() {
  console.log("모르면 공부하세요");
}

export { drawEditor, test };
