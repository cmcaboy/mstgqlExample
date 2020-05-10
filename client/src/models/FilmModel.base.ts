/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { FilmCharactersConnectionModel, FilmCharactersConnectionModelType } from "./FilmCharactersConnectionModel"
import { FilmCharactersConnectionModelSelector } from "./FilmCharactersConnectionModel.base"
import { FilmPlanetsConnectionModel, FilmPlanetsConnectionModelType } from "./FilmPlanetsConnectionModel"
import { FilmPlanetsConnectionModelSelector } from "./FilmPlanetsConnectionModel.base"
import { FilmSpeciesConnectionModel, FilmSpeciesConnectionModelType } from "./FilmSpeciesConnectionModel"
import { FilmSpeciesConnectionModelSelector } from "./FilmSpeciesConnectionModel.base"
import { FilmStarshipsConnectionModel, FilmStarshipsConnectionModelType } from "./FilmStarshipsConnectionModel"
import { FilmStarshipsConnectionModelSelector } from "./FilmStarshipsConnectionModel.base"
import { FilmVehiclesConnectionModel, FilmVehiclesConnectionModelType } from "./FilmVehiclesConnectionModel"
import { FilmVehiclesConnectionModelSelector } from "./FilmVehiclesConnectionModel.base"
import { RootStoreType } from "./index"


/**
 * FilmBase
 * auto generated base class for the model FilmModel.
 *
 * A single film.
 */
export const FilmModelBase = ModelBase
  .named('Film')
  .props({
    __typename: types.optional(types.literal("Film"), "Film"),
    /** The title of this film. */
    title: types.union(types.undefined, types.null, types.string),
    /** The episode number of this film. */
    episodeID: types.union(types.undefined, types.null, types.integer),
    /** The opening paragraphs at the beginning of this film. */
    openingCrawl: types.union(types.undefined, types.null, types.string),
    /** The name of the director of this film. */
    director: types.union(types.undefined, types.null, types.string),
    /** The name(s) of the producer(s) of this film. */
    producers: types.union(types.undefined, types.null, types.array(types.union(types.null, types.string))),
    /** The ISO 8601 date format of film release at original creator country. */
    releaseDate: types.union(types.undefined, types.null, types.string),
    speciesConnection: types.union(types.undefined, types.null, types.late((): any => FilmSpeciesConnectionModel)),
    starshipConnection: types.union(types.undefined, types.null, types.late((): any => FilmStarshipsConnectionModel)),
    vehicleConnection: types.union(types.undefined, types.null, types.late((): any => FilmVehiclesConnectionModel)),
    characterConnection: types.union(types.undefined, types.null, types.late((): any => FilmCharactersConnectionModel)),
    planetConnection: types.union(types.undefined, types.null, types.late((): any => FilmPlanetsConnectionModel)),
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

export class FilmModelSelector extends QueryBuilder {
  get title() { return this.__attr(`title`) }
  get episodeID() { return this.__attr(`episodeID`) }
  get openingCrawl() { return this.__attr(`openingCrawl`) }
  get director() { return this.__attr(`director`) }
  get producers() { return this.__attr(`producers`) }
  get releaseDate() { return this.__attr(`releaseDate`) }
  get created() { return this.__attr(`created`) }
  get edited() { return this.__attr(`edited`) }
  get id() { return this.__attr(`id`) }
  speciesConnection(builder?: string | FilmSpeciesConnectionModelSelector | ((selector: FilmSpeciesConnectionModelSelector) => FilmSpeciesConnectionModelSelector)) { return this.__child(`speciesConnection`, FilmSpeciesConnectionModelSelector, builder) }
  starshipConnection(builder?: string | FilmStarshipsConnectionModelSelector | ((selector: FilmStarshipsConnectionModelSelector) => FilmStarshipsConnectionModelSelector)) { return this.__child(`starshipConnection`, FilmStarshipsConnectionModelSelector, builder) }
  vehicleConnection(builder?: string | FilmVehiclesConnectionModelSelector | ((selector: FilmVehiclesConnectionModelSelector) => FilmVehiclesConnectionModelSelector)) { return this.__child(`vehicleConnection`, FilmVehiclesConnectionModelSelector, builder) }
  characterConnection(builder?: string | FilmCharactersConnectionModelSelector | ((selector: FilmCharactersConnectionModelSelector) => FilmCharactersConnectionModelSelector)) { return this.__child(`characterConnection`, FilmCharactersConnectionModelSelector, builder) }
  planetConnection(builder?: string | FilmPlanetsConnectionModelSelector | ((selector: FilmPlanetsConnectionModelSelector) => FilmPlanetsConnectionModelSelector)) { return this.__child(`planetConnection`, FilmPlanetsConnectionModelSelector, builder) }
}
export function selectFromFilm() {
  return new FilmModelSelector()
}

export const filmModelPrimitives = selectFromFilm().title.episodeID.openingCrawl.director.producers.releaseDate.created.edited
