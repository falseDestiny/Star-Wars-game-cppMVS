var ColPickerBeh,FavRequest;(function(n){n[n.All=0]="All";n[n.Data=1]="Data"})(ColPickerBeh||(ColPickerBeh={})),function(n){function t(n,t,i,r){var u,f,e;(r===void 0&&(r=!0),n)&&(u=sj_gx(),typeof FavProp!="undefined"&&(f=FavProp.getBool("ForceHttps"),f&&(n="https://"+location.host+n,u.withCredentials=!0)),typeof addCommonPersistedParams=="function"&&(n=addCommonPersistedParams(n)),u.onreadystatechange=function(){if(u.readyState==4&&u.status==200&&i)if(r){var n=/^\{.*\}/.exec(u.response||u.responseText);i(n&&n.length?JSON.parse(n[0]):"")}else i(u.response||u.responseText)},t=t===null?"":t,e=encodeURIComponent(JSON.stringify(t)),n=y(n),n=p(n),u.open("POST",n,!0),u.setRequestHeader("Content-type","application/x-www-form-urlencoded"),u.send(e))}function u(n,r){t(i()+"changetitle",n,r)}function f(n,r){t(i()+"addItems",n,r)}function e(n,r){t(i()+"deleteItems",n,r)}function o(n,r){t(i()+"deletecollection",n,r)}function s(n,r){t(i()+"useForRecommendations",n,r)}function h(n,r){t(i()+"moveItems",n,r)}function c(n,r){t(i()+"getStatus",n,r)}function l(n,r){t(i()+"writePreferences",n,r)}function a(n,i){var r="";n&&(r="beh="+ColPickerBeh[n]);t("/images/favorites/collectionpicker?"+r,null,i,!1)}function v(n){r=n}function y(n){return typeof sj_cook!="undefined"?n+"&sid="+(_G.SID||sj_cook.get("_SS","SID")):n}function i(){return r?"/images/favorites?action=":r==!1?"/videos/favorites?action=":null}function p(n){return typeof MMTestUtils!="undefined"&&(n=MMTestUtils.atb(n)),n}var r=!0;n.postFavRequest=t;n.changeTitle=u;n.addItem=f;n.deleteItems=e;n.deleteCollection=o;n.useForRec=s;n.moveItems=h;n.getStatus=c;n.writePref=l;n.getCollectionPicker=a;n.setRequestType=v}(FavRequest||(FavRequest={}))