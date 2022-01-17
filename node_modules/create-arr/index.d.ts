declare module "create-arr" {
    /**
     * Creates an array of specified length and executes a callback function for each index.
     * @param length Length of array.
     * @param value Value mapper function.
     */
    function arr<T>(length: number, value: (index: number) => T): T[];
    /**
     * Creates an array of specified length and fills it with specified value.
     * @param length Length of array.
     * @param value Fill value.
     */
    function arr<T>(length: number, value: T): T[];

    namespace arr {
        /**
         * Creates a range from start with length, and fills it with a callback function.
         * @param start Start index.
         * @param length Length of array.
         * @param filler Filler function for each index.
         */
        export function r<T>(start: number, length: number, filler: (value: number, index: number) => T): T[];
        /**
         * Creates a range from start with specified length.
         * @param start Start value for range.
         * @param length Length of range.
         */
        export function r(start: number, length: number): number[];
        /**
         * Creates a range from 0 to length exclusive.
         * @param length Length of range.
         */
        export function r(length: number): number[];
    }

    export default arr;
}
