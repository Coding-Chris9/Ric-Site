
document.addEventListener("DOMContentLoaded", () => {

    class SpaceInvaders extends Phaser.Scene {
        constructor() {
            super("SpaceInvaders");
        }

        preload() {
            this.load.image("player", "paric.png");
            this.load.image("enemy", "enemy.png");
            this.load.image("bullet", "bullet.png");
        }

        create() {
            this.player = this.physics.add.sprite(400, 550, "player").setCollideWorldBounds(true);
            this.cursors = this.input.keyboard.createCursorKeys();
            this.bullets = this.physics.add.group({ classType: Phaser.Physics.Arcade.Image });
            this.enemies = this.physics.add.group();
            this.time.addEvent({ delay: 1000, callback: this.spawnEnemy, callbackScope: this, loop: true });
            this.input.keyboard.on("keydown-SPACE", this.shootBullet, this);
            this.physics.add.overlap(this.bullets, this.enemies, this.hitEnemy, null, this);
        }

        update() {
            if (this.cursors.left.isDown) {
                this.player.setVelocityX(-200);
            } else if (this.cursors.right.isDown) {
                this.player.setVelocityX(200);
            } else {
                this.player.setVelocityX(0);
            }
        }

        shootBullet() {
            const bullet = this.bullets.create(this.player.x, this.player.y - 20, "bullet");
            if (bullet) {
                bullet.setVelocityY(-300);
            }
        }

        spawnEnemy() {
            const x = Phaser.Math.Between(50, 750);
            const enemy = this.enemies.create(x, 50, "enemy");
            enemy.setVelocityY(100);
        }

        hitEnemy(bullet, enemy) {
            bullet.destroy();
            enemy.destroy();
        }
    }

    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: { default: "arcade", arcade: { debug: false } },
        scene: SpaceInvaders
    };

    const game = new Phaser.Game(config);
});
