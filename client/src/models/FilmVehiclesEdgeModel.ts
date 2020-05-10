import { Instance } from "mobx-state-tree"
import { FilmVehiclesEdgeModelBase } from "./FilmVehiclesEdgeModel.base"

/* The TypeScript type of an instance of FilmVehiclesEdgeModel */
export interface FilmVehiclesEdgeModelType extends Instance<typeof FilmVehiclesEdgeModel.Type> {}

/* A graphql query fragment builders for FilmVehiclesEdgeModel */
export { selectFromFilmVehiclesEdge, filmVehiclesEdgeModelPrimitives, FilmVehiclesEdgeModelSelector } from "./FilmVehiclesEdgeModel.base"

/**
 * FilmVehiclesEdgeModel
 *
 * An edge in a connection.
 */
export const FilmVehiclesEdgeModel = FilmVehiclesEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
