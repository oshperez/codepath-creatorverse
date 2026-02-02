import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate, useParams } from "react-router-dom";

export default function CreatorForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    url: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      async function fetchCreator() {
        const { data } = await supabase
          .from("creators")
          .select("*")
          .eq("id", id)
          .single();

        setForm(data);
      }

      fetchCreator();
    }
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      await supabase.from("creators").update(form).eq("id", id);
    } else {
      await supabase.from("creators").insert([form]);
    }

    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit} className="creator-form">
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="url"
        placeholder="URL"
        value={form.url}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />

      <button className="btn" type="submit">
        {id ? "Update Creator" : "Create Creator"}
      </button>
    </form>
  );
}
