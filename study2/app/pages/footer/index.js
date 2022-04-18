const _html = `
    <h3>HTML+css공부</h3>
    <address>Sehyeon Study</address>
`;

export default class Footer {
  constructor(selector) {
    const footerElement = document.querySelector(selector);
    footerElement.innerHTML = _html;
  }
}
