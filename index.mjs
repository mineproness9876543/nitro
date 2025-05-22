// import axois from 'axois'
import express from 'express'


const app = express()
function generateChar() {
    const char = "a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 1 2 3 4 5 6 7 8 9 10".split(" ").join("")
    let res = "";
    for (let a = 0; a < 19; a++) {
        res += char.charAt(Math.floor(Math.random() * char.length))
    }
    return res
}

// console.log(generateChar())



async function get() {
        const ramdom = generateChar()
        const res = await fetch(`https://discordapp.com/api/v9/entitlements/gift-codes/${ramdom}?with_application=false&with_subscription_plan=true`)
        if (res.status == 404 || res.status == 429) {
            console.log("Fail.", res.status, res.statusText)
               setTimeout(()=>{
                            get()
               } , 7000)
        } else {
            console.log(`${ramdom}`, res.status, res.statusText)
        }
}


app.get("/" , (req,res)=>{
    res.send("Bot is Alive")
})

app.listen(8080 , function(){
    get()
})
