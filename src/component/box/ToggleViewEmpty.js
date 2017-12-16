function ToggleViewEmpty(){

    function hideText() {
        throw "not implemented";
    }

    function showText() {
        throw "not implemented";
    }

    function subscribeToToggleMessageRequested (handler) {
        throw "not implemented";
    }

    return {
        hideText: hideText,
        showText: showText,
        subscribeToToggleMessageRequested:subscribeToToggleMessageRequested
    }
}

module.exports = ToggleViewEmpty;