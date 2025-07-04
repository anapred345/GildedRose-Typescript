import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Aged Brie', function () {

    const aged_brie = new GildedRose([ new Item('Aged Brie', 8, 40) ]);

    it('One day passes - Brie quality increases and sellIn decreases', function() {
        const updated_aged_brie = aged_brie.updateQuality();
        expect(updated_aged_brie[0].quality).to.equal(41);
        expect(updated_aged_brie[0].sellIn).to.equal(7);
    });

    it('Five days pass - Brie quality increases and sellIn decreases', function() {
        const updated_aged_brie = aged_brie.updateQuality();
        aged_brie.updateQuality();
        aged_brie.updateQuality();
        aged_brie.updateQuality();
        expect(updated_aged_brie[0].quality).to.equal(45);
        expect(updated_aged_brie[0].sellIn).to.equal(3);
    });

    it('Eight days pass - Brie quality increases and sellIn decreases', function() {
        const updated_aged_brie = aged_brie.updateQuality();
        aged_brie.updateQuality();
        aged_brie.updateQuality();
        expect(updated_aged_brie[0].quality).to.equal(48);
        expect(updated_aged_brie[0].sellIn).to.equal(0);
    });

    it('Eleven days pass - Brie quality increases up to 50 and then stops', function() {
        const updated_aged_brie = aged_brie.updateQuality();
        aged_brie.updateQuality();
        aged_brie.updateQuality();
        expect(updated_aged_brie[0].quality).to.equal(50);
    });

});
