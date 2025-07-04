import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Golden Master Test', function () {
    const item = new GildedRose([
        new Item('Aged Brie', 10, 45) ,
        new Item('Sulfuras, Hand of Ragnaros', 1, 80),
        new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20) ,
        new Item('normal item', 7, 20) ,
    ]);

    const updated_item = item.updateQuality();

    it('Day One', function() {
        expect(updated_item[0].quality).to.equal(46);
        expect(updated_item[1].quality).to.equal(80);
        expect(updated_item[2].quality).to.equal(21);
        expect(updated_item[3].quality).to.equal(19);
    });

    it('Day Two', function() {
        item.updateQuality();
        expect(updated_item[0].quality).to.equal(47);
        expect(updated_item[1].quality).to.equal(80);
        expect(updated_item[2].quality).to.equal(23);
        expect(updated_item[3].quality).to.equal(18);
    });

    it('Day Three', function() {
        item.updateQuality();
        expect(updated_item[0].quality).to.equal(48);
        expect(updated_item[1].quality).to.equal(80);
        expect(updated_item[2].quality).to.equal(25);
        expect(updated_item[3].quality).to.equal(17);
    });

    it('Day Five', function() {
        item.updateQuality();
        item.updateQuality();
        item.updateQuality();
        item.updateQuality();
        expect(updated_item[0].quality).to.equal(50);
        expect(updated_item[1].quality).to.equal(80);
        expect(updated_item[2].quality).to.equal(34);
        expect(updated_item[3].quality).to.equal(13);
    });

    it('Day Eleven', function() {
        item.updateQuality();
        item.updateQuality();
        item.updateQuality();
        item.updateQuality();
        item.updateQuality();
        item.updateQuality();
        expect(updated_item[0].quality).to.equal(50);
        expect(updated_item[1].quality).to.equal(80);
        expect(updated_item[2].quality).to.equal(0);
        expect(updated_item[3].quality).to.equal(1);
    });

});
