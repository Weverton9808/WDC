function control(temp) {
  console.log(temp);
}

class Control {
  constructor(temp, color) {
    this.color = color;
    this.temp = temp;
    this.isOn = false;
  }

  power() {
    this.isOn = !this.isOn;

    const sound = new Audio("./assets/beep.mp3");
    sound.play();

    return "Plin!";
  }

  upper() {
    if (this.isOn) {
      const sound = new Audio("./assets/beep.mp3");
      sound.play();

      if (this.temp < 30) {
        this.temp++;
      }
      return this.temp;
    }
  }

  down() {
    if (this.isOn) {
      const sound = new Audio("./assets/beep.mp3");
      sound.play();

      if (this.temp > 16) {
        this.temp--;
      }
      return this.temp;
    }
  }
}

control(17);
const control1 = new Control(17, "Branco");
const control2 = new Control(20, "Preto");
console.log(control1.qualquer);
console.log(control1.color);
console.log(control2.color);
console.log(control1.isOn);
console.log(control1.power());
console.log(control1.isOn);
console.log(control1.power());
console.log(control1.isOn);
console.log(control1.upper());
console.log(control1.upper());

const powerButton = document.querySelector(".power");
const upButton = document.querySelector(".up");
const downButton = document.querySelector(".down");
const displayValue = document.querySelector(".display");

const airButton = new Control(17, "Cinza");

powerButton.addEventListener("click", () => {
  airButton.power();
  displayValue.innerHTML = airButton.isOn ? `${airButton.temp}°c` : "";

  if (airButton.isOn) {
    displayValue.style.boxShadow = "inset 0 0 16px 1px #91afe1";
  } else {
    displayValue.style.boxShadow = "none";
  }
});

upButton.addEventListener("click", () => {
  if (airButton.isOn) {
    displayValue.innerHTML = `${airButton.upper()}°c`;
  }
});

downButton.addEventListener("click", () => {
  if (airButton.isOn) {
    displayValue.innerHTML = `${airButton.down()}°c`;
  }
});
