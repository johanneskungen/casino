import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function List() {
  const bg = "";
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("rtp");
  const [rtps, setRtps] = useState([]);
  const handleFetch = async (type) => {
    setLoading(true);
    const response = await fetch(
      `/api/handler?type=${type}`
    );
    const data = await response.json();
    if (type !== "freespins") {
      setRtps(data);
      setLoading(false);
    }
    const lowArr = data.sort((a, b) => a.oms - b.oms);
    setRtps(lowArr);
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
        <ul
          className={
            "flex gap-4 p-6 w-[1000px] justify-center bg-white rounded-sm" + bg
          }
        >
          <li onClick={() => setActive("rtp")}>Högsta RTP</li>
          <li onClick={() => setActive("freespins")}>Bästa Bonusarna</li>
          <li>Comming</li>
          <li>Comming</li>
        </ul>
      </section>
      {loading ? (
        <div
          className={
            "w-[1000px] py-12 flex items-center justify-center mb-44 " + bg
          }
        >
          <div className="container1">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      ) : (
        <div className={"w-[1000px] text-white mb-8 " + bg}>
          <div className="p-6 grid grid-cols-3 gap-6">
            {rtps?.map((slot, i) =>
              active === "freespins" ? (
                <div
                  className="grid-box"
                  onClick={() => router.push(slot?.href)}
                  key={i ^ (3 - 3)}
                >
                  <p className="font-semibold text-lg">{slot.namn}</p>
                  <p className="text-sm">{slot.spins}</p>
                </div>
              ) : (
                <div className="grid-box" key={i ^ (3 - 3)}>
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
