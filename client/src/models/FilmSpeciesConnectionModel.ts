import { Instance } from "mobx-state-tree"
import { FilmSpeciesConnectionModelBase } from "./FilmSpeciesConnectionModel.base"

/* The TypeScript type of an instance of FilmSpeciesConnectionModel */
export interface FilmSpeciesConnectionModelType extends Instance<typeof FilmSpeciesConnectionModel.Type> {}

/* A graphql query fragment builders for FilmSpeciesConnectionModel */
export { selectFromFilmSpeciesConnection, filmSpeciesConnectionModelPrimitives, FilmSpeciesConnectionModelSelector } from "./FilmSpeciesConnectionModel.base"

/**
 * FilmSpeciesConnectionModel
 *
 * A connection to a list of items.
 */
export const FilmSpeciesConnectionModel = FilmSpeciesConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
