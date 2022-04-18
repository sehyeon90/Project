import { drawEditor, test } from "/app/js/editor.js";

const _html = `
    <article>
      <h1>제목제목제목제목</h1>
      <textarea class="editor">
<p>내용내용내용내용내용내용내용내용내용내용</p>
            </textarea
      >
      <p>내용내용내용내용내용내용내용내용내용내용</p>
    </article>
    <article>
      <h1>제목제목제목제목</h1>
      <textarea class="editor">
<p>내용내용내용내용내용내용내용내용내용내용</p>
            <p>내용내용내용내용내용내용내용내용내용내용</p></textarea
      >
    </article>
    <article>
      <h1>제목제목제목제목</h1>
      <textarea class="editor">
<p>내용내용내용내용내용내용내용내용내용내용</p>
            <p>내용내용내용내용내용내용내용내용내용내용</p></textarea
      >
      <p>내용내용내용내용내용내용내용내용내용내용</p>
      <p>내용내용내용내용내용내용내용내용내용내용</p>
    </article>
    <article>
      <h1>제목제목제목제목</h1>
      <textarea class="editor">
<p>내용내용내용내용내용내용내용내용내용내용</p>
            <p>내용내용내용내용내용내용내용내용내용내용</p></textarea
      >
      <p>내용내용내용내용내용내용내용내용내용내용</p>
      <p>내용내용내용내용내용내용내용내용내용내용</p>
    </article>
    <article>
      <h1>제목제목제목제목</h1>
      <textarea class="editor">
<p>내용내용내용내용내용내용내용내용내용내용</p>
            <p>내용내용내용내용내용내용내용내용내용내용</p></textarea
      >
      <p>내용내용내용내용내용내용내용내용내용내용</p>
      <p>내용내용내용내용내용내용내용내용내용내용</p>
    </article>
    
`;

export default class Content {
  constructor(selector) {
    const contentElement = document.querySelector(selector);
    contentElement.innerHTML = _html;
    // this.drawEditor(".editor");
    drawEditor(".editor");
  }

  // drawEditor(selector) {
  //   const textareaElements = Array.prototype.slice.call(this.contentElement.querySelectorAll(selector));

  //   for (const textareaElement of textareaElements) {
  //     CodeMirror.fromTextArea(textareaElement, {
  //       mode: "xml",
  //       theme: "darcula",
  //       lineNumbers: true,
  //     });
  //   }
  // }
}
