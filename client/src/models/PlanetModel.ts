import { Instance } from "mobx-state-tree"
import { PlanetModelBase } from "./PlanetModel.base"

/* The TypeScript type of an instance of PlanetModel */
export interface PlanetModelType extends Instance<typeof PlanetModel.Type> {}

/* A graphql query fragment builders for PlanetModel */
export { selectFromPlanet, planetModelPrimitives, PlanetModelSelector } from "./PlanetModel.base"

/**
 * PlanetModel
 *
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.
 */
export const PlanetModel = PlanetModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
