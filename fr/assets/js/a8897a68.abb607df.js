"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[289],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),l="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),c=n(2466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,a.useState)(y),E=O[0],C=O[1],x=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var j=N[v];null!=j&&j!==E&&g.some((function(e){return e.value===j}))&&C(j)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==E&&(I(t),C(r),null!=v&&T(v,String(r)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=x.indexOf(e.currentTarget)+1;n=null!=(r=x[a])?r:x[0];break;case"ArrowLeft":var l,o=x.indexOf(e.currentTarget)-1;n=null!=(l=x[o])?l:x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},b)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:D,onClick:D},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},1027:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(5488),i=n(5162),s=["components"],c={sidebar_label:"Installing Celestia Node"},u="Celestia Node",d={unversionedId:"developers/celestia-node",id:"developers/celestia-node",title:"Celestia Node",description:"This tutorial goes over building and installing celestia-node. This",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/developers/celestia-node.mdx",sourceDirName:"developers",slug:"/developers/celestia-node",permalink:"/fr/developers/celestia-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Celestia Node"},sidebar:"developers",previous:{title:"Celestia Node",permalink:"/fr/category/celestia-node"},next:{title:"Node Tutorial",permalink:"/fr/developers/node-tutorial"}},p={},m=[{value:"Install Celestia Node",id:"install-celestia-node",level:2},{value:"Network Selection",id:"network-selection",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"celestia-node"},"Celestia Node"),(0,l.kt)("p",null,"This tutorial goes over building and installing celestia-node. This\ntutorial assumes you completed the steps in setting up your development\nenvironment ",(0,l.kt)("a",{parentName:"p",href:"/fr/developers/environment"},"here"),"."),(0,l.kt)("h2",{id:"install-celestia-node"},"Install Celestia Node"),(0,l.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing celestia-node for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,l.kt)("p",null,"Install the celestia-node binary by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.4.1\nmake install\n")),(0,l.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-output"},"celestia version\nSemantic version: v0.4.1\nCommit: dbaf227c8b35da13ee92b34e364cbf8deb461ff1\nBuild Date: Thu Oct 20 22:48:39 EDT 2022\nSystem version: arm64/darwin\nGolang version: go1.19.1\n"))),(0,l.kt)(i.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing celestia-node for Mamaki Testnet means installing a specific version\nto be compatible with the network."),(0,l.kt)("p",null,"Install the celestia-node binary by running the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.3.0-rc2\nmake install\n")),(0,l.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.3.0-rc2\nCommit: 89892d8b96660e334741987d84546c36f0996fbe\n")))),(0,l.kt)("h2",{id:"network-selection"},"Network Selection"),(0,l.kt)("p",null,"You can perform network selection in celestia-node between Arabica and\nMamaki. However, you should note that networks work best on the celestia-node\nversions mentioned above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init\ncelestia light start --node.network arabica\n")))}v.isMDXComponent=!0}}]);