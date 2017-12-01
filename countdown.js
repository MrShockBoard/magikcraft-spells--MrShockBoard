const magik = magikcraft.io;

function countdown(time = 60) {
    const bars = magik.Bars.addBar(magik.getSender(), magik.TextComponent("Countdown!"), magik.Bars.Color.GREEN, magik.Bars.Style.NOTCHED_20, 0.99);
    let progress = 0.99;
    magik.setInterval(()=> { bars.setProgress(progress); progress -= 0.01 }, 1000);
}