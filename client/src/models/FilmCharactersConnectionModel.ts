import { Instance } from "mobx-state-tree"
import { FilmCharactersConnectionModelBase } from "./FilmCharactersConnectionModel.base"

/* The TypeScript type of an instance of FilmCharactersConnectionModel */
export interface FilmCharactersConnectionModelType extends Instance<typeof FilmCharactersConnectionModel.Type> {}

/* A graphql query fragment builders for FilmCharactersConnectionModel */
export { selectFromFilmCharactersConnection, filmCharactersConnectionModelPrimitives, FilmCharactersConnectionModelSelector } from "./FilmCharactersConnectionModel.base"

/**
 * FilmCharactersConnectionModel
 *
 * A connection to a list of items.
 */
export const FilmCharactersConnectionModel = FilmCharactersConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
