(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{108:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v}));var r=n(11),a=n(1),i=n.n(a),o=n(3),c=n(26),s=n(38),u=n(21),l=n(222),d=n(57),b=new c.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),p=new c.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(o.a)(i.a.mark((function e(t,n,r){var a,c,s,u,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>3&&void 0!==l[3]?l[3]:"recent",a=l.length>4&&void 0!==l[4]&&l[4],c=!1,s={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(o.a)(i.a.mark((function e(u,l){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){c||(c=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(c||!a){e.next=7;break}return Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,s=n&&n.value[0],c||(s?s.err?(console.log("REST error for",t,s),c=!0,l(s.err)):s.confirmations?(console.log("REST confirmation for",t,s),c=!0,u(s)):console.log("REST no confirmations for",t,s):console.log("REST null result for",t,s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,O(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return s=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),c=!0,console.log("Returning status",s),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:c.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:c.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new c.d.TransactionInstruction({keys:i,programId:d.b,data:e.from([])})},g=function(){var e=Object(o.a)(i.a.mark((function e(t,n,r){var a,o,s,u,l,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new c.b(r,t,{preflightCommitment:"recent"}),e.next=3,c.a.fetchIdl(b,a);case 3:return o=e.sent,s=new c.a(o,b,a),e.next=7,s.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),d=u.itemsRedeemed.toNumber(),p=l-d,e.abrupt("return",{id:n,program:s,state:{itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,isSoldOut:0===p,isActive:u.data.goLiveDate&&u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:d<u.endSettings.number.toNumber())),goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("edition")],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var o,b,f,g,v,O,y,k,w,S,T,M,P,B,E,R,K;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(a.publicKey,n);case 2:if(o=e.sent[0],!t.state.tokenMint){e.next=9;break}return e.next=6,Object(d.c)(t.state.tokenMint,n);case 6:e.t0=e.sent[0],e.next=10;break;case 9:e.t0=n;case 10:return b=e.t0,f=t.id,g=[],v=[a],O=[],e.t1=c.d.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=s.a.span,e.next=21,t.program.provider.connection.getMinimumBalanceForRentExemption(s.a.span);case 21:if(e.t5=e.sent,e.t6=s.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=s.c.createInitMintInstruction(s.b,a.publicKey,0,n,n),e.t10=x(o,n,n,a.publicKey),e.t11=s.c.createMintToInstruction(s.b,a.publicKey,o,n,[],1),y=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=44;break}return e.t12=g,e.next=33,Object(d.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 33:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=44;break}return g.push({pubkey:d.a,isWritable:!1,isSigner:!1}),e.t15=g,e.next=41,Object(d.d)(t.state.gatekeeper.gatekeeperNetwork);case 41:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 44:if(!t.state.whitelistMintSettings){e.next=59;break}return k=new c.d.PublicKey(t.state.whitelistMintSettings.mint),e.next=48,Object(d.c)(k,n);case 48:if(w=e.sent[0],g.push({pubkey:w,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=59;break}return S=c.d.Keypair.generate(),g.push({pubkey:k,isWritable:!0,isSigner:!1}),g.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),v.push(S),e.next=57,t.program.provider.connection.getAccountInfo(w);case 57:e.sent&&(y.push(s.c.createApproveInstruction(s.b,w,S.publicKey,n,[],1)),O.push(s.c.createRevokeInstruction(s.b,w,n,[])));case 59:return t.state.tokenMint&&(T=c.d.Keypair.generate(),v.push(T),g.push({pubkey:b,isWritable:!0,isSigner:!1}),g.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),y.push(s.c.createApproveInstruction(s.b,b,T.publicKey,n,[],t.state.price.toNumber())),O.push(s.c.createRevokeInstruction(s.b,b,n,[]))),e.next=62,h(a.publicKey);case 62:return M=e.sent,e.next=65,m(a.publicKey);case 65:return P=e.sent,e.next=68,j(f);case 68:return B=e.sent,E=Object(r.a)(B,2),R=E[0],K=E[1],e.t18=y,e.next=75,t.program.instruction.mintNft(K,{accounts:{candyMachine:f,candyMachineCreator:R,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:M,masterEdition:P,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:p,tokenProgram:s.b,systemProgram:u.e.programId,rent:c.d.SYSVAR_RENT_PUBKEY,clock:c.d.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:c.d.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:c.d.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:g.length>0?g:void 0});case 75:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=77,e.next=80,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[y,O],[v,[]]);case 80:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 83:e.prev=83,e.t20=e.catch(77),console.log(e.t20);case 86:return e.abrupt("return",[]);case 87:case"end":return e.stop()}}),e,null,[[77,83]])})));return function(t,n,r){return e.apply(this,arguments)}}(),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(5).Buffer)},222:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(9),i=n(1),o=n.n(i),c=n(3),s=n(21),u=n(95);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(c.a)(o.a.mark((function e(t,n,i,c){var l,d,b,f,x,g,m,h,j,v,O,y,k,w,S=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,d=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",b=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},f=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},x=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.f;case 7:if(g=[],x){e.next=12;break}return e.next=11,t.getRecentBlockhash(d);case 11:x=e.sent;case 12:m=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var o=new s.f;t.forEach((function(e){return o.add(e)})),o.recentBlockhash=x.blockhash,o.setSigners.apply(o,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&o.partialSign.apply(o,Object(a.a)(r)),g.push(o)},h=0;case 14:if(!(h<i.length)){e.next=21;break}if("continue"!==m(h)){e.next=18;break}return e.abrupt("continue",18);case 18:h++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(g);case 23:j=e.sent,v=[],O={breakEarly:!1,i:0},console.log("Signed txns length",j.length,"vs handed in length",i.length),y=o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=p({connection:t,signedTransaction:j[n]})).then((function(e){var t=e.txid;e.slot;b(t,n)})).catch((function(e){f(j[n],n),l===r.StopOnFailure&&(O.breakEarly=!0,O.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!O.breakEarly){e.next=19;break}return console.log("Died on ",O.i),e.t1=O.i,e.next=16,Promise.all(v);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:v.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),k=0;case 29:if(!(k<j.length)){e.next=37;break}return e.delegateYield(y(k),"t0",31);case 31:if("object"!==typeof(w=e.t0)){e.next=34;break}return e.abrupt("return",w.v);case 34:k++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(v);case 40:return e.t1=j.length,e.next=43,Promise.all(v);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){return(new Date).getTime()/1e3},b=3e4;function p(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(o.a.mark((function e(t){var n,r,a,i,s,u,l,p,f,g,h,v,O;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,i=void 0===a?b:a,s=n.serialize(),u=d(),l=0,e.next=6,r.sendRawTransaction(s,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),f=!1,Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(d()-u<i)){e.next=6;break}return r.sendRawTransaction(s,{skipPreflight:!0}),e.next=4,j(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,m(p,i,r,"recent",!0);case 13:if(g=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!g.err){e.next=19;break}throw console.error(g.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===g||void 0===g?void 0:g.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return h=null,e.prev=28,e.next=31,x(r,n,"single");case 31:h=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!h||!h.err){e.next=47;break}if(!h.logs){e.next=46;break}v=h.logs.length-1;case 39:if(!(v>=0)){e.next=46;break}if(!(O=h.logs[v]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+O.slice("Program log: ".length));case 43:--v,e.next=39;break;case 46:throw new Error(JSON.stringify(h.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",p,d()-u),e.abrupt("return",{txid:p,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function x(e,t,n){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(o.a.mark((function e(t,n,r){var a,i,c,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),s=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",s);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(o.a.mark((function e(t,n,r){var a,i,s,u,l,d=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",i=d.length>4&&void 0!==d[4]&&d[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(c.a)(o.a.mark((function e(d,b){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),a)}catch(p){s=!0,console.error("WS error in setup",t,p)}case 2:if(s||!i){e.next=8;break}return Object(c.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,j(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return new Promise((function(t){return setTimeout(t,e)}))}},243:function(e,t,n){},244:function(e,t){},245:function(e,t){},272:function(e,t){},273:function(e,t){},297:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var r,a,i,o,c,s,u,l,d,b,p,f,x,g,m,h,j,v,O,y=n(4),k=n.n(y),w=n(53),S=n.n(w),T=(n(243),n(229)),M=n(424),P=n(435),B=n(427),E=n(26),R=n(21),K=n(429),N=n(430),A=n(431),I=n(421),L=n(422),C=n(423),D=n(432),W=n(433),z=n(434),_=n(138),U=(n(297),n(8)),F=n(1),G=n.n(F),Y=n(3),V=n(11),q=n(37),H=n(33),J=n(216),Z=n(418),Q=n(85),X=n(169),$=n(416),ee=n(436),te=n(417),ne=n(425),re=n(426),ae=n(57),ie=n(414),oe=n(415),ce=n(20),se=Object(H.default)(ie.a)(r||(r=Object(q.a)(["\n    font-family: 'BBBOcelot' !important;\n  display: block !important;\n  margin: 15px auto !important;\n  padding: 5px 0px 0px 0px !important;\n  background-color: var(--mint-text-color) !important;\n  min-width: 150px !important;\n  font-size: 1em !important;\n"]))),ue=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=e.isEnded,i=e.isActive,o=e.isSoldOut,c=Object(Q.useGateway)(),s=c.requestGatewayToken,u=c.gatewayStatus,l=Object(y.useState)(!1),d=Object(V.a)(l,2),b=d[0],p=d[1],f=Object(y.useState)(!1),x=Object(V.a)(f,2),g=x[0],m=x[1];return Object(y.useEffect)((function(){m(!1),u===Q.GatewayStatus.COLLECTING_USER_INFORMATION&&b?m(!0):u===Q.GatewayStatus.ACTIVE&&b&&(console.log("Verified human, now minting..."),t(),p(!1))}),[u,b,p,t]),Object(ce.jsx)(se,{disabled:b||(null===n||void 0===n?void 0:n.state.isSoldOut)||o||r||a||!i||g,onClick:Object(Y.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i||!(null===n||void 0===n?void 0:n.state.gatekeeper)||u===Q.GatewayStatus.ACTIVE){e.next=7;break}return console.log("Requesting gateway token"),p(!0),e.next=5,s();case 5:e.next=10;break;case 7:return console.log("Minting..."),e.next=10,t();case 10:case"end":return e.stop()}}),e)}))),variant:"contained",children:n?(null===n||void 0===n?void 0:n.state.isSoldOut)||o?"SOLD OUT":i?g?"VERIFYING...":r||b?Object(ce.jsx)(oe.a,{}):"MINT":a?"ENDED":(null===n||void 0===n?void 0:n.state.goLiveDate)?"SOON":"UNAVAILABLE":"CONNECTING..."})},le=n(108),de="mainnet-beta".toString(),be=H.default.div(a||(a=Object(q.a)(["\n  display: flex;\n  height: 160px;\n  width: auto;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: center;\n  // background-color: red;\n"]))),pe=H.default.div(i||(i=Object(q.a)(["\n  color: black;\n  width: 370px;\n  box-shadow: 5px 5px 20px 5px rgba(0,0,0,0.3);\n  padding: 7px 0px 5px 0px;\n  border-radius: 12px;\n  background-color: #ff76ff;\n  text-shadow: 1px 1px 1px #b314b3;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  font-weight: 500;\n  font-family: 'BBBOcelot';\n  font-size: 21px;\n  border: 0;\n  margin: 0;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: space-around;\n  // gap: 5px;\n"]))),fe=H.default.ul(o||(o=Object(q.a)(["\n  // flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 0px 0px 0px 0px;\n  \n  \n  \n"]))),xe=Object(H.default)(_.b)(c||(c=Object(q.a)(["\n\n  font-family: 'BBBOcelot';\n  text-shadow: 2px 2px 1px #130f68;\n  display: flex; \n  align-items: center;\n  justify-content: center;\n  border-radius: 8px 8px 8px 8px !important;\n  padding-top: 5px;\n  background-color: #5a52dc;\n  // margin-bottom: 5px;\n  margin: 5px auto;\n  min-width: 100px;\n  min-height: 50px;\n  font-size: 65%;\n  box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.5);\n  \n"]))),ge=Object(H.default)($.a)(s||(s=Object(q.a)(["\n  display: flex;\n  \n//   background-color: var(card-background-lighter-color) !important;\n  margin: 5px;\n  min-width: 40px;\n  padding: 24px;\n  h1{\n    margin:0px;\n  }\n"]))),me=H.default.div(u||(u=Object(q.a)(["\n\nbutton.MuiButton-contained:not(.MuiButton-containedPrimary).Mui-disabled {\n    color: black;\n  }\n  button.MuiButton-contained:not(.MuiButton-containedPrimary):hover,\n  button.MuiButton-contained:not(.MuiButton-containedPrimary):focus {\n    -webkit-animation: pulse 1s;\n    animation: pulse 1s;\n  }\n\n  @-webkit-keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 #77458C;\n    }\n  }\n\n  @keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 #77458C;\n    }\n  }\n"]))),he=H.default.div(l||(l=Object(q.a)(["\n  flex: 0 0 auto;\n  \n\n  img {\n    max-height: 200px;\n  }\n"]))),je=H.default.ul(d||(d=Object(q.a)(["\n  list-style: none;\n  display: flex;\n  align-items: center;\n  flex: 1 0 auto;\n\n  li {\n    margin: 0 0px;\n\n    a {\n      color: var(--main-text-color);\n      list-style-image: none;\n      list-style-position: outside;\n      list-style-type: none;\n      outline: none;\n      text-decoration: none;\n      text-size-adjust: 100%;\n      font-size: 35px;\n      touch-action: manipulation;\n      transition: color 0.3s;\n\n      img {\n        max-height: 26px;\n      }\n    }\n\n    a:hover, a:active {\n      color: rgb(131, 146, 161);\n    }\n\n  }\n"]))),ve=H.default.a(b||(b=Object(q.a)(["\n  color: var(--title-text-color);\n  border-bottom: 1px solid var(--title-text-color);\n  font-weight: bold;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  outline: none;\n  text-decoration: none;\n  text-size-adjust: 100%;\n\n  :hover {\n    border-bottom: 2px solid var(--title-text-color);\n  }\n"]))),Oe=H.default.div(p||(p=Object(q.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  margin-top: 0%;\n  margin-bottom: 0px;\n  margin-right: 3%;\n  margin-left: 1%;\n  text-align: center;\n  // background-color: red;\n"]))),ye=H.default.div(f||(f=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n//   flex: 1 1 auto;\n  flex-wrap: nowrap;\n  height: 70%;\n  align-items: center;\n  // background-color: red;\n"]))),ke=H.default.div(x||(x=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  // background-color: red;\n\n  // flex: 1 1 auto;\n  \n"]))),we=Object(H.default)(ee.a)(g||(g=Object(q.a)(["\n  position: fixed;\n  margin: 15px;\n  font-weight: bold;\n  font-size: 40% !important;\n  font-family: 'BBBOcelot';\n  \n"]))),Se=H.default.img(m||(m=Object(q.a)(["\n  height: auto;\n  width: 20%;\n  border-radius: 7px;\n  box-shadow: 5px 5px 40px 5px rgba(0,0,0,0.5);\n  background-color: var(--nft-back-color);\n  margin: 0;\n  padding: 0;\n"]))),Te=Object(H.default)(te.a)(h||(h=Object(q.a)(["\n  margin: 5px;\n  height: 10px !important;\n  border-radius: 30px;\n  border: 10px solid white;\n  \n  background-color:var(--main-text-color) !important;\n  \n  > div.MuiLinearProgress-barColorPrimary{\n    background-color:var(--title-text-color) !important;\n  }\n\n  > div.MuiLinearProgress-bar1Determinate {\n    border-radius: 30px !important;\n    background-image: linear-gradient(270deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.5));\n  }\n"]))),Me=H.default.h1(j||(j=Object(q.a)(["\n  margin-top: -30px;\n  margin-bottom: 10px;\n  font-size: 270%;\n  text-transform: uppercase;\n  \n  animation: glow 2s ease-in-out infinite alternate;\n  color: var(--main-text-color);\n  @keyframes glow {\n    from {\n      text-shadow: 0 0 5px var(--main-text-color);\n    }\n    to {\n      text-shadow: 0 0 7px var(--title-text-color), 0 0 20px var(--title-text-color);\n    }\n  }\n"]))),Pe=(H.default.h2(v||(v=Object(q.a)(["\n  color: var(--title-text-color);\n  \n"]))),H.default.div(O||(O=Object(q.a)(["\n  display: flex;\n  align-items: center;\n  \n\n  img {\n    max-height: 200px;\n    margin-right: 10px;\n  }\n"]))),function(e){var t,n,r,a,i=Object(y.useState)(),o=Object(V.a)(i,2),c=o[0],s=o[1],u=Object(y.useState)(!1),l=Object(V.a)(u,2),d=l[0],b=l[1],p=Object(y.useState)(!1),f=Object(V.a)(p,2),x=f[0],g=f[1],m=Object(y.useState)(""),h=Object(V.a)(m,2),j=h[0],v=h[1],O=Object(y.useState)(0),k=Object(V.a)(O,2),w=k[0],S=k[1],T=Object(y.useState)(0),M=Object(V.a)(T,2),P=M[0],B=M[1],K=Object(y.useState)(0),N=Object(V.a)(K,2),A=N[0],I=N[1],L=Object(y.useState)(!1),C=Object(V.a)(L,2),D=C[0],W=C[1],z=Object(y.useState)(!1),_=Object(V.a)(z,2),F=_[0],q=_[1],H=Object(y.useState)(0),$=Object(V.a)(H,2),ee=$[0],te=$[1],ie=Object(y.useState)("SOL"),oe=Object(V.a)(ie,2),se=oe[0],Pe=oe[1],Be=Object(y.useState)(0),Ee=Object(V.a)(Be,2),Re=Ee[0],Ke=Ee[1],Ne=Object(y.useState)(!1),Ae=Object(V.a)(Ne,2),Ie=Ae[0],Le=Ae[1],Ce=Object(y.useState)(!1),De=Object(V.a)(Ce,2),We=De[0],ze=De[1],_e=Object(y.useState)(0),Ue=Object(V.a)(_e,2),Fe=Ue[0],Ge=Ue[1],Ye=Object(y.useState)(!1),Ve=Object(V.a)(Ye,2),qe=Ve[0],He=Ve[1],Je=Object(y.useState)(),Ze=Object(V.a)(Je,2),Qe=Ze[0],Xe=Ze[1],$e=Object(y.useState)(!1),et=Object(V.a)($e,2),tt=et[0],nt=et[1],rt=Object(y.useState)(!1),at=Object(V.a)(rt,2),it=at[0],ot=at[1],ct=Object(y.useState)({open:!1,message:"",severity:void 0}),st=Object(V.a)(ct,2),ut=st[0],lt=st[1],dt=Object(Z.a)(),bt=Object(y.useState)(),pt=Object(V.a)(bt,2),ft=pt[0],xt=pt[1],gt=e.rpcHost;function mt(e){var t=A-1;if(I(t),W(0===t),We&&Fe&&Fe>0){var n=Fe-1;Ge(n),g(tt&&!qe&&n>0)}B(P+1);!F&&c&&c>0&&s(c-(Ie?Re:ee)-.012),v("devnet"===de||"testnet"===de?"https://solscan.io/token/"+e+"?cluster="+de:"https://solscan.io/token/"+e),Object(J.a)({particleCount:400,spread:70,origin:{y:.6}})}var ht=function(){var t=Object(Y.a)(G.a.mark((function t(){var n,r,a,i,o;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,b(!0),!(dt&&(null===ft||void 0===ft?void 0:ft.program)&&dt.publicKey)){t.next=13;break}return r=E.d.Keypair.generate(),t.next=6,Object(le.d)(ft,dt.publicKey,r);case 6:if(a=t.sent[0],i={err:!0},!a){t.next=12;break}return t.next=11,Object(le.b)(a,e.txTimeout,e.connection,"singleGossip",!0);case 11:i=t.sent;case 12:(null===(n=i)||void 0===n?void 0:n.err)?lt({open:!0,message:"Mint failed! Please try again!",severity:"error"}):(lt({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}),mt(r.publicKey));case 13:t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),o=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?o="SOLD OUT!":312===t.t0.code&&(o="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?o="SOLD OUT!":t.t0.message.indexOf("0x135")&&(o="Insufficient funds to mint. Please fund your wallet.")):o="Transaction Timeout! Please try again.",lt({open:!0,message:o,severity:"error"});case 20:return t.prev=20,b(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,15,20,23]])})));return function(){return t.apply(this,arguments)}}();return Object(y.useEffect)((function(){Object(Y.a)(G.a.mark((function t(){var n;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!dt){t.next=5;break}return t.next=3,e.connection.getBalance(dt.publicKey);case 3:n=t.sent,s(n/R.b);case 5:case"end":return t.stop()}}),t)})))()}),[dt,e.connection]),Object(y.useEffect)((function(){Object(Y.a)(G.a.mark((function t(){var n,r,a,i,o,c,s,u,l,d;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(dt){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(le.c)(dt,e.candyMachineId,e.connection);case 4:if(a=t.sent,xt(a),S(a.state.itemsAvailable),I(a.state.itemsRemaining),B(a.state.itemsRedeemed),i=1,i=+("1"+new Array(9).join("0").slice()+"0"),a.state.tokenMint?(q(!0),Pe("TOKEN"),te(a.state.price.toNumber()/i),Ke(a.state.price.toNumber()/i)):(te(a.state.price.toNumber()/R.b),Ke(a.state.price.toNumber()/R.b)),!a.state.whitelistMintSettings){t.next=38;break}return Le(!0),ze(a.state.whitelistMintSettings.mode.burnEveryTime),nt(a.state.whitelistMintSettings.presale),ot(!tt&&null===a.state.whitelistMintSettings.discountPrice),null!==a.state.whitelistMintSettings.discountPrice&&a.state.whitelistMintSettings.discountPrice!==a.state.price&&(a.state.tokenMint?Ke((null===(o=a.state.whitelistMintSettings.discountPrice)||void 0===o?void 0:o.toNumber())/i):Ke((null===(c=a.state.whitelistMintSettings.discountPrice)||void 0===c?void 0:c.toNumber())/R.b)),s=0,t.prev=19,t.t0=e.connection,t.next=23,Object(ae.c)(a.state.whitelistMintSettings.mint,dt.publicKey);case 23:return t.t1=t.sent[0],t.next=26,t.t0.getTokenAccountBalance.call(t.t0,t.t1);case 26:l=t.sent,s=(null===l||void 0===l||null===(u=l.value)||void 0===u?void 0:u.uiAmount)||0,t.next=34;break;case 30:t.prev=30,t.t2=t.catch(19),console.error(t.t2),s=0;case 34:Ge(s),g(tt&&!qe&&s>0),t.next=39;break;case 38:Le(!1);case 39:(null===a||void 0===a||null===(n=a.state.endSettings)||void 0===n?void 0:n.endSettingType.date)&&(Xe(Object(ae.f)(a.state.endSettings.number)),a.state.endSettings.number.toNumber()<(new Date).getTime()/1e3&&(He(!0),g(!1))),(null===a||void 0===a||null===(r=a.state.endSettings)||void 0===r?void 0:r.endSettingType.amount)?(d=Math.min(a.state.endSettings.number.toNumber(),a.state.itemsAvailable),S(d),a.state.itemsRedeemed<d?I(d-a.state.itemsRedeemed):(I(0),a.state.isSoldOut=!0,He(!0))):I(a.state.itemsRemaining),a.state.isSoldOut&&g(!1);case 42:case"end":return t.stop()}}),t,null,[[19,30]])})))()}),[dt,e.candyMachineId,e.connection,qe,tt]),Object(ce.jsxs)("main",{children:[Object(ce.jsxs)(Oe,{children:[Object(ce.jsxs)(be,{children:[Object(ce.jsx)(he,{children:Object(ce.jsx)("a",{href:"https://www.otakuzzz.world/",children:Object(ce.jsx)("img",{alt:"HOME",src:"HOMEBUTTON.webp"})})}),Object(ce.jsx)(je,{}),Object(ce.jsx)(fe,{children:dt?Object(ce.jsxs)(pe,{children:[(c||0).toLocaleString()," SOL",Object(ce.jsx)(xe,{})]}):Object(ce.jsx)(xe,{children:"Connect Wallet"})})]}),Object(ce.jsx)(Me,{children:"MINT IS LIVE!"}),Object(ce.jsx)("br",{}),Object(ce.jsx)(ye,{children:Object(ce.jsxs)(ke,{children:[Object(ce.jsx)("br",{}),Object(ce.jsxs)("div",{children:[Object(ce.jsx)(we,{label:x&&Ie&&Fe>0?Re+" "+se:ee+" "+se}),Object(ce.jsx)(Se,{src:"logo.gif",alt:"NFT To Mint"})]}),Object(ce.jsx)("br",{}),dt&&x&&Ie&&Fe>0&&We&&Object(ce.jsxs)("h3",{children:["You own ",Fe," WL mint ",Fe>1?"tokens":"token","."]}),dt&&x&&Ie&&Fe>0&&!We&&Object(ce.jsx)("h3",{children:"You are whitelisted and allowed to mint."}),dt&&x&&Qe&&Date.now()<Qe.getTime()&&Object(ce.jsx)(X.a,{date:Object(ae.f)(null===ft||void 0===ft||null===(t=ft.state)||void 0===t||null===(n=t.endSettings)||void 0===n?void 0:n.number),onMount:function(e){return e.completed&&He(!0)},onComplete:function(){He(!0)},renderer:function(e){var t=e.days,n=e.hours,r="";return t>0&&(r+=t+" days "),n>0&&(r+=n+" hours "),r+=e.minutes+1+" minutes left to MINT.",Object(ce.jsx)("div",{children:Object(ce.jsx)("h3",{children:r})})}}),dt&&x&&Object(ce.jsxs)("h3",{children:["TOTAL MINTED : ",P," / ",w]}),dt&&x&&Object(ce.jsx)(Te,{variant:"determinate",value:100-100*A/w}),Object(ce.jsx)("br",{}),Object(ce.jsx)(me,{children:x||qe||!(null===ft||void 0===ft?void 0:ft.state.goLiveDate)||it&&!(Fe>0)?dt?!it||Fe>0?(null===ft||void 0===ft?void 0:ft.state.gatekeeper)&&dt.publicKey&&dt.signTransaction?Object(ce.jsx)(Q.GatewayProvider,{wallet:{publicKey:dt.publicKey||new R.c(le.a),signTransaction:dt.signTransaction},gatekeeperNetwork:null===ft||void 0===ft||null===(r=ft.state)||void 0===r||null===(a=r.gatekeeper)||void 0===a?void 0:a.gatekeeperNetwork,clusterUrl:gt,options:{autoShowModal:!1},children:Object(ce.jsx)(ue,{candyMachine:ft,isMinting:d,isActive:x,isEnded:qe,isSoldOut:D,onMint:ht})}):Object(ce.jsx)(ue,{candyMachine:ft,isMinting:d,isActive:x,isEnded:qe,isSoldOut:D,onMint:ht}):Object(ce.jsx)("h1",{children:"Mint is private."}):Object(ce.jsx)(xe,{children:"Connect Wallet"}):Object(ce.jsx)(X.a,{date:Object(ae.f)(null===ft||void 0===ft?void 0:ft.state.goLiveDate),onMount:function(e){return e.completed&&g(!qe)},onComplete:function(){g(!qe)},renderer:function(e){var t=e.days,n=e.hours,r=e.minutes,a=e.seconds;return Object(ce.jsxs)("div",{children:[Object(ce.jsxs)(ge,{elevation:1,children:[Object(ce.jsx)("h1",{children:t}),"Days"]}),Object(ce.jsxs)(ge,{elevation:1,children:[Object(ce.jsx)("h1",{children:n}),"Hours"]}),Object(ce.jsxs)(ge,{elevation:1,children:[Object(ce.jsx)("h1",{children:r}),"Mins"]}),Object(ce.jsxs)(ge,{elevation:1,children:[Object(ce.jsx)("h1",{children:a}),"Secs"]})]})}})}),Object(ce.jsx)("br",{}),dt&&x&&j&&Object(ce.jsx)(ve,{href:j,target:"_blank",children:"View on Solscan"})]})})]}),Object(ce.jsx)(ne.a,{open:ut.open,autoHideDuration:6e3,onClose:function(){return lt(Object(U.a)(Object(U.a)({},ut),{},{open:!1}))},children:Object(ce.jsx)(re.a,{onClose:function(){return lt(Object(U.a)(Object(U.a)({},ut),{},{open:!1}))},severity:ut.severity,children:ut.message})})]})});n(355);var Be=new E.d.PublicKey("2d74WFxvzLDYB7MesULUDGqQ1zpfjtnjcGqT3mgiJ2Fk"),Ee="mainnet-beta",Re="https://restless-morning-dew.solana-mainnet.quiknode.pro/59ec41da879a3ab39e3cfc4aa1a35ca425e84011/",Ke=new E.d.Connection(Re),Ne=Object(T.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Ae=function(){var e=Object(y.useMemo)((function(){return Object(R.h)(Ee)}),[]),t=Object(y.useMemo)((function(){return[Object(K.a)(),Object(N.a)(),Object(A.a)(),Object(I.a)(),Object(L.a)({network:Ee}),Object(C.a)({network:Ee}),Object(D.a)(),Object(W.a)(),Object(z.a)()]}),[]);return Object(ce.jsx)(M.a,{theme:Ne,children:Object(ce.jsx)(P.a,{endpoint:e,children:Object(ce.jsx)(B.a,{wallets:t,autoConnect:!0,children:Object(ce.jsx)(_.a,{children:Object(ce.jsx)(Pe,{candyMachineId:Be,connection:Ke,txTimeout:3e4,rpcHost:Re})})})})})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,437)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};S.a.render(Object(ce.jsx)(k.a.StrictMode,{children:Object(ce.jsx)(Ae,{})}),document.getElementById("root")),Ie()},57:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p}));var r=n(1),a=n.n(r),i=n(3),o=n(26),c=n(38),s=(n(21),function(e){if(e)return new Date(1e3*e.toNumber())}),u=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new o.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),l=new o.d.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),d=function(){var e=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.PublicKey.findProgramAddress([n.toBuffer(),c.b.toBuffer(),t.toBuffer()],u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(5).Buffer)}},[[386,1,2]]]);
//# sourceMappingURL=main.acc8ab03.chunk.js.map