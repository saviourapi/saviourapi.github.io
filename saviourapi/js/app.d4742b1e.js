(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7d216abb"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,a[1](c)}n[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/saviourapi/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=o,e.exports=n,n.id="4678"},a90d:function(e,t,a){"use strict";a("df1f")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("left-panel",{attrs:{drawer:e.drawer},on:{onDrawer:e.onDrawer}}),a("v-app-bar",{attrs:{app:"",color:"#034748",dark:"",short:"",elevation:0}},[a("v-btn",{attrs:{icon:""},on:{click:function(t){e.drawer=!e.drawer}}},[a("v-icon",[e._v("mdi-menu")])],1),a("div",{staticClass:"d-flex align-center"},[a("h2",[e._v("SAVIOUR")])]),a("v-spacer")],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view"),a("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[a("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[e._v(" Cerrar ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.error)+" ")])],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-navigation-drawer",{attrs:{app:"",bottom:"",fixed:"",width:"25%",color:"#F5FAF4"},model:{value:e.drawerState,callback:function(t){e.drawerState=t},expression:"drawerState"}},[a("v-container",[a("h4",[e._v("1. Seleccione el algoritmo")]),a("br"),a("v-select",{attrs:{items:e.modelName,outlined:"","item-text":"text","item-value":"value"},model:{value:e.modelSelected.value,callback:function(t){e.$set(e.modelSelected,"value",t)},expression:"modelSelected.value"}}),a("h5",{staticClass:"ml-2"},[e._v("Escoger porcentaje para el testeo:")]),a("v-slider",{staticClass:"align-center",attrs:{max:e.max,min:e.min,"hide-details":""},scopedSlots:e._u([{key:"append",fn:function(){return[a("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:e.slider,callback:function(t){e.slider=t},expression:"slider"}})]},proxy:!0}]),model:{value:e.slider,callback:function(t){e.slider=t},expression:"slider"}})],1),a("v-divider"),a("v-container",[a("h4",[e._v("2. Carga de archivo CSV")]),a("br"),a("v-file-input",{attrs:{accept:".csv",filled:"",label:"CSV de datos",placeholder:"Archivos hasta 100 mb",outlined:"","show-size":"","prepend-icon":null,"append-icon":"mdi-file-delimited",loading:e.loading,rules:e.rules},on:{change:e.uploadFile},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),a("v-divider"),a("v-container",[a("h4",{staticClass:"mb-4"},[e._v("3. Seleccionar variables")]),e.sumarize.columns.length>0?a("v-container",{attrs:{fluid:""}},[a("variance-table"),a("v-select",{staticClass:"mt-5",attrs:{items:e.sumarize.columns,label:"Campo fecha",outlined:""},on:{change:e.onChangeSelects},model:{value:e.campox,callback:function(t){e.campox=t},expression:"campox"}}),a("v-select",{attrs:{items:e.sumarize.columns,label:"Campo Y",outlined:""},on:{change:e.onChangeSelects},model:{value:e.campoy,callback:function(t){e.campoy=t},expression:"campoy"}}),a("v-select",{attrs:{items:e.sumarize.columns,label:"Campo de agrupación",outlined:""},on:{change:e.onChangeSelects},model:{value:e.groupby,callback:function(t){e.groupby=t},expression:"groupby"}}),e.campox.length>0&&e.campoy.length>0&&e.groupby.length>0?a("div",[a("h5",[e._v("Labels")]),a("v-checkbox",{staticClass:"mb-2",attrs:{label:"Seleccionar todo",dense:"",indeterminate:!e.selectedAll},on:{change:e.onChange},model:{value:e.selectedAll,callback:function(t){e.selectedAll=t},expression:"selectedAll"}}),a("v-select",{attrs:{items:e.selectedLabels,chips:"",multiple:"",outlined:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1):e._e()],1):e._e()],1),a("v-divider"),a("v-container",[a("v-btn",{staticClass:"mt-4",attrs:{elevation:"2",color:"success",block:"",loading:e.loadingTraining},on:{click:e.training}},[e._v("Entrenar")])],1)],1)},i=[],l=a("b85c"),c=a("1da1"),d=(a("96cf"),a("b64b"),a("d3b7"),a("ddb0"),a("2f62"));r["a"].use(d["a"]);var u=new d["a"].Store({state:{data:{_id:"",columns:[],corr:{}},error:!1,errorText:"",headers:[],values:[],model:{score:-1,predictions:[]}},mutations:{storeData:function(e,t){localStorage.setItem("_id",t._id),e.data.columns=t.columns,e.data.corr=t.corr;var a=Object.keys(e.data.corr);for(var r in e.headers.push({text:"",value:"variables",align:"start",sortable:!1}),a)e.headers.push({text:a[r],value:a[r]}),Object.defineProperty(e.data.corr[a[r]],"variables",{value:a[r]}),e.values.push(e.data.corr[a[r]])},storeModel:function(e,t){e.data._id=localStorage.getItem("_id");var a={score:-1,predictions:[]};a.score=Math.round(100*t.score)/100,a.predictions=t.predictions,localStorage.setItem("model",JSON.stringify(a)),e.model=a},resetData:function(e){e.data={_id:"",columns:[],corr:{}},e.model={score:-1,predictions:[]},e.headers=[],e.values=[]},showError:function(e,t){e.error=!0,e.errorText=t}},getters:{headers:function(e){return e.headers},values:function(e){return e.values},getscore:function(e){return e.model.score}},actions:{},modules:{}}),m=a("d4ec"),p=a("bee2"),f=a("bc3a"),v=a.n(f),b=v.a.create({baseURL:"https://saviourapi.herokuapp.com/api"}),h=b,g="csv/",j=function(){function e(){Object(m["a"])(this,e)}return Object(p["a"])(e,[{key:"uploadFile",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("data",t),e.next=4,h.post(g+"upload/",a).then((function(e){return e.data})).catch((function(){return console.log("error")}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),y="learning/",x=function(){function e(){Object(m["a"])(this,e)}return Object(p["a"])(e,[{key:"training",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.post(y,t).then((function(e){return e.data})).catch((function(){return console.log("error")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteModal",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,h.delete(y+"delete/",{data:{_id:t}}).then((function(e){return e.data})).catch((function(){return console.log("error")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{small:"",color:"#0caadc",outlined:"",dark:""}},"v-btn",n,!1),r),[e._v(" Ver correlación ")])]}}])},[a("v-card",[a("v-card-title",[e._v("Correlación de variables")]),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.values,dense:""}})],1)],1)],1)},k=[],w=(a("b680"),r["a"].extend({store:u,computed:{headers:function(){return this.$store.getters.headers},values:function(){var e=this.$store.getters.values;for(var t in e){var a=e[t],r=Object.keys(a);for(var n in r){var o=e[t][r[n]];e[t][r[n]]="nan"!==o?o.toFixed(2):"-"}}return e}}})),S=w,C=a("2877"),z=a("6544"),O=a.n(z),V=a("8336"),I=a("b0af"),$=a("99d9"),D=a("8fea"),T=a("169a"),P=Object(C["a"])(S,_,k,!1,null,null,null),R=P.exports;O()(P,{VBtn:V["a"],VCard:I["a"],VCardText:$["a"],VCardTitle:$["b"],VDataTable:D["a"],VDialog:T["a"]});var E=new j,M=new x,A=r["a"].extend({components:{VarianceTable:R},store:u,props:{drawer:{type:Boolean,default:function(){return!1}}},data:function(){return{file:null,loading:!1,sumarize:{_id:"",columns:[],corr:{}},selected:[],rules:[function(e){return!e||e.size<104857600||"El archivo debe de ser menor de 100 mb"}],campox:"",campoy:"",groupby:"",selectedLabels:[],modelName:[{value:1,text:"Regresión Polinomial"},{value:2,text:"Random Forest"}],modelSelected:{value:1,text:"Regresión Polinomial"},loadingTraining:!1,min:10,max:90,slider:20}},methods:{uploadFile:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.file&&e.file.size<104857600)){t.next=9;break}return e.loading=!0,t.next=4,E.uploadFile(e.file||new File([],""));case 4:a=t.sent,e.loading=!1,a?(e.sumarize=a,e.$store.commit("storeData",e.sumarize)):(e.resetData(),e.file=null,e.$store.commit("showError","No se pudo cargar el archivo.")),t.next=10;break;case 9:e.resetData();case 10:case"end":return t.stop()}}),t)})))()},training:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.file&&e.file.size<104857600&&e.campox.length>0&&e.campoy.length>0&&e.groupby.length>0&&e.selected.length>0)){t.next=7;break}return e.loadingTraining=!0,t.next=4,M.training({_id:e.sumarize._id,x_plot:e.campox,y_plot:e.campoy,group_by:e.groupby,labels:e.selected,algorithm:e.modelSelected.value,test:e.slider/100});case 4:a=t.sent,e.loadingTraining=!1,a?(e.$store.commit("storeModel",a),e.resetData(!1)):e.$store.commit("showError","No se pudo entrenar el modelo.");case 7:case"end":return t.stop()}}),t)})))()},resetData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.sumarize={_id:"",columns:[],corr:{}},this.selected=[],this.campox="",this.campoy="",this.groupby="",this.selectedLabels=[],e?this.$store.commit("resetData"):this.file=null},onChange:function(e){this.selected=e?this.selectedLabels:[]},onChangeSelects:function(){if(this.campox.length>0&&this.campoy.length>0&&this.groupby.length>0){this.selectedLabels=[];var e,t=Object(l["a"])(this.sumarize.columns);try{for(t.s();!(e=t.n()).done;){var a=e.value;this.campox!==a&&this.campoy!==a&&this.groupby!==a&&this.selectedLabels.push(a)}}catch(r){t.e(r)}finally{t.f()}this.selected=this.selectedLabels}}},computed:{drawerState:{get:function(){return this.drawer},set:function(e){this.$emit("onDrawer",e)}},selectedAll:{get:function(){var e;return this.selected.length==(null===(e=this.selectedLabels)||void 0===e?void 0:e.length)},set:function(e){e||(this.selected=[])}}}}),L=A,F=a("ac7c"),N=a("a523"),B=a("ce7e"),q=a("23a7"),Y=a("f774"),U=a("b974"),X=a("ba0d"),J=a("8654"),H=Object(C["a"])(L,s,i,!1,null,null,null),G=H.exports;O()(H,{VBtn:V["a"],VCheckbox:F["a"],VContainer:N["a"],VDivider:B["a"],VFileInput:q["a"],VNavigationDrawer:Y["a"],VSelect:U["a"],VSlider:X["a"],VTextField:J["a"]});var Z=r["a"].extend({components:{LeftPanel:G},name:"App",store:u,data:function(){return{drawer:!0}},methods:{onDrawer:function(e){this.drawer=e}},computed:{snackbar:{get:function(){return this.$store.state.error},set:function(e){this.$store.state.error=e}},error:function(){return this.$store.state.errorText}}}),W=Z,K=a("7496"),Q=a("40dc"),ee=a("132d"),te=a("f6c4"),ae=a("2db4"),re=a("2fa4"),ne=Object(C["a"])(W,n,o,!1,null,null,null),oe=ne.exports;O()(ne,{VApp:K["a"],VAppBar:Q["a"],VBtn:V["a"],VContainer:N["a"],VIcon:ee["a"],VMain:te["a"],VSnackbar:ae["a"],VSpacer:re["a"]});a("3ca3");var se=a("8c4f"),ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("start",{attrs:{headers:e.headers,values:e.values}})],1)},le=[],ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("div",{staticClass:"text-center"},[a("v-container",[a("iframe",{staticClass:"videoSize",attrs:{src:"https://www.youtube.com/embed/jS95n3DCZTM?start=1",title:"How Artificial Intelligence and Machine Learning impacting Oil and Gas Industry | AIBridge ML",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("div",[a("p",[a("strong",[e._v(" Autor: ")]),a("a",{attrs:{href:"https://www.youtube.com/channel/UCBAWZObk3gS40SfikipszdA",target:"_blank"}},[e._v(" AIBridge ML ")])])])])],1),a("p",{staticClass:"text-justify"},[e._v(" Trabajado en lenguaje de programación "),a("strong",[e._v("Python y abierto a todo el mundo")]),e._v(", esta aplicación te ayudará a nivel profesional a contrastar resultados de otros softwares y/o en proyectos académicos. Aplicativo web, construido en base de fundamentos de ciencia de datos y aprendizaje automatizado, y entrenado con información del campo Volve (Noruega) brindada por la empresa Equinor. ")]),a("p",{staticClass:"text-justify"},[e._v(" El objetivo de Saviour es trabajar con los datos entregados para poder adaptar un comportamiento de la producción de petróleo y realizar predicciones con valores de precisión muy buenos. Saviour te presenta dos modelos muy precisos para la data con la que fue entrenado, que tú también puedes emplear para realizar tus predicciones, el primero es el algoritmo de Regresión Polinomial y el segundo es el algoritmo de Random Forest. ")]),a("p",{staticClass:"text-justify"},[e._v(" La importancia de poder conocer la tasa de producción es grande, pues nos permite realizar análisis técnico-económicos a futuro, y a prever situaciones adversas o tener información importante como por ejemplo saber hasta qué fecha es rentable producir o si es necesario en algún punto implementar algún mecanismo de recuperación secundaria o terciaria al pozo o yacimiento. ")]),a("div",{staticClass:"mb-3"},[a("strong",[e._v("By:")]),a("ul",[a("li",[e._v(" Luis Alchundia "),a("a",{attrs:{href:"https://www.linkedin.com/",target:"_blank"}},[e._v(" LinkedIn ")])]),a("li",[e._v(" Darío Hernández "),a("a",{attrs:{href:"https://www.linkedin.com/in/antdhern/",target:"_blank"}},[e._v("LinkedIn")])])])]),a("v-divider",{staticClass:"my-5"}),a("tabs-pages")],1)},de=[],ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.getIdModel.length>0?a("div",[a("v-tabs",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab",{key:"item1"},[e._v("Resultado de entrenamiento")]),a("v-tab",{key:"item2"},[e._v("Predecir")])],1),a("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab-item",{key:"item1"},[a("fit")],1),a("v-tab-item",{key:"item2"},[a("prediction")],1)],1)],1):e._e(),e.getIfModelTraining?a("div",[a("prediction")],1):e._e()])},me=[],pe=(a("25f0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[e.getIdModel.length>0?a("div",[a("v-container",[a("v-row",{attrs:{"align-center":""}},[a("h4",{staticClass:"mt-1 mr-auto"},[e._v("Resultado de entrenamiento:")]),a("v-btn",{attrs:{elevation:"2",color:"success",loading:e.loadingDrop},on:{click:e.dropModel}},[e._v(" Eliminar modelo ")])],1)],1),a("v-container",[a("p",[a("strong",[e._v("Puntaje:")]),e._v(" "+e._s(e.score))]),a("strong",[e._v("Gráficos de entrenamiento:")]),a("v-container",e._l(e.formatData,(function(t,r){return a("v-row",{key:r},[a("v-container",[a("h5",[e._v(e._s(t.title))]),a("planet-chart",{attrs:{data:t.data,id:r,nameX:t.xlabel,nameY:t.ylabel}})],1)],1)})),1)],1),a("v-divider"),a("v-divider")],1):e._e(),a("v-divider")],1)}),fe=[],ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"graph"},[a("canvas",{attrs:{id:"planet-chart"+e.id}})])},be=[],he=(a("a9e3"),a("30ef")),ge=a.n(he),je={name:"PlanetChart",props:{data:{type:Object},nameX:String,nameY:String,id:Number},data:function(){return{graph:null}},mounted:function(){this.createChart()},computed:{chartData:function(){return this.data},labelXData:function(){return this.nameX},labelYData:function(){return this.nameY}},methods:{createChart:function(){var e=document.getElementById("planet-chart"+this.id);this.graph=new ge.a(e,{type:"scatter",data:this.chartData,options:{plugins:{legend:{title:{display:!0,text:"Legend Title"}}},responsive:!0,lineTension:1,scales:{xAxes:[{type:"time",display:!0,position:"bottom",id:"xAxeTime",scaleLabel:{display:!0,labelString:this.labelXData,fontColor:"black"},time:{unit:"month",tooltipFormat:"ll"}}],yAxes:[{type:"linear",display:!0,position:"left",id:"yAxeTemperature",scaleLabel:{display:!0,labelString:this.labelYData,fontColor:"bkack"}}]}}})}},watch:{data:function(){this.graph.destroy(),this.createChart()}}},ye=je,xe=Object(C["a"])(ye,ve,be,!1,null,null,null),_e=xe.exports,ke=new x,we=r["a"].extend({name:"Fit",store:u,components:{PlanetChart:_e},data:function(){return{options:null,loadingDrop:!1}},mounted:function(){},methods:{dropModel:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loadingDrop=!0,t.next=3,ke.deleteModal(null===(a=localStorage.getItem("_id"))||void 0===a?void 0:a.toString());case 3:r=t.sent,e.loadingDrop=!1,r?(localStorage.removeItem("_id"),localStorage.removeItem("model"),e.$store.commit("resetData")):e.$store.commit("showError","No se pudo eliminar el modelo.");case 6:case"end":return t.stop()}}),t)})))()}},computed:{getIdModel:function(){var e;return this.$store.state.data._id.length>0?this.$store.state.data._id:localStorage.getItem("_id")?null===(e=localStorage.getItem("_id"))||void 0===e?void 0:e.toString():""},score:function(){return this.$store.state.model.score>-1?this.$store.state.model.score:localStorage.getItem("model")?JSON.parse(localStorage.getItem("model")).score:""},formatData:function(){var e,t=[],a=this.$store.state.model.score>-1?this.$store.state.model.predictions:localStorage.getItem("model")?JSON.parse(localStorage.getItem("model")).predictions:[],r=Object(l["a"])(a);try{for(r.s();!(e=r.n()).done;){var n=e.value;t.push({data:{datasets:n.datasets},score:n.score,xlabel:n.xlabel,ylabel:n.ylabel,title:n.title})}}catch(o){r.e(o)}finally{r.f()}return t}}}),Se=we,Ce=a("0fd9"),ze=Object(C["a"])(Se,pe,fe,!1,null,null,null),Oe=ze.exports;O()(ze,{VBtn:V["a"],VContainer:N["a"],VDivider:B["a"],VRow:Ce["a"]});var Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-container",[a("h4",[e._v("Escoger modelo para predicir")]),e.getIdModel.length>0?a("v-select",{attrs:{items:e.modelName,outlined:"","item-text":"text","item-value":"value"},model:{value:e.modelSelected.value,callback:function(t){e.$set(e.modelSelected,"value",t)},expression:"modelSelected.value"}}):e._e(),0==e.getIdModel.length?a("v-select",{attrs:{items:e.modelName2,outlined:"","item-text":"text","item-value":"value"},model:{value:e.modelSelected.value,callback:function(t){e.$set(e.modelSelected,"value",t)},expression:"modelSelected.value"}}):e._e(),a("h4",{staticClass:"mt-1"},[e._v("Predecir:")]),a("v-file-input",{attrs:{accept:".csv",filled:"",label:"CSV de datos a predecir",placeholder:"Archivos hasta 100 mb",outlined:"","show-size":"","prepend-icon":null,"append-icon":"mdi-file-delimited",loading:e.loading,rules:e.rules},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),a("v-btn",{staticClass:"mt-4",attrs:{elevation:"2",color:"success",loading:e.loadingTest},on:{click:e.prediction}},[e._v(" Predecir ")])],1),e.response.score>0?a("v-container",[a("h5",[e._v(e._s(e.response.title))]),a("planet-chart",{attrs:{data:e.dataset,id:e.response.score,nameX:e.response.xlabel,nameY:e.response.ylabel}})],1):e._e()],1)},Ie=[],$e="learning/",De=function(){function e(){Object(m["a"])(this,e)}return Object(p["a"])(e,[{key:"prediction",value:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("_id",t._id),a.append("data",t.data),a.append("algorithm",t.algorithm.toString()),e.next=6,h.post($e+"predict/",a).then((function(e){return e.data})).catch((function(){return console.log("error")}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),Te=new De,Pe=r["a"].extend({name:"Prediction",store:u,components:{PlanetChart:_e},data:function(){return{file:null,loading:!1,rules:[function(e){return!e||e.size<104857600||"El archivo debe de ser menor de 100 mb"}],modelName:[{value:1,text:"Regresión Polinomial Preentrenado"},{value:2,text:"Random Forest Preentrenado"},{value:0,text:"Modelo entrenado"}],modelName2:[{value:1,text:"Regresión Polinomial Preentrenado"},{value:2,text:"Random Forest Preentrenado"}],modelSelected:{value:1,text:"Regresión Polinomial Preentrenado"},loadingTest:!1,response:{title:"",xlabel:"",ylabel:"",score:0,datasets:[]},dataset:{datasets:[]}}},computed:{getIdModel:function(){var e;return this.$store.state.data._id.length>0?this.$store.state.data._id:localStorage.getItem("_id")?null===(e=localStorage.getItem("_id"))||void 0===e?void 0:e.toString():""},score:function(){return this.$store.state.model.score}},methods:{prediction:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.getIdModel,!(e.file&&e.file.size<104857600)){t.next=8;break}return e.loadingTest=!0,t.next=5,Te.prediction({_id:a.toString(),data:e.file,algorithm:e.modelSelected.value});case 5:r=t.sent,e.loadingTest=!1,r?(e.response=r,e.dataset={datasets:r.datasets}):e.$store.commit("showError","No se pudo realizar la predicción.");case 8:case"end":return t.stop()}}),t)})))()}}}),Re=Pe,Ee=Object(C["a"])(Re,Ve,Ie,!1,null,null,null),Me=Ee.exports;O()(Ee,{VBtn:V["a"],VContainer:N["a"],VFileInput:q["a"],VSelect:U["a"]});var Ae=r["a"].extend({name:"TabsPages",store:u,components:{Fit:Oe,Prediction:Me},data:function(){return{tab:null}},computed:{getIdModel:function(){var e;return this.$store.state.data._id.length>0?this.$store.state.data._id:localStorage.getItem("model")?null===(e=localStorage.getItem("_id"))||void 0===e?void 0:e.toString():""},getIfModelTraining:function(){return!(this.$store.state.data._id.length>0||localStorage.getItem("model"))}}}),Le=Ae,Fe=a("71a3"),Ne=a("c671"),Be=a("fe57"),qe=a("aac8"),Ye=Object(C["a"])(Le,ue,me,!1,null,null,null),Ue=Ye.exports;O()(Ye,{VTab:Fe["a"],VTabItem:Ne["a"],VTabs:Be["a"],VTabsItems:qe["a"]});var Xe=r["a"].extend({name:"start",components:{TabsPages:Ue}}),Je=Xe,He=(a("a90d"),Object(C["a"])(Je,ce,de,!1,null,null,null)),Ge=He.exports;O()(He,{VContainer:N["a"],VDivider:B["a"]});var Ze=r["a"].extend({name:"Home",components:{Start:Ge},data:function(){return{headers:[],values:[]}},methods:{onLoadFile:function(e,t){this.headers=e,this.values=t}}}),We=Ze,Ke=Object(C["a"])(We,ie,le,!1,null,null,null),Qe=Ke.exports;r["a"].use(se["a"]);var et=[{path:"/",name:"Home",component:Qe},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],tt=new se["a"]({mode:"history",base:"/saviourapi/",routes:et});tt.afterEach((function(e){r["a"].nextTick((function(){var t;document.title=(null===e||void 0===e||null===(t=e.meta)||void 0===t?void 0:t.title)||"SAVIOUR"}))}));var at=tt,rt=a("f309");r["a"].use(rt["a"]);var nt=new rt["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:at,store:u,vuetify:nt,render:function(e){return e(oe)}}).$mount("#app")},df1f:function(e,t,a){}});
//# sourceMappingURL=app.d4742b1e.js.map