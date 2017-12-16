import "./index.html";
import "./styles/styles.css"

const TogglePresenter = require("./component/box/TogglePresenter");

const BoxViewReact = require("./component/box/BoxViewReact");

let view = BoxViewReact();
console.log(view);
TogglePresenter(view);