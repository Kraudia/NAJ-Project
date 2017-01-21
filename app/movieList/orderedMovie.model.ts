export interface OrderedMovieFilm {
    name: string,
    categoryIds: Array<string>,
    isAvailable: boolean,
    copiesLeft: number,
    fee: number
}
