import Vue from 'vue';

function BoxViewVue(){

    let subscribeToToggleMessageRequestedHandler;
    let VueBox;

    function hideText() {VueBox.show = false;}

    function showText() {VueBox.show = true;}

    function subscribeToToggleMessageRequested (handler) {
        subscribeToToggleMessageRequestedHandler = handler;
        renderBox();
    }

    function renderBox(){
        VueBox = new Vue({
            el: '#box-vue',
            data:{show:true},
            methods:{
                subscribeToToggleMessageRequestedHandler:subscribeToToggleMessageRequestedHandler
            },
            template: `
            <div  class="box">
                <h2 class="titleBox">Vue js</h2>
                <div class="btn" v-on:click="subscribeToToggleMessageRequestedHandler">Toogle</div>
                <div v-if="show">Este mensaje ha sido mostrado por Vue</div>
            </div>`
        });
    }

    return {
        hideText: hideText,
        showText: showText,
        subscribeToToggleMessageRequested:subscribeToToggleMessageRequested
    }
}

module.exports = BoxViewVue;