function CardBase() {
  name = "";
}

CardBase.prototype.toString = function () {
  return this.name;
};

module.exports = {
  CardBase: CardBase,
}
