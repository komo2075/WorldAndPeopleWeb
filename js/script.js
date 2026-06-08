function addClickMessage(selector, message) {
  const element = document.querySelector(selector);
  const output = document.querySelector("#message");
  if (!element || !output) return;

  element.addEventListener("click", function () {
    output.textContent = message;
    output.classList.add("active");
  });
}

addClickMessage(".flower-button", "The flower opens a path.");
addClickMessage(".eye-button", "The eye closes. The website becomes darker.");
addClickMessage(".person", "The little person walks into the blue flowers.");
addClickMessage(".mouth", "The mouth eats part of the blue.");
addClickMessage(".hand", "The hand spreads more blue.");


