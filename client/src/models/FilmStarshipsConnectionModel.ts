import { Instance } from "mobx-state-tree"
import { FilmStarshipsConnectionModelBase } from "./FilmStarshipsConnectionModel.base"

/* The TypeScript type of an instance of FilmStarshipsConnectionModel */
export interface FilmStarshipsConnectionModelType extends Instance<typeof FilmStarshipsConnectionModel.Type> {}

/* A graphql query fragment builders for FilmStarshipsConnectionModel */
export { selectFromFilmStarshipsConnection, filmStarshipsConnectionModelPrimitives, FilmStarshipsConnectionModelSelector } from "./FilmStarshipsConnectionModel.base"

/**
 * FilmStarshipsConnectionModel
 *
 * A connection to a list of items.
 */
export const FilmStarshipsConnectionModel = FilmStarshipsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
