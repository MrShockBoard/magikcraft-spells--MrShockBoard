const magik = magikcraft.io;
const { bar, color, style } = require('magikcraft-lore-ui-bar');
const setTimeout = magik.setTimeout;

const finalsize = 5;
const blocksPerSecond = 5;

function border(size = 200) {
    const world = magik.getSender().getWorld();
    const border = world.getWorldBorder();
    magik.dixit(border.getSize());

    const here = magik.hic();
    const zDelta = Math.random() * 100 - 50;
    const xDelta = Math.random() * 100 - 50;
    
    here.setZ(here.getZ() + zDelta);
    here.setX(here.getX() + xDelta);

    border.setCenter(here);
    border.setSize(size);
    magik.dixit(`Set border size to ${size}`);

    const b = bar()
        .text("RUN 4 YR LYFE!!!")
        .color(color.GREEN)
        .style(style.NOTCHED_20)
        .progress(100)
        .show();

    
    function shrink() {
        const newSize = border.getSize() - blocksPerSecond;
        if (newSize === finalsize) {
            magik.clearInterval(loop);
            magik.setTimeout(() => {
                border.setSize(600000);
                b.text("GAME OVER!!")
            }, 30000);
            return;
        }
        const barProgress = ((newSize - finalsize) / size) * 100;
        b.progress(barProgress);
        if (barProgress < 50) {
            b.color(color.YELLOW);
        }
        if (barProgress < 25) {
            b.color(color.RED);
        }
        border.setSize(newSize);
        return newSize;
    }
    const loop = magik.setInterval(() => shrink(), 500);
}