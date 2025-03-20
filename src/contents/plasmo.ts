import type { PlasmoCSConfig } from "plasmo"
import React from "react"
import ReactDOM from "react-dom"
import SidePanelContent from "../components/SidePanelContent"

export const config: PlasmoCSConfig = {
  matches: ["https://*/*", "http://*/*"]
}

window.addEventListener("load", () => {
  try {
    console.log("Content script loaded successfully")

    const toggleButton = createToggleButton()
    const sidePanelContainer = createSidePanelContainer(toggleButton)

    document.body.appendChild(toggleButton)
    document.body.appendChild(sidePanelContainer)
  } catch (error) {
    console.error("Error in content script:", error)
  }
})

function createToggleButton(): HTMLButtonElement {
  const button = document.createElement("button")
  button.textContent = "Open Side Panel"
  button.className = "bg-blue-500 text-white px-4 py-2 rounded shadow cursor-pointer fixed"
  button.style.top = "50%"
  button.style.right = "10px"
  button.style.transform = "translateY(-50%)"
  button.style.zIndex = "10000"

  return button
}

function createSidePanelContainer(toggleButton: HTMLButtonElement): HTMLDivElement {
  const container = document.createElement("div")
  container.id = "plasmo-side-panel-container"
  container.style.position = "fixed"
  container.style.top = "20%"
  container.style.right = "10px"
  container.style.width = "300px"
  container.style.height = "60%"
  container.style.zIndex = "9999"

  const shadowRoot = container.attachShadow({ mode: "open" })
  const sidePanel = createSidePanel(toggleButton, container)
  shadowRoot.appendChild(sidePanel)
  addTailwindCSS(shadowRoot)

  makeDraggable(container) // Make the side panel draggable

  return container
}

function createSidePanel(toggleButton: HTMLButtonElement, container: HTMLDivElement): HTMLDivElement {
  const sidePanel = document.createElement("div")
  sidePanel.className = "bg-white shadow-lg rounded-lg overflow-hidden w-full h-full relative"

  const closeButton = createCloseButton(toggleButton, container)
  sidePanel.appendChild(closeButton)

  const reactRoot = document.createElement("div")
  sidePanel.appendChild(reactRoot)

  ReactDOM.render(React.createElement(SidePanelContent), reactRoot)

  toggleButton.addEventListener("click", () => toggleSidePanel(container, toggleButton))

  return sidePanel
}

function createCloseButton(toggleButton: HTMLButtonElement, container: HTMLDivElement): HTMLButtonElement {
  const button = document.createElement("button")
  button.textContent = "Close"
  button.className = "absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded shadow cursor-pointer"
  button.addEventListener("click", () => {
    container.style.display = "none"
    toggleButton.style.display = "block"
  })
  return button
}

function toggleSidePanel(container: HTMLDivElement, toggleButton: HTMLButtonElement): void {
  if (container.style.display === "none" || container.style.right === "-300px") {
    container.style.display = "block"
    toggleButton.style.display = "none"
  } else {
    container.style.display = "none"
    toggleButton.style.display = "block"
  }
}

function addTailwindCSS(shadowRoot: ShadowRoot): void {
  const tailwindStyle = document.createElement("link")
  tailwindStyle.rel = "stylesheet"
  tailwindStyle.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
  shadowRoot.appendChild(tailwindStyle)
}

function makeDraggable(element: HTMLElement): void {
  let isDragging = false
  let offsetX = 0
  let offsetY = 0

  element.addEventListener("mousedown", (e) => {
    isDragging = true
    offsetX = e.clientX - element.getBoundingClientRect().left
    offsetY = e.clientY - element.getBoundingClientRect().top
    document.body.style.userSelect = "none"
  })

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const elementWidth = element.offsetWidth
      const elementHeight = element.offsetHeight

      let newLeft = e.clientX - offsetX
      let newTop = e.clientY - offsetY

      // Constrain within the viewport
      newLeft = Math.max(0, Math.min(viewportWidth - elementWidth, newLeft))
      newTop = Math.max(0, Math.min(viewportHeight - elementHeight, newTop))

      element.style.left = `${newLeft}px`
      element.style.top = `${newTop}px`
      element.style.position = "fixed"
    }
  })

  document.addEventListener("mouseup", () => {
    isDragging = false
    document.body.style.userSelect = "auto"
  })
}
