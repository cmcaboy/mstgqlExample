import { Instance } from "mobx-state-tree"
import { FilmCharactersEdgeModelBase } from "./FilmCharactersEdgeModel.base"

/* The TypeScript type of an instance of FilmCharactersEdgeModel */
export interface FilmCharactersEdgeModelType extends Instance<typeof FilmCharactersEdgeModel.Type> {}

/* A graphql query fragment builders for FilmCharactersEdgeModel */
export { selectFromFilmCharactersEdge, filmCharactersEdgeModelPrimitives, FilmCharactersEdgeModelSelector } from "./FilmCharactersEdgeModel.base"

/**
 * FilmCharactersEdgeModel
 *
 * An edge in a connection.
 */
export const FilmCharactersEdgeModel = FilmCharactersEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
