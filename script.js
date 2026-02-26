document.getElementById("heads").classList.add(`active`);

function allAction() {
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const coinSide = getRandomNumber(0, 1);

  if (coinSide === 0) {
    document.getElementById("tails").classList.remove("active");
    document.getElementById("heads").classList.add("active");
    document.getElementById("sideName").textContent = "Heads";
  } else {
    document.getElementById("heads").classList.remove("active");
    document.getElementById("tails").classList.add("active");
    document.getElementById("sideName").textContent = "Tails";
  }
}