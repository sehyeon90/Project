import "/public/css/style.css";
import Header from "/app/pages/header";
import Footer from "/app/pages/footer";
import Nav from "/app/pages/nav";
import MainLnb from "/app/pages/MainLnb";
import Content from "/app/pages/content";

const _html = `
    <header id="main_header"></header>
    <nav id="main_gnd"></nav>
    <div id="wrap">
     <nav id="main_lnb"></nav>
      <div id="content_wrap">
      <div id="content"></div>
      </div>
    </div>
    <footer id="main_footer"></footer>
`;

export default class Index {
  constructor(selector) {
    const rootElement = document.querySelector(selector);
    rootElement.innerHTML = _html;
    const header = new Header("#main_header");
    header.headerTest("바보");
    new Nav("#main_gnd");
    new MainLnb("#main_lnb");
    new Content("#content");
    new Footer("#main_footer");
    // new drawEditor(".editor");
  }
}

window.onload = async function () {
  await new Index("#contents");
};
