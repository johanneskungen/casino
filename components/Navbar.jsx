import React from "react";

function Navbar() {
  return (
    <nav className="shadow-lg text- flex items-center justify-between p-8 px-24">
      <h2 id="demotext" className="text-xl">Casinosverige</h2>
      <div className="flex gap-12 text-sm">
        <p>Högsta rtp</p>
        <p>Bästa bonusarna</p>
      </div>
    </nav>
  );
}

export default Navbar;
