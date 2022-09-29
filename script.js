window.onload = () => {

    const canvas = document.querySelector("canvas")
    const ctx = canvas.getContext("2d")

    //on dessine un rectangle plein
    ctx.fillStyle = "pink"
    ctx.fillRect(1, 1, 50, 50)
 
    //on dessine un rectangle vide
    ctx.strokeStyle = "red"
    ctx.strokeRect(350, 1, 50, 50)

    //On dessine un rectangle

    //On demmare un chemin
    ctx.beginPath()
    ctx.fillStyle = "red"
    //De ou part le crayon
    ctx.moveTo(200, 200)
    //Lignes
    ctx.lineTo(100, 200)
    ctx.lineTo(100, 300)
    //On remplire la forme
    ctx.fill()
    console.log(ctx);

    //On dessine un cercle
    ctx.strokeStyle = "blue"
    ctx.beginPath()
    //On utilise la méthode arc
    ctx.arc(300, 300, 50, 0, 90, false)
    //On injecte la bordure
    ctx.stroke()

    //On dessine un demi cercle
    ctx.fillStyle = "blue"
    ctx.beginPath()
    //On utilise la méthode arc avec Math.PI
    ctx.arc(300, 180, 50, 0, Math.PI , true)
    ctx.fill()
}