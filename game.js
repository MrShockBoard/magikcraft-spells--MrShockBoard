function game(module, spell = '_default') {
    const _module = `magikcraft-minigame-${module}`;
    require(_module).spells[spell]();
}