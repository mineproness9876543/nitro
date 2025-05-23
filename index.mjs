// import axois from 'axois'
import express from 'express'


const app = express()
function generateChar() {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
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
               } , 10000)
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
