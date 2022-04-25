const _html = `
    <ul class="left">
  <li><a href="#">Home</a></li>
  <li><a href="#">HTML</a></li>
  <li><a href="#">css</a></li>
  <li><a href="./html/JS-Study/jaStudy.html">JS</a></li>
  <li><a href="#">menu1</a></li>
  <li><a href="#">menu2</a></li>
</ul>
<ul class="right">
  <li><a href="#">Button</a></li>
  <li><a href="#">Button</a></li>
</ul>
`;

// export default class Nav {
//   constructor(selector) {
//     const navElement = document.querySelector(selector);
//     navElement.innerHTML = _html;
//   }
// }

// 각각의 식별자 내보내기
export default function Nav(selector) {
  const navElement = document.querySelector(selector);
  navElement.innerHTML = _html;
}
