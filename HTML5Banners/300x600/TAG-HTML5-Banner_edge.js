/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'TAGbanner300x600_bkg',
                type: 'image',
                rect: ['0', '0','300px','600px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"TAGbanner300x600_bkg.jpg",'0px','0px']
            },
            {
                id: 'AccessGroupLogo',
                type: 'image',
                rect: ['8px', '-51px','304px','193px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"AccessGroupLogo.png",'0px','0px'],
                transform: [[],[],[],['0.33','0.33']]
            },
            {
                id: 'gray_box',
                type: 'image',
                rect: ['88px', '101px','105px','104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gray_box.png",'0px','0px']
            },
            {
                id: 'top_left',
                type: 'image',
                rect: ['-43px', '-45px','43px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"top_left.png",'0px','0px']
            },
            {
                id: 'top_right',
                type: 'image',
                rect: ['300px', '-45px','45px','43px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"top_right.png",'0px','0px']
            },
            {
                id: 'bottom_left',
                type: 'image',
                rect: ['-46px', '337px','45px','43px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bottom_left.png",'0px','0px']
            },
            {
                id: 'bottom_right',
                type: 'image',
                rect: ['167px', '178px','43px','45px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"bottom_right.png",'0px','0px']
            },
            {
                id: 'gray_box_title',
                type: 'image',
                rect: ['117px', '142px','63px','39px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gray_box_title.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_top_right}": [
                ["style", "left", '302px'],
                ["style", "top", '-47px']
            ],
            "${_gray_box_title}": [
                ["style", "top", '142px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '117px']
            ],
            "${_bottom_left}": [
                ["style", "left", '-46px'],
                ["style", "top", '337px']
            ],
            "${_bottom_right}": [
                ["style", "top", '335px'],
                ["style", "left", '300px']
            ],
            "${_gray_box}": [
                ["style", "top", '101px'],
                ["style", "opacity", '0'],
                ["style", "left", '88px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '600px'],
                ["style", "overflow", 'hidden']
            ],
            "${_top_left}": [
                ["style", "top", '-47px'],
                ["style", "left", '-46px']
            ],
            "${_AccessGroupLogo}": [
                ["style", "top", '535px'],
                ["transform", "scaleY", '0.33'],
                ["style", "left", '-4px'],
                ["transform", "scaleX", '0.33']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid4", tween: [ "style", "${_AccessGroupLogo}", "top", '-51px', { fromValue: '535px'}], position: 0, duration: 545 },
                { id: "eid23", tween: [ "style", "${_gray_box}", "opacity", '1', { fromValue: '0'}], position: 420, duration: 895 },
                { id: "eid39", tween: [ "style", "${_bottom_left}", "top", '181px', { fromValue: '337px'}], position: 1000, duration: 1019 },
                { id: "eid41", tween: [ "style", "${_bottom_left}", "left", '102px', { fromValue: '-46px'}], position: 1000, duration: 1019 },
                { id: "eid52", tween: [ "style", "${_gray_box_title}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 1750 },
                { id: "eid29", tween: [ "style", "${_top_left}", "top", '114px', { fromValue: '-47px'}], position: 1000, duration: 1019 },
                { id: "eid33", tween: [ "style", "${_top_right}", "top", '115px', { fromValue: '-47px'}], position: 1000, duration: 1019 },
                { id: "eid36", tween: [ "style", "${_top_right}", "left", '166px', { fromValue: '302px'}], position: 1000, duration: 1019 },
                { id: "eid45", tween: [ "style", "${_bottom_right}", "top", '179px', { fromValue: '335px'}], position: 1000, duration: 1019 },
                { id: "eid31", tween: [ "style", "${_top_left}", "left", '102px', { fromValue: '-46px'}], position: 1000, duration: 1019 },
                { id: "eid46", tween: [ "style", "${_bottom_right}", "left", '168px', { fromValue: '300px'}], position: 1000, duration: 1019 },
                { id: "eid15", tween: [ "style", "${_AccessGroupLogo}", "left", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_AccessGroupLogo}", "left", '-4px', { fromValue: '-4px'}], position: 545, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-558552329");
