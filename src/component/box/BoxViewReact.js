const React = require('react');
const ReactDom = require('react-dom');

function BoxViewReact(){

    function hideText() {
        //throw "not implemented";
    }

    function showText() {
        //throw "not implemented";
    }

    function subscribeToToggleMessage (handler) {
        renderBox();
        /// /throw "not implemented";
    }

    function renderBox(){
        class BoxReact extends React.Component{
            render(){
                return (
                    <div  className="box">
                        <h2 className="titleBox">React js</h2>
                        <div className="btn">Toogle</div>
                        <p className="messageBox">Este mensaje a sido mostrado por React</p>
                    </div>)
            }
        }
        ReactDom.render(<BoxReact/>, document.getElementById('box-react'));
    }
    return {
        hideText: hideText,
        showText: showText,
        subscribeToToggleMessage:subscribeToToggleMessage
    }
}

module.exports = BoxViewReact;