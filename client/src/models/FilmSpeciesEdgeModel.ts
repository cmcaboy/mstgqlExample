import { Instance } from "mobx-state-tree"
import { FilmSpeciesEdgeModelBase } from "./FilmSpeciesEdgeModel.base"

/* The TypeScript type of an instance of FilmSpeciesEdgeModel */
export interface FilmSpeciesEdgeModelType extends Instance<typeof FilmSpeciesEdgeModel.Type> {}

/* A graphql query fragment builders for FilmSpeciesEdgeModel */
export { selectFromFilmSpeciesEdge, filmSpeciesEdgeModelPrimitives, FilmSpeciesEdgeModelSelector } from "./FilmSpeciesEdgeModel.base"

/**
 * FilmSpeciesEdgeModel
 *
 * An edge in a connection.
 */
export const FilmSpeciesEdgeModel = FilmSpeciesEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
