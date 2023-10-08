import React, { useEffect } from "react"
import "./matrix.css"

const MatrixPage = () => {
  useEffect(() => {
    // Matrix Digital Rain kodunu buraya ekleyin
    const canvas = document.getElementById("matrixCanvas")
    const context = canvas.getContext("2d")

    const canvasWidth = 1900
    const canvasHeight = 960
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const charactersArray = characters.split("")

    const fontSize = 16
    const columns = canvasWidth / fontSize

    const drops = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    function draw() {
      context.fillStyle = "rgba(0, 0, 0, 0.05)"
      context.fillRect(0, 0, canvas.width, canvas.height)

      context.fillStyle = "#0f0"
      context.font = fontSize + "px arial"

      for (let i = 0; i < drops.length; i++) {
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)]
        context.fillText(text, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    setInterval(draw, 33)

    return () => {
      clearInterval(draw)
    }
  }, [])

  return (
    <div className="matrix-container">
      <canvas id="matrixCanvas"></canvas>
    </div>
  )
}

export default MatrixPage
