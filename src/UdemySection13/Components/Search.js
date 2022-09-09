import React, { useState, useEffect } from "react";
import axios from "axios";

const api =
  "https://www.mediawiki.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming";

export default function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = () => {
      try {
        axios
          .get("https://www.mediawiki.org/w/api.php", {
            params: {
              action: "query",
              list: "search",
              origin: "*",
              format: "json",
              srsearch: term,
            },
          })
          .then((res) => {
            setResults(res.data.query.search);
            console.log(res.data.query.search);
          });
      } catch (error) {
        console.log(
          "🚀 ~ file: Search.js ~ line 26 ~ useEffect ~ error",
          error
        );
      }
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });

  return (
    <>
      <div className="">
        <div className="ui form">
          <div className="field">
            <label htmlFor="">Enter Search Term</label>
            <input
              type="text"
              className="input"
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </>
  );
}
