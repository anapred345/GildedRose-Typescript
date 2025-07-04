import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Sulfuras', function () {

    const sulfuras = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 8, 40) ]);

    it('when one day passes Sulfuras quality and SellIn stay the same', function() {
        const updated_sulfuras = sulfuras.updateQuality();
        expect(updated_sulfuras[0].quality).to.equal(40);
        expect(updated_sulfuras[0].sellIn).to.equal(8);
    });

    it('when more dayy pass Sulfuras quality and SellIn stay the same', function() {
        const updated_sulfuras = sulfuras.updateQuality();
        sulfuras.updateQuality();
        sulfuras.updateQuality();
        sulfuras.updateQuality();
        expect(updated_sulfuras[0].quality).to.equal(40);
        expect(updated_sulfuras[0].sellIn).to.equal(8);
    });
});
