function ToggleViewEmpty(){

    function hideText() {
        throw "not implemented";
    }

    function showText() {
        throw "not implemented";
    }

    function subscribeToToggleMessage (handler) {
        throw "not implemented";
    }

    return {
        hideText: hideText,
        showText: showText,
        subscribeToToggleMessage:subscribeToToggleMessage
    }
}

module.exports = ToggleViewEmpty;