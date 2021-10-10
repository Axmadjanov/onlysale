const redmi = document.querySelector(".redmi");
const huawei = document.querySelector(".huawei");
const iphone = document.querySelector(".iphone");
const smasung = document.querySelector(".smasung");
const yuqoriga = document.querySelector(".yuqoriga");
const yuqori = document.querySelector(".yuqori");

yuqoriga.addEventListener("click", () => {
  yuqori.scrollIntoView({ block: "center", behaviour: "smooth" });
});

const glaxy = document.querySelector(".glaxy");
const pro = document.querySelector(".pro");
const mate = document.querySelector(".mate");
const mi = document.querySelector(".mi");

redmi.addEventListener("click", () => {
  mi.scrollIntoView({ block: "center", behaviour: "smooth" });
});
huawei.addEventListener("click", () => {
  mate.scrollIntoView({ block: "center", behaviour: "smooth" });
});
iphone.addEventListener("click", () => {
  pro.scrollIntoView({ block: "center", behaviour: "smooth" });
});
smasung.addEventListener("click", () => {
  glaxy.scrollIntoView({ block: "center", behaviour: "smooth" });
});
