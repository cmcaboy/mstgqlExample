/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { QueryBuilder } from "mst-gql"
import { FilmModelSelector } from "./FilmModel.base"
import { PersonModelSelector } from "./PersonModel.base"
import { PlanetModelSelector } from "./PlanetModel.base"
import { SpeciesModelSelector } from "./SpeciesModel.base"
import { StarshipModelSelector } from "./StarshipModel.base"
import { VehicleModelSelector } from "./VehicleModel.base"

export class NodeModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  film(builder?: string | FilmModelSelector | ((selector: FilmModelSelector) => FilmModelSelector)) { return this.__inlineFragment(`Film`, FilmModelSelector, builder) }
  species(builder?: string | SpeciesModelSelector | ((selector: SpeciesModelSelector) => SpeciesModelSelector)) { return this.__inlineFragment(`Species`, SpeciesModelSelector, builder) }
  planet(builder?: string | PlanetModelSelector | ((selector: PlanetModelSelector) => PlanetModelSelector)) { return this.__inlineFragment(`Planet`, PlanetModelSelector, builder) }
  person(builder?: string | PersonModelSelector | ((selector: PersonModelSelector) => PersonModelSelector)) { return this.__inlineFragment(`Person`, PersonModelSelector, builder) }
  starship(builder?: string | StarshipModelSelector | ((selector: StarshipModelSelector) => StarshipModelSelector)) { return this.__inlineFragment(`Starship`, StarshipModelSelector, builder) }
  vehicle(builder?: string | VehicleModelSelector | ((selector: VehicleModelSelector) => VehicleModelSelector)) { return this.__inlineFragment(`Vehicle`, VehicleModelSelector, builder) }
}
export function selectFromNode() {
  return new NodeModelSelector()
}

export const nodeModelPrimitives = selectFromNode()