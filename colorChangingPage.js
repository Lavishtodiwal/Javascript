const randomColor = () => {
  const hex = "0123456789ABCDEF";
  const color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startChangingColor
document.querySelector("#start").addEventListener("click", (e) => {
  changeMe = setInterval(sayDate, 1000);
  console.log("started.....");
});

// document.querySelector("#stop").addEventListener("click", (e) => {
//   clearInterval(changeMe);
//   console.log("stopped!!");
// });
