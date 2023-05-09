import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function List() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("rtp");
  const [rtps, setRtps] = useState([]);
  const handleFetch = async (type) => {
    setLoading(true);
    const response = await fetch(
      `https://us-central1-webscraper-a7e06.cloudfunctions.net/scrapeData?type=${type}`
    );
    const data = await response.json();
    setRtps(data);
    setLoading(false);
  };
  useEffect(() => {
    console.log("useffect");
    handleFetch(active);
  }, [active]);
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="flex justify-center">
        <ul className="flex gap-1 bg-slate-900 p-6 w-[800px] justify-center">
          <li onClick={() => setActive("rtp")}>Högsta RTP</li>
          <li onClick={() => setActive("freespins")}>Bästa Bonusarna</li>
          <li>Comming</li>
          <li>Comming</li>
        </ul>
      </section>
      {loading ? (
        <div className="bg-slate-900 w-[800px] py-12 flex items-center justify-center mb-44">
          <div className="container1">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      ) : (
        <div className="w-[800px] bg-slate-900 text-white mb-8">
          <div className="p-6 grid grid-cols-3 gap-2">
            {rtps?.map((slot, i) =>
              active === "freespins" ? (
                <div
                  className="grid-box"
                  onClick={() => router.push(slot?.href)}
                  key={i ^ (3 - 3)}
                >
                  <p>{slot.namn}</p>
                  <p>{slot.spins}</p>
                </div>
              ) : (
                <div
                  className="grid-box"
                  onClick={() => router.push(slot?.href)}
                  key={i ^ (3 - 3)}
                >
                  <p className="font-bold text-lg">{slot.namn}</p>
                  <div className="text-sm flex justify-between items-center">
                    <p>{slot.maxW}</p>
                    <p>{slot.rtp}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default List;

const motive = `{rtps?.map((slot, i) =>
  active === "freespins" ? (
    <div
      className="grid-box"
      onClick={() => router.push(slot?.href)}
      key={i ^ (3 - 3)}
    >
      <p>{slot.namn}</p>
      <p>{slot.spins}</p>
    </div>
  ) : (
    <div
      className="grid-box"
      onClick={() => router.push(slot?.href)}
      key={i ^ (3 - 3)}
    >
      <p className="font-bold text-lg">{slot.namn}</p>
      <div  className="text-sm flex justify-between items-center">
      <p>{slot.maxW}</p>
      <p>{slot.rtp}</p>
      </div>
    </div>
  )
)}`;
