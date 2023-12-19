const boton1 = document.querySelector("#btn-color");
const text1 = document.querySelector("#color");

let generatorHex = () => {
  let hexadecimal = "0123456789ABCDEF";
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    // console.log(indiceAleatorio);
    hash = hash + hexadecimal[indiceAleatorio];
  }
  return hash;
};


boton1.addEventListener("click", function () {
  let colorAleatorio = generatorHex();
  text1.textContent = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
});
