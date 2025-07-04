import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Golden Master Test', function () {
    const Gilded_Rose_Items = new GildedRose([
        new Item('Aged Brie', 10, 45) ,
        new Item('Sulfuras, Hand of Ragnaros', 1, 80),
        new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20) ,
        new Item('normal item', 7, 20) ,
    ]);

    it('Day One', function() {
        const updated_gilded_rose_items = Gilded_Rose_Items.updateQuality();
        expect(updated_gilded_rose_items[0].quality).to.equal(46);
        expect(updated_gilded_rose_items[0].sellIn).to.equal(9);
        expect(updated_gilded_rose_items[1].quality).to.equal(80);
        expect(updated_gilded_rose_items[1].sellIn).to.equal(1);
        expect(updated_gilded_rose_items[2].quality).to.equal(21);
        expect(updated_gilded_rose_items[2].sellIn).to.equal(10);
        expect(updated_gilded_rose_items[3].quality).to.equal(19);
        expect(updated_gilded_rose_items[3].sellIn).to.equal(6);
    });

    it('Day Two', function() {
        const updated_gilded_rose_items = Gilded_Rose_Items.updateQuality();
        expect(updated_gilded_rose_items[0].quality).to.equal(47);
        expect(updated_gilded_rose_items[1].quality).to.equal(80);
        expect(updated_gilded_rose_items[1].sellIn).to.equal(1);
        expect(updated_gilded_rose_items[2].quality).to.equal(23);
        expect(updated_gilded_rose_items[3].quality).to.equal(18);
    });

    it('Day Three', function() {
        const updated_gilded_rose_items = Gilded_Rose_Items.updateQuality();
        expect(updated_gilded_rose_items[0].quality).to.equal(48);
        expect(updated_gilded_rose_items[1].quality).to.equal(80);
        expect(updated_gilded_rose_items[2].quality).to.equal(25);
        expect(updated_gilded_rose_items[3].quality).to.equal(17);
    });

    it('Day Seven', function() {
        const updated_gilded_rose_items = Gilded_Rose_Items.updateQuality();
        Gilded_Rose_Items.updateQuality();
        Gilded_Rose_Items.updateQuality();
        Gilded_Rose_Items.updateQuality();
        expect(updated_gilded_rose_items[0].quality).to.equal(50);
        expect(updated_gilded_rose_items[1].quality).to.equal(80);
        expect(updated_gilded_rose_items[2].quality).to.equal(34);
        expect(updated_gilded_rose_items[3].quality).to.equal(13);
        expect(updated_gilded_rose_items[2].sellIn).to.equal(4);
        expect(updated_gilded_rose_items[3].sellIn).to.equal(0);
    });

    it('Day Ten', function() {
        const updated_gilded_rose_items = Gilded_Rose_Items.updateQuality();
        Gilded_Rose_Items.updateQuality();
        Gilded_Rose_Items.updateQuality();
        expect(updated_gilded_rose_items[0].quality).to.equal(50);
        expect(updated_gilded_rose_items[0].sellIn).to.equal(0);
        expect(updated_gilded_rose_items[1].quality).to.equal(80);
        expect(updated_gilded_rose_items[2].quality).to.equal(43);
        expect(updated_gilded_rose_items[3].quality).to.equal(7);
    });

    it('Day Twelve', function() {
        const updated_gilded_rose_items = Gilded_Rose_Items.updateQuality();
        Gilded_Rose_Items.updateQuality();
        expect(updated_gilded_rose_items[0].quality).to.equal(50);
        expect(updated_gilded_rose_items[1].quality).to.equal(80);
        expect(updated_gilded_rose_items[2].quality).to.equal(0);
        expect(updated_gilded_rose_items[3].quality).to.equal(3);
    });

});