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
