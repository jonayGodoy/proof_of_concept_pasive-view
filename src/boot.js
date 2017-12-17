import "./index.html";
import "./styles/styles.css"

const TogglePresenter = require("./component/box/TogglePresenter");
const BoxViewReact = require("./component/box/BoxViewReact");
const BoxViewVue = require("./component/box/BoxViewVue");

let viewReact = BoxViewReact();
let viewVue = BoxViewVue();
TogglePresenter(viewReact);
TogglePresenter(viewVue);