(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2c5d"],{2614:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("div",{staticClass:"min-vh-100 p-3"},[a("header",{staticClass:"pb-3"},[a("b-row",[a("b-col",{staticClass:"d-flex align-items-center"},[a("img",{staticStyle:{width:"40px"},attrs:{src:"/assets/images/icon.png",alt:""}}),a("router-link",{staticClass:"ml-2 h5 mb-0 text-dark font-weight-bold",attrs:{to:"/"}},[t._v("RBI 모니터링")])],1),a("b-col",{staticClass:"text-right"},[a("b-button",{staticClass:"shadow-sm bg-white rounded-lg px-3 text-secondary",attrs:{size:"sm",variant:"light"}},[t._v(" 2020-06-25 14:23 "),a("b-icon",{staticClass:"ml-1",attrs:{icon:"arrow-clockwise","font-scale":"1.2"}})],1)],1)],1)],1),a("section",{staticClass:"shadow-lg rounded-lg"},[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{staticClass:"rounded-left position-relative overflow-hidden bg-secondary",staticStyle:{height:"calc(100vh - 88px)"},attrs:{cols:"10"}},[a("img",{staticStyle:{position:"absolute",width:"100%",height:"100%","border-radius":"10px 0 0 10px"},attrs:{src:"/assets/images/map-bg.png",alt:""}}),a("div",{staticStyle:{position:"absolute",right:"10px",bottom:"10px","z-index":"1000"}},[a("b-button",{staticClass:"shadow",attrs:{size:"sm",variant:"light",block:""}},[a("b-icon",{attrs:{"font-scale":"1.2",icon:"cursor-fill"}})],1),a("b-button",{staticClass:"shadow",attrs:{size:"sm",variant:"light",block:""}},[a("b-icon",{attrs:{"font-scale":"1.2",icon:"plus"}})],1),a("b-button",{staticClass:"shadow",staticStyle:{"margin-top":"1px"},attrs:{size:"sm",variant:"light"}},[a("b-icon",{attrs:{"font-scale":"1.2",icon:"dash"}})],1)],1),a("div",{staticClass:"position-absolute w-100 h-100"},t._l(["primary","success","warning","danger"],(function(s,e){return a("div",[a("b-link",{staticClass:"position-absolute",style:"left: calc(200px * "+(e+1)+"); top: calc(200px * "+(e+.5)+");",attrs:{id:"popover-target-"+s}},[a("img",{attrs:{src:"/assets/images/spot-"+s+".png",alt:""}})]),a("b-popover",{attrs:{target:"popover-target-"+s,triggers:"hover",placement:"top",variant:"danger","custom-class":"border-0 shadow-sm"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("그룹 A, 그룹 B")]},proxy:!0}],null,!0)},[a("h5",{staticClass:"mb-0 mt-2"},[t._v("한화건설 - 포레나루원시티 2")]),a("small",{staticClass:"text-secondary"},[t._v("인천광역시 서구 가정동 255-23")]),a("hr",{staticStyle:{"margin-left":"-12px","margin-right":"-12px"}}),t._l(["text-primary","text-success","text-warning","text-danger"],(function(s,e){return a("div",[a("div",{staticClass:"d-flex justify-content-between",class:s},[a("span",[t._v("소음센서 "+t._s(e)+" - Leq")]),a("span",[t._v("65.6 dB(A)")])])])}))],2)],1)})),0)]),a("b-col",{staticClass:"px-3 pt-3",attrs:{cols:"2"}},[a("div",{staticClass:"position-relative"},[a("b-input-group",{staticClass:"ml-auto border rounded"},[a("b-form-input",{staticClass:"border-0",attrs:{type:"search"},on:{focus:function(s){t.search=!0}}}),a("b-input-group-append",[a("b-button",{staticClass:"text-secondary bg-white border-0",on:{click:function(s){t.search=!1}}},[a("b-icon",{attrs:{"font-scale":"1.2",icon:"search"}})],1)],1)],1),t.search?a("div",{staticClass:"border p-3 rounded-lg position-absolute w-100 bg-white",staticStyle:{top:"40px","z-index":"9999"}},[a("div",{staticClass:"text-primary d-flex font-weight-bold"},[t._v("검색 결과[5개] "),a("b-link",{staticClass:"ml-auto",on:{click:function(s){t.search=!1}}},[a("b-icon",{attrs:{"font-scale":"1.5",icon:"x"}})],1)],1),a("ul",{staticClass:"list-unstyled mb-0 mt-2"},t._l(5,(function(s){return a("li",[a("a",{staticClass:"text-dark",attrs:{href:"#none"}},[t._v("현대건설 - 광교산 힐스테이트")])])})),0)]):t._e()],1),a("div",{staticClass:"mt-3",staticStyle:{height:"calc(100vh - 160px)","overflow-x":"hidden","overflow-y":"auto"},attrs:{role:"tablist"}},t._l(12,(function(s,e){return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{attrs:{role:"tab","header-class":"p-0 border-0"}},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+s,expression:"`accordion-${item}`"}],staticClass:"text-left",attrs:{block:"",variant:"dark"}},[a("span",[t._v("그룹 "+t._s(s))]),a("span",{staticClass:"float-right when-open"},[a("b-icon",{staticClass:"ml-auto",attrs:{icon:"dash",variant:"info","font-scale":"1.5"}})],1),a("span",{staticClass:"float-right when-closed"},[a("b-icon",{staticClass:"ml-auto",attrs:{icon:"plus",variant:"info","font-scale":"1.5"}})],1)])],1),a("b-collapse",{attrs:{id:"accordion-"+s,visible:0==e,accordion:"my-accordion",role:"tabpanel"}},[a("b-card-body",{staticClass:"p-0"},[a("div",{staticClass:"px-3 py-2 border-bottom text-secondary"},[t._v("현장 목록 (4)")]),a("div",{staticClass:"px-3"},t._l(3,(function(s){return a("div",{staticClass:"my-3"},[a("b-link",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-detail",expression:"'modal-detail'"}],staticClass:"h6 text-dark"},[t._v("GS건설 - 파주 법원 "+t._s(s))]),t._l(["text-primary","text-success","text-warning","text-danger"],(function(s,e){return a("div",[a("div",{staticClass:"d-flex justify-content-between small",class:s},[a("span",[t._v("소음센서 "+t._s(e)+" - Leq")]),a("span",[t._v("65.6 dB(A)")])])])}))],2)})),0)])],1)],1)})),1),a("Detail")],1)],1)],1)])])},i=[],o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("b-modal",{attrs:{id:"modal-detail","header-class":"p-0 d-block","body-class":"p-0",centered:"","hide-header-close":"","hide-footer":"",scrollable:""},scopedSlots:t._u([{key:"modal-header",fn:function(s){var e=s.close;return[a("div",{staticClass:"bg-dark text-white px-3 py-2"},[t._v("그룹 A, 그룹 B")]),a("div",{staticClass:"bg-white p-3 d-flex align-items-center"},[a("div",[a("h5",{staticClass:"mb-0 mt-2"},[t._v("한화건설 - 포레나루원시티 2")]),a("small",{staticClass:"text-secondary"},[t._v("인천광역시 서구 가정동 255-23")])]),a("b-button",{staticClass:"ml-auto bg-white border-0 p-0",attrs:{variant:"light"},on:{click:function(t){return e()}}},[a("b-icon",{attrs:{icon:"x","font-scale":"2"}})],1)],1)]}}])},[a("div",{staticClass:"py-1",staticStyle:{"background-color":"#d3d8e3"}},t._l(3,(function(s){return a("div",{staticClass:"m-2 shadow-sm"},[a("h6",{staticClass:"text-danger px-3 py-2 mb-0 rounded-top",staticStyle:{"background-color":"#f2f2f2"}},[t._v(" 소음센서 #한화건설 포레나 루원시티 소음센서 "+t._s(s)+" ")]),a("div",{staticClass:"bg-white rounded-bottom",staticStyle:{"min-height":"200px"}},[a("img",{staticClass:"rounded-bottom",attrs:{src:"/assets/images/graph.png",alt:""}})])])})),0)])},l=[],n={name:"Detail"},r=n,c=a("2877"),d=Object(c["a"])(r,o,l,!1,null,null,null),b=d.exports,p={name:"Main",components:{Detail:b},data:function(){return{search:null}}},u=p,h=Object(c["a"])(u,e,i,!1,null,null,null);s["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0b2c5d.123b0008.js.map