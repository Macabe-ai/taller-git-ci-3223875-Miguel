console.log("App lista");

export function suma(a, b) {
  return a + b;
}

export function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

document.getElementById("btn").addEventListener("click", () => {
  agregarItem("Nuevo ítem");
});

export default suma;