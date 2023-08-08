export default function create(parent, className, text) {
  const el = document.createElement("div");
  parent.append(el);
  el.className = className;
  el.textContent = text;
  return el;
}
