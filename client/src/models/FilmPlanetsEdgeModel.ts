import { Instance } from "mobx-state-tree"
import { FilmPlanetsEdgeModelBase } from "./FilmPlanetsEdgeModel.base"

/* The TypeScript type of an instance of FilmPlanetsEdgeModel */
export interface FilmPlanetsEdgeModelType extends Instance<typeof FilmPlanetsEdgeModel.Type> {}

/* A graphql query fragment builders for FilmPlanetsEdgeModel */
export { selectFromFilmPlanetsEdge, filmPlanetsEdgeModelPrimitives, FilmPlanetsEdgeModelSelector } from "./FilmPlanetsEdgeModel.base"

/**
 * FilmPlanetsEdgeModel
 *
 * An edge in a connection.
 */
export const FilmPlanetsEdgeModel = FilmPlanetsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
