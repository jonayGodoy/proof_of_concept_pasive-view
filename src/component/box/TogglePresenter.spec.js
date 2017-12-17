"use strict";
let assert = require('assert');
let sinon = require('sinon');

const TogglePresenter = require("./TogglePresenter");
const ToggleViewEmpty = require("./ToggleViewEmpty");
const BoxViewReact = require("./BoxViewReact");
const BoxViewVue = require("./BoxViewVue");

describe("TogglePresenter", function () {
    let view;
    let mockView;

    beforeEach(function () {
        view = ToggleViewEmpty();
        mockView = sinon.mock(view);
        mockView.expects("hideText");
    });

    it("test green", function () {assert.ok(true);});

    it("hideText always when start", function () {
        let view = ToggleViewEmpty();
        let mockView = sinon.mock(view);
        mockView.expects("hideText").once();
        mockView.expects("subscribeToToggleMessageRequested");

        TogglePresenter(view);

        mockView.verify();
    });

    it("show text when toggle", function () {
        mockView.expects("showText").once();
        mockView.expects("subscribeToToggleMessageRequested");

        let togglePresenter = TogglePresenter(view);
        togglePresenter.toggleMessage();

        mockView.verify();
    });

    it("hide text when toggle twice", function () {
        mockView.expects("showText").once();
        mockView.expects("hideText").once();
        mockView.expects("subscribeToToggleMessageRequested");


        let togglePresenter = TogglePresenter(view);
        togglePresenter.toggleMessage();
        togglePresenter.toggleMessage();

        mockView.verify();
    });

    it("view subscribe to toggle event", function () {
        mockView.expects("showText").once();
        let toggleMessageHandler = () => {};
        view.subscribeToToggleMessageRequested = (handler) =>{
            toggleMessageHandler = handler;
        };

        TogglePresenter(view);
        toggleMessageHandler();

        mockView.verify();
    });

    it("hide text when toggle twice with ViewReact", function () {
        let view = BoxViewReact();
        let mockView = sinon.mock(view);
        mockView.expects("subscribeToToggleMessageRequested").once();
        mockView.expects("hideText").once();
        mockView.expects("showText").once();
        mockView.expects("hideText").once();

        let togglePresenter = TogglePresenter(view);
        togglePresenter.toggleMessage();
        togglePresenter.toggleMessage();

        mockView.verify();
    });

    it("hide text when toggle twice with ViewVue", function () {
        let view = BoxViewVue();
        let mockView = sinon.mock(view);
        mockView.expects("subscribeToToggleMessageRequested").once();
        mockView.expects("hideText").once();
        mockView.expects("showText").once();
        mockView.expects("hideText").once();

        let togglePresenter = TogglePresenter(view);
        togglePresenter.toggleMessage();
        togglePresenter.toggleMessage();

        mockView.verify();
    });

});