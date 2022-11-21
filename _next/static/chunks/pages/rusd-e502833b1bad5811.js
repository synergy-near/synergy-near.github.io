(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{81700:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rusd",function(){return l(274)}])},55581:function(e,n,l){"use strict";var r=l(85893),t=l(74855),a=l(17006),o=l(7158),s=l(89884),i=l(50053),d=l(58918),c=l(13289),u=l(81),x=l(67294),h=l(6213),m=l(41664),j=l.n(m);let Z=x.forwardRef((e,n)=>{let{as:l,href:t,...a}=e;return(0,r.jsx)(j(),{href:t,as:l,legacyBehavior:!0,children:(0,r.jsx)("a",{ref:n,...a})})}),g={padding:"0 15px 0 15px",color:"#FFF"},p=()=>{let[e,n]=x.useState("ethereum");return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(h.J.Provider,{value:h.Z[e],children:[(0,r.jsx)(d.Z,{size:"lg",label:"Network",data:b,style:{width:300,minWidth:250},onChange:n,cleanable:!1,defaultValue:e,searchable:!1}),"\xa0",(()=>{let n=h.Z[e].showWallet(),l=h.Z[e].connectButton(),t=(0,r.jsxs)(i.Z,{color:"green",appearance:"ghost",style:{borderColor:"#6474a7",color:"rgba(255, 255, 255, 0.9"},children:[null==n?void 0:n.network_currency_symbol,"\xa0",null==n?void 0:n.network_currency_amount,"\xa0(",null==n?void 0:n.address.slice(0,5),"..",null==n?void 0:n.address.slice((null==n?void 0:n.address.length)-5,null==n?void 0:n.address.length),")"]});return(0,r.jsx)("div",{children:n?t:l})})()]})})},b=[{label:(0,r.jsx)("span",{children:"Aurora (testnet)"}),value:"ethereum"}],w=e=>{let{children:n,active:l,...i}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{style:{backgroundColor:"#21273a"},children:[(0,r.jsxs)(u.Z,{activeKey:l,children:[(0,r.jsx)(u.Z.Item,{as:Z,href:"/",active:"home"==l,style:g,icon:(0,r.jsx)(t.Z,{}),children:"Home"}),(0,r.jsx)(u.Z.Item,{as:Z,href:"/trading",active:"trading"==l,style:g,icon:(0,r.jsx)(s.Z,{}),children:"Trading"}),(0,r.jsx)(u.Z.Item,{as:Z,href:"/rusd",active:"rusd"==l,style:g,icon:(0,r.jsx)(a.Z,{}),children:"Mint/Burn rUSD"}),(0,r.jsx)(u.Z.Item,{as:Z,href:"/faucet",active:"faucet"==l,style:g,icon:(0,r.jsx)(o.Z,{}),children:"Faucet"})]}),(0,r.jsx)(u.Z,{pullRight:!0,children:(0,r.jsx)(u.Z.Item,{children:(0,r.jsx)(p,{})})})]}),n]})};n.Z=w},6213:function(e,n,l){"use strict";l.d(n,{J:function(){return o}});var r=l(67294),t=l(33965);let a={ethereum:new t.Z},o=r.createContext(a.ethereum);n.Z=a},274:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return H}});var r=l(85893),t=l(55581),a=l(6213),o=l(67294),s=l(3365),i=l(39987),d=l(17988),c=l(3718),u=l(77349),x=l(15715),h=l(4647),m=l(50053),j=l(3944),Z=l(58918),g=l(22543),p=l(20901),b=l(3779),w=l(2593);let C=()=>{let e=(0,o.useContext)(a.J),n=e.getRawBalance(),l=e.getRawInsuranceAllowance(),[t,Z]=o.useState(n||new b.Z(w.O$.from(0),18)),g=e.getUserInssurances(),C=new Date(new Date().setMonth(new Date().getMonth()+2)),[f,v]=o.useState(C),y=(0,s.Z)(),H=e.stakeRawCallback(t,f,(0,p.lZ)(y)),S=e.getNewRawAllowanceCallback(t,(0,p.lZ)(y));return(0,r.jsxs)(i.Z,{bordered:!0,shaded:!0,header:"Staking",children:[(0,r.jsxs)("p",{children:["Stake RAW tokens to insure your collateral from debt pool losses. The longer the lock time, the greater the percentage of your insurance can be reimbursed (min 30 days, max 730 days).",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{style:{color:"orange"},children:"WARNING: Insurance can be returned only after the expiration of the lock."})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)(d.Z.Group,{controlId:"_",children:[(0,r.jsx)(d.Z.ControlLabel,{children:"RAW amount"}),(0,r.jsxs)(c.Z,{style:{marginTop:5,marginBottom:5},children:[(0,r.jsx)(c.Z.Button,{onClick:()=>Z(new b.Z(t.amount.sub(w.O$.from(10).pow(t.decimals+1)),t.decimals)),children:"-"}),(0,r.jsx)(u.Z,{className:"no-arrows-input-number",value:t.toHumanString(2),onChange:e=>Z(b.Z.fromString("string"==typeof e?e:e.toString(),t.decimals))}),(0,r.jsx)(c.Z.Button,{onClick:()=>Z(new b.Z(t.amount.add(w.O$.from(10).pow(t.decimals+1)),t.decimals)),children:"+"})]}),(0,r.jsxs)(d.Z.HelpText,{children:["Balance: ",null==n?void 0:n.toHumanString(4)]}),(0,r.jsxs)(d.Z.HelpText,{children:["Allowance: ",null==l?void 0:l.toHumanString(4)]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)(d.Z.Group,{controlId:"_",children:[(0,r.jsx)(d.Z.ControlLabel,{children:"Unlock date"}),(0,r.jsx)(x.Z,{style:{marginTop:5,marginBottom:5},format:"yyyy-MM-dd",ranges:[],block:!0,defaultValue:C,onChange:v})]}),(0,r.jsx)("br",{}),(0,r.jsxs)(h.Z,{justified:!0,children:[(0,r.jsx)(m.Z,{style:{backgroundColor:"#089a81",borderWidth:2},appearance:"primary",color:"green",disabled:parseFloat(null==l?void 0:l.toHumanString(18))>=parseFloat(null==t?void 0:t.toHumanString(18)),onClick:async()=>S(),children:(0,r.jsx)("b",{children:"Approve"})}),(0,r.jsx)(m.Z,{style:{backgroundColor:"#089a81",borderWidth:2},disabled:parseFloat(null==l?void 0:l.toHumanString(18))<parseFloat(null==t?void 0:t.toHumanString(18)),appearance:"primary",color:"green",onClick:async()=>H(),children:(0,r.jsx)("b",{children:"Stake"})})]}),(0,r.jsx)("hr",{}),(0,r.jsxs)(j.Z,{rowHeight:60,autoHeight:!0,style:{borderRadius:10},cellBordered:!0,data:g,renderEmpty:()=>(0,r.jsxs)("span",{style:{alignContent:"center"},children:[(0,r.jsx)("br",{}),"No any insurances"]}),children:[(0,r.jsxs)(j.Z.Column,{verticalAlign:"middle",width:170,align:"left",fixed:!0,flexGrow:1,children:[(0,r.jsx)(j.Z.HeaderCell,{children:"ID"}),(0,r.jsx)(j.Z.Cell,{dataKey:"id"})]}),(0,r.jsxs)(j.Z.Column,{verticalAlign:"middle",width:100,flexGrow:1,children:[(0,r.jsx)(j.Z.HeaderCell,{children:"RAW Locked"}),(0,r.jsx)(j.Z.Cell,{dataKey:"rawLocked"})]}),(0,r.jsxs)(j.Z.Column,{verticalAlign:"middle",width:200,flexGrow:1,children:[(0,r.jsx)(j.Z.HeaderCell,{children:"Locked At"}),(0,r.jsx)(j.Z.Cell,{dataKey:"lockedAt"})]}),(0,r.jsxs)(j.Z.Column,{verticalAlign:"middle",width:150,flexGrow:1,children:[(0,r.jsx)(j.Z.HeaderCell,{children:"Available At"}),(0,r.jsx)(j.Z.Cell,{dataKey:"availableAt"})]}),(0,r.jsxs)(j.Z.Column,{verticalAlign:"middle",width:150,flexGrow:1,children:[(0,r.jsx)(j.Z.HeaderCell,{children:"RAW Repaid"}),(0,r.jsx)(j.Z.Cell,{dataKey:"rawRepaid"})]}),(0,r.jsxs)(j.Z.Column,{verticalAlign:"middle",width:150,flexGrow:1,children:[(0,r.jsx)(j.Z.HeaderCell,{children:"Available RAW Compensation"}),(0,r.jsx)(j.Z.Cell,{dataKey:"availableCompensationString"})]}),(0,r.jsxs)(j.Z.Column,{verticalAlign:"middle",width:150,flexGrow:1,children:[(0,r.jsx)(j.Z.HeaderCell,{children:"#"}),(0,r.jsx)(j.Z.Cell,{dataKey:"unstakeButton"})]})]})]})},f=()=>{let e=o.useContext(a.J),n=(0,s.Z)(),l=e.getWethAllowance(),t=e.getRusdBalance(),x=e.getWethBalance(),[j,Z]=o.useState(x||new b.Z(w.O$.from(0),18)),[g,C]=o.useState(t||new b.Z(w.O$.from(0),18)),f=e.getNewWethAllowanceCallback(j,(0,p.lZ)(n)),v=e.getMintCallback(g,j,(0,p.lZ)(n));return(0,r.jsxs)(i.Z,{bordered:!0,shaded:!0,header:"Mint rUSD",children:[(0,r.jsx)("p",{children:"Deposit WETH as a collateral and get rUSD in return. Resulting collateral ratio should be greater than min collateral ratio"}),(0,r.jsx)("hr",{}),(0,r.jsxs)(d.Z.Group,{controlId:"_",children:[(0,r.jsx)(d.Z.ControlLabel,{children:"rUSD amount"}),(0,r.jsxs)(c.Z,{style:{marginTop:5,marginBottom:5},children:[(0,r.jsx)(c.Z.Button,{onClick:()=>C(new b.Z(g.amount.sub(w.O$.from(10).pow(18)),g.decimals)),children:"-"}),(0,r.jsx)(u.Z,{className:"no-arrows-input-number",step:.1,value:null==g?void 0:g.toHumanString(18),onChange(e){console.log("DOT",e,b.Z.fromString("string"==typeof e?e:e.toString(),18).toHumanString(18)),C(b.Z.fromString("string"==typeof e?e:e.toString(),18))}}),(0,r.jsx)(c.Z.Button,{onClick:()=>C(new b.Z(g.amount.add(w.O$.from(10).pow(18)),18)),children:"+"})]}),(0,r.jsxs)(d.Z.HelpText,{children:["Balance: ",null==t?void 0:t.toHumanString(5)]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)(d.Z.Group,{controlId:"_",children:[(0,r.jsx)(d.Z.ControlLabel,{children:"WETH amount"}),(0,r.jsxs)(c.Z,{style:{marginTop:5,marginBottom:5},children:[(0,r.jsx)(c.Z.Button,{onClick:()=>Z(new b.Z(j.amount.sub(w.O$.from(10).pow(j.decimals-1)),j.decimals)),children:"-"}),(0,r.jsx)(u.Z,{className:"no-arrows-input-number",step:.1,value:j.toHumanString(18),onChange:e=>Z(b.Z.fromString("string"==typeof e?e:e.toString(),j.decimals))}),(0,r.jsx)(c.Z.Button,{onClick:()=>Z(new b.Z(j.amount.add(w.O$.from(10).pow(j.decimals-1)),j.decimals)),children:"+"})]}),(0,r.jsxs)(d.Z.HelpText,{children:["Balance: ",null==x?void 0:x.toHumanString(6)]}),(0,r.jsxs)(d.Z.HelpText,{children:["Allowance: ",null==l?void 0:l.toHumanString(2)]}),(0,r.jsx)("hr",{}),(0,r.jsxs)(d.Z.HelpText,{children:["Current C-ratio: ",e.getCurrentCRatio(),"%"]}),(0,r.jsxs)(d.Z.HelpText,{children:["New C-ratio:"," ",e.predictCollateralRatio(g,j,!0),"%"]}),(0,r.jsxs)(d.Z.HelpText,{children:["Min C-ratio: ",e.getMinCRatio(),"%"]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)(h.Z,{justified:!0,children:[(0,r.jsx)(m.Z,{appearance:"ghost",disabled:parseFloat(null==l?void 0:l.toHumanString(18))>=parseFloat(null==j?void 0:j.toHumanString(18)),style:{marginBottom:7,borderWidth:2},onClick:async()=>f(),children:(0,r.jsx)("b",{children:"Approve"})}),(0,r.jsx)(m.Z,{appearance:"ghost",disabled:parseFloat(null==l?void 0:l.toHumanString(18))<parseFloat(null==j?void 0:j.toHumanString(18)),style:{marginBottom:7,borderWidth:2},async onClick(){console.log(123123),v()},children:(0,r.jsx)("b",{children:"Mint"})})]})]})},v=()=>{var e;let n=o.useContext(a.J),l=n.getRusdBalance(),t=n.getWethBalance(),x=n.wethLocked(),h=n.rawRepay(),j=n.getRawPrice(),g=n.getMinCRatio(),C=n.userDebt();new b.Z(w.O$.from(0),18);let[f,v]=o.useState(l||new b.Z(w.O$.from(0),18)),y=(0,s.Z)(),[H,S]=o.useState(t||new b.Z(w.O$.from(0),18)),[k,B]=o.useState(null),T=n.getUserInssurances(),A=n.predictCollateralRatio(new b.Z(w.O$.from(0),18),H,!1),W=n.predictCollateralRatio(f,new b.Z(w.O$.from(0),18),!1),R=n.getBurnRusdCallback(f,k||"0x0000000000000000000000000000000000000000000000000000000000000000",(0,p.lZ)(y)),I=n.unlockWethCallback(H,(0,p.lZ)(y));return(0,r.jsxs)(i.Z,{bordered:!0,shaded:!0,header:"Burn rUSD",children:[(0,r.jsx)("p",{children:"Burn rUSD to increase your collateral ratio and get ability to withdraw collateral in WETH. You can choose insurance to repay your debt pool losses in RAW."}),(0,r.jsx)("hr",{}),(0,r.jsxs)(d.Z.Group,{controlId:"_",children:[(0,r.jsx)(d.Z.ControlLabel,{children:"Burn rUSD amount"}),(0,r.jsxs)(c.Z,{style:{marginTop:5,marginBottom:5},children:[(0,r.jsx)(c.Z.Button,{onClick:()=>v(new b.Z(f.amount.sub(w.O$.from(10).pow(f.decimals)),f.decimals)),children:"-"}),(0,r.jsx)(u.Z,{className:"no-arrows-input-number",step:.1,value:f.toHumanString(18),onChange:e=>v(b.Z.fromString("string"==typeof e?e:e.toString(),f.decimals))}),(0,r.jsx)(c.Z.Button,{onClick:()=>v(new b.Z(f.amount.add(w.O$.from(10).pow(f.decimals)),f.decimals)),children:"+"})]}),(0,r.jsxs)(d.Z.HelpText,{children:["Current balance: ",null==l?void 0:l.toHumanString(2)]}),(0,r.jsxs)(d.Z.HelpText,{children:["New balance: ",new b.Z(null!==(e=null==l?void 0:l.amount.sub(null==f?void 0:f.amount))&&void 0!==e?e:w.O$.from(0),18).toHumanString(2)]}),(0,r.jsxs)(d.Z.HelpText,{children:["Your rUSD debt: ",null==C?void 0:C.toHumanString(2)]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)(d.Z.Group,{controlId:"_",children:[(0,r.jsx)(d.Z.ControlLabel,{children:"Insurance rUSD amount"}),(0,r.jsx)("div",{style:{marginTop:5,marginBottom:5},children:(0,r.jsx)(Z.Z,{label:"Insurance",data:T.map(e=>{var n;return{label:"".concat(e.id.slice(0,6),"... (Max: ").concat(null===(n=e.availableCompensation)||void 0===n?void 0:n.toHumanString(4)," RAW)"),value:e.id}}),onChange:B,block:!0,defaultValue:"0x0000000000000000000000000000000000000000000000000000000000000000"})}),(0,r.jsxs)(d.Z.HelpText,{children:["Max RAW compensation: ",j&&h?h.amount.div(j.amount).toNumber():0," (",null==h?void 0:h.toHumanString(4),"$, price: ",null==j?void 0:j.toHumanString(5),"$)"]}),(0,r.jsxs)(d.Z.HelpText,{children:["New C-ratio: ",W,"%"]}),(0,r.jsxs)(d.Z.HelpText,{children:["Min C-ratio: ",g,"%"]})]}),(0,r.jsx)("br",{}),(0,r.jsx)(m.Z,{color:"orange",appearance:"ghost",block:!0,style:{marginBottom:7,borderWidth:2},onClick:async()=>R(),children:(0,r.jsx)("b",{children:"Burn rUSD"})}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{children:"Withdraw WETH collateral (this decreases collateral ratio)."}),(0,r.jsx)("br",{}),(0,r.jsxs)(d.Z.Group,{controlId:"_",children:[(0,r.jsx)(d.Z.ControlLabel,{children:"Unlock WETH"}),(0,r.jsxs)(c.Z,{style:{marginTop:5,marginBottom:5},children:[(0,r.jsx)(c.Z.Button,{onClick:()=>S(new b.Z(H.amount.sub(w.O$.from(10).pow(H.decimals-1)),H.decimals)),children:"-"}),(0,r.jsx)(u.Z,{className:"no-arrows-input-number",step:.01,value:H.toHumanString(18),onChange:e=>S(b.Z.fromString("string"==typeof e?e:e.toString(),H.decimals))}),(0,r.jsx)(c.Z.Button,{onClick:()=>S(new b.Z(H.amount.add(w.O$.from(10).pow(H.decimals-1)),H.decimals)),children:"+"})]}),(0,r.jsxs)(d.Z.HelpText,{children:["Locked WETH Amount: ",null==x?void 0:x.toHumanString(5)]}),(0,r.jsxs)(d.Z.HelpText,{children:["Current balance: ",null==t?void 0:t.toHumanString(5)]}),(0,r.jsxs)(d.Z.HelpText,{children:["New C-ratio: ",A,"%"]}),(0,r.jsxs)(d.Z.HelpText,{children:["Min C-ratio: ",g,"%"]})]}),(0,r.jsx)("br",{}),(0,r.jsx)(m.Z,{color:"violet",appearance:"ghost",block:!0,style:{marginBottom:7,borderWidth:2,borderColor:"#b6a1e3",color:"#b6a1e3"},onClick:async()=>I(),children:(0,r.jsx)("b",{children:"Withdraw WETH"})})]})},y=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.Z,{justify:"space-around",children:(0,r.jsx)(g.Z.Item,{colspan:23,children:(0,r.jsx)(C,{})})}),(0,r.jsx)("br",{}),(0,r.jsxs)(g.Z,{justify:"space-around",children:[(0,r.jsx)(g.Z.Item,{colspan:11,children:(0,r.jsx)(f,{})}),(0,r.jsx)(g.Z.Item,{colspan:11,children:(0,r.jsx)(v,{})})]})]});function H(){return(0,r.jsx)(t.Z,{active:"rusd",children:(0,r.jsx)("div",{style:{padding:20},children:(0,r.jsx)(y,{})})})}}},function(e){e.O(0,[801,681,358,774,888,179],function(){return e(e.s=81700)}),_N_E=e.O()}]);