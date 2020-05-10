/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { VehicleFilmsConnectionModel, VehicleFilmsConnectionModelType } from "./VehicleFilmsConnectionModel"
import { VehicleFilmsConnectionModelSelector } from "./VehicleFilmsConnectionModel.base"
import { VehiclePilotsConnectionModel, VehiclePilotsConnectionModelType } from "./VehiclePilotsConnectionModel"
import { VehiclePilotsConnectionModelSelector } from "./VehiclePilotsConnectionModel.base"
import { RootStoreType } from "./index"


/**
 * VehicleBase
 * auto generated base class for the model VehicleModel.
 *
 * A single transport craft that does not have hyperdrive capability
 */
export const VehicleModelBase = ModelBase
  .named('Vehicle')
  .props({
    __typename: types.optional(types.literal("Vehicle"), "Vehicle"),
    /** The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike". */
    name: types.union(types.undefined, types.null, types.string),
    /** The model or official name of this vehicle. Such as "All-Terrain Attack Transport". */
    model: types.union(types.undefined, types.null, types.string),
    /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
    vehicleClass: types.union(types.undefined, types.null, types.string),
    /** The manufacturers of this vehicle. */
    manufacturers: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    /** The cost of this vehicle new, in Galactic Credits. */
    costInCredits: types.union(types.undefined, types.null, types.number),
    /** The length of this vehicle in meters. */
    length: types.union(types.undefined, types.null, types.number),
    /** The number of personnel needed to run or pilot this vehicle. */
    crew: types.union(types.undefined, types.null, types.string),
    /** The number of non-essential people this vehicle can transport. */
    passengers: types.union(types.undefined, types.null, types.string),
    /** The maximum speed of this vehicle in atmosphere. */
    maxAtmospheringSpeed: types.union(types.undefined, types.null, types.integer),
    /** The maximum number of kilograms that this vehicle can transport. */
    cargoCapacity: types.union(types.undefined, types.null, types.number),
    /** The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply. */
    consumables: types.union(types.undefined, types.null, types.string),
    pilotConnection: types.union(types.undefined, types.null, types.late((): any => VehiclePilotsConnectionModel)),
    filmConnection: types.union(types.undefined, types.null, types.late((): any => VehicleFilmsConnectionModel)),
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

export class VehicleModelSelector extends QueryBuilder {
  get name() { return this.__attr(`name`) }
  get model() { return this.__attr(`model`) }
  get vehicleClass() { return this.__attr(`vehicleClass`) }
  get manufacturers() { return this.__attr(`manufacturers`) }
  get costInCredits() { return this.__attr(`costInCredits`) }
  get length() { return this.__attr(`length`) }
  get crew() { return this.__attr(`crew`) }
  get passengers() { return this.__attr(`passengers`) }
  get maxAtmospheringSpeed() { return this.__attr(`maxAtmospheringSpeed`) }
  get cargoCapacity() { return this.__attr(`cargoCapacity`) }
  get consumables() { return this.__attr(`consumables`) }
  get created() { return this.__attr(`created`) }
  get edited() { return this.__attr(`edited`) }
  get id() { return this.__attr(`id`) }
  pilotConnection(builder?: string | VehiclePilotsConnectionModelSelector | ((selector: VehiclePilotsConnectionModelSelector) => VehiclePilotsConnectionModelSelector)) { return this.__child(`pilotConnection`, VehiclePilotsConnectionModelSelector, builder) }
  filmConnection(builder?: string | VehicleFilmsConnectionModelSelector | ((selector: VehicleFilmsConnectionModelSelector) => VehicleFilmsConnectionModelSelector)) { return this.__child(`filmConnection`, VehicleFilmsConnectionModelSelector, builder) }
}
export function selectFromVehicle() {
  return new VehicleModelSelector()
}

export const vehicleModelPrimitives = selectFromVehicle().name.model.vehicleClass.manufacturers.costInCredits.length.crew.passengers.maxAtmospheringSpeed.cargoCapacity.consumables.created.edited
