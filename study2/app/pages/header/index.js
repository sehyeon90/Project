const _html = `
    <h1>SH_study</h1>
`;

export default class Header {
  constructor(selector) {
    const headerElement = document.querySelector(selector);
    headerElement.innerHTML = _html;
  }

  headerTest(variable) {
    console.log("test", variable);
  }
}
