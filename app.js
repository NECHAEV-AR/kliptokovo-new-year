const stages = [
  {n:"01",icon:"✧",title:"Сбор амулетов",date:"02.12 — 06.12",desc:"Пять новогодних заданий помогут получить амулеты Дружбы, Любви, Света, Единства и Радости.",status:"ПЕРВЫЙ ЭТАП"},
  {n:"02",icon:"◈",title:"Охота за жетонами",date:"07.12 — 13.12",desc:"Ищите спрятанные задания. За каждое выполненное задание — монеты, ТокКоины и жетон Клиптоково.",status:"ВТОРОЙ ЭТАП"},
  {n:"03",icon:"♜",title:"Испытания замка",date:"14.12 — 20.12",desc:"Откройте пять комнат ледяного замка с помощью амулетов и пройдите испытания.",status:"ТРЕТИЙ ЭТАП"},
  {n:"04",icon:"❄",title:"Новогодний бал чудес",date:"21.12 — 25.12",desc:"Придумайте собственные задания, выберите лучшие идеи и станьте частью финального праздника.",status:"ЧЕТВЁРТЫЙ ЭТАП"}
];
const stageGrid = document.getElementById("stageGrid");
stageGrid.innerHTML = stages.map(s => `<article class="stage-card"><div class="stage-number">${s.n}</div><div class="stage-icon">${s.icon}</div><div class="stage-date">${s.date}</div><h3>${s.title}</h3><p>${s.desc}</p><div class="stage-status">${s.status}</div></article>`).join("");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
