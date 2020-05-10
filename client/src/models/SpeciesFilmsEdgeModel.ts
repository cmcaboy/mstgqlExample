import { Instance } from "mobx-state-tree"
import { SpeciesFilmsEdgeModelBase } from "./SpeciesFilmsEdgeModel.base"

/* The TypeScript type of an instance of SpeciesFilmsEdgeModel */
export interface SpeciesFilmsEdgeModelType extends Instance<typeof SpeciesFilmsEdgeModel.Type> {}

/* A graphql query fragment builders for SpeciesFilmsEdgeModel */
export { selectFromSpeciesFilmsEdge, speciesFilmsEdgeModelPrimitives, SpeciesFilmsEdgeModelSelector } from "./SpeciesFilmsEdgeModel.base"

/**
 * SpeciesFilmsEdgeModel
 *
 * An edge in a connection.
 */
export const SpeciesFilmsEdgeModel = SpeciesFilmsEdgeModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
