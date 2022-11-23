import * as pt from "pareto-core-types"

export type FSplitString = ($: {
    value: string
    splitter: string
}) => pt.Array<string>

export type FSplitStringIn2 = ($: {
    value: string
    splitter: string
}) => {
    first: string
    second: string | null
}

export type FTrimEnd = ($: string) => string

export type FStringLength = ($: string) => number

export type FSubStr = ($: {
    readonly "value": string,
    readonly "begin": number,
    readonly "length": number,
}) => string

export type FStartsWith = ($: {
    readonly "contextString": string
    readonly "searchString": string
}) => boolean