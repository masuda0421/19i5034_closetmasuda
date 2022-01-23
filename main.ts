namespace SpriteKind {
    export const icon = SpriteKind.create()
    export const ugoku = SpriteKind.create()
    export const lightpi = SpriteKind.create()
}
/**
 * 「closet」
 * 
 * クローゼットの中から音がする。そんな異音に悩まされていた主人公がクローゼットを開けると、そこには別の世界が広がっていた！館を探索し、謎を解き明かそう！といったストーリーです。
 * 
 * 操作方法
 * 
 * ・十字キーで移動　Aボタンで調べる、ドアを開ける　圧力センサーで大きな物を押す、スイッチでボタンを押す
 * 
 * ※スイッチをP0 圧力センサーをP1に繋いでください
 * 
 * ・工夫点・
 * 
 * 　・名前入力で没入感を
 * 
 * 　・大体のタイルを手描き、館のタイルは色を統一し別世界感を演出、主人公が手を加えると色が宿る……みたいな。
 * 
 * 　・金庫にブレーカーのパスワードではない特定の言葉を入力すると見れる、隠し要素を入れた
 * 
 * 　・BGMをつけた
 * 
 * ・できなかったこと
 * 
 * 　・エンドロール（金庫に文字入力で流れる？クリアしたらとか）
 * 
 * 　・持ち物を確認できるメニューの表示
 * 
 * 　・ステージの増量
 * 
 * 　　↓
 * 
 * 　タイルを手描きしたせいか、それともコードの書き方か、Meowbitにメモリー不足を指すエラーコードが表示され実装を断念。pc用なら実装できました。今回はMeowbit用のデータです。
 * 
 * （コードに改善できる部分があれば教えてほしいです）
 */
// 食事場、花瓶に水
scene.onOverlapTile(SpriteKind.Player, assets.tile`mizu-kabinn`, function (sprite, location) {
    if (controller.A.isPressed() && 0 == water) {
        if (1 == flower) {
            game.showLongText("中に水が入っていた", DialogLayout.Bottom)
            game.showLongText("水を持っていた花瓶に入れ替えた！", DialogLayout.Bottom)
            game.showLongText("枯れていた花がよみがえった", DialogLayout.Bottom)
            water += 1
        } else {
            game.showLongText("中に水が入っている", DialogLayout.Bottom)
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        f f 4 d 4 d d d d f . . 
        . f f f 4 d d b b f . . 
        . 4 d d e 4 4 4 e f . . 
        . e d d e 1 1 1 1 f . . 
        . f e e f 6 6 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e e f . . 
        f f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f . 
        . f 4 d 4 d d d d f . . 
        . f f f e e d b b f . . 
        . . f 4 d d e 4 e f . . 
        . . f e d d e 1 1 f . . 
        . f f f e e f 6 6 f f . 
        . f f f f f f f f f f . 
        . . f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . 
        . . f f e e e e e f . . 
        . f f e e e e e e e f . 
        f f f f e e e e e e e f 
        f f f f f e e e 4 e e f 
        f f f f e e e 4 4 e e f 
        f f f f 4 4 4 4 4 e f f 
        f f 4 e 4 f f 4 4 e f f 
        . f 4 d 4 d d d d f f . 
        . f f f 4 d d b b f . . 
        . . f e e 4 4 4 e f . . 
        . . 4 d d e 1 1 1 f . . 
        . . e d d e 1 1 1 f . . 
        . . f e e f 6 6 6 f . . 
        . . . f f f f f f . . . 
        . . . . f f f . . . . . 
        `],
    100,
    true
    )
})
function YakataBGM1 () {
    if (ikikaeri == 2) {
        music.setTempo(40)
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(330, music.beat(BeatFraction.Eighth))
        music.playTone(311, music.beat(BeatFraction.Eighth))
        music.playTone(330, music.beat(BeatFraction.Eighth))
        music.playTone(494, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        if (ikikaeri == 2) {
            music.playTone(330, music.beat(BeatFraction.Eighth))
            music.playTone(311, music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Eighth))
            music.playTone(466, music.beat(BeatFraction.Eighth))
            music.rest(music.beat(BeatFraction.Eighth))
        }
        if (ikikaeri == 2) {
            music.playTone(494, music.beat(BeatFraction.Eighth))
            music.playTone(587, music.beat(BeatFraction.Eighth))
            music.playTone(523, music.beat(BeatFraction.Eighth))
            music.playTone(494, music.beat(BeatFraction.Eighth))
        }
        if (ikikaeri == 2) {
            music.playTone(466, music.beat(BeatFraction.Eighth))
            music.playTone(523, music.beat(BeatFraction.Sixteenth))
            music.playTone(494, music.beat(BeatFraction.Sixteenth))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(415, music.beat(BeatFraction.Eighth))
            music.rest(music.beat(BeatFraction.Eighth))
        }
        if (ikikaeri == 2) {
            music.playTone(440, music.beat(BeatFraction.Eighth))
            music.playTone(523, music.beat(BeatFraction.Eighth))
            music.playTone(466, music.beat(BeatFraction.Eighth))
            music.playTone(440, music.beat(BeatFraction.Eighth))
        }
        if (ikikaeri == 2) {
            music.playTone(415, music.beat(BeatFraction.Eighth))
            music.playTone(466, music.beat(BeatFraction.Sixteenth))
            music.playTone(440, music.beat(BeatFraction.Sixteenth))
            music.playTone(392, music.beat(BeatFraction.Half))
        }
        if (ikikaeri == 2) {
            music.playTone(370, music.beat(BeatFraction.Eighth))
            music.playTone(247, music.beat(BeatFraction.Eighth))
            music.playTone(311, music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Eighth))
        }
        if (ikikaeri == 2) {
            music.playTone(349, music.beat(BeatFraction.Eighth))
            music.playTone(494, music.beat(BeatFraction.Eighth))
            music.playTone(440, music.beat(BeatFraction.Quarter))
            music.playTone(415, music.beat(BeatFraction.Eighth))
        }
        if (ikikaeri == 2) {
            music.playTone(370, music.beat(BeatFraction.Eighth))
            music.playTone(392, music.beat(BeatFraction.Eighth))
            music.playTone(330, music.beat(BeatFraction.Eighth))
        }
    }
}
function TheLastRoom () {
    if (idou > 0) {
        if (tsukue == 1 && (light2 == 1 && fire == 1)) {
            game.showLongText("部屋の外からなにかが動く音がした", DialogLayout.Bottom)
            game.showLongText("確かめに行こう！", DialogLayout.Bottom)
        }
    } else {
        if (tsukue == 1 && (light2 == 1 && fire == 1)) {
            tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`dor`)
            tiles.setTileAt(tiles.getTileLocation(10, 1), assets.tile`dor0`)
            tiles.setTileAt(tiles.getTileLocation(10, 2), assets.tile`aruzi-ido`)
        }
    }
}
// 食事場、暖炉
scene.onOverlapTile(SpriteKind.Player, assets.tile`danromoyasu`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (machi == 0 && fire == 0) {
            game.showLongText("暖炉だ", DialogLayout.Bottom)
            game.showLongText("道具さえあれば火を起こせそうだ", DialogLayout.Bottom)
            pause(1000)
        } else if (machi == 1 && fire == 0) {
            game.showLongText("マッチで暖炉に火をつけた", DialogLayout.Bottom)
            tiles.setTileAt(tiles.getTileLocation(7, 4), assets.tile`danro-moeru`)
            fire += 1
            TheLastRoom()
        } else {
            game.showLongText("あたたかい", DialogLayout.Bottom)
            pause(1000)
        }
    }
})
// 主の部屋　嘘つきゲーム　はずれ
scene.onOverlapTile(SpriteKind.Player, assets.tile`hito1`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("メガネをかけた人の絵画が飾られている", DialogLayout.Bottom)
        game.showLongText("その下に「noah」と書かれている", DialogLayout.Bottom)
        pause(1000)
    }
    whoQuizMiss()
})
// 主の部屋　嘘つきゲーム　はずれ
scene.onOverlapTile(SpriteKind.Player, assets.tile`hito3`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("帽子をかぶった人の絵画が飾られている", DialogLayout.Bottom)
        game.showLongText("その下に「leonard」と書かれている", DialogLayout.Bottom)
        pause(1000)
    }
    whoQuizMiss()
})
function HomeBGM2 () {
    if (ikikaeri == 0) {
        music.rest(music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        for (let index = 0; index < 5; index++) {
            music.playTone(175, music.beat(BeatFraction.Quarter))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(196, music.beat(BeatFraction.Quarter))
            music.playTone(294, music.beat(BeatFraction.Half))
        }
    }
}
// 主の部屋　嘘つきゲーム　正解
scene.onOverlapTile(SpriteKind.Player, assets.tile`hito2`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("杖を持った人の絵画が飾られている", DialogLayout.Bottom)
        game.showLongText("その下に「jack」と書かれている", DialogLayout.Bottom)
        pause(1000)
    }
    if (lastKey == 0) {
        if (pins.P0.analogRead() > 100) {
            game.showLongText("ボタンを押した", DialogLayout.Bottom)
            game.showLongText("絵画の裏からカギが落ちてきた", DialogLayout.Bottom)
            game.showLongText("これで出られるかもしれない", DialogLayout.Bottom)
            lastKey += 1
        }
    } else {
        if (controller.A.isPressed()) {
            game.showLongText("もう反応しないようだ", DialogLayout.Bottom)
            pause(1000)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f f e e e e e e f f . 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d d e f . 
        . f f e 4 4 4 4 e f f . 
        e 4 f b 1 1 1 1 b f 4 e 
        4 d f 1 1 1 1 1 1 f d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        . f e d d b b d 4 e f e 
        f f f e 4 4 4 4 d d 4 e 
        e 4 f b 1 1 1 e d d e . 
        . . f 6 6 6 6 f e e . . 
        . . f f f f f f f . . . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . f f f e e e e f f f . 
        f f f e e e e e e f f f 
        f f f f 4 e e e f f f f 
        f f f 4 4 4 e e f f f f 
        f f f 4 4 4 4 e e f f f 
        f 4 e 4 4 4 4 4 4 e 4 f 
        f 4 4 f f 4 4 f f 4 4 f 
        f e 4 d d d d d d 4 e f 
        e f e 4 d b b d d e f . 
        e 4 d d 4 4 4 4 e f f f 
        . e d d e 1 1 1 b f 4 e 
        . . e e f 6 6 6 6 f . . 
        . . . f f f f f f f . . 
        . . . . . . . f f f . . 
        `],
    100,
    true
    )
})
function EndAnim () {
    story.startCutscene(function () {
        story.printCharacterText("わ！", name)
        mySprite.setImage(img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `)
        mySprite.setImage(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `)
        mySprite.setImage(img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 d d d d f f . 
            . f f f 4 d d b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d e 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `)
        mySprite.setImage(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `)
        story.printCharacterText("帰ってこれた……？", name)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f . 
            . . f b b d e e f f f . 
            . . f e 4 e d d 4 f . . 
            . . f 1 1 e d d e f . . 
            . f f 6 6 f e e f f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f f 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e d d 4 . 
            . . f 1 1 1 1 e d d e . 
            . f f 6 6 6 6 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 40, 50, 50)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f b b b b b b f 4 e 
            4 d f d d d d d d c d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f e e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f e e e e e e e f e f 
            f f f e e e e f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            . 4 f b b b b b f e 4 e 
            . 4 f d d d d d e d d 4 
            . e f f f f f f e e 4 . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f f e e e e e f e f 
            f f f f f e e e e f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 e f b b b b b f 4 . 
            4 d d e d d d d d f 4 . 
            . 4 e e f f f f f f e . 
            . . . . . . . f f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 40, 40, 50)
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        story.printCharacterText("どこにもつながってない……", name)
        story.printCharacterText("ご飯よ！おりてらっしゃい！", "ママ")
        story.printCharacterText("はーい！", name)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            f f 4 d 4 d d d d f . . 
            . f f f 4 d d b b f . . 
            . 4 d d e 4 4 4 e f . . 
            . e d d e 1 1 1 1 f . . 
            . f e e f 6 6 6 6 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e e f . . 
            f f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f . 
            . f 4 d 4 d d d d f . . 
            . f f f e e d b b f . . 
            . . f 4 d d e 4 e f . . 
            . . f e d d e 1 1 f . . 
            . f f f e e f 6 6 f f . 
            . f f f f f f f f f f . 
            . . f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . 
            . . f f e e e e e f . . 
            . f f e e e e e e e f . 
            f f f f e e e e e e e f 
            f f f f f e e e 4 e e f 
            f f f f e e e 4 4 e e f 
            f f f f 4 4 4 4 4 e f f 
            f f 4 e 4 f f 4 4 e f f 
            . f 4 d 4 d d d d f f . 
            . f f f 4 d d b b f . . 
            . . f e e 4 4 4 e f . . 
            . . 4 d d e 1 1 1 f . . 
            . . e d d e 1 1 1 f . . 
            . . f e e f 6 6 6 f . . 
            . . . f f f f f f . . . 
            . . . . f f f . . . . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 50, 40, 50)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d 4 e f e 
            f f f e 4 4 4 4 d d 4 e 
            e 4 f b 1 1 1 e d d e . 
            . . f 6 6 6 6 f e e . . 
            . . f f f f f f f . . . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            e f e 4 d b b d d e f . 
            e 4 d d 4 4 4 4 e f f f 
            . e d d e 1 1 1 b f 4 e 
            . . e e f 6 6 6 6 f . . 
            . . . f f f f f f f . . 
            . . . . . . . f f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 50, 100, 50)
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        story.printCharacterText("……夢だったのかなあ", name)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d 4 e f e 
            f f f e 4 4 4 4 d d 4 e 
            e 4 f b 1 1 1 e d d e . 
            . . f 6 6 6 6 f e e . . 
            . . f f f f f f f . . . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . f f f e e e e f f f . 
            f f f e e e e e e f f f 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            e f e 4 d b b d d e f . 
            e 4 d d 4 4 4 4 e f f f 
            . e d d e 1 1 1 b f 4 e 
            . . e e f 6 6 6 6 f . . 
            . . . f f f f f f f . . 
            . . . . . . . f f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 50, 140, 50)
        game.over(true, effects.confetti)
    })
}
function start1 () {
    mySprite = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.Player)
    mySprite.setPosition(105, 55)
    story.startCutscene(function () {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f . 
            . . f b b d e e f f f . 
            . . f e 4 e d d 4 f . . 
            . . f 1 1 e d d e f . . 
            . f f 6 6 f e e f f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f f 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e d d 4 . 
            . . f 1 1 1 1 e d d e . 
            . f f 6 6 6 6 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 80, 55, 50)
        mySprite.setImage(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `)
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        story.printCharacterText("ふあぁ　よく寝た", name)
        story.printCharacterText("もうこんな時間かあ", name)
    })
    Mathar = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    Mathar.setFlag(SpriteFlag.GhostThroughWalls, true)
    Mathar.setPosition(50, 150)
    story.startCutscene(function () {
        animation.runImageAnimation(
        Mathar,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(Mathar, 50, 70, 50)
        animation.runImageAnimation(
        Mathar,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(Mathar, 80, 70, 50)
        animation.stopAnimation(animation.AnimationTypes.All, Mathar)
        Mathar.setImage(img`
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 2 2 f f f f f . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f 2 f 2 e f . . . 
            . f f f 2 2 e e 2 2 f f f . . . 
            f f e f 2 f e e f 2 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 2 2 2 2 2 2 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `)
        story.printCharacterText("あら起きたのね", "ママ")
        Mathar.setImage(img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `)
        Mathar.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
        Mathar.setImage(img`
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 2 2 f f f f f . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f 2 f 2 e f . . . 
            . f f f 2 2 e e 2 2 f f f . . . 
            f f e f 2 f e e f 2 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 2 2 2 2 2 2 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `)
        story.printCharacterText("こんなに散らかして！", "ママ")
        story.printCharacterText("少しは掃除したらどうなの", "ママ")
        story.printCharacterText("ご、ごめんなさい", name)
        story.printCharacterText("あのね、ママ", name)
        story.printCharacterText("最近クローゼットから 音がするんだ", name)
        story.printCharacterText("音？", "ママ")
        story.printCharacterText("気のせいじゃないの？", "ママ")
        story.printCharacterText("そんなことよりも 掃除しなさい", "ママ")
    })
    story.startCutscene(function () {
        animation.runImageAnimation(
        Mathar,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(Mathar, 50, 70, 50)
        animation.runImageAnimation(
        Mathar,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(Mathar, 50, 150, 50)
        animation.stopAnimation(animation.AnimationTypes.All, Mathar)
        Mathar.destroy()
        story.printCharacterText("行っちゃった……", name)
        story.printCharacterText("本当に 気のせいなのかなあ", name)
    })
    story.startCutscene(function () {
        scene.cameraShake(8, 200)
        mySprite.setImage(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f b b b b b b f 4 e 
            4 d f d d d d d d c d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `)
        story.printCharacterText("！！！", name)
        story.printCharacterText("やっぱり 気のせいじゃない！", name)
        story.printCharacterText("中を確認してみよう……！", name)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . f f f f f . . . . 
            . . f e e e e e f f . . 
            . f e e e e e e e f f . 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            f f e 4 4 f f 4 e 4 f f 
            . f f d d d d 4 d 4 f . 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e e f . . 
            . . f 1 1 1 e d d 4 . . 
            . . f 1 1 1 e d d e . . 
            . . f 6 6 6 f e e f . . 
            . . . f f f f f f . . . 
            . . . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f . 
            . . f b b d e e f f f . 
            . . f e 4 e d d 4 f . . 
            . . f 1 1 e d d e f . . 
            . f f 6 6 f e e f f f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `,img`
            . . . . . . . . . . . . 
            . . . f f f f f f . . . 
            . . f e e e e e f f f . 
            . f e e e e e e e f f f 
            f e e e e e e e f f f f 
            f e e 4 e e e f f f f f 
            f e e 4 4 e e e f f f f 
            f f e 4 4 4 4 4 f f f f 
            . f e 4 4 f f 4 e 4 f f 
            . . f d d d d 4 d 4 f f 
            . . f b b d d 4 f f f . 
            . . f e 4 4 4 e d d 4 . 
            . . f 1 1 1 1 e d d e . 
            . f f 6 6 6 6 f e e f . 
            . f f f f f f f f f f . 
            . . f f f . . . f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 40, 55, 50)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f b b b b b b f 4 e 
            4 d f d d d d d d c d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f e e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f e e e e e e e f e f 
            f f f e e e e f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            . 4 f b b b b b f e 4 e 
            . 4 f d d d d d e d d 4 
            . e f f f f f f e e 4 . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f f e e e e e f e f 
            f f f f f e e e e f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 e f b b b b b f 4 . 
            4 d d e d d d d d f 4 . 
            . 4 e e f f f f f f e . 
            . . . . . . . f f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 40, 48, 50)
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        story.printCharacterText("よし、いくぞ……！", name)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f e e e e e e f e f 
            f f f f e e e e f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 f b b b b b b f 4 e 
            4 d f d d d d d d c d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f e e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f e e e e e e e f e f 
            f f f e e e e f f f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            . 4 f b b b b b f e 4 e 
            . 4 f d d d d d e d d 4 
            . e f f f f f f e e 4 . 
            . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . 
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f e e e e e e e f f . 
            f f e f e e e e e e f f 
            f f f e e e e e e e e f 
            f f f f e e e e e f e f 
            f f f f f e e e e f f f 
            f f f f f f f f f f f f 
            f f f f f f f f f f f f 
            . f f f f f f f f f f . 
            . e f f f f f f f f e . 
            e 4 e f b b b b b f 4 . 
            4 d d e d d d d d f 4 . 
            . 4 e e f f f f f f e . 
            . . . . . . . f f f . . 
            `],
        100,
        true
        )
        story.spriteMoveToLocation(mySprite, 40, 40, 50)
        osiire += 1
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    })
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
})
// 来るとき、帰るとき、自分の部屋
scene.onOverlapTile(SpriteKind.Player, assets.tile`kabe3`, function (sprite, location) {
    if (ikikaeri == 1) {
        mySprite.setPosition(160, 240)
        scene.setBackgroundColor(11)
        tiles.setTilemap(tilemap`yakata`)
        ikikaeri += 1
        mySprite2 = sprites.create(img`
            fccccccccccccccf
            cbddddddddddddbc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cddddddddddddddc
            cdbbbbbbbbbbbbdc
            cbbbbbbbbbbbbbbc
            cbddddddddddddbc
            cbcbbbcbbcbbbcbc
            fbcbbbcddcbbbcbf
            fbcbbbbccbbbbcbf
            fbccccccccccccbf
            fbbbbbbbbbbbbbbf
            fbddddddddddddbf
            fbcbbbcbbcbbbcbf
            fbcbbbcddcbbbcbf
            fbcbbbbccbbbbcbf
            fbccccccccccccbf
            fbbbbbbbbbbbbbbf
            fbffffffffffffbf
            ffffffffffffffff
            `, SpriteKind.ugoku)
        tiles.setWallAt(tiles.getTileLocation(3, 7), true)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(3, 7))
        story.startCutscene(function () {
            story.printCharacterText("ここは、お屋敷？", name)
            story.printCharacterText("音がするのは 気のせいじゃなかったんだ", name)
            story.printCharacterText("帰ってママに 知らせないと！", name)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . f f f f . . . . 
                . . f f e e e e f f . . 
                . f f e e e e e e f f . 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d d e f . 
                . f f e 4 4 4 4 e f f . 
                e 4 f b 1 1 1 1 b f 4 e 
                4 d f 1 1 1 1 1 1 f d 4 
                4 4 f 6 6 6 6 6 6 f 4 4 
                . . . f f f f f f . . . 
                . . . f f . . f f . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                . f e d d b b d 4 e f e 
                f f f e 4 4 4 4 d d 4 e 
                e 4 f b 1 1 1 e d d e . 
                . . f 6 6 6 6 f e e . . 
                . . f f f f f f f . . . 
                . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . 
                . . . f f f f f f . . . 
                . f f f e e e e f f f . 
                f f f e e e e e e f f f 
                f f f f 4 e e e f f f f 
                f f f 4 4 4 e e f f f f 
                f f f 4 4 4 4 e e f f f 
                f 4 e 4 4 4 4 4 4 e 4 f 
                f 4 4 f f 4 4 f f 4 4 f 
                f e 4 d d d d d d 4 e f 
                e f e 4 d b b d d e f . 
                e 4 d d 4 4 4 4 e f f f 
                . e d d e 1 1 1 b f 4 e 
                . . e e f 6 6 6 6 f . . 
                . . . f f f f f f f . . 
                . . . . . . . f f f . . 
                `],
            100,
            true
            )
            story.spriteMoveToLocation(mySprite, 160, 250, 100)
            animation.stopAnimation(animation.AnimationTypes.All, mySprite)
            story.printCharacterText("あ、あれ？開かない", name)
            story.printCharacterText("カギ？ ", name)
            story.printCharacterText(" さっきまで かかってなかったのに……", name)
            story.printCharacterText("カギを探さないと！", name)
        })
    } else if (ikikaeri == 2 && lastKey == 1) {
        scene.setBackgroundColor(15)
        tiles.setTilemap(tilemap`kaerimiti`)
        mySprite2.destroy()
        for (let 値 of sprites.allOfKind(SpriteKind.lightpi)) {
            値.destroy()
        }
        ikikaeri += 1
        mySprite.setPosition(110, 20)
    } else if (ikikaeri == 3 && lastKey == 1) {
        scene.setBackgroundColor(6)
        tiles.setTilemap(tilemap`home`)
        mySprite.setPosition(100, 50)
        ikikaeri += 1
        EndAnim()
    }
})
// 食事場、花瓶を置く
scene.onOverlapTile(SpriteKind.Player, assets.tile`hana-okubasyo`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (mySprite.x > 100) {
            if (tsukue == 0 && water == 1) {
                game.showLongText("花の入った花瓶を机に置いた", DialogLayout.Bottom)
                tiles.setTileAt(tiles.getTileLocation(7, 8), assets.tile`myTile23`)
                tsukue = 1
                TheLastRoom()
            } else if (tsukue == 1 && water == 1) {
                game.showLongText("キレイなバラが咲いている", DialogLayout.Bottom)
                pause(500)
            }
        } else {
            game.showLongText("日誌担当:ケイト ", DialogLayout.Bottom)
            game.showLongText("食事をするときは部屋は明るく、暖かくければなりません", DialogLayout.Bottom)
            game.showLongText("そして、テーブルの中央にはご主人様が好きな花を飾ること", DialogLayout.Bottom)
            game.showLongText("これらを厳守すれば怒りっぽいご主人様も", DialogLayout.Bottom)
            game.showLongText("大人しく食事なさるでしょう", DialogLayout.Bottom)
            game.showLongText("破ってしまえば、", DialogLayout.Bottom)
            game.showLongText("怒りのあまり", DialogLayout.Bottom)
            game.showLongText("おかぶりなさっている帽子", DialogLayout.Bottom)
            game.showLongText("あるいは食器を", DialogLayout.Bottom)
            game.showLongText("投げつけられるでしょう", DialogLayout.Bottom)
            pause(500)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f f 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e d d 4 . 
        . . f 1 1 1 1 e d d e . 
        . f f 6 6 6 6 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    100,
    true
    )
})
function YakataBGM2 () {
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(165, music.beat(BeatFraction.Quarter))
    music.playTone(165, music.beat(BeatFraction.Quarter))
    music.playTone(208, music.beat(BeatFraction.Quarter))
    music.playTone(165, music.beat(BeatFraction.Quarter))
    music.playTone(165, music.beat(BeatFraction.Quarter))
    music.playTone(196, music.beat(BeatFraction.Quarter))
    music.playTone(147, music.beat(BeatFraction.Quarter))
    music.playTone(147, music.beat(BeatFraction.Quarter))
    music.playTone(185, music.beat(BeatFraction.Quarter))
    music.playTone(147, music.beat(BeatFraction.Quarter))
    music.playTone(147, music.beat(BeatFraction.Quarter))
    music.playTone(175, music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Quarter))
    music.playTone(165, music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Quarter))
    music.playTone(131, music.beat(BeatFraction.Quarter))
    music.playTone(156, music.beat(BeatFraction.Quarter))
    music.playTone(124, music.beat(BeatFraction.Quarter))
    music.playTone(124, music.beat(BeatFraction.Quarter))
    music.playTone(165, music.beat(BeatFraction.Quarter))
    music.playTone(147, music.beat(BeatFraction.Quarter))
    music.playTone(147, music.beat(BeatFraction.Quarter))
}
// 通路に移動
scene.onOverlapTile(SpriteKind.Player, assets.tile`deiri`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTilemap(tilemap`yakata`)
        TanaFlag()
        if (idou == 2) {
            mySprite.setPosition(58, 120)
            idou = 0
            pause(200)
        } else if (idou == 3) {
            mySprite.setPosition(229, 120)
            idou = 0
            pause(200)
        } else if (idou == 4) {
            mySprite.setPosition(159, 40)
            idou = 0
            pause(200)
        }
        TheLastRoom()
    }
})
function lightFlowerMach () {
    if (controller.A.isPressed()) {
        if (idou == 2) {
            if (light1 == 0 || secret == 0) {
                game.showLongText("金庫だ", DialogLayout.Bottom)
                game.showLongText("文字を入力できるようだ", DialogLayout.Bottom)
                answer = game.askForString("")
                // 花、秘密、間違い
                if (light1 == 0 && answer == "rose") {
                    game.showLongText("金庫を開けるとブレーカーが出てきた", DialogLayout.Bottom)
                    game.showLongText("これで明かりをつけられそうだ", DialogLayout.Bottom)
                    game.showLongText("スイッチを押してみよう", DialogLayout.Bottom)
                    pause(500)
                    light1 = 1
                } else if (answer == "jack" == (secret == 0)) {
                    game.showLongText("ジャックの手記", DialogLayout.Bottom)
                    game.showLongText("以前は栄えた家系だが、屋敷も私の祖父の代から 随分廃れてしまった。", DialogLayout.Bottom)
                    game.showLongText("使用人の過半数が私を嫌い、時折あることない事を屋敷の外の者に吹聴している。", DialogLayout.Bottom)
                    game.showLongText("しかし、もうそんな者さえ雇わざるを得ない状況だということだ。なんとも嘆かわしい。", DialogLayout.Bottom)
                    game.showLongText("××月××日", DialogLayout.Bottom)
                    game.showLongText("暖炉に火をつけるためのマッチを隠され、", DialogLayout.Bottom)
                    game.showLongText("寒く暗い夜を過ごすことと なってしまった。", DialogLayout.Bottom)
                    game.showLongText("犯人に見当はつくが、問い詰めるとまた周りにウソを口にするだろう。使用人に怯えるとは、全く情けない主人もいたものだ。", DialogLayout.Bottom)
                    game.showLongText("廊下に見知らぬ絵画が飾られていたが、誰が許可を出したというのか。不要な物を買う余裕はないというのに。", DialogLayout.Bottom)
                    game.showLongText("××月××日", DialogLayout.Bottom)
                    game.showLongText("バラが枯れてしまったようだ。頼んでいた使用人が何日も水をあげなかったのだ。", DialogLayout.Bottom)
                    game.showLongText("キレイに咲く花だけが私の心の支えだったというのに。しかし、恨み言を言ってはいられない。", DialogLayout.Bottom)
                    game.showLongText("もう彼らぐらいしか雇われてくれる者はいない。今でも屋敷の管理はギリギリなのだから。", DialogLayout.Bottom)
                    game.showLongText("××月××日", DialogLayout.Bottom)
                    game.showLongText("この屋敷に最近できたルールについて書きたいと思う。", DialogLayout.Bottom)
                    game.showLongText("食事はあたたかく明るい場所でするのはいい事だ。食事は毎日とるものだし、好きな花を毎日見れるのは良い事だ。", DialogLayout.Bottom)
                    game.showLongText("良い事なのだが、それゆえ味気ない食事が際立つ。冷たくにごったスープ。私は何をしているのだろう。", DialogLayout.Bottom)
                    game.showLongText("××月××日", DialogLayout.Bottom)
                    game.showLongText("大切にしていた杖が壊されてしまった。所詮は子供がやった事だ。それでも、", DialogLayout.Bottom)
                    game.showLongText("××月××日", DialogLayout.Bottom)
                    game.showLongText("そんなに私を追い出したいならお望み通り出ていこう。", DialogLayout.Bottom)
                    game.showLongText("そのかわりに、彼らはもうこの屋敷から出られない。", DialogLayout.Bottom)
                    secret = 1
                } else {
                    game.showLongText("反応がない。間違っているようだ。", DialogLayout.Bottom)
                    pause(500)
                }
            } else {
                game.showLongText("ここにもう用はない", DialogLayout.Bottom)
                pause(500)
            }
        } else if (idou == 0 && 200 < mySprite.x) {
            if (machi == 0) {
                game.showLongText("絵画の裏に四角い穴があった", DialogLayout.Bottom)
                game.showLongText("中にはマッチが入っていた", DialogLayout.Bottom)
                machi = 1
            }
        } else {
            if (flower == 0) {
                game.showLongText("枯れた花が入っている", DialogLayout.Bottom)
                game.showLongText("枯れた花が入った花瓶を手に入れた", DialogLayout.Bottom)
                tiles.setTileAt(tiles.getTileLocation(6, 11), assets.tile`nai-tukue`)
                flower = 1
            }
        }
    } else if (light1 == 1 && light2 == 0) {
        if (pins.P0.analogRead() > 100) {
            for (let 値 of tiles.getTilesByType(assets.tile`lump`)) {
                mySprite3 = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . . f 1 1 1 1 f . . . . . 
                    . . . . f 1 1 5 1 1 1 f . . . . 
                    . . . f 1 1 1 5 1 5 1 1 f . . . 
                    . . . f 1 5 4 1 5 5 5 1 f . . . 
                    . . . f 5 4 4 4 4 4 5 5 f . . . 
                    . . . . f f 4 4 4 4 f f . . . . 
                    . . . 5 4 4 f 5 5 f 4 4 . . . . 
                    . . . . 5 4 4 f f 4 4 4 . . . . 
                    . . . . 5 5 f f f f 5 . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . f f . f f . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.lightpi)
                tiles.placeOnTile(mySprite3, 値)
            }
            game.showLongText("明かりがついた", DialogLayout.Bottom)
            pause(500)
            light2 = 1
            TheLastRoom()
        }
    }
}
// 倉庫
scene.onOverlapTile(SpriteKind.Player, assets.tile`souko`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTilemap(tilemap`sooko`)
        mySprite2.destroy()
        if (light2 == 1) {
            for (let 値 of sprites.allOfKind(SpriteKind.lightpi)) {
                値.destroy()
            }
            for (let 値 of tiles.getTilesByType(assets.tile`lump`)) {
                mySprite3 = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . . f 1 1 1 1 f . . . . . 
                    . . . . f 1 1 5 1 1 1 f . . . . 
                    . . . f 1 1 1 5 1 5 1 1 f . . . 
                    . . . f 1 5 4 1 5 5 5 1 f . . . 
                    . . . f 5 4 4 4 4 4 5 5 f . . . 
                    . . . . f f 4 4 4 4 f f . . . . 
                    . . . 5 4 4 f 5 5 f 4 4 . . . . 
                    . . . . 5 4 4 f f 4 4 4 . . . . 
                    . . . . 5 5 f f f f 5 . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . f f . f f . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.lightpi)
                tiles.placeOnTile(mySprite3, 値)
            }
        }
        mySprite.setPosition(105, 140)
        idou = 2
        pause(200)
    }
})
// 電気,マッチ、花
scene.onOverlapTile(SpriteKind.Player, assets.tile`button-machi-hana`, function (sprite, location) {
    lightFlowerMach()
})
// 主の部屋　嘘つきゲーム　はずれ
scene.onOverlapTile(SpriteKind.Player, assets.tile`hito0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        game.showLongText("大きなヒゲが生えた人の絵画が飾られている", DialogLayout.Bottom)
        game.showLongText("その下に「oliver」と書かれている", DialogLayout.Bottom)
        pause(1000)
    }
    whoQuizMiss()
})
function whoQuizMiss () {
    if (pins.P0.analogRead() > 100) {
        game.showLongText("ボタンを押した", DialogLayout.Bottom)
        game.showLongText("......", DialogLayout.Bottom)
        game.showLongText("特に反応はない", DialogLayout.Bottom)
        pause(1000)
    }
}
// 主の部屋
scene.onOverlapTile(SpriteKind.Player, assets.tile`aruzi-ido`, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setTilemap(tilemap`aruzi-heya`)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(10, 3))
        mySprite.setPosition(95, 150)
        if (light1 == 1 && light2 == 1) {
            for (let 値 of sprites.allOfKind(SpriteKind.lightpi)) {
                値.destroy()
            }
            for (let 値 of tiles.getTilesByType(assets.tile`lump`)) {
                mySprite3 = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . . f 1 1 1 1 f . . . . . 
                    . . . . f 1 1 5 1 1 1 f . . . . 
                    . . . f 1 1 1 5 1 5 1 1 f . . . 
                    . . . f 1 5 4 1 5 5 5 1 f . . . 
                    . . . f 5 4 4 4 4 4 5 5 f . . . 
                    . . . . f f 4 4 4 4 f f . . . . 
                    . . . 5 4 4 f 5 5 f 4 4 . . . . 
                    . . . . 5 4 4 f f 4 4 4 . . . . 
                    . . . . 5 5 f f f f 5 . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . f f . f f . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.lightpi)
                tiles.placeOnTile(mySprite3, 値)
            }
        }
        idou = 4
        pause(200)
    }
})
function TanaFlag () {
    mySprite2.destroy()
    mySprite2 = sprites.create(img`
        fccccccccccccccf
        cbddddddddddddbc
        cddddddddddddddc
        cddddddddddddddc
        cddddddddddddddc
        cddddddddddddddc
        cddddddddddddddc
        cddddddddddddddc
        cdbbbbbbbbbbbbdc
        cbbbbbbbbbbbbbbc
        cbddddddddddddbc
        cbcbbbcbbcbbbcbc
        fbcbbbcddcbbbcbf
        fbcbbbbccbbbbcbf
        fbccccccccccccbf
        fbbbbbbbbbbbbbbf
        fbddddddddddddbf
        fbcbbbcbbcbbbcbf
        fbcbbbcddcbbbcbf
        fbcbbbbccbbbbcbf
        fbccccccccccccbf
        fbbbbbbbbbbbbbbf
        fbffffffffffffbf
        ffffffffffffffff
        `, SpriteKind.ugoku)
    if (SensurOsu == 0) {
        tiles.setWallAt(tiles.getTileLocation(3, 7), true)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(3, 7))
    } else {
        tiles.setWallAt(tiles.getTileLocation(2, 7), true)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(2, 7))
    }
    if (flower == 1) {
        tiles.setTileAt(tiles.getTileLocation(6, 11), assets.tile`nai-tukue`)
    }
    if (light2 == 1) {
        for (let 値 of sprites.allOfKind(SpriteKind.lightpi)) {
            値.destroy()
            for (let 値 of tiles.getTilesByType(assets.tile`lump`)) {
                mySprite3 = sprites.create(img`
                    . . . . . . f f f f . . . . . . 
                    . . . . . f 1 1 1 1 f . . . . . 
                    . . . . f 1 1 5 1 1 1 f . . . . 
                    . . . f 1 1 1 5 1 5 1 1 f . . . 
                    . . . f 1 5 4 1 5 5 5 1 f . . . 
                    . . . f 5 4 4 4 4 4 5 5 f . . . 
                    . . . . f f 4 4 4 4 f f . . . . 
                    . . . 5 4 4 f 5 5 f 4 4 . . . . 
                    . . . . 5 4 4 f f 4 4 4 . . . . 
                    . . . . 5 5 f f f f 5 . . . . . 
                    . . . . . f f f f f f . . . . . 
                    . . . . f f . f f . f f . . . . 
                    . . . . . . . f f . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.lightpi)
                tiles.placeOnTile(mySprite3, 値)
            }
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f e e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f e e e e e e e f e f 
        f f f e e e e f f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        . 4 f b b b b b f e 4 e 
        . 4 f d d d d d e d d 4 
        . e f f f f f f e e 4 . 
        . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f f e e e e e f e f 
        f f f f f e e e e f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 e f b b b b b f 4 . 
        4 d d e d d d d d f 4 . 
        . 4 e e f f f f f f e . 
        . . . . . . . f f f . . 
        `],
    100,
    true
    )
})
// 自分の部屋から
scene.onOverlapTile(SpriteKind.Player, assets.tile`kuro-zet1`, function (sprite, location) {
    if (osiire == 1) {
        ikikaeri += 1
        scene.setBackgroundColor(15)
        mySprite.setPosition(110, 180)
        tiles.setTilemap(tilemap`miti`)
        kamera = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        kamera.setPosition(110, 180)
        kamera.setFlag(SpriteFlag.GhostThroughWalls, true)
        story.startCutscene(function () {
            scene.cameraFollowSprite(kamera)
            story.spriteMoveToLocation(kamera, 130, 0, 70)
            story.setPagePauseLength(1000, 1000)
            story.spriteMoveToLocation(kamera, 130, 260, 80)
            scene.cameraFollowSprite(mySprite)
            kamera.destroy()
            story.printCharacterText("わあ！", name)
            story.printCharacterText("こんな場所に つながっていたなんて……。！", name)
            story.printCharacterText("向こうはどこに つながっているんだろう？", name)
            story.printCharacterText("少し見るだけなら 大丈夫だよね？", name)
            controller.moveSprite(mySprite)
        })
        osiire += 1
    }
})
// 日誌　倉庫、廊下、主の部屋のメモ
scene.onOverlapTile(SpriteKind.Player, assets.tile`WhoAndMemo`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (idou == 0) {
            game.showLongText(" 日誌担当:エマ", DialogLayout.Bottom)
            game.showLongText("大変！ご主人様のお花を枯らしてしまったわ！", DialogLayout.Bottom)
            game.showLongText("先日、眼鏡を壊して", DialogLayout.Bottom)
            game.showLongText("とてもきつく しかられたばかりなのに", DialogLayout.Bottom)
            game.showLongText("今度こそ解雇されるか、もっと酷い目にあわされる！", DialogLayout.Bottom)
            game.showLongText("ビルに相談したら", DialogLayout.Bottom)
            game.showLongText("水をやれば良いんじゃないかって言うの", DialogLayout.Bottom)
            game.showLongText("枯れた花に水をやって元に戻るのかしら？", DialogLayout.Bottom)
        } else if (idou == 2) {
            if (mySprite.y > 100) {
                game.showLongText("日誌担当:マイク", DialogLayout.Bottom)
                game.showLongText("ご主人様のご自慢のひげが暖炉の火で燃えかけてしまった。", DialogLayout.Bottom)
                game.showLongText("暖炉に火は灯せないし", DialogLayout.Bottom)
                game.showLongText("マッチすら見えない所に隠せと怒鳴られてしまった。", DialogLayout.Bottom)
                game.showLongText("そうは言ってもマッチなんて", DialogLayout.Bottom)
                game.showLongText("どこに隠せばいいのか。", DialogLayout.Bottom)
                game.showLongText("ああ、そういえば新しく買い付けた絵画があったな.その裏はどうだろう。 ", DialogLayout.Bottom)
            } else {
                game.showLongText("日誌担当:ビル", DialogLayout.Bottom)
                game.showLongText("近隣の子どもが屋敷に忍び込み,屋敷内は大荒れだ", DialogLayout.Bottom)
                game.showLongText("ご主人様の大切な杖も壊れてしまった.", DialogLayout.Bottom)
                game.showLongText("明かりが消されるイタズラも起きたため, ", DialogLayout.Bottom)
                game.showLongText("ブレーカーには", DialogLayout.Bottom)
                game.showLongText("パスワードを付け管理することにした.", DialogLayout.Bottom)
                game.showLongText("パスワードはもちろんご主人様の好きな花の名前だ", DialogLayout.Bottom)
            }
        } else if (idou == 4) {
            if (mySprite.y < 100) {
                game.showLongText("「本当の私は誰だ」と書かれている", DialogLayout.Bottom)
            } else {
                game.showLongText("エマ「マイクは正直」", DialogLayout.Bottom)
                game.showLongText("ケイト「ビルの言っていることはウソ」", DialogLayout.Bottom)
                game.showLongText("マイク「エマとケイトの どちらかがウソつき」", DialogLayout.Bottom)
                game.showLongText("ビル「エマとマイクは二人ともウソつき」", DialogLayout.Bottom)
            }
        }
    }
})
function HomeBGM1 () {
    if (ikikaeri == 0 || ikikaeri == 4) {
        music.setTempo(30)
        music.playTone(330, music.beat(BeatFraction.Eighth))
        music.playTone(349, music.beat(BeatFraction.Eighth))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Eighth))
    }
    if (ikikaeri == 0 || ikikaeri == 4) {
        music.playTone(349, music.beat(BeatFraction.Eighth))
        music.playTone(330, music.beat(BeatFraction.Eighth))
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.playTone(247, music.beat(BeatFraction.Quarter))
    }
    if (ikikaeri == 0 || ikikaeri == 4) {
        music.playTone(196, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Eighth))
        music.playTone(349, music.beat(BeatFraction.Eighth))
        music.playTone(392, music.beat(BeatFraction.Quarter))
    }
    if (ikikaeri == 0 || ikikaeri == 4) {
        music.playTone(392, music.beat(BeatFraction.Eighth))
        music.playTone(440, music.beat(BeatFraction.Eighth))
        music.playTone(349, music.beat(BeatFraction.Eighth))
        music.playTone(330, music.beat(BeatFraction.Eighth))
    }
    if (ikikaeri == 0 || ikikaeri == 4) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(247, music.beat(BeatFraction.Quarter))
        music.playTone(330, music.beat(BeatFraction.Eighth))
        music.playTone(349, music.beat(BeatFraction.Eighth))
    }
    if (ikikaeri == 0 || ikikaeri == 4) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Eighth))
        music.playTone(349, music.beat(BeatFraction.Eighth))
        music.playTone(330, music.beat(BeatFraction.Eighth))
    }
    if (ikikaeri == 0 || ikikaeri == 4) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.playTone(247, music.beat(BeatFraction.Quarter))
        music.playTone(196, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(196, music.beat(BeatFraction.Eighth))
    }
    if (ikikaeri == 0 || ikikaeri == 4) {
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Half))
    }
    if (ikikaeri == 0 || ikikaeri == 4) {
        music.playTone(220, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
    }
}
// 食事場所and棚を移動させるやつ
scene.onOverlapTile(SpriteKind.Player, assets.tile`mesi-ido`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (100 < mySprite.x) {
            tiles.setTilemap(tilemap`lunch`)
            mySprite.setPosition(75, 200)
            mySprite2.destroy()
            tiles.setWallAt(tiles.getTileLocation(2, 7), false)
            tiles.setWallAt(tiles.getTileLocation(2, 8), false)
            tiles.setWallAt(tiles.getTileLocation(3, 7), false)
            if (light2 == 1) {
                for (let 値 of sprites.allOfKind(SpriteKind.lightpi)) {
                    値.destroy()
                }
                for (let 値 of tiles.getTilesByType(assets.tile`lump`)) {
                    mySprite3 = sprites.create(img`
                        . . . . . . f f f f . . . . . . 
                        . . . . . f 1 1 1 1 f . . . . . 
                        . . . . f 1 1 5 1 1 1 f . . . . 
                        . . . f 1 1 1 5 1 5 1 1 f . . . 
                        . . . f 1 5 4 1 5 5 5 1 f . . . 
                        . . . f 5 4 4 4 4 4 5 5 f . . . 
                        . . . . f f 4 4 4 4 f f . . . . 
                        . . . 5 4 4 f 5 5 f 4 4 . . . . 
                        . . . . 5 4 4 f f 4 4 4 . . . . 
                        . . . . 5 5 f f f f 5 . . . . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . f f . f f . f f . . . . 
                        . . . . . . . f f . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.lightpi)
                    tiles.placeOnTile(mySprite3, 値)
                }
            }
            idou = 3
            pause(200)
            if (fire == 1) {
                tiles.setTileAt(tiles.getTileLocation(7, 4), assets.tile`danro-moeru`)
            }
            if (tsukue == 1) {
                tiles.setTileAt(tiles.getTileLocation(7, 8), assets.tile`myTile23`)
            }
        } else if (SensurOsu == 0) {
            game.showLongText("重そうな棚があって通れない", DialogLayout.Bottom)
            game.showLongText("頑張れば押せそうだ", DialogLayout.Bottom)
            pause(500)
        }
    }
    if (pins.P1.analogRead() > 500) {
        if (SensurOsu == 0) {
            story.startCutscene(function () {
                tiles.setWallAt(tiles.getTileLocation(3, 7), false)
                story.spriteMoveToLocation(mySprite2, 43, mySprite2.y, 50)
                tiles.setWallAt(tiles.getTileLocation(2, 7), true)
                SensurOsu += 1
            })
        }
    }
})
// ・タイトル画面
// ・名前入力
// ・冒頭のシーン
let kamera: Sprite = null
let mySprite3: Sprite = null
let answer = ""
let mySprite2: Sprite = null
let Mathar: Sprite = null
let mySprite: Sprite = null
let lastKey = 0
let fire = 0
let machi = 0
let tsukue = 0
let water = 0
let flower = 0
let secret = 0
let light2 = 0
let light1 = 0
let SensurOsu = 0
let osiire = 0
let idou = 0
let ikikaeri = 0
let name = ""
game.splash(" closet")
name = game.askForString("What's your name?")
tiles.setTilemap(tilemap`home`)
scene.setBackgroundColor(6)
ikikaeri = 0
idou = 0
osiire = 0
SensurOsu = 0
light1 = 0
light2 = 0
secret = 0
flower = 0
water = 0
tsukue = 0
machi = 0
fire = 0
lastKey = 0
start1()
// BGM
// 使用BGM
// ・oo39.com「ys126」　http://www.oo39.com/index.html
// ・甘茶の音楽工房「あやつり人形のワルツ」　https://amachamusic.chagasi.com/
// 
// この二曲を使用させていただきました。
// 
// 
forever(function () {
    HomeBGM1()
    YakataBGM1()
})
