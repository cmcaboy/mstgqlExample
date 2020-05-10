/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { StarshipFilmsConnectionModel, StarshipFilmsConnectionModelType } from "./StarshipFilmsConnectionModel"
import { StarshipFilmsConnectionModelSelector } from "./StarshipFilmsConnectionModel.base"
import { StarshipPilotsConnectionModel, StarshipPilotsConnectionModelType } from "./StarshipPilotsConnectionModel"
import { StarshipPilotsConnectionModelSelector } from "./StarshipPilotsConnectionModel.base"
import { RootStoreType } from "./index"


/**
 * StarshipBase
 * auto generated base class for the model StarshipModel.
 *
 * A single transport craft that has hyperdrive capability.
 */
export const StarshipModelBase = ModelBase
  .named('Starship')
  .props({
    __typename: types.optional(types.literal("Starship"), "Starship"),
    /** The name of this starship. The common name, such as "Death Star". */
    name: types.union(types.undefined, types.null, types.string),
    /** The model or official name of this starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station". */
    model: types.union(types.undefined, types.null, types.string),
    /** The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation" */
    starshipClass: types.union(types.undefined, types.null, types.string),
    /** The manufacturers of this starship. */
    manufacturers: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    /** The cost of this starship new, in galactic credits. */
    costInCredits: types.union(types.undefined, types.null, types.number),
    /** The length of this starship in meters. */
    length: types.union(types.undefined, types.null, types.number),
    /** The number of personnel needed to run or pilot this starship. */
    crew: types.union(types.undefined, types.null, types.string),
    /** The number of non-essential people this starship can transport. */
    passengers: types.union(types.undefined, types.null, types.string),
    /** The maximum speed of this starship in atmosphere. null if this starship is incapable of atmosphering flight. */
    maxAtmospheringSpeed: types.union(types.undefined, types.null, types.integer),
    /** The class of this starships hyperdrive. */
    hyperdriveRating: types.union(types.undefined, types.null, types.number),
    /** The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth. */
    MGLT: types.union(types.undefined, types.null, types.integer),
    /** The maximum number of kilograms that this starship can transport. */
    cargoCapacity: types.union(types.undefined, types.null, types.number),
    /** The maximum length of time that this starship can provide consumables for its entire crew without having to resupply. */
    consumables: types.union(types.undefined, types.null, types.string),
    pilotConnection: types.union(types.undefined, types.null, types.late((): any => StarshipPilotsConnectionModel)),
    filmConnection: types.union(types.undefined, types.null, types.late((): any => StarshipFilmsConnectionModel)),
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

export class StarshipModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get model() { return this.__attr(`model`) }
  get starshipClass() { return this.__attr(`starshipClass`) }
  get manufacturers() { return this.__attr(`manufacturers`) }
  get costInCredits() { return this.__attr(`costInCredits`) }
  get length() { return this.__attr(`length`) }
  get crew() { return this.__attr(`crew`) }
  get passengers() { return this.__attr(`passengers`) }
  get maxAtmospheringSpeed() { return this.__attr(`maxAtmospheringSpeed`) }
  get hyperdriveRating() { return this.__attr(`hyperdriveRating`) }
  get MGLT() { return this.__attr(`MGLT`) }
  get cargoCapacity() { return this.__attr(`cargoCapacity`) }
  get consumables() { return this.__attr(`consumables`) }
  get created() { return this.__attr(`created`) }
  get edited() { return this.__attr(`edited`) }
  get id() { return this.__attr(`id`) }
  pilotConnection(builder?: string | StarshipPilotsConnectionModelSelector | ((selector: StarshipPilotsConnectionModelSelector) => StarshipPilotsConnectionModelSelector)) { return this.__child(`pilotConnection`, StarshipPilotsConnectionModelSelector, builder) }
  filmConnection(builder?: string | StarshipFilmsConnectionModelSelector | ((selector: StarshipFilmsConnectionModelSelector) => StarshipFilmsConnectionModelSelector)) { return this.__child(`filmConnection`, StarshipFilmsConnectionModelSelector, builder) }
}
export function selectFromStarship() {
  return new StarshipModelSelector()
}

export const starshipModelPrimitives = selectFromStarship().name.model.starshipClass.manufacturers.costInCredits.length.crew.passengers.maxAtmospheringSpeed.hyperdriveRating.MGLT.cargoCapacity.consumables.created.edited
