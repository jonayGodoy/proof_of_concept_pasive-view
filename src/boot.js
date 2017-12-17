import "./index.html";
import "./styles/styles.css"

import TogglePresenter from "./component/box/TogglePresenter";
import BoxViewReact  from "./component/box/BoxViewReact";
import BoxViewVue from "./component/box/BoxViewVue";

let viewReact = BoxViewReact();
let viewVue = BoxViewVue();
TogglePresenter(viewReact);
TogglePresenter(viewVue);