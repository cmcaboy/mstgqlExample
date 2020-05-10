import * as React from "react";
import { observer } from "mobx-react";
import { useQuery } from "./models/reactUtils";

interface IAppProps {}

const Main: React.FunctionComponent<IAppProps> = (props) => {
  const { data, loading, error } = useQuery((store) => {
    return store.queryAllFilms({}, (qb) =>
      qb.films((film) => film.title.created.director.producers.releaseDate)
    );
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.log("error: ", error);
    return <p>Error</p>;
  }
  return (
    <div>
      {data?.allFilms.films.map((film) => (
        <>
          <p>{film.title}</p>
          <p>{film.formated_create_date}</p>
        </>
      ))}
    </div>
  );
};

export default observer(Main);
