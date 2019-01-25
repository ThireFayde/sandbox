const app = new Vue({
    el: '#app',
    data: {
        windowWidth: Math.ceil(window.innerWidth),
        lineNumber: 0,
        colorObject:[
            "#db082d",
            "#ef7a03",
            "#f2eb1e",
            "#009c4e",
            "#4dc1f0",
            "#0365b2",
            "#633791"
        ]
    },
    created: function(){
        this.lineNumber = Math.ceil(this.windowWidth / 5);
        let wrapElement = document.getElementById('app');
        let targetElement = wrapElement.firstElementChild;
        for(i=this.lineNumber;i>=0;i--){
            let colorDice = Math.floor(Math.random() * 7);
            console.log(colorDice);
            let backColor = this.colorObject[colorDice];
            targetElement.innerHTML += '<li style="animation-delay:'+ (Math.floor(Math.random() * 20)) / 100 +'s;background:'+ backColor +'"></li>'
        }
        targetElement.insertAdjacentHTML('afterbegin','<div id="whiteLine"></div>');
        targetElement.insertAdjacentHTML('beforeend','<div></div>')
    },
    mounted: function(){
        const whiteLine = document.querySelector("#whiteLine");
        whiteLine.addEventListener("animationend",function(evt){
            console.log(evt);
            const animationBox = document.querySelector("#app");
            animationBox.style.display ="none";
        });
    }
})

// 上から下へ下ろして下がりきったらulのwitdhを小さくする、flexboxなのでセンターは変わらず左右が小さくなる