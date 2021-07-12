function create_player_cat () {
    spriteCat = sprites.create(assets.image`cat_frame_0`, SpriteKind.Player)
    controller.moveSprite(spriteCat)
    scene.cameraFollowSprite(spriteCat)
}
function create_map () {
    scene.setBackgroundColor(9)
    tiles.setTilemap(tilemap`map_01`)
}
let spriteCat: Sprite = null
create_map()
create_player_cat()
music.setVolume(50)
forever(function () {
    music.playMelody("C5 - E - D - B - ", 360)
})
forever(function () {
    music.playMelody("A A A A E E G G ", 180)
})
forever(function () {
    music.playMelody("A E C5 E B E G E ", 360)
})
