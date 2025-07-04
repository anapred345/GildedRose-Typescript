import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Conjured', function () {

    const conjured = new GildedRose([ new Item('Conjured', 4, 35) ]);

    it('quality decreases by 2 and sellIn decreases', function() {
        const updated_conjured = conjured.updateQuality();
        expect(updated_conjured[0].quality).to.equal(33);
        expect(updated_conjured[0].sellIn).to.equal(3);
    });

    it('quality decreases by 2 and sellIn decreases - sell by date in 0 days', function() {
        const updated_conjured = conjured.updateQuality();
        conjured.updateQuality();
        conjured.updateQuality();
        expect(updated_conjured[0].quality).to.equal(27);
        expect(updated_conjured[0].sellIn).to.equal(0);
    });

    it('quality double decreases - sale by date passed', function() {
        const updated_conjured = conjured.updateQuality();
        expect(updated_conjured[0].quality).to.equal(23);
        expect(updated_conjured[0].sellIn).to.equal(-1);
    });

});
