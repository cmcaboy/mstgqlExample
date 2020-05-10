import { Instance } from "mobx-state-tree"
import { FilmPlanetsConnectionModelBase } from "./FilmPlanetsConnectionModel.base"

/* The TypeScript type of an instance of FilmPlanetsConnectionModel */
export interface FilmPlanetsConnectionModelType extends Instance<typeof FilmPlanetsConnectionModel.Type> {}

/* A graphql query fragment builders for FilmPlanetsConnectionModel */
export { selectFromFilmPlanetsConnection, filmPlanetsConnectionModelPrimitives, FilmPlanetsConnectionModelSelector } from "./FilmPlanetsConnectionModel.base"

/**
 * FilmPlanetsConnectionModel
 *
 * A connection to a list of items.
 */
export const FilmPlanetsConnectionModel = FilmPlanetsConnectionModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
