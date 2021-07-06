// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "map_01":
            case "level1":return tiles.createTilemap(hex`100010000e0c0e0e0e0e0e0505050208050505050e0e0e0e0e0e0e0507050208060507050e0e0e050505050605050208050505050e0c0e050505050505070208050705050e0d0e050607050605050208050505060e0e0e060505050503040101040a05050e0e0e0607030404010101010101040405050506050201010101010101010909050603040401010101010909090b05050404010909090101090b05050505050509090b0505050208050506050506060505060505070502080506050705050505050505060505020805050605060507050e0e0e050507020805050705050505050d0d0d0d05050208050605050d0d0d0d0d0c0d0d05050208050505050d0d0c0d`, img`
. . . . . . 2 . . . . . . . . . 
. . 2 2 2 2 2 . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 . . . . . . . . . . . . . 
. . 2 2 . . . . . . . . 2 2 2 2 
. . . 2 . . . . . . . . 2 . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
