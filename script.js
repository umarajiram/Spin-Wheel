function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[currentIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function spin() {
  wheel.play();
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";

  let AC = shuffle([1890, 2250, 2610]);
  let Camera = shuffle([1850, 2210, 2570]);
  let Zonk = shuffle([1770, 2130, 2490]);
  let PS = shuffle([1810, 2170, 2490]);
  let Headset = shuffle([1750, 2110, 2470]);
  let Drone = shuffle([1630, 1990, 2350]);
  let ROG = shuffle([1570, 1930, 2290]);

  let Results = shuffle([
    AC[0],
    Camera[0],
    Zonk[0],
    PS[0],
    Headset[0],
    Drone[0],
    ROG[0],
  ]);

  if (AC.includes(Results[0])) SelectedItem = "Air conditioner";
  if (Camera.includes(Results[0])) SelectedItem = "Camera sport action";
  if (Zonk.includes(Results[0])) SelectedItem = "play again";
  if (PS.includes(Results[0])) SelectedItem = "Plsystation 4 Slim";
  if (Headset.includes(Results[0])) SelectedItem = "Headset gaming ";
  if (Drone.includes(Results[0])) SelectedItem = "Drone mini";
  if (ROG.includes(Results[0])) SelectedItem = "Laptop Asus";

  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Results[0] + "deg)";
  element.classList.remove("animate");

  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  setTimeout(function () {
    applause.play();
    Swal.fire({
      title: "Great.....",
      html:
        "You won " +
        SelectedItem +
        "| " +
        '<a href="#" style="text-decoration:none;color:blue">Claim now</a>',
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }, 5500);

  setTimeout(function () {
    box.style.setProperty("transition", "rotate");
    box.style.transform = "rotate(90deg)";
  }, 6000);
}
