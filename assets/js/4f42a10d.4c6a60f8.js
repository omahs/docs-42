"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3299],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,f=p["".concat(i,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(4334),r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),l=n(7294),r=n(4334),o=n(2389),u=n(7392),i=n(7094),s=n(2466),d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:f,className:h}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,u.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,l.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=f){const e=v[f];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==N&&(C(t),T(a),null!=f&&w(f,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:S},o,{className:(0,r.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,l.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},1309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var a=n(3117),l=(n(7294),n(3905)),r=n(5488),o=n(5162);const u={sidebar_label:"Full Storage Node"},i=void 0,s={unversionedId:"nodes/full-storage-node",id:"nodes/full-storage-node",title:"full-storage-node",description:"This tutorial will guide you through setting up a Celestia Full Storage",source:"@site/docs/nodes/full-storage-node.mdx",sourceDirName:"nodes",slug:"/nodes/full-storage-node",permalink:"/nodes/full-storage-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/full-storage-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Full Storage Node"},sidebar:"nodes",previous:{title:"Bridge Node",permalink:"/nodes/bridge-node"},next:{title:"Consensus",permalink:"/category/consensus"}},d={},c=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your full storage node",id:"setting-up-your-full-storage-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Install Celestia node",id:"install-celestia-node",level:2},{value:"Run the full storage node",id:"run-the-full-storage-node",level:3},{value:"Initialize the full storage node",id:"initialize-the-full-storage-node",level:4},{value:"Start the full storage node",id:"start-the-full-storage-node",level:4},{value:"Optional: run the full storage node with a custom key",id:"optional-run-the-full-storage-node-with-a-custom-key",level:3},{value:"Optional: start the full storage node with SystemD",id:"optional-start-the-full-storage-node-with-systemd",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setting-up-a-celestia-full-storage-node"},"Setting up a Celestia Full Storage Node"),(0,l.kt)("p",null,"This tutorial will guide you through setting up a Celestia Full Storage\nNode, which is a Celestia node that doesn't connect to Celestia App\n(hence not a full node) but stores all the data."),(0,l.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,l.kt)("p",null,"The following hardware minimum requirements are recommended for running\nthe full storage node:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,l.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,l.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,l.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,l.kt)("h2",{id:"setting-up-your-full-storage-node"},"Setting up your full storage node"),(0,l.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,l.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,l.kt)("p",null,"You can follow the tutorial for setting up your dependencies ",(0,l.kt)("a",{parentName:"p",href:"/nodes/environment"},"here")),(0,l.kt)("h2",{id:"install-celestia-node"},"Install Celestia node"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: Make sure that you have at least 250+ Gb of free space for\nCelestia Full Storage Node")),(0,l.kt)("p",null,"You can follow the tutorial for installing Celestia Node ",(0,l.kt)("a",{parentName:"p",href:"/nodes/celestia-node"},"here")),(0,l.kt)("h3",{id:"run-the-full-storage-node"},"Run the full storage node"),(0,l.kt)("h4",{id:"initialize-the-full-storage-node"},"Initialize the full storage node"),(0,l.kt)("p",null,"Run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full init\n")),(0,l.kt)("h4",{id:"start-the-full-storage-node"},"Start the full storage node"),(0,l.kt)("p",null,"Start the Full Storage Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: In order for access to the ability to get/submit state-related\ninformation, such as the ability to submit PayForData transactions,\nor query for the node's account balance, a gRPC endpoint of a validator\n(core) node must be passed as directed below.")),(0,l.kt)("p",null,"A note on ports:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,l.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer.")),(0,l.kt)(r.Z,{groupId:"networks",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --core.grpc.port <port>\n"))),(0,l.kt)(o.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.remote <ip-address>:<port>\n")))),(0,l.kt)("p",null,"If you would like to find example RPC endpoints, check out the list of\nresources ",(0,l.kt)("a",{parentName:"p",href:"./mamaki-testnet"},"here"),"."),(0,l.kt)("p",null,"You can create your key for your node by following the ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,l.kt)("a",{parentName:"p",href:"/developers/celestia-node-key"},"here")),(0,l.kt)("p",null,"Once you start the Full Node, a wallet key will be generated for you.\nYou will need to fund that address with testnet tokens to pay for\nPayForData transactions.\nYou can find the address by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type full --keyring-backend test\n")),(0,l.kt)("p",null,"You have two networks to get testnet tokens from:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./arabica-devnet"},"Arabica")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./mamaki-testnet"},"Mamaki"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a full-storage node for your sovereign\nrollup, it is highly recommended to request Arabica devnet tokens\nas Arabica has the latest changes that can be used to\ntest for developing your sovereign rollup. You can still use\nMamaki Testnet as well, it is just mostly used for Validator operations.")),(0,l.kt)("h3",{id:"optional-run-the-full-storage-node-with-a-custom-key"},"Optional: run the full storage node with a custom key"),(0,l.kt)("p",null,"In order to run a full storage node using a custom key:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The custom key must exist inside the celestia full storage node directory\nat the correct path (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.celestia-full/keys/keyring-test"),")"),(0,l.kt)("li",{parentName:"ol"},"The name of the custom key must be passed upon ",(0,l.kt)("inlineCode",{parentName:"li"},"start"),", like so:")),(0,l.kt)(r.Z,{groupId:"networks",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --core.grpc.port <port> --keyring.accname <name-of-custom-key>\n"))),(0,l.kt)(o.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.remote <ip-address>:<port> --keyring.accname <name-of-custom-key>\n")))),(0,l.kt)("h3",{id:"optional-start-the-full-storage-node-with-systemd"},"Optional: start the full storage node with SystemD"),(0,l.kt)("p",null,"Follow the tutorial on setting up the full storage node as a background\nprocess with SystemD ",(0,l.kt)("a",{parentName:"p",href:"./systemd"},"here"),"."),(0,l.kt)("p",null,"With that, you are now running a Celestia Full Storage Node."))}m.isMDXComponent=!0}}]);