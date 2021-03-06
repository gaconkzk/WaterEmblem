/**
 *  arch_sage.js
 *  -----
 *  Friendly assisting units.
 */

ig.module(
    'game.entities.players.arch_sage'
)
.requires(
    'game.entities.abstractities.base_player'
)
.defines(function() {
    'use strict';

    ig.global.EntityArch_sage = ig.global.EntityBase_player.extend({
        entityClassName: ['EntityArch_sage'],

        name: 'Athos',

        animSheet: new ig.AnimationSheet('media/units/players/newArchSage.png', 32, 32),
        statMugshot: new ig.Image('media/statMugshots/players/athos.png'),
        mugshot: new ig.Image('media/mugshots/players/athos.png'),
        modal: new ig.Image('media/modal/athos_modal.png'),

        init: function(x, y, settings) {
            // Stats

            // Items
            //this.item[0] = null;  this.item_uses[0] = this.item[0].uses;
            //this.item[1] = null;  this.item_uses[1] = this.item[1].uses;
            //this.item[2] = null;  this.item_uses[2] = this.item[2].uses;
            //this.item[3] = null;  this.item_uses[3] = this.item[3].uses;
            //this.item[4] = null;  this.item_uses[4] = this.item[4].uses;

            // IMPORTANT!! Keep these last in the unit's init() method. No exceptions!
            ig.game.recomputeStats(this);
            this.parent(x, y, settings);
        }
    });
});
