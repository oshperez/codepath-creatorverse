import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { Link } from "react-router-dom";

export default function Home() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from("creators").select("*");

      if (!error) setCreators(data);
    }

    fetchCreators();
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginBlock: "3rem" }}
    >
      <Link to="/new">
        <button className="btn">Add Creator</button>
      </Link>
    </div>
  );
}
