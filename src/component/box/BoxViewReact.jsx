const React = require('react');
const ReactDom = require('react-dom');

function BoxViewReact(){

    let subscribeToToggleMessageRequestedHandler;

    function hideText() {
        ReactDom.unmountComponentAtNode(document.getElementById('container-message-react'));
    }

    function showText() {
        ReactDom.render(<MessageBox />, document.getElementById('container-message-react'));
    }

    function subscribeToToggleMessageRequested (handler) {
        subscribeToToggleMessageRequestedHandler = handler;
        renderBox();
    }

    function renderBox(){
        class BoxReact extends React.Component{
            render(){
                return (
                    <div  className="box">
                        <h2 className="titleBox">React js</h2>
                        <div className="btn" onClick={subscribeToToggleMessageRequestedHandler}>Toogle</div>
                        <div id="container-message-react"/>
                    </div>)
            }
        }
        ReactDom.render(<BoxReact/>, document.getElementById('box-react'));
    }

    class MessageBox extends React.Component{
        render(){return <p className="messageBox">Este mensaje ha sido mostrado por React</p>}
    }

    return {
        hideText: hideText,
        showText: showText,
        subscribeToToggleMessageRequested:subscribeToToggleMessageRequested
    }
}

module.exports = BoxViewReact;