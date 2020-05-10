/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { PlanetFilmsConnectionModel, PlanetFilmsConnectionModelType } from "./PlanetFilmsConnectionModel"
import { PlanetFilmsConnectionModelSelector } from "./PlanetFilmsConnectionModel.base"
import { PlanetResidentsConnectionModel, PlanetResidentsConnectionModelType } from "./PlanetResidentsConnectionModel"
import { PlanetResidentsConnectionModelSelector } from "./PlanetResidentsConnectionModel.base"
import { RootStoreType } from "./index"


/**
 * PlanetBase
 * auto generated base class for the model PlanetModel.
 *
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.
 */
export const PlanetModelBase = ModelBase
  .named('Planet')
  .props({
    __typename: types.optional(types.literal("Planet"), "Planet"),
    /** The name of this planet. */
    name: types.union(types.undefined, types.null, types.string),
    /** The diameter of this planet in kilometers. */
    diameter: types.union(types.undefined, types.null, types.integer),
    /** The number of standard hours it takes for this planet to complete a single rotation on its axis. */
    rotationPeriod: types.union(types.undefined, types.null, types.integer),
    /** The number of standard days it takes for this planet to complete a single orbit of its local star. */
    orbitalPeriod: types.union(types.undefined, types.null, types.integer),
    /** A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs. */
    gravity: types.union(types.undefined, types.null, types.string),
    /** The average population of sentient beings inhabiting this planet. */
    population: types.union(types.undefined, types.null, types.number),
    /** The climates of this planet. */
    climates: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    /** The terrains of this planet. */
    terrains: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    /** The percentage of the planet surface that is naturally occuring water or bodies of water. */
    surfaceWater: types.union(types.undefined, types.null, types.number),
    residentConnection: types.union(types.undefined, types.null, types.late((): any => PlanetResidentsConnectionModel)),
    filmConnection: types.union(types.undefined, types.null, types.late((): any => PlanetFilmsConnectionModel)),
    /** The ISO 8601 date format of the time that this resource was created. */
    created: types.union(types.undefined, types.null, types.string),
    /** The ISO 8601 date format of the time that this resource was edited. */
    edited: types.union(types.undefined, types.null, types.string),
    /** The ID of an object */
    id: types.identifier,
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class PlanetModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get diameter() { return this.__attr(`diameter`) }
  get rotationPeriod() { return this.__attr(`rotationPeriod`) }
  get orbitalPeriod() { return this.__attr(`orbitalPeriod`) }
  get gravity() { return this.__attr(`gravity`) }
  get population() { return this.__attr(`population`) }
  get climates() { return this.__attr(`climates`) }
  get terrains() { return this.__attr(`terrains`) }
  get surfaceWater() { return this.__attr(`surfaceWater`) }
  get created() { return this.__attr(`created`) }
  get edited() { return this.__attr(`edited`) }
  get id() { return this.__attr(`id`) }
  residentConnection(builder?: string | PlanetResidentsConnectionModelSelector | ((selector: PlanetResidentsConnectionModelSelector) => PlanetResidentsConnectionModelSelector)) { return this.__child(`residentConnection`, PlanetResidentsConnectionModelSelector, builder) }
  filmConnection(builder?: string | PlanetFilmsConnectionModelSelector | ((selector: PlanetFilmsConnectionModelSelector) => PlanetFilmsConnectionModelSelector)) { return this.__child(`filmConnection`, PlanetFilmsConnectionModelSelector, builder) }
}
export function selectFromPlanet() {
  return new PlanetModelSelector()
}

export const planetModelPrimitives = selectFromPlanet().name.diameter.rotationPeriod.orbitalPeriod.gravity.population.climates.terrains.surfaceWater.created.edited
