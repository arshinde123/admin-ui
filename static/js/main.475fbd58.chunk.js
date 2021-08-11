(this["webpackJsonpadmin-ui"]=this["webpackJsonpadmin-ui"]||[]).push([[0],{29:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(10),c=n.n(s),i=(n(27),n(28),n(29),n(2)),l=(n(30),n(13)),d=n.n(l),o=n(22),u=n(11),h=n(9),p=n(4),b=n(5),j=n(7),m=n(6),g=n(8),f=n.n(g);var O={log:function(e){console.error(e)}};f.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"/admin-ui",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).ADMIN_UI_API_URL||"https://geektrust.s3-ap-southeast-1.amazonaws.com",f.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(O.log(e),i.c.error("An unexpected error occurrred.")),Promise.reject(e)}));var x={get:f.a.get,post:f.a.post,put:f.a.put,delete:f.a.delete};function C(e,t,n){var a=(t-1)*n;return e.slice(a,a+n)}var v=n(0),k=function(e){var t=e.itemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChange,s=Math.ceil(t/n);if(1===s)return null;var c=function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=[],r=0;r<t;r++)0===r?a.push(e):a.push(a[a.length-1]+n);return a}(1,s);return Object(v.jsx)("div",{className:"float-end",children:Object(v.jsx)("nav",{"aria-label":"Page navigation",children:Object(v.jsxs)("ul",{className:"pagination",children:[Object(v.jsx)("li",{className:1===a?"page-item disabled":"page-item",children:Object(v.jsx)("a",{className:"page-link","aria-label":"first",onClick:function(){return r(1)},children:Object(v.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),Object(v.jsx)("li",{className:1===a?"page-item disabled":"page-item",children:Object(v.jsx)("a",{className:"page-link","aria-label":"Previous",onClick:function(){return r(a-1)},children:Object(v.jsx)("span",{"aria-hidden":"true",children:"<"})})}),c.map((function(e){return Object(v.jsx)("li",{className:e===a?"page-item active":"page-item",children:Object(v.jsx)("a",{onClick:function(){return r(e)},className:"page-link",children:e})},e)})),Object(v.jsx)("li",{className:a===c.length?"page-item disabled":"page-item",children:Object(v.jsx)("a",{className:"page-link","aria-label":"Next",onClick:function(){return r(a+1)},children:Object(v.jsx)("span",{"aria-hidden":"true",children:">"})})}),Object(v.jsx)("li",{className:a===c.length?"page-item disabled":"page-item",children:Object(v.jsx)("a",{className:"page-link","aria-label":"last",onClick:function(){return r(c.length)},children:Object(v.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})})},U=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(v.jsx)("thead",{children:Object(v.jsx)("tr",{children:this.props.columns.map((function(t){return Object(v.jsx)("th",{className:"clickable",children:t.label instanceof Function?t.label(e.props.columnProps):t.label},t.path||t.key)}))})})}}]),n}(a.Component),N=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t,n,a){return t.content?t.content(e,n,e.id===a.id):e[t.path]},e.renderEditCell=function(t,n,a,r,s,c){return"inputText"===r?Object(v.jsx)("div",{className:"input-group",children:Object(v.jsx)("input",{type:"text",className:"form-control",value:c[n.path],onChange:function(e){a.handleItemUpdateData(e,n.path,t)}})}):"inputSelect"===r?Object(v.jsx)("select",{id:e.createKey(t,n),className:"form-select",name:n.path||n.key,value:c[n.path],onChange:function(e){return a.handleItemUpdateData(e,n.path,t)},children:s.map((function(e){return Object(v.jsx)("option",{value:e.toLowerCase(),children:e},t.id+e)}))}):void 0},e.createKey=function(e,t){return e.id+(t.path||t.key)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.columns,r=t.rowProps,s=t.columnProps,c=t.editItem;return Object(v.jsx)("tbody",{children:n.map((function(t){return Object(v.jsx)("tr",{className:t.checked?r.rowCheckedClass:"",children:a.map((function(n){return Object(v.jsx)("td",{children:!0===n.editable&&t.id===c.id?e.renderEditCell(t,n,s,n.editType,n.editData,c):e.renderCell(t,n,s,c)},e.createKey(t,n))}))},t.id)}))})}}]),n}(a.Component),P=function(e){var t=e.columns,n=e.data,a=e.rowProps,r=e.columnProps,s=e.editItem;return Object(v.jsxs)("table",{className:"table table-hover",style:{overflow:"scroll"},children:[Object(v.jsx)(U,{columns:t,columnProps:r,rowProps:a}),Object(v.jsx)(N,{data:n,columns:t,columnProps:r,editItem:s,rowProps:a})]})},y=(n(51),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).columns=[{path:"check",label:function(t){return e.getCheckAllContent(t)},key:"check",content:function(t,n){return e.getCheckContent(t,n)},editable:!1},{path:"name",label:"Name",editable:!0,editType:"inputText",editData:""},{path:"email",label:"Email",editable:!0,editType:"inputText",editData:""},{path:"role",label:"Role",editable:!0,editType:"inputSelect",editData:["Admin","Member"]},{path:"actions",label:"Actions",key:"actions",content:function(t,n,a){return e.getActionsContent(t,n,a)},editable:!1}],e.getCheckAllContent=function(e){return Object(v.jsx)("input",{className:"form-check-input",type:"checkbox",checked:e.usersCount===e.checkedUsersCount,id:"checkAllUsers",onChange:function(t){return e.handleAllCheck(t.target.checked)}})},e.getCheckContent=function(e,t){return Object(v.jsx)("div",{className:"form-check",children:Object(v.jsx)("input",{className:"form-check-input",type:"checkbox",checked:e.checked,id:e.id,onChange:function(n){return t.handleCheck(n.target.checked,e)}})})},e.getActionsContent=function(e,t,n){return n?Object(v.jsxs)("div",{className:"mt-2",children:[Object(v.jsx)("i",{className:"bi bi-check-lg text-primary",onClick:function(){return t.handleEditCompleted()}}),Object(v.jsx)("i",{className:"bi bi-x-lg text-danger mx-2",onClick:function(){return t.handleEditCancel()}})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("i",{className:"bi bi-pencil-square text-primary",onClick:function(){return t.handleEditUser(e)}}),Object(v.jsx)("i",{className:"bi bi-trash text-danger mx-2",onClick:function(){return t.handleDeleteUser(e)}})]})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.users,n=e.editUser,a=e.usersCount,r=e.checkedUsersCount,s=e.handleCheck,c=e.handleAllCheck,i=e.handleDeleteUser,l=e.handleEditUser,d=e.handleEditCompleted,o=e.handleEditCancel,u=e.handleUpdateUser,h={checkedUsersCount:r,usersCount:a,handleCheck:s,handleAllCheck:c,handleDeleteUser:i,handleEditUser:l,handleEditCompleted:d,handleEditCancel:o,handleUpdateUser:u,handleItemUpdateData:u};return Object(v.jsx)(P,{columns:this.columns,data:t,rowProps:{rowCheckedClass:"th-background"},columnProps:h,editItem:n})}}]),n}(a.Component)),S=function(e){var t=e.value,n=e.onChange,a=e.onFocus,r=e.totalCount,s=e.placeholder;return Object(v.jsxs)("div",{className:"input-group mb-3",children:[Object(v.jsx)("input",{type:"text",value:t,className:"form-control",placeholder:s,onChange:function(e){return n(e.currentTarget.value)},onFocus:function(e){return a(e)}}),Object(v.jsxs)("span",{className:"input-group-text",children:["Total users \xa0\xa0",Object(v.jsx)("span",{className:"badge bg-primary",children:r})]})]})},w=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],pageSize:10,currentPage:1,searchQuery:"",isLoading:!1,checkedUsers:[],editUser:{}},e.handleSearch=function(t){e.state.editUser.id||(e.handleResetAllCheckedUsers(),e.setState({searchQuery:t,currentPage:1}))},e.handleSearchFocus=function(){if(e.state.editUser.id)return i.c.error("Please update or discard existing user changes")},e.handlePageChange=function(t){if(e.state.editUser.id)return i.c.error("Please update or discard existing user changes");e.handleResetAllCheckedUsers(),e.setState({currentPage:t})},e.handleCheck=function(t,n){if(t){var a=[].concat(Object(h.a)(e.state.checkedUsers),[n.id]);e.setState({checkedUsers:a})}else{var r=Object(h.a)(e.state.checkedUsers);r=r.filter((function(e){return e!==n.id})),e.setState({checkedUsers:r})}},e.handleAllCheck=function(t){var n=e.getPagedData().data,a=[];n&&n.length&&t&&(a=n.map((function(e){return e.id}))),e.setState({checkedUsers:a})},e.handleResetAllCheckedUsers=function(){e.setState({checkedUsers:[]})},e.handleEditUser=function(t){if(e.state.editUser.id)return i.c.error("Please update or discard existing user changes");e.setState({editUser:t})},e.handleUpdateUser=function(t,n){var a=Object(u.a)({},e.state.editUser);a[n]=t.target.value,e.setState({editUser:a})},e.handleEditCompleted=function(){var t=Object(h.a)(e.state.users),n=Object(u.a)({},e.state.editUser);t=t.map((function(e){return e.id===n.id&&(e=n),e})),e.setState({users:t,editUser:{}}),i.c.success("User details updated")},e.handleEditCancel=function(){e.setState({editUser:{}}),i.c.info("User details discarded")},e.handleDeleteUser=function(t){var n=t.id;if(e.state.editUser.id)return i.c.error("Please update or discard existing user changes");var a=Object(h.a)(e.state.users);a=a.filter((function(e){return e.id!==n})),e.setState({users:a}),i.c.info("User deleted",{position:i.c.POSITION.TOP_RIGHT})},e.handleDeleteCheckedUsers=function(){if(e.state.editUser.id)return i.c.error("Please update or discard existing user changes");var t=Object(h.a)(e.state.checkedUsers),n=Object(u.a)({},e.state.users);t.length?(n=n.filter((function(e){return!t.includes(e.id)})),i.c.info("".concat(t.length," ").concat(t.length>1?"users":"user"," deleted"),{position:i.c.POSITION.TOP_RIGHT}),e.setState({users:n,checkedUsers:[]}),e.handleResetAllCheckedUsers()):i.c.error("Please select user(s) to delete",{transition:i.a})},e.getPagedData=function(){var t=e.state,n=t.pageSize,a=t.currentPage,r=t.users,s=t.searchQuery,c=t.checkedUsers,i=r||[];s&&(i=r.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())||e.email.toLowerCase().includes(s.toLowerCase())||e.role.toLowerCase().includes(s.toLowerCase())})));var l=C(i,a,n);return l=c.length?l.map((function(e){return e.checked=c.includes(e.id),e})):l.map((function(e){return e.checked=!1,e})),{totalCount:i.length,data:l}},e.renderLoader=function(){return Object(v.jsx)("div",{className:"spinner-grow text-primary position-absolute bottom-50 end-50",role:"status",children:Object(v.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},e.renderSearchBox=function(t){return Object(v.jsx)("div",{className:"row mt-5",children:Object(v.jsx)("div",{className:"row mt-5",children:Object(v.jsx)(S,{value:e.state.searchQuery,onChange:e.handleSearch,onFocus:e.handleSearchFocus,totalCount:t,placeholder:"Search by name, email, role"})})})},e.renderNoUserFound=function(){return Object(v.jsx)("span",{className:"badge bg-danger mb-5",children:"No user(s) found"})},e.renderUserTable=function(t){var n=e.state,a=n.checkedUsers,r=n.editUser;return Object(v.jsx)("div",{className:"row mx-1",style:{overflowX:"auto"},children:Object(v.jsx)(y,{users:t,checkedUsersCount:a.length,editUser:r,usersCount:t.length,onDelete:e.handleDelete,handleDeleteUser:e.handleDeleteUser,handleCheck:e.handleCheck,handleAllCheck:e.handleAllCheck,handleEditUser:e.handleEditUser,handleUpdateUser:e.handleUpdateUser,handleEditCompleted:e.handleEditCompleted,handleEditCancel:e.handleEditCancel})})},e.renderDeleteSelectedUser=function(){var t=e.state.checkedUsers;return Object(v.jsx)("div",{className:"col-md-3 col-xs-12 mb-2",children:Object(v.jsxs)("button",{type:"button",className:"btn btn-outline-danger",onClick:e.handleDeleteCheckedUsers,children:["Delete selected"," ",t.length>0&&Object(v.jsx)("span",{className:"badge bg-danger",children:t.length})]})})},e.renderPagination=function(t){var n=e.state,a=n.pageSize,r=n.currentPage;return Object(v.jsx)("div",{className:"col-md-9 col-xs-12",children:Object(v.jsx)(k,{itemsCount:t,pageSize:a,onPageChange:e.handlePageChange,currentPage:r})})},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(o.a)(d.a.mark((function e(){var t,n,a=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,e.next=4,x.get("/adminui-problem/members.json");case 4:t=e.sent,n=t.data,setTimeout((function(){return a.setState({users:n,isLoading:!1})}),2e3),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),i.c.error("Error while fetching users"),this.setState({isLoading:!1});case 14:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.getPagedData(),t=e.totalCount,n=e.data;return this.state.isLoading?this.renderLoader():(!n.length&&this.state.currentPage>1&&this.handlePageChange(this.state.currentPage-1),Object(v.jsxs)(r.a.Fragment,{children:[this.renderSearchBox(t),n.length?Object(v.jsxs)(r.a.Fragment,{children:[this.renderUserTable(n),Object(v.jsxs)("div",{className:"row",children:[this.renderDeleteSelectedUser(),this.renderPagination(t)]})]}):this.renderNoUserFound()]}))}}]),n}(a.Component);n(52);var D=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(i.b,{}),Object(v.jsx)("nav",{className:"navbar navbar-light bg-primary",children:Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsx)("a",{className:"navbar-brand text-light",children:"Admin-UI"})})}),Object(v.jsx)("div",{className:"mx-5",children:Object(v.jsx)(w,{})})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),E()}},[[53,1,2]]]);
//# sourceMappingURL=main.475fbd58.chunk.js.map