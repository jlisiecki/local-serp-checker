import { useState } from "preact/hooks";
import { Fragment } from "preact";

export default function Search() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    fetch("/api/search", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ query }),
    }).then((res) => {
      if (!res.ok) throw new Error("Error: " + res.status);
      return res.json();
    }).then((data) => {
      setResponse(data.query);
    }).catch();
  };

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          onChange={(event) =>
            setQuery((event.target as HTMLInputElement).value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {response && <div>Response: {response}</div>}
      </div>
    </Fragment>
  );
}
