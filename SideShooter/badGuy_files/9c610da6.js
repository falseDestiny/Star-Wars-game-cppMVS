var InsightsFetcher;(function(n){function o(n,t,i,r,u){return AsyncFetcher.fetch(s(n,t),i,function(n){h(n,t);typeof r!="undefined"&&r&&r(n)},function(n){typeof u!="undefined"&&u?u(n):typeof r!="undefined"&&r&&r(n)})}function s(n,o){var s=o?f:u,c,l,h,a,v;s||(t=_w.IIConfig,s=r(o));s=s.replace(/%SFX%/,String(++e));for(c in n)l=o?c+"s":c,h=n[c],h!==null&&(typeof h=="undefined"&&(h=""),s+="&"+l+"="+encodeURIComponent(h));return i&&(a=o?n.mid.split(",")[0]:n.mid,s=!o&&(v=i.qsv("insightsbag"))?i.stb(s,v):i.atb(s,(o?"InsightsBatchMock_":"InsightsMock_")+a)),s}function r(n){var i;return i=n?t&&t.baut?t.baut:"":t&&t.aut?t.aut:"",addCommonPersistedParams(i)}function h(n,t){var i={};i.Name=t?"imageinsightsbatch":"imageinsights";i.T="CI.Error";i.TS=sb_gt();i.AppNS=_G.P;i.URL=n;pInstr.icd(i)}var i=typeof MMTestUtils!="undefined"?MMTestUtils:null,t=_w.IIConfig,u=r(!1),f=r(!0),e=0;n.fetch=o})(InsightsFetcher||(InsightsFetcher={}))