!function(){class t{constructor(t,e,r,a,n){this.bookID=t,this.title=e,this.author=r,this.pages=a,this.status=n}}const e={myLibrary:JSON.parse(localStorage.getItem("myLibrary"))||[],addBook:(n,o,u,d,s)=>{let i=[n=r,o,u,d,s];tr=a.create_tr(),tr.setAttribute("id",r);for(let t=1;t<i.length;t++){let r=i[t];4===t?(statusButton=a.create_statusButton(s),statusButton.addEventListener("click",e.changeStatus),tr.appendChild(statusButton)):(td=a.create_td(),td.innerText=r,tr.appendChild(td))}deleteButton=a.create_deleteButton(),deleteButton.addEventListener("click",e.deleteBook),tr.appendChild(deleteButton),a.tbody.appendChild(tr);let l=new t(n,o,u,d,s);e.myLibrary.push(l),localStorage.setItem("myLibrary",JSON.stringify(e.myLibrary))},deleteBook:t=>{let r=t.target,a=e.myLibrary.find((({bookID:t})=>t===parseInt(r.id))),n=e.myLibrary.indexOf(a);-1!==n&&e.myLibrary.splice(n,1),r.parentNode.parentNode.remove(),localStorage.setItem("myLibrary",JSON.stringify(e.myLibrary))},changeStatus:t=>{let r=t.target,a=parseInt(r.id),n=e.myLibrary[a];"Unread"===n.status?(n.status="Read",r.innerText="Read"):(n.status="Unread",r.innerText="Unread"),localStorage.setItem("myLibrary",JSON.stringify(e.myLibrary))}};let r=0,a={tbody:document.querySelector("tbody"),submitButton:document.querySelector("#submit"),title:document.querySelector("#title"),author:document.querySelector("#author"),pages:document.querySelector("#pages"),status:document.querySelector("#status"),create_tr:()=>document.createElement("tr"),create_td:()=>document.createElement("td"),create_deleteButton:()=>{let t=a.create_td(),e=document.createElement("button");return e.setAttribute("id",r),e.innerText="Delete",t.appendChild(e),t},create_statusButton:t=>{let e=a.create_td();return statusButton=document.createElement("button"),statusButton.setAttribute("id",r),statusButton.innerText=t,e.appendChild(statusButton),e}};e.myLibrary.forEach((function(t){let n=Array.from(Object.keys(t));tr=a.create_tr();for(let r=1;r<n.length;r++){let o=t[n[r]];4===r?(statusButton=a.create_statusButton(o),statusButton.addEventListener("click",e.changeStatus),tr.appendChild(statusButton)):(td=a.create_td(),td.innerText=o,tr.appendChild(td))}deleteButton=a.create_deleteButton(),deleteButton.addEventListener("click",e.deleteBook),tr.setAttribute("id",t.bookID),tr.appendChild(deleteButton),a.tbody.appendChild(tr),r++})),a.submitButton.addEventListener("click",(function(){isNaN(a.pages.value)?console.log("uh-oh"):e.addBook(r,a.title.value,a.author.value,parseInt(a.pages.value),a.status.value)}))}();