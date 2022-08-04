import React from "react";

export default function Product_card() {
  return (
    <main>
      Product Card Component
      <img src="https://placeholder.pics/svg/300" />
      <h3 className="Product_card_title">Product Title</h3>
      <p className="Product_card_body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p className="Product_card_price-original">$1000</p>
      <p className="Product_card_price-sale">$500</p>
    </main>
  );
}
