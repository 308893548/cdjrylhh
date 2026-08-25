
document.querySelector(".toggle")?.addEventListener("click",()=>document.querySelector(".nav")?.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".nav")?.classList.remove("open")));
document.querySelector("form")?.addEventListener("submit",e=>{e.preventDefault();alert("已记录申请信息。正式上线时可接入邮件、表单后台或CRM系统。");});
