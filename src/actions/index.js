export const SOME = 'SOME'
export const EVERY = 'EVERY'

export function getSome({ p1, p2 }){
    return {
        type: SOME,
        p1,
        p2
    }
}

export function getEvery({ d1 }){
    return {
        type: EVERY,
        d1
    }
}