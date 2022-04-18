const _html = `
 <ul>
  <li>
    <a href="#">Button</a>
    <ul>
      <li><a href="#">sub-Menu1</a></li>
      <li><a href="#">sub-Menu2</a></li>
      <li><a href="#">sub-Menu3</a></li>
    </ul>
  </li>

  <li><a href="#">Button</a></li>
  <li><a href="#">Button</a></li>
  <li><a href="#">Button</a></li>
  <li><a href="#">Button</a></li>
 </ul>
`;

export default class MainLnb {
  constructor(selector) {
    const mainLnbElement = document.querySelector(selector);
    mainLnbElement.innerHTML = _html;
  }
}
