import { Instance } from "mobx-state-tree"
import { FilmVehiclesConnectionModelBase } from "./FilmVehiclesConnectionModel.base"

/* The TypeScript type of an instance of FilmVehiclesConnectionModel */
export interface FilmVehiclesConnectionModelType extends Instance<typeof FilmVehiclesConnectionModel.Type> {}

/* A graphql query fragment builders for FilmVehiclesConnectionModel */
export { selectFromFilmVehiclesConnection, filmVehiclesConnectionModelPrimitives, FilmVehiclesConnectionModelSelector } from "./FilmVehiclesConnectionModel.base"

/**
 * FilmVehiclesConnectionModel
 *
 * A connection to a list of items.
 */
export const FilmVehiclesConnectionModel = FilmVehiclesConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
