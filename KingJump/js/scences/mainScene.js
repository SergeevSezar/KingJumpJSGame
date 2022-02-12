export default class mainScene extends Phaser.Scene {
    constructor() {
        super('mainScene')

        this.ground;
        this.platforms;
        this.king;
        this.cursor;
    }

    preload() {
        this.load.image('sky', '../../assets/sky.png')
        this.load.image('ground', '../../assets/ground.png')
        this.load.image('platform', '../../assets/platform.png')
        this.load.spritesheet('king', '../../assets/player/king.png', { frameWidth: 32, frameHeight: 32 })
    }

    create() {
        this.add.image(400, 300, 'sky')

        this.ground = this.physics.add.staticGroup()
        this.ground.create(400, 600, 'ground')

        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(200, 500, 'platform')
        this.platforms.create(300, 450, 'platform')
        this.platforms.create(400, 400, 'platform')
        this.platforms.create(500, 350, 'platform')
        this.platforms.create(600, 300, 'platform')
        this.platforms.create(700, 250, 'platform')

        this.king = this.physics.add.sprite(100, 100, 'king')
        this.king.setCollideWorldBounds(true)
        this.king.setBounce(0.3)

        this.cursor = this.input.keyboard.createCursorKeys()

        this.physics.add.collider(this.king, this.platforms)
        this.physics.add.collider(this.king, this.ground)
    }

    update() {
        if (this.cursor.left.isDown) {
            this.king.setVelocityX(-200)
        } else if (this.cursor.right.isDown) {
            this.king.setVelocityX(200)
        } else {
            this.king.setVelocityX(0)
        }

        if (this.cursor.up.isDown && this.king.body.touching.down) {
            this.king.setVelocityY(-250)
        }
    }
}