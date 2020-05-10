import { Instance } from "mobx-state-tree"
import { FilmStarshipsEdgeModelBase } from "./FilmStarshipsEdgeModel.base"

/* The TypeScript type of an instance of FilmStarshipsEdgeModel */
export interface FilmStarshipsEdgeModelType extends Instance<typeof FilmStarshipsEdgeModel.Type> {}

/* A graphql query fragment builders for FilmStarshipsEdgeModel */
export { selectFromFilmStarshipsEdge, filmStarshipsEdgeModelPrimitives, FilmStarshipsEdgeModelSelector } from "./FilmStarshipsEdgeModel.base"

/**
 * FilmStarshipsEdgeModel
 *
 * An edge in a connection.
 */
export const FilmStarshipsEdgeModel = FilmStarshipsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
