import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from("creators").select("*");

      if (!error) setCreators(data);
    }

    fetchCreators();
  }, []);

  return (
    <>
      <h1
        className="heading"
        style={{ textAlign: "center", marginBlock: "3rem" }}
      >
        Creator Gallery
      </h1>
      <section className="creators-list">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </section>
    </>
  );
}
