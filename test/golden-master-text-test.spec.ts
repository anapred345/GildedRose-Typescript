import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Golden Master Test', function () {
    const item = new GildedRose([
        new Item('Aged Brie', 10, 20) ,
        new Item('Sulfuras, Hand of Ragnaros', 1, 80),
        new Item('Backstage passes to a TAFKAL80ETC concert', 6, 20) ,
        new Item('normal item', 10, 20) ,
    ]);

    const updated_item = item.updateQuality();

    it('Day One', function() {
        expect(updated_item[0].quality).to.equal(21);
        expect(updated_item[1].quality).to.equal(80);
        expect(updated_item[2].quality).to.equal(22);
        expect(updated_item[3].quality).to.equal(19);
    });

    it('Day Two', function() {
        const updated_item = item.updateQuality();
        expect(updated_item[0].quality).to.equal(22);
        expect(updated_item[1].quality).to.equal(80);
        expect(updated_item[2].quality).to.equal(25);
        expect(updated_item[3].quality).to.equal(18);
    });

    it('Day Three', function() {
        const updated_item = item.updateQuality();
        expect(updated_item[0].quality).to.equal(23);
        expect(updated_item[1].quality).to.equal(80);
        expect(updated_item[2].quality).to.equal(28);
        expect(updated_item[3].quality).to.equal(17);
    });

    it('Day Six', function() {
        item.updateQuality();
        item.updateQuality();
        item.updateQuality();
        const updated_item = item.updateQuality();
        expect(updated_item[0].quality).to.equal(27);
        expect(updated_item[1].quality).to.equal(80);
        expect(updated_item[2].quality).to.equal(0);
        expect(updated_item[3].quality).to.equal(13);
    });

});
