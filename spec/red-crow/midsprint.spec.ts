function renderThankYou(who: string[]) { return `Thank you ${names(who)}` }
function names(who: string[]) {
    if (who.length === 0)
        return ""
    if (who.length === 1) return `${who[0]}`
    const allButLast = who.slice(0, -1);
    const firstPart = allButLast.reduce((accum, item) => `${accum}, ${item}`)
    return `${firstPart} and ${who[who.length - 1]}`
}

type ParticipationRecord = { name: string, participated?: string[], enrolled?: string[] } //a person, and more: his record of participation

function whoParticipated(r: ParticipationRecord[]) {
    const result: string[] = r
        .filter(item => item.participated && (item.participated.length > 0))
        .map(item => item.name)
    return result
}

function queryWhoParticipatedAndRenderThanks(r: ParticipationRecord[]) {
    return renderThankYou(whoParticipated(r))
}

// report ratio
function queryParticipationRatioAndRenderIt(r: ParticipationRecord[]): string {
    return renderParticipationRatio(queryParticipationRatio(r))
}

type Fraction = { n: number, d: number }
function queryParticipationRatio(r: ParticipationRecord[]): Fraction {

    const count: number = whoParticipated(r).length

    const total: number = r.length
    return { n: count, d: total }//todo unhardcode
}

function renderParticipationRatio(ratio: Fraction): string {
    return `${ratio.n} of ${ratio.d} participated`//todo special cases, maybe. All. None.
}

//todo put above in a separate file, or two

describe("midsprint report", () => {

    /*  sample report.
           (1) 5 of 7 players participated in at least one 90 minute TDD session,
    
           (2) For a total of 9 manhours practice out of 35 reserved this sprint.
    
           (3) All participants earned the badge /initial test list/
    
           (4) Thank you Payal, Sai, Swetha, Radha and Kitty ⌛️
    
    */
    describe("I. queries and shows participation ratio", () => {

        it("🦮5 of 7 participated...", () => {
            const given: ParticipationRecord[] = [
                { name: "Kasturi" },
                { name: "Payal", participated: ["2-aug"] },
                { name: "Swetha", participated: ["2-aug"] },
                { name: "Radha", participated: ["2-aug/pm"] },
                { name: "Kitty", participated: ["8-aug"] },
                { name: "Bryce" },
                { name: "Sai", participated: ["8-aug", "3-aug"] },
            ]

            expect(queryParticipationRatioAndRenderIt(given))
                .toMatch(/5 of 7 participated/)

        })
    })


    describe("II. queries who participated and thanks them", () => {
        it("🦮thank you Larry and Moe", () => {
            const given: ParticipationRecord[] = [
                { name: "Larry", participated: ["3-Aug"] },
                { name: "Curley" },
                { name: "Moe", participated: ["3-Aug"] }
            ]

            const expected = "Thank you Larry and Moe"

            const result: string = queryWhoParticipatedAndRenderThanks(given)

            expect(result).toBe(expected)

        })
        describe("thanks participants by name", () => {

            it("thank you <names>", () => {
                const participants = ["Payal", "Sai", "Swetha", "Radha", "Kitty"]
                const result = renderThankYou(participants)
                expect(result).toBe("Thank you Payal, Sai, Swetha, Radha and Kitty")
            })

            it("renders zero", () => {
                expect(names([])).toBe("")
            })

            it("renders one name - Payal", () => {
                expect(names(["Payal"])).toBe("Payal")
            })
            it("renders many (2) names - Payal and Sai", () => {
                expect(names(["Payal", "Sai"])).toBe("Payal and Sai")
            })
            it("renders many (3) names - Payal, Sai and Swetha", () => {
                expect(names(["Payal", "Sai", "Swetha"]))
                    .toBe("Payal, Sai and Swetha")

            })




        })
        describe("query who participated", () => {
            it("many", () => {


                const history: ParticipationRecord[] = [
                    { name: "Swetha", participated: ["2-Aug", "8-Aug"] },
                    { name: "Payal", participated: ["2-Aug"], enrolled: ["16-Aug"] },
                    { name: "Kasturi" }
                    // Kasturi never participated; so would not be listed, if this were  event list.
                    // but listed because it's how I'm recording now, 
                    // as convenience for typist, and human readers, in "json-as-text"
                    // it would not be a typical query result, for that would include empty list of attended.
                    // but it's a good exercise in playing the hand dealt
                ]

                // spike in solo, and in pair, redo, even better...  illustrate that in TDD... w/a 2 or more..

                const expected = ["Swetha", "Payal"]

                type WhoParticipated = (r: ParticipationRecord[]) => string[]

                const result: string[] = whoParticipated(history);

                expect(result).toEqual(expected)

            })

            it("zero", () => {
                const given: ParticipationRecord[] = [{ name: "bob" }]
                expect(whoParticipated(given))
                    .toEqual([])
            })
            it("zero - empty dates", () => {
                const given: ParticipationRecord[] = [{ name: "bob", participated: [] }]
                expect(whoParticipated(given))
                    .toEqual([])
            })
            it("one", () => {
                const given: ParticipationRecord[] = [{ name: "bob", participated: ["3-Aug"] }]
                expect(whoParticipated(given))
                    .toEqual(["bob"])
            })


        })

    })

})

describe("III. queries and summarizes badges earned", () => {
    it.todo("all participants earned /initial test/")
    it.todo("Kitty earned /liveshare/")
    it.todo("Radha earned /double/ and /full house/")

})

describe("IV. queries and summarises total manhours of practice", () => {
    it.todo("9 of 35...")
})
