const $ = require("jquery");

function ToggleViewJQuery(){

    function initText() {
        $(document).ready(function(){
            let boxElement =  $("#JQuery");
            boxElement.find(".titleBox").text("JQuery");
            boxElement.find(".messageBox").text("Este mensaje ha sido pintado usando JQuery");
        });
    }

    function hideText() {
        $(document).ready(function() {
            $("#JQuery").find(".messageBox").hide();
        });
    }

    function showText() {
        $(document).ready(function() {
            $("#JQuery").find(".messageBox").show();
        });
    }

    function subscribeToToggleMessage (handler) {
        $(document).ready(function() {
            $("#JQuery").find(".btn").on("click", function () {
                handler();
            });
        });
    }

    return {
        initText: initText,
        hideText: hideText,
        showText: showText,
        subscribeToToggleMessage:subscribeToToggleMessage
    }
}

module.exports = ToggleViewJQuery;