(function(){"use strict";var e={535:function(e,t,o){var i=o(963),n=o(252);const s={id:"app"},l=(0,n._)("div",{id:"print",class:"letter"},null,-1);function r(e,t,o,i,r,a){const d=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(d),(0,n._)("button",{onClick:t[0]||(t[0]=(...e)=>a.download&&a.download(...e))},"print"),l])}var a=o(862),d=o(120),c=o.n(d),u=o(727),p=o.n(u);const g=2.83464566929,h=297*g,m=419*g,w=297*g,b=419*g,f=[0*g,0*g];async function k(e){const t=await y(e);_(t)}async function y(e){const t={scale:2},o=await c()(e,t),i=o.toDataURL(),n={dataUrl:i,pageSize:{width:h,height:m},pageOrientation:"PORTRAIT",contentSize:{width:w,height:b},pageMargins:f};return n}function _(e){const{dataUrl:t,contentSize:o,pageMargins:i}=e,n=e.pageSize,s=e.pageOrientation,l={pageSize:n,pageOrientation:s,content:{image:t,...o},pageMargins:i};p().createPdf(l).download()}var S={components:{},methods:{download(){k(this.$refs.print.$el)}},setup(){return{SvgIcon:a.Z}}},v=o(744);const C=(0,v.Z)(S,[["render",r]]);var D=C,U=o(201),I=o(577);const V=e=>((0,n.dD)("data-v-f9a87e06"),e=e(),(0,n.Cn)(),e),x={class:"container"},M=V((()=>(0,n._)("h3",null,"Sign In",-1))),B={key:0,class:"error"},N={class:"mb-3"},j=V((()=>(0,n._)("label",{for:"email",class:"form-label"},"Email address",-1))),F={class:"mb-3"},L=V((()=>(0,n._)("label",{for:"password",class:"form-label"},"Password",-1))),z=V((()=>(0,n._)("button",{type:"submit",class:"btn btn-secondary"},"Sign in",-1)));function O(e,t,o,s,l,r){const a=(0,n.up)("sideBar"),d=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[r.loggedIn?((0,n.wg)(),(0,n.j4)(a,{key:0})):(0,n.kq)("",!0),(0,n._)("div",x,[M,(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,i.iM)(((...e)=>r.signin&&r.signin(...e)),["prevent"]))},[l.error?((0,n.wg)(),(0,n.iD)("div",B,(0,I.zw)(l.error),1)):(0,n.kq)("",!0),(0,n._)("div",N,[j,(0,n.wy)((0,n._)("input",{type:"email",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e),id:"email",placeholder:"someone@gmail.com"},null,512),[[i.nr,l.email]])]),(0,n._)("div",F,[L,(0,n.wy)((0,n._)("input",{type:"password",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>l.password=e),id:"password"},null,512),[[i.nr,l.password]])]),z],32),(0,n.Wm)(d,{to:"/register"},{default:(0,n.w5)((()=>[(0,n.Uk)("Register here to set up account")])),_:1})])])}function T(e,t,o,i,s,l){const r=(0,n.up)("VueSidebarMenuAkahon");return(0,n.wg)(),(0,n.iD)("div",null,[l.loggedIn?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"btn btn-secondary",onClick:t[0]||(t[0]=e=>l.logout())}," Logout ")):(0,n.kq)("",!0),(0,n.Wm)(r,{menuTitle:"Bid VFX",isSearch:!1,profileImg:"",profileName:l.yourStudio,profileRole:"",isExitButton:!1,menuItems:s.sideMenuItems,menuIcon:"bx-child",bgColor:"#304360"},null,8,["profileName","menuItems"])])}var P=o(645),q={components:{VueSidebarMenuAkahon:P.Z},data(){return{sideMenuItems:[{link:"/newBid",name:"new bid",tooltip:"new bid",icon:"bx-plus"},{link:"/bidsView",name:"bids",tooltip:"bids",icon:"bx-grid-alt"},{link:"/clientsView",name:"clients",tooltip:"clients",icon:"bx-group"},{link:"/usersView",name:"users",tooltip:"users",icon:"bx-user"},{link:"/studioView",name:"studio",tooltip:"studio",icon:"bx-home-circle"}]}},methods:{logout(){this.secured.delete("/signin"),delete localStorage.email,delete localStorage.signedIn,delete localStorage.message,this.$router.replace("/")}},computed:{loggedIn(){return 1==localStorage.signedIn},yourStudio(){return localStorage.email?localStorage.email:""}}};const $=(0,v.Z)(q,[["render",T]]);var Z=$,H={name:"signIn",data(){return{email:"",password:"",error:"",id:""}},created(){this.checkSignedIn()},updated(){this.checkSignedIn()},components:{sideBar:Z},methods:{signin(){this.plain.post("/signin",{email:this.email,password:this.password}).then((e=>this.signinSuccessful(e))).catch((e=>this.signinFailed(e)))},signinSuccessful(e){e.data.csrf?(localStorage.csrf=e.data.csrf,localStorage.email=this.email,localStorage.signedIn=1,this.error="",this.$router.replace("/bidsView")):this.signinFailed(e)},signinFailed(e){this.error=e.response&&e.response.data&&e.response.data.error||"",delete localStorage.csrf,delete localStorage.email,delete localStorage.signedIn},checkSignedIn(){1==localStorage.signedIn&&this.$router.replace("/bidsView")}},computed:{loggedIn(){return 1==localStorage.signedIn}}};const E=(0,v.Z)(H,[["render",O],["__scopeId","data-v-f9a87e06"]]);var R=E;const W={class:"container"},Y=(0,n._)("h3",null,"Register",-1),K={key:0},A={class:"mb-3"},X=(0,n._)("label",{for:"email",class:"form-label"},"Email address",-1),G={class:"mb-3"},J=(0,n._)("label",{for:"studio",class:"form-label"},"Studio",-1),Q={class:"mb-3"},ee=(0,n._)("label",{for:"password",class:"form-label"},"Password",-1),te={class:"mb-3"},oe=(0,n._)("label",{for:"confirmPassword",class:"form-label"},"Confirm Password",-1),ie=(0,n._)("button",{type:"submit",class:"btn btn-secondary"},"Register",-1);function ne(e,t,o,s,l,r){const a=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",W,[Y,(0,n._)("form",{onSubmit:t[4]||(t[4]=(0,i.iM)(((...e)=>r.register&&r.register(...e)),["prevent"]))},[l.error?((0,n.wg)(),(0,n.iD)("div",K,(0,I.zw)(l.error),1)):(0,n.kq)("",!0),(0,n._)("div",A,[X,(0,n.wy)((0,n._)("input",{type:"email",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e),id:"email",placeholder:"someone@gmail.com"},null,512),[[i.nr,l.email]])]),(0,n._)("div",G,[J,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=t=>e.studio=t),id:"studio",placeholder:"Your Studio Name"},null,512),[[i.nr,e.studio]])]),(0,n._)("div",Q,[ee,(0,n.wy)((0,n._)("input",{type:"password",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>l.password=e),id:"password"},null,512),[[i.nr,l.password]])]),(0,n._)("div",te,[oe,(0,n.wy)((0,n._)("input",{type:"password",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=e=>l.confirmPassword=e),id:"confirmPassword"},null,512),[[i.nr,l.confirmPassword]])]),ie],32),(0,n.Wm)(a,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Signin")])),_:1})])}var se={name:"registerUser",data(){return{email:"",password:"",confirmPassword:"",error:""}},created(){this.checkSignedIn()},updated(){this.checkSignedIn()},methods:{register(){this.plain.post("/signup",{email:this.email,password:this.password,confirmPassword:this.confirmPassword,studio:this.studio}).then((e=>this.registerSuccessful(e))).catch((e=>this.signinFailed(e)))},registerSuccessful(e){e.data.csrf?(localStorage.csrf=e.data.csrf,localStorage.message="You have successfully registered",localStorage.email=this.email,localStorage.signedIn=1,this.error="",this.$router.replace("/studioView")):this.signinFailed(e)},signinFailed(e){this.error=e.response&&e.response.data&&e.response.data.error||"",delete localStorage.csrf,delete localStorage.email,delete localStorage.signedIn},checkSignedIn(){1==localStorage.signedIn&&this.$router.replace("/bidsView")}}};const le=(0,v.Z)(se,[["render",ne]]);var re=le;const ae=(0,n._)("th",{scope:"col"},"#",-1),de=(0,n._)("th",{scope:"col"},"Project",-1),ce=(0,n._)("th",{scope:"col"},"fps",-1),ue=(0,n._)("th",{scope:"col"},"Resolution",-1),pe=(0,n._)("th",{scope:"col"},"Day Rate",-1),ge=(0,n._)("th",{scope:"col"},null,-1),he=(0,n._)("th",{scope:"col"},null,-1),me={scope:"col"},we={scope:"row"},be=["onUpdate:modelValue"],fe={key:1},ke=["onUpdate:modelValue"],ye={key:1},_e=["onUpdate:modelValue"],Se={key:1},ve=["onUpdate:modelValue"],Ce={key:1},De=["onClick"],Ue=["onClick"],Ie=["onClick"],Ve=["onClick"];function xe(e,t,o,s,l,r){const a=(0,n.up)("sideBar"),d=(0,n.up)("mainHeading"),c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",null,[r.loggedIn?((0,n.wg)(),(0,n.j4)(a,{key:0})):(0,n.kq)("",!0),(0,n.Wm)(d,{title:"Bids"}),(0,n._)("table",{class:(0,I.C_)(["table table-hover table-striped",l.darkMode?"table-dark":"table-light"])},[(0,n._)("thead",null,[(0,n._)("tr",null,[ae,de,ce,ue,pe,ge,he,(0,n._)("th",me,[(0,n._)("button",{class:(0,I.C_)(["btn",l.darkMode?"btn-outline-light":"btn-outline-dark"]),onClick:t[0]||(t[0]=(...e)=>r.darkModeToggle&&r.darkModeToggle(...e))}," Switch Dark Mode "+(0,I.zw)(l.onOff),3)])])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.bids,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[(0,n._)("th",we,(0,I.zw)(t+1),1),(0,n._)("td",null,[l.editing===t?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,type:"text","onUpdate:modelValue":e=>l.bids[t].project=e},null,8,be)),[[i.nr,l.bids[t].project]]):((0,n.wg)(),(0,n.iD)("span",fe,(0,I.zw)(e.project),1))]),(0,n._)("td",null,[l.editing===t?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,type:"text","onUpdate:modelValue":e=>l.bids[t].fps=e},null,8,ke)),[[i.nr,l.bids[t].fps]]):((0,n.wg)(),(0,n.iD)("span",ye,(0,I.zw)(e.fps),1))]),(0,n._)("td",null,[l.editing===t?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,type:"text","onUpdate:modelValue":e=>l.bids[t].resolution=e},null,8,_e)),[[i.nr,l.bids[t].resolution]]):((0,n.wg)(),(0,n.iD)("span",Se,(0,I.zw)(e.resolution),1))]),(0,n._)("td",null,[l.editing===t?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,type:"number","onUpdate:modelValue":e=>l.bids[t].cost=e},null,8,ve)),[[i.nr,l.bids[t].cost]]):((0,n.wg)(),(0,n.iD)("span",Ce,(0,I.zw)(r.formatCurrency(e.cost)),1))]),(0,n._)("td",null,[(0,n._)("button",{class:"btn btn-warning",onClick:t=>r.deleteBid(e.id)}," Delete ",8,De)]),(0,n._)("td",null,[l.editing===t?((0,n.wg)(),(0,n.iD)("button",{key:0,class:(0,I.C_)(["btn",l.darkMode?"btn-light":"btn-dark"]),onClick:o=>r.updateBid(e.id,t)}," Update ",10,Ue)):((0,n.wg)(),(0,n.iD)("button",{key:1,class:(0,I.C_)(["btn",l.darkMode?"btn-light":"btn-dark"]),onClick:e=>r.editBid(t)}," Edit ",10,Ie))]),(0,n._)("td",null,[(0,n._)("button",{class:"btn btn-success",onClick:t=>r.buildBid(e.id)}," Build Bid ",8,Ve)])])))),128))])],2),l.bids.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(c,{key:1,to:"/newBid"},{default:(0,n.w5)((()=>[(0,n.Uk)(" You have no bids - click here to add one ")])),_:1}))])}function Me(e,t,o,i,s,l){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h3",null,(0,I.zw)(o.title),1)])}var Be={props:{title:String}};const Ne=(0,v.Z)(Be,[["render",Me]]);var je=Ne,Fe={components:{mainHeading:je,sideBar:Z},data(){return{bids:[],darkMode:!1,onOff:"on",editing:!1,currentUser:[]}},created(){this.getList(),this.printList()},methods:{deleteBid(e){this.secured.delete(`/bids/${e}`).then(this.printList()).catch((e=>console.log(e,"Cannot delete record")))},editBid(e){this.editing=e},updateBid(e,t){this.secured.patch(`/bids/${e}`,{bid:{project:this.bids[t].project,fps:this.bids[t].fps,resolution:this.bids[t].resolution,cost:this.bids[t].cost}}).then((()=>{this.editing=!1,this.printList()})).catch((e=>console.log(e,"Cannot update record")))},getList(){this.plain.get("/bids").then((e=>{console.log(e.data)}))},printList(){this.plain.get("/bids").then((e=>{this.bids=e.data}))},darkModeToggle(){this.darkMode=!this.darkMode,this.onOff=this.darkMode?"off":"on"},buildBid(e){localStorage.currentBid=e,this.$router.replace("/buildBid")},getCurrentUser(){this.plain.get("/current").then((e=>{this.currentUser=e.data})).catch((e=>console.log(e,"Cannot get user")))},formatCurrency(e){let t=(e/1).toFixed(2);return t=t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),"€"+t}},computed:{loggedIn(){return this.currentUser}}};const Le=(0,v.Z)(Fe,[["render",xe]]);var ze=Le;function Oe(e,t,o,i,s,l){const r=(0,n.up)("sideBar"),a=(0,n.up)("mainHeading");return(0,n.wg)(),(0,n.iD)("div",null,[l.loggedIn?((0,n.wg)(),(0,n.j4)(r,{key:0})):(0,n.kq)("",!0),(0,n.Wm)(a,{title:"Users"}),(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.users,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e.email},(0,I.zw)(e.email)+" "+(0,I.zw)(e.created_at),1)))),128))])])}var Te={components:{sideBar:Z,mainHeading:je},data(){return{users:[]}},created(){this.getList(),this.printList()},methods:{getList(){this.plain.get("/").then((e=>{console.log(e.data)}))},printList(){this.plain.get("/").then((e=>{this.users=e.data}))}},computed:{loggedIn(){return 1==localStorage.signedIn}}};const Pe=(0,v.Z)(Te,[["render",Oe]]);var qe=Pe;const $e=(0,n._)("a",{href:"/newClient"},"Add new client",-1),Ze=["onUpdate:modelValue"],He={key:1},Ee=(0,n._)("b",null,"Contact name:",-1),Re=["onUpdate:modelValue"],We={key:3},Ye=(0,n._)("b",null,"Producer:",-1),Ke=["onUpdate:modelValue"],Ae={key:5},Xe=(0,n._)("b",null,"Studio:",-1),Ge=["onClick"],Je=["onClick"],Qe=["onClick"];function et(e,t,o,s,l,r){const a=(0,n.up)("sideBar"),d=(0,n.up)("mainHeading");return(0,n.wg)(),(0,n.iD)("div",null,[r.loggedIn?((0,n.wg)(),(0,n.j4)(a,{key:0})):(0,n.kq)("",!0),(0,n.Wm)(d,{title:"Clients"}),$e,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.clients,((e,t)=>((0,n.wg)(),(0,n.iD)("ul",{key:e.name},[l.editing===t?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,type:"text","onUpdate:modelValue":e=>l.clients[t].name=e},null,8,Ze)),[[i.nr,l.clients[t].name]]):((0,n.wg)(),(0,n.iD)("li",He,[Ee,(0,n.Uk)(" "+(0,I.zw)(e.name),1)])),l.editing===t?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:2,type:"text","onUpdate:modelValue":e=>l.clients[t].producer=e},null,8,Re)),[[i.nr,l.clients[t].producer]]):((0,n.wg)(),(0,n.iD)("li",We,[Ye,(0,n.Uk)(" "+(0,I.zw)(e.producer),1)])),l.editing===t?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:4,type:"text","onUpdate:modelValue":e=>l.clients[t].studio=e},null,8,Ke)),[[i.nr,l.clients[t].studio]]):((0,n.wg)(),(0,n.iD)("li",Ae,[Xe,(0,n.Uk)(" "+(0,I.zw)(e.studio),1)])),(0,n._)("button",{class:"btn btn-light",onClick:t=>r.deleteClient(e.id)}," Delete ",8,Ge),l.editing===t?((0,n.wg)(),(0,n.iD)("button",{key:6,class:"btn btn-light",onClick:o=>r.updateClient(e.id,t)}," Update ",8,Je)):((0,n.wg)(),(0,n.iD)("button",{key:7,class:"btn btn-light",onClick:e=>r.editClient(t)}," Edit ",8,Qe))])))),128))])}var tt={components:{mainHeading:je,sideBar:Z},data(){return{clients:[],editing:!1}},created(){this.printList()},methods:{deleteClient(e){this.secured.delete(`/clients/${e}`).then(this.printList()).catch((e=>console.log(e,"Cannot delete record")))},editClient(e){this.editing=e},updateClient(e,t){this.secured.patch(`/clients/${e}`,{client:{name:this.clients[t].name,studio:this.clients[t].studio,producer:this.clients[t].producer}}).then((()=>{this.editing=!1,this.printList()})).catch((e=>console.log(e,"Cannot update record")))},printList(){this.secured.get("/clients").then((e=>{this.clients=e.data}))}},computed:{loggedIn(){return 1==localStorage.signedIn}}};const ot=(0,v.Z)(tt,[["render",et]]);var it=ot;const nt=e=>((0,n.dD)("data-v-46451070"),e=e(),(0,n.Cn)(),e),st={class:"outterContainer"},lt={class:"innerContainer"},rt={type:"submit",class:"btn btn-success"},at=nt((()=>(0,n._)("br",null,null,-1))),dt=nt((()=>(0,n._)("button",{type:"submit",class:"btn btn-success"}," Confirm Studio Details ",-1))),ct={class:"input-group input-group-sm mb-3"},ut=["src"],pt={key:3},gt=nt((()=>(0,n._)("br",null,null,-1))),ht=nt((()=>(0,n._)("button",{type:"submit",class:"btn btn-light"},"Update",-1))),mt={key:4},wt=nt((()=>(0,n._)("br",null,null,-1)));function bt(e,t,o,s,l,r){const a=(0,n.up)("sideBar"),d=(0,n.up)("mainHeading");return(0,n.wg)(),(0,n.iD)("div",st,[(0,n._)("div",lt,[r.loggedIn?((0,n.wg)(),(0,n.j4)(a,{key:0})):(0,n.kq)("",!0),l.registeredStudio?((0,n.wg)(),(0,n.j4)(d,{key:1,title:l.currentUser.studio},null,8,["title"])):(0,n.kq)("",!0),l.registeredStudio&&!l.firstTimeStudio?((0,n.wg)(),(0,n.iD)("form",{key:2,onSubmit:t[1]||(t[1]=(0,i.iM)(((...e)=>r.confirmStudio&&r.confirmStudio(...e)),["prevent"]))},[(0,n.wy)((0,n._)("input",{type:"hidden","onUpdate:modelValue":t[0]||(t[0]=e=>l.registeredStudio=e)},null,512),[[i.nr,l.registeredStudio]]),(0,n._)("button",rt,[(0,n.Uk)(" Click here to confirm "),(0,n._)("b",null,(0,I.zw)(l.registeredStudio),1),(0,n.Uk)(" as your studio name ")])],32)):(0,n.kq)("",!0),at,l.registeredStudio&&!l.firstTimeStudio?((0,n.wg)(),(0,n.iD)("button",{key:3,onClick:t[2]||(t[2]=(...e)=>r.createStudioDetailsShow&&r.createStudioDetailsShow(...e)),class:"btn btn-light"}," Change Studio Name ")):(0,n.kq)("",!0),l.firstTimeStudio?((0,n.wg)(),(0,n.iD)("form",{key:4,onSubmit:t[4]||(t[4]=(0,i.iM)(((...e)=>r.createStudioDetails&&r.createStudioDetails(...e)),["prevent"]))},[(0,n.wy)((0,n._)("input",{class:"input-group mb-3",type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>l.registeredStudio=e)},null,512),[[i.nr,l.registeredStudio]]),dt],32)):(0,n.kq)("",!0),(0,n._)("form",{onSubmit:t[9]||(t[9]=(0,i.iM)(((...e)=>r.sendFile&&r.sendFile(...e)),["prevent"])),enctype:"multipart/form-data"},[l.editing?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,class:"input-group mb-3",type:"text","onUpdate:modelValue":t[5]||(t[5]=e=>l.studio.name=e)},null,512)),[[i.nr,l.studio.name]]):((0,n.wg)(),(0,n.j4)(d,{key:1,title:l.studio.name},null,8,["title"])),(0,n._)("div",ct,[l.editing?((0,n.wg)(),(0,n.iD)("input",{key:0,class:"form-control",type:"file",ref:"file",onChange:t[6]||(t[6]=(...e)=>r.selectFile&&r.selectFile(...e))},null,544)):(0,n.kq)("",!0)]),l.studio.logo?((0,n.wg)(),(0,n.iD)("img",{key:2,class:"image",src:l.studio.logo,alt:"image for studio"},null,8,ut)):(0,n.kq)("",!0),l.editing?((0,n.wg)(),(0,n.iD)("div",pt,[gt,ht,(0,n._)("button",{class:"btn btn-light",onClick:t[7]||(t[7]=e=>l.editing=!1)},"Cancel")])):((0,n.wg)(),(0,n.iD)("div",mt,[wt,l.registeredStudio?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",{key:0,class:"btn btn-light",onClick:t[8]||(t[8]=e=>r.editStudio())}," Update Logo "))]))],32)])])}var ft={components:{mainHeading:je,sideBar:Z},data(){return{studio:[],editing:!1,editingStudio:!1,registeredStudio:"",currentUser:{},firstTimeStudio:!1,file:[]}},created(){this.printList(),this.getCurrentUser()},methods:{editStudio(){this.editing=!0},printList(){this.secured.get("/studios").then((e=>{e.data[0]?(this.studio=e.data[0],console.log(e.data[0])):this.studio=[]})).catch((e=>console.log(e,"Cannot get studio")))},getCurrentUser(){this.plain.get("/current").then((e=>{this.currentUser=e.data,console.log(e.data),this.checkForStudio()})).catch((e=>console.log(e,"Cannot get user")))},checkForStudio(){this.registeredStudio=this.currentUser.studio},confirmStudio(){this.secured.post("/studios",{studio:{name:this.currentUser.studio}}).then((()=>{this.deleteStudioFromUser(),this.registeredStudio=null,this.printList()})).catch((e=>console.log(e,"Cannot update record")))},createStudioDetailsShow(){this.firstTimeStudio=!0},createStudioDetails(){this.secured.post("/studios",{studio:{name:this.registeredStudio}}).then((()=>{console.log("made studio"),this.deleteStudioFromUser(),this.registeredStudio=null,this.firstTimeStudio=!1,this.$router.reload()})).catch((e=>console.log(e,"Cannot update record")))},deleteStudioFromUser(){this.secured.patch(`/signinUser/${this.currentUser.id}`,{user:{studio:null}}).then((()=>{console.log("deleted studio"),this.printList()})).catch((e=>console.log(e,"Cannot update record")))},selectFile(){this.file=this.$refs.file.files[0]},sendFile(){let e=new FormData;e.append("image",this.file),this.secured.put(`/studios/${this.studio.id}`,e).then((()=>console.log(...e.entries()))).then((()=>{this.editing=!1,this.printList()})).catch((e=>console.log(e,"Cannot process studio update")))}},computed:{loggedIn(){return 1==localStorage.signedIn}}};const kt=(0,v.Z)(ft,[["render",bt],["__scopeId","data-v-46451070"]]);var yt=kt;const _t={key:0},St=(0,n._)("div",{class:"mb-3"},null,-1),vt={class:"mb-3"},Ct=(0,n._)("label",{for:"name",class:"form-label"},"Name",-1),Dt={class:"mb-3"},Ut=(0,n._)("label",{for:"producer",class:"form-label"},"Producer",-1),It={class:"mb-3"},Vt=(0,n._)("label",{for:"studio",class:"form-label"},"Studio",-1),xt=(0,n._)("button",{type:"submit",class:"btn btn-secondary"},"Create",-1);function Mt(e,t,o,s,l,r){const a=(0,n.up)("sideBar"),d=(0,n.up)("mainHeading");return(0,n.wg)(),(0,n.iD)("div",null,[r.loggedIn?((0,n.wg)(),(0,n.j4)(a,{key:0})):(0,n.kq)("",!0),(0,n.Wm)(d,{title:"New Client"}),(0,n._)("form",{onSubmit:t[3]||(t[3]=(0,i.iM)(((...e)=>r.addNewClient&&r.addNewClient(...e)),["prevent"]))},[e.error?((0,n.wg)(),(0,n.iD)("div",_t,(0,I.zw)(e.error),1)):(0,n.kq)("",!0),St,(0,n._)("div",vt,[Ct,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>l.name=e),id:"name",placeholder:"Some Client"},null,512),[[i.nr,l.name]])]),(0,n._)("div",Dt,[Ut,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>l.producer=e),id:"producer"},null,512),[[i.nr,l.producer]])]),(0,n._)("div",It,[Vt,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>l.studio=e),id:"studio"},null,512),[[i.nr,l.studio]])]),xt],32)])}var Bt={components:{mainHeading:je,sideBar:Z},data(){return{name:"",producer:"",studio:""}},created(){},methods:{addNewClient(){this.secured.post("/clients",{client:{name:this.name,studio:this.studio,producer:this.producer}}).then((e=>{console.log(e.data),this.$router.replace("/clientsView")})).catch((e=>console.log(e,"Cannot create client")))}},computed:{loggedIn(){return 1==localStorage.signedIn}}};const Nt=(0,v.Z)(Bt,[["render",Mt]]);var jt=Nt;const Ft={class:"outterContainer"},Lt={key:1,class:"innerContainer"},zt={key:0},Ot={class:"mb-3"},Tt=(0,n._)("label",{for:"project",class:"form-label"},"Project name",-1),Pt={class:"mb-3 row"},qt={class:"col"},$t=(0,n._)("label",{for:"fps",class:"form-label"},"FPS",-1),Zt={class:"col"},Ht=(0,n._)("label",{for:"resolution",class:"form-label"},"Resolution",-1),Et={class:"col"},Rt=(0,n._)("label",{for:"cost",class:"form-label"},"Day rate",-1),Wt={key:1},Yt=(0,n._)("label",{for:"clientId",class:"form-label"},"Clients",-1),Kt=["value"],At=(0,n._)("button",{type:"submit",class:"btn btn-secondary"},"Create",-1),Xt={key:2};function Gt(e,t,o,s,l,r){const a=(0,n.up)("sideBar"),d=(0,n.up)("mainHeading"),c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",Ft,[r.loggedIn?((0,n.wg)(),(0,n.j4)(a,{key:0})):(0,n.kq)("",!0),l.bidId?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",Lt,[(0,n.Wm)(d,{title:"New Bid"}),(0,n._)("form",{onSubmit:t[5]||(t[5]=(0,i.iM)(((...e)=>r.addNewBid&&r.addNewBid(...e)),["prevent"]))},[e.error?((0,n.wg)(),(0,n.iD)("div",zt,(0,I.zw)(e.error),1)):(0,n.kq)("",!0),(0,n._)("div",Ot,[Tt,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>l.project=e),id:"name"},null,512),[[i.nr,l.project]])]),(0,n._)("div",Pt,[(0,n._)("div",qt,[$t,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control","onUpdate:modelValue":t[1]||(t[1]=e=>l.fps=e),id:"fps"},null,512),[[i.nr,l.fps]])]),(0,n._)("div",Zt,[Ht,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>l.resolution=e),id:"resolution"},null,512),[[i.nr,l.resolution]])]),(0,n._)("div",Et,[Rt,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control","onUpdate:modelValue":t[3]||(t[3]=t=>e.cost=t),id:"cost"},null,512),[[i.nr,e.cost]])])]),l.clients.length?((0,n.wg)(),(0,n.iD)("div",Wt,[Yt,(0,n.wy)((0,n._)("select",{class:"form-select mb-3","aria-label":"Default select example","onUpdate:modelValue":t[4]||(t[4]=e=>l.clientId=e)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.clients,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.name,value:e.id},(0,I.zw)(e.name)+" : "+(0,I.zw)(e.studio),9,Kt)))),128))],512),[[i.bM,l.clientId]]),At])):((0,n.wg)(),(0,n.iD)("div",Xt,[(0,n.Wm)(c,{to:"/newClient"},{default:(0,n.w5)((()=>[(0,n.Uk)("You have no clients - click here to add one")])),_:1})]))],32)]))])}var Jt={components:{mainHeading:je,sideBar:Z},data(){return{project:"",fps:"",resolution:"",clientId:"",bidId:"",user:{},clients:{}}},created(){this.getClientList()},methods:{addNewBid(){this.secured.post("/bids",{bid:{project:this.project,fps:this.fps,resolution:this.resolution,cost:this.cost,client_id:this.clientId}}).then((e=>{this.bidId=e.data.id,localStorage.currentBid=this.bidId,this.$router.replace("/buildBid")})).catch((e=>console.log(e,"Cannot create bid")))},getClientList(){this.secured.get("/clients").then((e=>{this.clients=e.data,console.log(this.clients)}))}},computed:{loggedIn(){return 1==localStorage.signedIn}}};const Qt=(0,v.Z)(Jt,[["render",Gt]]);var eo=Qt;const to=e=>((0,n.dD)("data-v-7c0d5bf8"),e=e(),(0,n.Cn)(),e),oo={class:"sheet padding-10mm"},io={class:"form-group"},no=to((()=>(0,n._)("label",{for:"newName"},"Enter Shot Name",-1))),so=to((()=>(0,n._)("button",{type:"submit",class:"btn btn-success"},"Create Shot",-1))),lo=to((()=>(0,n._)("th",{scope:"col"},"#",-1))),ro=to((()=>(0,n._)("th",{scope:"col"},"Thumbnail",-1))),ao=to((()=>(0,n._)("th",{scope:"col"},"Shot Name",-1))),co=to((()=>(0,n._)("th",{scope:"col"},"Scene",-1))),uo=to((()=>(0,n._)("th",{scope:"col"},"Description",-1))),po=to((()=>(0,n._)("th",{scope:"col"},"VFX Work",-1))),go=to((()=>(0,n._)("th",{scope:"col"},"Methodology",-1))),ho=to((()=>(0,n._)("th",{scope:"col"},"Notes",-1))),mo=to((()=>(0,n._)("th",{scope:"col"},"Days",-1))),wo=to((()=>(0,n._)("th",{scope:"col"},"Total",-1))),bo=to((()=>(0,n._)("th",{scope:"col"},null,-1))),fo={scope:"col"},ko={scope:"col"},yo={scope:"row"},_o={class:"shotCellSmall"},So=["src"],vo={class:"shotCellSmall"},Co=["onUpdate:modelValue"],Do=["title"],Uo={class:"shotCellSmall"},Io=["onUpdate:modelValue"],Vo=["title"],xo={class:"shotCellLarge"},Mo=["onUpdate:modelValue"],Bo=["title"],No={class:"shotCellLarge"},jo=["onUpdate:modelValue"],Fo=["title"],Lo={class:"shotCellLarge"},zo=["onUpdate:modelValue"],Oo=["title"],To={class:"shotCellLarge"},Po=["onUpdate:modelValue"],qo=["title"],$o={class:"shotCellSmall"},Zo=["onUpdate:modelValue"],Ho=["title"],Eo={class:"shotCellSmall"},Ro=["onUpdate:modelValue"],Wo=["title"],Yo=["onClick"],Ko=["onClick"],Ao=["onClick"],Xo={key:0},Go=["onSubmit"],Jo=to((()=>(0,n._)("button",{type:"submit",class:"btn btn-light"}," Confirm Image ",-1))),Qo={key:1},ei=["onClick"];function ti(e,t,o,s,l,r){const a=(0,n.up)("sideBar");return(0,n.wg)(),(0,n.iD)("div",oo,[r.loggedIn?((0,n.wg)(),(0,n.j4)(a,{key:0})):(0,n.kq)("",!0),l.showNewForm?((0,n.wg)(),(0,n.iD)("form",{key:1,onSubmit:t[1]||(t[1]=(0,i.iM)(((...e)=>r.addNewShot&&r.addNewShot(...e)),["prevent"]))},[(0,n._)("div",io,[no,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"newName","onUpdate:modelValue":t[0]||(t[0]=e=>l.newName=e)},null,512),[[i.nr,l.newName]])]),so],32)):(0,n.kq)("",!0),(0,n._)("table",{class:(0,I.C_)(["table table-hover table-striped",l.darkMode?"table-dark":"table-light"])},[(0,n._)("thead",null,[(0,n._)("tr",null,[lo,ro,ao,co,uo,po,go,ho,mo,wo,bo,(0,n._)("th",fo,[(0,n._)("button",{class:"btn btn-success",onClick:t[2]||(t[2]=(...e)=>r.showNewShot&&r.showNewShot(...e))}," Add New Shot ")]),(0,n._)("th",ko,[(0,n._)("button",{class:(0,I.C_)(["btn",l.darkMode?"btn-outline-light":"btn-outline-dark"]),onClick:t[3]||(t[3]=(...e)=>r.darkModeToggle&&r.darkModeToggle(...e))},(0,I.zw)(l.onOff),3)])])]),(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.shots,((e,o)=>((0,n.wg)(),(0,n.iD)("tr",{key:e},[(0,n._)("th",yo,(0,I.zw)(o+1),1),(0,n._)("td",_o,[(0,n._)("img",{class:"image",src:e.image,alt:"shot thumbnail"},null,8,So)]),(0,n._)("td",vo,[l.editing===o?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,type:"text","onUpdate:modelValue":e=>l.shots[o].name=e},null,8,Co)),[[i.nr,l.shots[o].name]]):((0,n.wg)(),(0,n.iD)("div",{key:1,title:e.name},(0,I.zw)(e.name),9,Do))]),(0,n._)("td",Uo,[l.editing===o?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,type:"text","onUpdate:modelValue":e=>l.shots[o].scene=e},null,8,Io)),[[i.nr,l.shots[o].scene]]):((0,n.wg)(),(0,n.iD)("div",{key:1,title:e.scene},(0,I.zw)(e.scene),9,Vo))]),(0,n._)("td",xo,[l.editing===o?(0,n.wy)(((0,n.wg)(),(0,n.iD)("textarea",{key:0,type:"text","onUpdate:modelValue":e=>l.shots[o].description=e},null,8,Mo)),[[i.nr,l.shots[o].description]]):((0,n.wg)(),(0,n.iD)("div",{key:1,title:e.description},(0,I.zw)(e.description),9,Bo))]),(0,n._)("td",No,[l.editing===o?(0,n.wy)(((0,n.wg)(),(0,n.iD)("textarea",{key:0,type:"text","onUpdate:modelValue":e=>l.shots[o].vfx_work=e},null,8,jo)),[[i.nr,l.shots[o].vfx_work]]):((0,n.wg)(),(0,n.iD)("div",{key:1,title:e.vfx_work},(0,I.zw)(e.vfx_work),9,Fo))]),(0,n._)("td",Lo,[l.editing===o?(0,n.wy)(((0,n.wg)(),(0,n.iD)("textarea",{key:0,type:"text","onUpdate:modelValue":e=>l.shots[o].methodology=e},null,8,zo)),[[i.nr,l.shots[o].methodology]]):((0,n.wg)(),(0,n.iD)("div",{key:1,title:e.methodology},(0,I.zw)(e.methodology),9,Oo))]),(0,n._)("td",To,[l.editing===o?(0,n.wy)(((0,n.wg)(),(0,n.iD)("textarea",{key:0,type:"text","onUpdate:modelValue":e=>l.shots[o].notes=e},null,8,Po)),[[i.nr,l.shots[o].notes]]):((0,n.wg)(),(0,n.iD)("div",{key:1,title:e.notes},(0,I.zw)(e.notes),9,qo))]),(0,n._)("td",$o,[l.editing===o?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,type:"number","onUpdate:modelValue":e=>l.shots[o].days=e},null,8,Zo)),[[i.nr,l.shots[o].days]]):((0,n.wg)(),(0,n.iD)("div",{key:1,title:e.days},(0,I.zw)(e.days),9,Ho))]),(0,n._)("td",Eo,[l.editing===o?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,type:"text","onUpdate:modelValue":e=>l.shots[o].total=e},null,8,Ro)),[[i.nr,l.shots[o].total]]):((0,n.wg)(),(0,n.iD)("div",{key:1,title:e.total},(0,I.zw)(e.total),9,Wo))]),(0,n._)("td",null,[(0,n._)("button",{class:(0,I.C_)(["btn",l.darkMode?"btn-light":"btn-dark"]),onClick:t=>r.deleteShot(e.id)}," Delete ",10,Yo)]),(0,n._)("td",null,[l.editing===o?((0,n.wg)(),(0,n.iD)("button",{key:0,class:(0,I.C_)(["btn",l.darkMode?"btn-light":"btn-dark"]),onClick:t=>r.updateShot(e.id,o)}," Update ",10,Ko)):((0,n.wg)(),(0,n.iD)("button",{key:1,class:(0,I.C_)(["btn",l.darkMode?"btn-light":"btn-dark"]),onClick:e=>r.editShot(o)}," Edit ",10,Ao))]),(0,n._)("td",null,[l.showImageInput===o?((0,n.wg)(),(0,n.iD)("div",Xo,[(0,n._)("form",{enctype:"multipart/form-data",onSubmit:(0,i.iM)((t=>r.sendImage(e.id)),["prevent"])},[(0,n._)("input",{class:"form-control",type:"file",ref_for:!0,ref:"file",onChange:t[4]||(t[4]=(...e)=>r.selectFile&&r.selectFile(...e))},null,544),Jo],40,Go)])):((0,n.wg)(),(0,n.iD)("div",Qo,[(0,n._)("button",{class:(0,I.C_)(["btn",l.darkMode?"btn-light":"btn-dark"]),onClick:e=>r.showImageForm(o)}," Upload Image ",10,ei)]))])])))),128))])],2)])}var oi={components:{sideBar:Z},data(){return{shots:[],darkMode:!1,onOff:"Dark Mode",editing:!1,newName:"",showNewForm:!1,showImageInput:!1,file:""}},created(){this.printList()},methods:{showNewShot(){this.showNewForm=!this.showNewForm},addNewShot(){this.secured.post("/shots",{shot:{name:this.newName,bid_id:localStorage.currentBid}}).then((()=>{this.printList(),this.newName="",this.showNewForm=!1})).catch((e=>console.log(e,"Cannot create client")))},deleteShot(e){this.secured.delete(`/shots/${e}`).then((()=>{this.printList()})).catch((e=>console.log(e,"Cannot delete record")))},editShot(e){this.editing=e},showImageForm(e){this.showImageInput=e},updateShot(e,t){this.secured.patch(`shots/${e}`,{shot:{name:this.shots[t].name,description:this.shots[t].description,methodology:this.shots[t].methodology,scene:this.shots[t].scene,vfx_work:this.shots[t].vfx_work,notes:this.shots[t].notes,days:this.shots[t].days,total:this.shots[t].total}}).then((()=>{this.editing=!1,this.printList()})).catch((e=>console.log(e,"Cannot update record")))},printList(){this.plain.get("/shots",{params:{bid_id:localStorage.currentBid}}).then((e=>{this.shots=e.data}))},darkModeToggle(){this.darkMode=!this.darkMode,this.onOff=this.darkMode?"Light Mode":"Dark Mode"},selectFile(){this.file=this.$refs.file[0].files[0]},sendImage(e){let t=new FormData;t.append("file",this.file),this.secured.patch(`/shotsImage/${e}`,t).then((e=>console.log(e.data))).then((()=>{this.editing=!1,this.printList(),this.showImageInput=!1})).catch((e=>console.log(e,"Cannot process studio update")))}},computed:{loggedIn(){return 1==localStorage.signedIn}}};const ii=(0,v.Z)(oi,[["render",ti],["__scopeId","data-v-7c0d5bf8"]]);var ni=ii;const si=[{path:"/",name:"signIn",component:R},{path:"/register",name:"registerUser",component:re},{path:"/bidsView",name:"bidView",component:ze},{path:"/clientsView",name:"clientView",component:it},{path:"/usersView",name:"userView",component:qe},{path:"/studioView",name:"studioView",component:yt},{path:"/newClient",name:"newClient",component:jt},{path:"/newBid",name:"newBid",component:eo},{path:"/buildBid",name:"buildBid",component:ni}],li=(0,U.p7)({history:(0,U.PO)(),routes:si});var ri=li,ai=o(346),di=o(594);const ci="http://localhost:3000",ui=di.Z.create({baseURL:ci,withCredentials:!0,headers:{"Content-Type":"application/json"}}),pi=di.Z.create({baseURL:ci,withCredentials:!0,headers:{"Content-Type":"application/json"}});ui.interceptors.request.use((e=>{const t=e.method.toUpperCase();return"OPTIONS"!==t&&"GET"!==t&&(e.headers={...e.headers,"X-CSRF-TOKEN":localStorage.csrf}),e})),ui.interceptors.response.use(null,(e=>e.response&&e.response.config&&401===e.response.status?pi.post("/refresh",{},{headers:{"X-CSRF-TOKEN":localStorage.csrf}}).then((t=>{localStorage.csrf=t.data.csrf,localStorage.signedIn=!0;let o=e.response.config;return o.headers["X-CSRF-TOKEN"]=localStorage.csrf,pi.request(o)})).catch((e=>(delete localStorage.csrf,delete localStorage.signedIn,location.replace("/"),Promise.reject(e)))):Promise.reject(e)));o(666);(0,i.ri)(D).use(ri).use(ai.Z,{secured:ui,plain:pi}).component("vue-sidebar-menu-akahon",P.Z).component("svg-icon",a.Z).mount("#app")}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(s.exports,s,s.exports,o),s.loaded=!0,s.exports}o.m=e,function(){o.amdO={}}(),function(){var e=[];o.O=function(t,i,n,s){if(!i){var l=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],s=e[c][2];for(var r=!0,a=0;a<i.length;a++)(!1&s||l>=s)&&Object.keys(o.O).every((function(e){return o.O[e](i[a])}))?i.splice(a--,1):(r=!1,s<l&&(l=s));if(r){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[i,n,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,l=i[0],r=i[1],a=i[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(a)var c=a(o)}for(t&&t(i);d<l.length;d++)s=l[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},i=self["webpackChunkfront"]=self["webpackChunkfront"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(535)}));i=o.O(i)})();
//# sourceMappingURL=app.7260b7f7.js.map