

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    clickCapture5:function (event,customEventDate){
        cc.director.loadScene("gamebegining");
    },
    // update (dt) {},
});
