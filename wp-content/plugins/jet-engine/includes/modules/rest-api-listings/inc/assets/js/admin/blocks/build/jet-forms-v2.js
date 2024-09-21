(()=>{"use strict";const e=window.React,t=window.wp.i18n,n=window.jfb.actions,a=window.jfb.components,r=window.wp.hooks,o=window.wp.components,{MacrosFields:i}=JetFBComponents,l=function({settings:r,onChangeSettingObj:l}){const{hasError:u,setShowError:s}=(0,n.useActionValidatorProvider)({isSupported:e=>"url"===e?.property});return(0,e.createElement)(a.RowControl,null,(({id:n})=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.LabelWithActions,null,(0,e.createElement)(a.RequiredLabel,{htmlFor:n},(0,t.__)("REST API URL","jet-engine")),(0,e.createElement)(i,{onClick:e=>{var t;return l({url:(null!==(t=r.url)&&void 0!==t?t:"")+e})},withCurrent:!0})),(0,e.createElement)(a.RowControlEnd,{hasError:u},(0,e.createElement)(o.TextareaControl,{id:n,value:r.url,onChange:e=>l({url:e}),help:(0,t.__)("You can use these macros as dynamic part of the URL: %field_name%","jet-engine"),onBlur:()=>s(!0),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0})))))},{MacrosFields:u}=JetFBComponents,s=function({settings:n,onChangeSettingObj:r}){return(0,e.createElement)(a.RowControl,null,(({id:i})=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.LabelWithActions,null,(0,e.createElement)(a.Label,{htmlFor:i},(0,t.__)("Custom Body","jet-engine")),(0,e.createElement)(u,{onClick:e=>{var t;return r({body:(null!==(t=n.body)&&void 0!==t?t:"")+e})},withCurrent:!0})),(0,e.createElement)(a.RowControlEnd,null,(0,e.createElement)(o.TextareaControl,{id:i,value:n.body,onChange:e=>r({body:e}),onBlur:()=>setShowError(!0),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,e.createElement)(a.Help,null,(0,t.__)("By default API request will use all form data as body. Here you can set custom body of your API request in the JSON format.","jet-engine"),(0,e.createElement)("br",null),(0,e.createElement)(o.ExternalLink,{href:"https://www.w3dnetwork.com/json-formatter.html"},(0,t.__)("Online editing tool","jet-engine"))," - ",(0,t.__)("switch to the","jet-engine")," ",(0,e.createElement)("b",null,(0,e.createElement)("i",null,(0,t.__)("Tree View","jet-engine"))),", ",(0,t.__)("edit object as you need, than switch to","jet-engine")," ",(0,e.createElement)("b",null,(0,e.createElement)("i",null,(0,t.__)("Plain Text","jet-engine")))," ",(0,t.__)("and copy/paste result here.","jet-engine"),(0,e.createElement)("br",null),(0,t.__)("You can use the same macros as for the URL.","jet-engine"))))))};(0,r.addFilter)("jet.engine.restapi.authorization.fields.rapidapi","jet-engine/rapid-api",(function(r,{settings:o,onChangeSettingObj:i}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.WideLine,null),(0,e.createElement)(n.ValidatedTextControl,{label:(0,t.__)("RapidAPI Key","jet-engine"),help:(0,t.__)("X-RapidAPI-Key from endpoint settings at the rapidapi.com","jet-engine"),value:o.rapidapi_key,onChange:e=>i({rapidapi_key:e}),isErrorSupported:({property:e})=>"rapidapi_key"===e,required:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,e.createElement)(a.WideLine,null),(0,e.createElement)(n.ValidatedTextControl,{label:(0,t.__)("RapidAPI Host","jet-engine"),help:(0,t.__)("X-RapidAPI-Host from endpoint settings at the rapidapi.com","jet-engine"),value:o.rapidapi_host,onChange:e=>i({rapidapi_host:e}),isErrorSupported:({property:e})=>"rapidapi_host"===e,required:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))})),(0,r.addFilter)("jet.engine.restapi.authorization.fields.bearer-token","jet-engine/bearer-token",(function(r,{settings:o,onChangeSettingObj:i}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.WideLine,null),(0,e.createElement)(n.ValidatedTextControl,{label:(0,t.__)("Bearer token","jet-engine"),help:(0,t.__)("Set token for Bearer Authorization type","jet-engine"),value:o.bearer_token,onChange:e=>i({bearer_token:e}),isErrorSupported:({property:e})=>"bearer_token"===e,required:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))})),(0,r.addFilter)("jet.engine.restapi.authorization.fields.custom-header","jet-engine/custom-header",(function(r,{settings:o,onChangeSettingObj:i}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.WideLine,null),(0,e.createElement)(n.ValidatedTextControl,{label:(0,t.__)("Header name","jet-engine"),help:(0,t.__)("Set authorization header name. Could be found in your API docs","jet-engine"),value:o.custom_header_name,onChange:e=>i({custom_header_name:e}),isErrorSupported:({property:e})=>"custom_header_name"===e,required:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,e.createElement)(a.WideLine,null),(0,e.createElement)(n.ValidatedTextControl,{label:(0,t.__)("Header value","jet-engine"),help:(0,t.__)("Set authorization header value. Could be found in your API docs or you user profile related to this API","jet-engine"),value:o.custom_header_value,onChange:e=>i({custom_header_value:e}),isErrorSupported:({property:e})=>"custom_header_value"===e,required:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))})),(0,r.addFilter)("jet.engine.restapi.authorization.fields.application-password","jet-engine/custom-header",(function(r,{settings:o,onChangeSettingObj:i}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.WideLine,null),(0,e.createElement)(n.ValidatedTextControl,{label:(0,t.__)("User:password string","jet-engine"),help:(0,t.__)("Set application user and password separated with `:`","jet-engine"),value:o.application_pass,onChange:e=>i({application_pass:e}),isErrorSupported:({property:e})=>"application_pass"===e,required:!0,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))}));const p={type:"rest_api_request",label:(0,t.__)("REST API Request","jet-engine"),category:"advanced",edit:function(i){const{source:u,settings:p,onChangeSettingObj:d}=i;return(0,e.createElement)(o.Flex,{direction:"column"},(0,e.createElement)(l,{...i}),(0,e.createElement)(a.WideLine,null),(0,e.createElement)(s,{...i}),(0,e.createElement)(a.WideLine,null),(0,e.createElement)(o.ToggleControl,{className:a.ClearBaseControlStyle,label:(0,t.__)("Authorization","jet-engine"),checked:p.authorization,onChange:e=>d({authorization:e}),__nextHasNoMarginBottom:!0}),p.authorization&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a.WideLine,null),(0,e.createElement)(n.ValidatedSelectControl,{label:(0,t.__)("Authorization type","jet-engine"),value:p.auth_type,onChange:e=>d({auth_type:e}),options:[{value:"",label:"--"},...u.auth_types]}),(0,r.applyFilters)(`jet.engine.restapi.authorization.fields.${p.auth_type}`,(0,e.createElement)(e.Fragment,null),i)))},icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,e.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,e.createElement)("g",null,(0,e.createElement)("path",{d:"M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1 14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2 1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13z"}))),docHref:"https://crocoblock.com/knowledge-base/jetengine/jetengine-how-to-add-and-edit-cct-items-remotely-using-rest-api/",validators:[({settings:e})=>!e?.url&&{property:"url"},({settings:e})=>!(!e.authorization||"application-password"!==e.auth_type)&&!e?.application_pass&&{property:"application_pass"},({settings:e})=>!(!e.authorization||"bearer-token"!==e.auth_type)&&!e?.bearer_token&&{property:"bearer_token"},({settings:e})=>!(!e.authorization||"custom-header"!==e.auth_type)&&[!e?.custom_header_name&&{property:"custom_header_name"},!e?.custom_header_value&&{property:"custom_header_value"}],({settings:e})=>!(!e.authorization||"rapidapi"!==e.auth_type)&&[!e?.rapidapi_key&&{property:"rapidapi_key"},!e?.rapidapi_host&&{property:"rapidapi_host"}]]};(0,n.registerAction)(p)})();
//# sourceMappingURL=jet-forms-v2.js.map