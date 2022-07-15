(()=>{"use strict";const e={myLibrary:JSON.parse(localStorage.getItem("myLibrary"))||[],addBook:(t,r,a,l,n)=>{let o=new class{constructor(e,t,r,a,l){this.bookID=e,this.title=t,this.author=r,this.pages=a,this.status=l}}(t,r,a,l,n);e.myLibrary.push(o),localStorage.setItem("myLibrary",JSON.stringify(e.myLibrary))},deleteBook:t=>{let r=e.myLibrary.find((({bookID:e})=>e===parseInt(t.id))),a=e.myLibrary.indexOf(r);-1!==a&&e.myLibrary.splice(a,1),localStorage.setItem("myLibrary",JSON.stringify(e.myLibrary))},changeStatus:t=>{let r=e.myLibrary[t];"Unread"===r.status?r.status="Read":r.status="Unread",localStorage.setItem("myLibrary",JSON.stringify(e.myLibrary))}},t=e,r={a:0,tbody:document.querySelector("tbody"),submitButton:document.querySelector("#submit"),title:document.querySelector("#title"),author:document.querySelector("#author"),pages:document.querySelector("#pages"),status:document.querySelector("#status"),create_tr:()=>document.createElement("tr"),create_td:()=>document.createElement("td"),create_deleteButton:()=>{let e=r.create_td(),t=document.createElement("button");return t.setAttribute("id",r.a),t.classList.add("deleteBtn"),t.innerText="Delete",e.appendChild(t),e},create_statusButton:e=>{let t=r.create_td(),a=document.createElement("button");return a.classList.add("statusBtn"),a.setAttribute("id",r.a),a.innerText=e,t.appendChild(a),t},renderBook:(e,t,a,l,n)=>{let o=[r.a,t,a,l,n],s=r.create_tr();s.setAttribute("id",r.a);for(let e=1;e<o.length;e++){let t=o[e];if(4===e){let e=r.create_statusButton(n);s.appendChild(e)}else{let e=r.create_td();e.innerText=t,s.appendChild(e)}}let d=r.create_deleteButton();s.appendChild(d),r.tbody.appendChild(s)}},a=r;a.title,a.author;const l=()=>{if(isNaN(parseInt(a.pages.value)))return!0};t.myLibrary.forEach((function(e){let r=Array.from(Object.keys(e)),l=a.create_tr();for(let n=1;n<r.length;n++){let o=e[r[n]];if(4===n){let e=a.create_statusButton(o);e.addEventListener("click",t.changeStatus),l.appendChild(e)}else{let e=a.create_td();e.innerText=o,l.appendChild(e)}}let n=a.create_deleteButton();n.addEventListener("click",t.deleteBook),l.setAttribute("id",e.bookID),l.appendChild(n),a.tbody.appendChild(l),a.a++})),document.querySelectorAll(".deleteBtn").forEach((e=>{e.addEventListener("click",t.deleteBook(e.id))})),a.submitButton.addEventListener("click",(()=>{!0===l?console.log("an error has occurred"):(a.renderBook(a.a,a.title.value,a.author.value,parseInt(a.pages.value),a.status.value),t.addBook(a.a,a.title.value,a.author.value,parseInt(a.pages.value),a.status.value))}))})();