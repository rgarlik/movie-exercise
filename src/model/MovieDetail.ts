/**
 * The default "movie detail" type as it comes from the backend API
 */
export default interface MovieDetail {
    Title: string;
    Year: string;
    Released: string;
    Genre: string;
    Language: string;
    Rated: string;
    Plot: string;
    Poster: string;
    imdbID: string;
}
