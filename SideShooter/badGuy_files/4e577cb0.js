var FavColType,FavRequestType,MmFaves,MmFavStatus,MmFavActionType;(function(n){n[n.None=0]="None";n[n.Recommendations=1]="Recommendations";n[n.HomePage=2]="HomePage";n[n.Other=3]="Other";n[n.VideoWatchLater=4]="VideoWatchLater"})(FavColType||(FavColType={})),function(n){n[n.Image=0]="Image";n[n.Video=1]="Video"}(FavRequestType||(FavRequestType={})),function(n){function v(n,i){t=0;r({collectionType:1,title:"",id:""},n,i)}function y(n,i){t=0;r({collectionType:2,title:"",id:""},n,i)}function p(n,i,u){t=0;r(n,i,u)}function w(n,i){t=0;a(n,i)}function b(n,i,u){t=1;r(n,i,u)}function k(n,i){t=1;a(n,i)}function d(n,i){t=0;g(n,i)}function r(n,r,e){i!=2?u(n,r,e,0):sj_evt.fire(f,n,r,e,t)}function a(n,r){i!=2?u(null,n,r,1):sj_evt.fire(e,null,n,r,t)}function g(n,r){i!=2?u(null,n,r,2):sj_evt.fire(o,null,n,r,t)}function nt(){return t==0?"/images/favorites/api":t==1?"/videos/favorites/api":null}function u(n,t,r,u){if(i==0){var f=sj_gx();f.onreadystatechange=function(){if(f.readyState==4)switch(f.status){case 200:if(f.responseText){it(f.responseText);l=u;h=t;s=n;c=r;break}default:i=0}};f.open("GET",nt(),!0);f.send();i=1}}function tt(){i=2;var n=null;switch(l){case 0:n=f;break;case 1:n=e;break;case 2:n=o}sj_evt.fire(n,s,h,c,t)}function it(n){var i=_d.querySelector("body"),t=sj_ce("div");t.style.display="none";sj_appHTML(t,n);i.appendChild(t)}var t,f="AddToFaves",e="RemoveFromFaves",o="GetStatus",s,h,c,l,i=0;n.addImageToStreamCollection=v;n.addImageToHPCollection=y;n.addImageToFavorites=p;n.removeImageFromFavorites=w;n.addVideoToFavorites=b;n.removeVideoFromFavorites=k;n.getStatus=d;sj_evt.bind("FavCoreLoaded",tt,!0)}(MmFaves||(MmFaves={})),function(n){n[n.NotLoaded=0]="NotLoaded";n[n.Loading=1]="Loading";n[n.Ready=2]="Ready"}(MmFavStatus||(MmFavStatus={})),function(n){n[n.Add=0]="Add";n[n.Remove=1]="Remove";n[n.GetStatus=2]="GetStatus"}(MmFavActionType||(MmFavActionType={}))