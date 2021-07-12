function create_music () {
    // Slow melody, 50% width pulse wave
    melody1 = "~15 A2 A E G A2 A E G "
    // Fast melody, 10% width pulse wave
    melody2 = "~11 A E C5 E B E G E "
    // Medium melody, triangle wave
    melody3 = "~1 C5 - E - D - B - "
    music.setVolume(20)
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
    // This eventually gets out of sync with the other melodies. Have not tested to see if the others (at 360 bpm) also get out of sync with each other.
    music.playMelody(melody1, 90)
})
forever(function () {
    music.playMelody(melody3, 360)
})
forever(function () {
    music.playMelody(melody2, 360)
})
