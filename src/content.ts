export {}

window.addEventListener("load", () => {
  const messageContainer = createMessageContainer()
  document.body.appendChild(messageContainer)
})

function createMessageContainer(): HTMLDivElement {
  const container = document.createElement("div")
  container.textContent =
    "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
  container.style.position = "fixed"
  container.style.bottom = "10px"
  container.style.left = "10px"
  container.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
  container.style.color = "white"
  container.style.padding = "10px"
  container.style.borderRadius = "5px"
  container.style.zIndex = "10000"

  return container
}