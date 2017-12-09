function TogglePresenter(view) {

    let isShow = true;
    view.subscribeToToggleMessage(toggleMessage);
    view.initText();
    toggleMessage();

    function toggleMessage() {
        isShow ? view.hideText() : view.showText();
        isShow = !isShow;
    }

    return {
        toggleMessage: toggleMessage,
    }

}
module.exports = TogglePresenter;