async function fetchItemsByUrl(url) {
  const response = await fetch(url);
  let data = null;
  if (response.ok) {
    data = await response.json();
  }
  return data;
}

function getElementByProps(prop) {
  return document.querySelector(prop);
}

function getElementsByProps(prop) {
  return document.querySelectorAll(prop);
}

function insertAdjacentElement(targetElement, position, contentToAdd) {
  return targetElement.insertAdjacentHTML(position, contentToAdd);
}

function createElementHelper (type, classList, innerText, innerHTML) {
  const customElement = document.createElement(type);
  if (classList) customElement.classList = classList;
  if (innerText) customElement.innerText = innerText;
  if (innerHTML) customElement.innerHTML = innerHTML;

  return customElement;
}

export {
  fetchItemsByUrl,
  getElementByProps,
  getElementsByProps,
  insertAdjacentElement,
  createElementHelper,
};
