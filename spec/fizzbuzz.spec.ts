
/* 
    Welcome. 
        Radha- (Raa-The). Tampa. Earlier attend. Fizzbuzz achieved. mostly sql. asp long ago. 
            badges: hello world initial test list ✅ 
                    github ✅  
                    liveshare ⏳

        Alan.  Boulder.
        Dinesh. Tampa. Mac. liveshare ✅ no git credentials; vs code on web. ~infosys vm: direct 
                    gather.town ✅

     keerthi bhubaneswar chilly   pronounced "kee tea"   liveshare ✅

        lesson learned. use anonymous.

        our Definition of Done
            all tests pass?
            reveals intent?
            no duplication?
            fewest elements?


    blink retrospective
    white hat.   What did we do? Facts. Things a camera would record.
        3 participants; a dev; Kitty. 
        overview problem and initial test list
        then mostly in tdd red-green-refactor
        we got a test passing! 
        we got visual studio live share working with anononymous
    yellow hat.   What went well? Sunny. Benefits. 
        trying new things; new language (typescript)✅
        we got somet tests passing, more than one, 
        we did not rush, we got to refactoring (cleanup form green state)
        we got a full 90 minutes.

    black hat. cautious. critical.
        issue working on now function need to fix that -- left on red state
        never figured out a pure record type in typescript -- used a class Person
                which seemed kind of overkill; 
                I just wanted a pure record {name:string,nick:string}
                record with no constructor


*/

describe('greets with hello world', () => {

    // I think what we /really/ want is a little lookup data structure, e.g./
    //todo OK wanted to have a plain old data structure,  with name, nick... 
    // but all we found is this class

    class Person { 
        name : string; 
        nick : string; 
        
        constructor(){
            this.name = "Keerthi";
            this.nick = "Kitty";
        }
    }

    const Swetha = { name: "Swetha", nick: "" }
    const Keerthi = { name: "Keerthi", nick: "Kitty" }

    function nick(who: Person): string {
        if (who.nick === "") {
            return who.name
        } else {
            return who.nick
        }
    }
    function greeter(who: string): string {
        if (who === "Swetha") {
            return Swetha.nick  // maybe nick(Swetha) here would just work?

        }
        return nick(Keerthi)    // I want Keerthi to be instance of Person...
    }

    it.todo('greets Payal by name prounounced Pie-all')
    it.todo('greets Saikat by nickname Sai')

    it('greets Swetha by name', () => {
        const result = greeter("Swetha")
        expect(result).toBe("Swetha")
    })


    it('greets Keerthi by Kitty', () => {
        const result = greeter("Keerthi")
        expect(result).toBe("Kitty")
    })
    it.todo('greets Radhakrishna by nickname Radha')


})
describe('location and role ', () => {
    it.todo('knows location of person, e.g. Tampa')
    it.todo('knows role of person, e.g. BA')
})

describe('it knows achievement badges for people', () => {
    it.todo('Radha achieved /hello world initial test list/')

})