/* All three of these functions should return the INDEX
 * of the element in `arr` that is closest to `value` without going over
 */

export function linearUnsorted(arr: number[], value: number): number {
    let bestindex = 0;
    /* Convert the pseudocode into typescript */
    /*
        loop I from 1 to the last element of the array
            if arr[I] is closer to value than arr[BESTINDEX] without going over then
                replace BESTINDEX with I
            end if
            if arr[BESTINDEX] == value then
                // we can't get any better
                break loop
            end if
        end loop
    */
    return bestindex;
}

// This one can assume the array is sorted
export function linearSorted(arr: number[], value: number): number {
    let bestindex = 0;
    /* Convert the pseudocode into typescript */
    /*
        loop I from 1 to the last element of the array
            if arr[I] is closer to value than arr[BESTINDEX] without going over then
                replace BESTINDEX with I
            end if
            if arr[BESTINDEX] >= value then
                // we can't get any better since the array is sorted
                break loop
            end if
        end loop
    */
    return bestindex;
}
// this one will only return AN index of the correct value
// it may not be the leftmost one.
export function binary(arr: number[], value: number): number {
    let bestindex = 0;
    /*
    LEFT=0;
    RIGHT=last index of array

    loop while LEFT <= RIGHT
        MID = (LEFT + RIGHT) div 2
        // check extremes. 
        If LEFT works, return it.
        else if LEFT is to big, return the bestindex
        else if RIGHT works or is smaller than value, return it
        // use the MID to split the work
        else if MID works, return it
        else if MID < value, make MID the bestindex and make LEFT=MID
        else if MID > value, make RIGHT=MID
    end loop
    */
    return bestindex;
}