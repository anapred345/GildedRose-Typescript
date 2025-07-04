import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Backstage passes', function () {

    const bakstage_passes = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 12, 10) ]);

    it('quality increases and sellIn decreases - sale by date is 11 days', function() {
        const updated_bakstage_passes = bakstage_passes.updateQuality();
        expect(updated_bakstage_passes[0].quality).to.equal(11);
        expect(updated_bakstage_passes[0].sellIn).to.equal(11);
    });

    it('quality increases and sellIn decreases - sale by date is 10 days', function() {
        const updated_bakstage_passes = bakstage_passes.updateQuality();
        expect(updated_bakstage_passes[0].quality).to.equal(12);
        expect(updated_bakstage_passes[0].sellIn).to.equal(10);
    });

    it('quality double increases and sellIn decreases - sale by date is 9 days', function() {
        const updated_bakstage_passes = bakstage_passes.updateQuality();
        expect(updated_bakstage_passes[0].quality).to.equal(14);
        expect(updated_bakstage_passes[0].sellIn).to.equal(9);
    });

    it('quality double increases and sellIn decreases - sale by date is 5 days', function() {
        const updated_bakstage_passes = bakstage_passes.updateQuality();
        bakstage_passes.updateQuality();
        bakstage_passes.updateQuality();
        bakstage_passes.updateQuality();
        expect(updated_bakstage_passes[0].quality).to.equal(22);
        expect(updated_bakstage_passes[0].sellIn).to.equal(5);
    });

    it('quality triple increases and sellIn decreases - sale by date is 4 days', function() {
        const updated_bakstage_passes = bakstage_passes.updateQuality();
        expect(updated_bakstage_passes[0].quality).to.equal(25);
        expect(updated_bakstage_passes[0].sellIn).to.equal(4);
    });

    it('quality triple increases and sellIn decreases - sale by date is 0 days', function() {
        const updated_bakstage_passes = bakstage_passes.updateQuality();
        bakstage_passes.updateQuality();
        bakstage_passes.updateQuality();
        bakstage_passes.updateQuality();
        expect(updated_bakstage_passes[0].quality).to.equal(37);
        expect(updated_bakstage_passes[0].sellIn).to.equal(0);
    });

    it('quality is 0 - sale by date passed', function() {
        const updated_bakstage_passes = bakstage_passes.updateQuality();
        expect(updated_bakstage_passes[0].quality).to.equal(0);
        expect(updated_bakstage_passes[0].sellIn).to.equal(-1);
    });
});
