class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  //function to increase quantity
  incrementQuality(number) {
    if (this.quality < 50) {
      this.quality = Math.max(0, this.quality + number);
    }
  }

  //function to decrement quality
  decrementQuality(number) {
    this.quality = Math.max(0, this.quality - number);
  }

  //function to decrement SellIn
  decrementSellIn() {
    this.sellIn--;
  }

  updateQuality() {
    this.items.forEach(function (item) {
      switch (item.name) {
        case "Conjured Mana Cake":
          item.quality = this.decrementQuality(2);
          item.sellIn = this.decrementSellIn();
          break;
        case "Aged Brie":
          item.quality = this.incrementQuality(1);
          item.sellIn = this.decrementSellIn();
          break;
        case "Sulfuras, Hand of Ragnaros":
          item.quality = 80;
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          if (item.sellIn <= 10) {
            item.quality = this.incrementQuality(2);
          }
          if (item.sellIn <= 5) {
            item.quality = this.incrementQuality(3);
          }
          item.sellIn = this.decrementSellIn();
          if (item.sellIn < 0) {
            item.quality = 0;
          } else {
            item.quality = this.incrementQuality(1);
          }
          break;
        default:
          item.sellIn = this.decrementSellIn();
          if (item.sellIn < 0) {
            item.quality = this.decrementQuality(2);
          } else {
            item.quality = this.decrementQuality(1);
          }
      }
    });
    return this.item;
  }
}

module.exports = {
  Item,
  Shop,
};
