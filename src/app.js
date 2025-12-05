console.log('App lista');

export function suma(a, b) {
  return a + b;
}

export function agregarItem(texto) {
  const lista = document.getElementById('lista');
  const li = document.createElement('li');
  li.textContent = texto;
  lista.appendChild(li);
}
export function initUI() {
  if (typeof document === 'undefined') return;
  const btn = document.getElementById('btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    agregarItem('Nuevo ítem');
  });
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUI);
  } else {
    initUI();
  }
}

export default suma;
