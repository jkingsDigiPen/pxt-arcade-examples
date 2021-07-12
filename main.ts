function create_music () {
    melody1 = "A A E G A A E G "
    melody2 = "A E C5 E B E G E "
    melody3 = "C5 - E - D - B - "
    music.setVolume(50)
}
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
let melody3 = ""
let melody2 = ""
let melody1 = ""
create_map()
create_player_cat()
create_music()
forever(function () {
    music.playMelody(melody1, 90)
})
forever(function () {
    music.playMelody(melody3, 360)
})
forever(function () {
    music.playMelody(melody2, 360)
})
