import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import ResultContext from "../context/ResultContext";
import Loading from "./Loading";

const Results = () => {
  const context = useContext(ResultContext);
  // const { getResults, results, searchTerm, setSearchTerm, loading } = context;
  const location = useLocation();

  let results = {
    currentPage: 1,
    keyword: "Avengers+Endgame",
    organic: [
      {
        domain: "en.wikipedia.org",
        linkType: "LANDING",
        position: 1,
        snippet:
          "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by ...Production company: Marvel StudiosDistributed by: Walt Disney Studios; Motion Pic...Produced by: Kevin FeigeScreenplay by: : Christopher Markus; Stephen ...‎Production of Avengers: Infinity · ‎Endgame (soundtrack) · ‎Christopher Markus",
        title: "Avengers: Endgame - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Avengers:_Endgame",
      },
      {
        domain: "www.marvel.com",
        linkType: "LANDING",
        position: 2,
        snippet:
          "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one ...Mar 14, 2019 · Uploaded by Marvel Entertainment",
        title: "Avengers: Endgame (Movie, 2019) - Marvel.com",
        url: "https://www.marvel.com/movies/avengers-endgame",
      },
      {
        domain: "www.imdb.com",
        linkType: "LANDING",
        position: 3,
        snippet:
          "Avengers: Endgame ... Every hero, every story, every moment has led us here. ... After the devastating events of Avengers: Infinity War (2018), the universe is in ... Rating: 8.4/10 · ‎956,583 votes",
        title: "Avengers: Endgame (2019) - IMDb",
        url: "https://www.imdb.com/title/tt4154796/",
      },
      {
        domain: "www.rottentomatoes.com",
        linkType: "LANDING",
        position: 4,
        snippet:
          "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers ...Release Date (Streaming): Jul 30, 2019Release Date (Theaters): Apr 26, 2019 wideGenre: Fantasy, Sci-fi, Adventure, ActionBox Office (Gross USA): $858.4M Rating: 94% · ‎547 votes",
        title: "Avengers: Endgame - Rotten Tomatoes",
        url: "https://www.rottentomatoes.com/m/avengers_endgame",
      },
      {
        domain: "marvelcinematicuniverse.fandom.com",
        linkType: "LANDING",
        position: 5,
        snippet:
          "Avengers: Endgame is a 2019 superhero film, based on the Marvel Comics superhero team of the same name. The film is a sequel to The Avengers, Avengers: Age ...Release Date: April 26, 2019; June 28, 2019 ...Box Office: $2.798 billion",
        title: "Avengers: Endgame | Marvel Cinematic Universe Wiki | Fandom",
        url: "https://marvelcinematicuniverse.fandom.com/wiki/Avengers:_Endgame",
      },
      {
        domain: "www.nytimes.com",
        linkType: "LANDING",
        position: 6,
        snippet:
          "Iron Man, Thor, the Hulk, Captain America and other stars settle scores, tie up loose ends and take a long victory lap in the final chapter ...Apr 23, 2019",
        title: "'Avengers: Endgame' Review: The Real Heroes Were the ...",
        url: "https://www.nytimes.com/2019/04/23/movies/avengers-endgame-review.html",
      },
      {
        domain: "movies.disney.com",
        linkType: "LANDING",
        position: 7,
        snippet:
          "Apr 26, 2019 — Avengers: Endgame · Directed By. Anthony Russo, Joe Russo · Written By. Christopher Markus, Stephen McFeely · Produced By. Kevin Feige · Cast.",
        title: "Avengers: Endgame - Disney Movies",
        url: "https://movies.disney.com/avengers-endgame",
      },
      {
        domain: "www.boxofficemojo.com",
        linkType: "LANDING",
        position: 8,
        snippet:
          "DateDOWRankDaily%± YDTheatersAvgTo DateDayEstim...Apr 26Friday1$157,461,641‑4,662$33,775$157,461,6411falseApr 27Saturday1$109,264,122‑30.6%4,662$23,437$266,725,7632falseApr 28Sunday1$90,389,244‑17.3%4,662$19,388$357,115,0073falseView 137 more rows",
        title: "Avengers: Endgame - Box Office Mojo",
        url: "https://www.boxofficemojo.com/release/rl3059975681/",
      },
      {
        domain: "www.disneyplus.com",
        linkType: "LANDING",
        position: 9,
        snippet:
          "Marvel Studios' Avengers: Endgame ... The epic conclusion to the Infinity Saga that became a critically acclaimed worldwide phenomenon, this dramatic showdown ...",
        title: "Watch Marvel Studios' Avengers: Endgame | Full Movie",
        url: "https://www.disneyplus.com/en-gb/movies/marvel-studios-avengers-endgame/aRbVJUb2h2Rf",
      },
    ],
    pagination: [
      {
        page: 1,
        path: "",
      },
      {
        page: 2,
        path: "/search?q=Avengers%2BEndgame&gl=us&hl=en&ei=DDyLYZv2DKeuytMPjqyjkAU&start=10&sa=N&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ8tMDegQIARA6",
      },
      {
        page: 3,
        path: "/search?q=Avengers%2BEndgame&gl=us&hl=en&ei=DDyLYZv2DKeuytMPjqyjkAU&start=20&sa=N&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ8tMDegQIARA8",
      },
      {
        page: 4,
        path: "/search?q=Avengers%2BEndgame&gl=us&hl=en&ei=DDyLYZv2DKeuytMPjqyjkAU&start=30&sa=N&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ8tMDegQIARA-",
      },
      {
        page: 5,
        path: "/search?q=Avengers%2BEndgame&gl=us&hl=en&ei=DDyLYZv2DKeuytMPjqyjkAU&start=40&sa=N&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ8tMDegQIARBA",
      },
      {
        page: 6,
        path: "/search?q=Avengers%2BEndgame&gl=us&hl=en&ei=DDyLYZv2DKeuytMPjqyjkAU&start=50&sa=N&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ8tMDegQIARBC",
      },
      {
        page: 7,
        path: "/search?q=Avengers%2BEndgame&gl=us&hl=en&ei=DDyLYZv2DKeuytMPjqyjkAU&start=60&sa=N&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ8tMDegQIARBE",
      },
      {
        page: 8,
        path: "/search?q=Avengers%2BEndgame&gl=us&hl=en&ei=DDyLYZv2DKeuytMPjqyjkAU&start=70&sa=N&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ8tMDegQIARBG",
      },
      {
        page: 9,
        path: "/search?q=Avengers%2BEndgame&gl=us&hl=en&ei=DDyLYZv2DKeuytMPjqyjkAU&start=80&sa=N&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ8tMDegQIARBI",
      },
      {
        page: 10,
        path: "/search?q=Avengers%2BEndgame&gl=us&hl=en&ei=DDyLYZv2DKeuytMPjqyjkAU&start=90&sa=N&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ8tMDegQIARBK",
      },
    ],
    relatedKeywords: [
      {
        keyword: "avengers: endgame movie",
        path: "/search?gl=us&hl=en&q=Avengers:+Endgame+movie&sa=X&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ1QJ6BAg7EAE",
      },
      {
        keyword: "avengers: infinity war",
        path: "/search?gl=us&hl=en&q=Avengers:+Infinity+War&sa=X&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ1QJ6BAhOEAE",
      },
      {
        keyword: "avengers: endgame netflix",
        path: "/search?gl=us&hl=en&q=Avengers:+Endgame+Netflix&sa=X&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ1QJ6BAhAEAE",
      },
      {
        keyword: "avengers: endgame trailer download",
        path: "/search?gl=us&hl=en&q=Avengers:+Endgame+trailer+Download&sa=X&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ1QJ6BAhEEAE",
      },
      {
        keyword: "avengers: endgame trailer",
        path: "/search?gl=us&hl=en&q=Avengers:+Endgame+trailer&sa=X&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ1QJ6BAhDEAE",
      },
      {
        keyword: "avengers: endgame imdb",
        path: "/search?gl=us&hl=en&q=Avengers:+Endgame+IMDb&sa=X&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ1QJ6BAhCEAE",
      },
      {
        keyword: "avengers: endgame director",
        path: "/search?gl=us&hl=en&q=Avengers:+Endgame+Director&sa=X&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ1QJ6BAhJEAE",
      },
      {
        keyword: "avengers: endgame characters",
        path: "/search?gl=us&hl=en&q=Avengers:+Endgame+characters&sa=X&ved=2ahUKEwibrIXo7Iz0AhUnl3IEHQ7WCFIQ1QJ6BAg8EAE",
      },
    ],
    totalResults: 119000000,
    timeTaken: 1.77,
  };

  useEffect(() => {
    // getResults();
  }, []);

  // if(!loading) return  <Loading/>

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results.organic.map((data) => (
            <div key={data.url} className="md:w-2/5 w-full">
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 mb-1">
                  {data.title}
                </p>
              </a>
              <p>
                  <span className="d-block">{data.domain} Says,</span>
                  <br/>
                {data.snippet.length > 300
                  ? data.snippet.substring(0, 300) + "............"
                  : data.snippet}
              </p>
            </div>
          ))}
        </div>
      );
    case "/images":
      return " ";
    case "/videos":
      return " ";
    case "/videos":
      return " ";

    default:
      break;
  }
};

export default Results;
