import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function CreatorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      const { data } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      setCreator(data);
    }

    fetchCreator();
  }, [id]);

  async function handleDelete() {
    await supabase.from("creators").delete().eq("id", id);

    navigate("/");
  }

  if (!creator) return <p>Loading...</p>;

  return (
    <div>
      <article
        className="creator-details-card"
        style={{
          display: "block",
          marginInline: "auto",
          maxWidth: "600px",
          marginBlock: "2rem",
        }}
      >
        <h2>{creator.name}</h2>
        <p style={{ marginBottom: "1rem" }}>{creator.description}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <a href={creator.url} target="_blank" rel="noreferrer">
            Visit Channel
          </a>

          <div>
            <Link to={`/edit/${id}`}>
              <button style={{ marginInlineEnd: "1rem" }}>Edit</button>
            </Link>

            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </div>
  );
}
