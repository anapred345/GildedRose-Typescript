import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Normal Items', function () {

    const normal_item = new GildedRose([ new Item('any item', 4, 5) ]);

    it('quality decreases and sellIn decreases', function() {
        const updated_normal_item = normal_item.updateQuality();
        expect(updated_normal_item[0].quality).to.equal(4);
        expect(updated_normal_item[0].sellIn).to.equal(3);
    });

    it('quality decreases and sellIn decreases - sell by date in 0 days', function() {
        const updated_normal_item = normal_item.updateQuality();
        normal_item.updateQuality();
        normal_item.updateQuality();
        expect(updated_normal_item[0].quality).to.equal(1);
        expect(updated_normal_item[0].sellIn).to.equal(0);
    });

    it('quality double decreases - sale by date passed', function() {
        const updated_normal_item = normal_item.updateQuality();
        expect(updated_normal_item[0].quality).to.equal(0);
        expect(updated_normal_item[0].sellIn).to.equal(-1);
    });

});
