describe('directs psa data', () => {
    //tdd initial test list.   red->green->refactor
    //tdd guided by zombies. zero. one. many.  BIES. s=simplicity
    //definition of done (DoD):  
    //  all tests pass? reveals intention? no duplication? fewest elements?

    //next 4 after hours .. cracked the riddle..redo in ensemble it'll be better
    type Whobody = { name: string, nick?: string }
    const kkk: Whobody = { name: "bob", nick: "bobbie" }
    function applesauce(who: { name: string, nick: string }) { return "kitty" }
    function bananna(who: Whobody) { return "karl" }

    //todo reveal intent: option, not special value ✅
    const Swetha: Whobody = { name: "Swetha" }
    const Saikat: Whobody = { name: "Saikat", nick: "Sai" }

    function bestName(who: Whobody): string { return who.nick ? who.nick : who.name }//sweet symmetry "?'
    //does bestName capture intent better than nick?
    function greeter(who: Whobody) { return "Hello, " + bestName(who) }
    it("knows Swetha goes by her name", () => {
        expect(bestName(Swetha)).toBe("Swetha")
    })
    it("knows Saikat goes by nickname Sai", () => {
        expect(bestName(Saikat)).toBe("Sai")
    })

    it("says hello using best name", () => {
        expect(greeter(Swetha)).toBe("Hello, Swetha")
    })


    /* PSA. TDD Coaching. 9-Aug. Week I. TDD in states and moves https://tinyurl.com/ympnfnhz
        Midway in the sprint we've had 5 of 7 players join at least one 90 minute TDD joint practice session 
        for 9 total manhours of practice, out of 35 reserved this sprint.

        All participants earned the 'initial test list' badge.
        
        Thank you Payal, Sai, Radha, Swetha, and Kitty, for investing time to sharpen the saw, together.

        Enrollment for TDD coaching is open. Book a time https://calendly.com/alan-wostenberg/coding-dojo-learning-ensemble . 
        
        DIY Kit https://tinyurl.com/5n7adan4

    */

    /* PSA. TDD Coaching. 11-Aug. 2 of 7 have enrolled in a TDD coding session in the upcomming week.
        Thank you Payal and Kitty.
        *technê*, the greek word from which we get our term "technology", refers to the skill of the worker.
        If you get 3 TDD practice sessions in this sprint,
        you'll achive 90% of the 5 hours Somak budgeted for this investment in you. Techne.
    
        Book a time https://calendly.com/alan-wostenberg/coding-dojo-learning-ensemble . 
            
    */

    const cohorts: Cohort[] = [
        {
            nth: 1,
            start: "2-Aug", people: [
                "Kasturi",
                { who: "Swetha", participatedIn: [1] },
                { who: "Payal", participatedIn: [1, 3], enrolledIn: [6], pronounced: "pie-all" }]
        },
        {
            nth: 2,
            start: "2-Aug", people: [
                { who: "Radhakrishna", participatedIn: [2,4], enrolledIn: [5], nick: "Radha", city: "Tampa", pronounced: "Raa-The" },
                "Bryce",
                { who: "Keerthi", participatedIn: [3], enrolledIn: [6], nick: "Kitty", city: "Bhubaneswar" },
                { who: "Saikat", participatedIn: [1, 3], nick: "Sai" },]
        }
    ]

    const sessions = [
        [1, "Thu 3-aug/am"], [2, "Thu 3-aug/pm"], [3, "Tue 8-aug/am"],   //first sprint starting 2-Aug
        [4, "Mon 14-aug/pm"], [5, "Tue 15-aug/pm"],
        [6, "Wed 16-aug/am"]                                             //second sprint starting 16-Aug
    ]
    
    type Badge = "initial test list"|"liveshare"|"github.dev commiter"|"double dojo"|"full house"|"satoshi smiles"
    type Merit = {who:Name, badge: Badge, on: string} 
    type Name = "Saikat"|"Keerthi"|"Bryce"|"Radhakrishna"|"Payal"|"Swetha"|"Kasturi"
    const merited:Merit[] = [
        {who:"Swetha", badge: "initial test list", on: "3-aug"},
        {who:"Saikat", badge: "initial test list", on: "3-aug"},
        {who:"Payal", badge: "initial test list", on: "3-aug"},
        {who:"Radhakrishna", badge: "initial test list", on: "3-aug"},
        {who:"Radhakrishna", badge: "satoshi smiles", on: "3-aug"},
        {who:"Keerthi", badge: "liveshare", on: "8-aug" },
        {who:"Keerthi", badge: "initial test list", on: "8-aug"},
        {who:"Radhakrishna", badge: "liveshare", on: "14-aug"},
        {who:"Radhakrishna", badge: "github.dev commiter", on: "14-aug"},
        ]

    // guiding test: Midway in the sprint we've had 5 of 7 players join at least one 90 minute TDD joint practice session 
    //               for 9 total manhours of practice, out of 35 reserved this sprint.

    it.todo("computes participation midway in sprint 5 of 7")

    type ParticipationSummary = { participated: number, of: number }

    interface Reportable<T> {
        value: (x: T) => string;
    }
    const reportParticipation: Reportable<ParticipationSummary> = {
        value: (x) => 
            "Midway in the sprint " + 
            `we've had ${x.participated} of ${x.of} players` +
             "join at least one 90 minute TDD joint practice session",
    };

 

    it("renders mid sprint participation report as markdown", () => { //guiding test
        const expected = /5 of 7 players/
        const result =  reportParticipation.value({participated:5, of:7})

        expect(result).toMatch(expected)

        // or
        expect(reportParticipation
            .value({participated: 5, of:7}))
            .toMatch(/5 of 7 players/)
        //reveals intent? no duplication? fewest elements?
    })


    type Person = string | { who: string, participatedIn?: number[], enrolledIn?: number[], nick?: string, city?: string, pronounced?: string }
    type Cohort = { nth: number, start: string, people: Person[] }

    //type Badge = "initial test list" | "liveshare" | "satoshi smile" | "five hours"


    it.todo("knows who participated this week? this sprint?")
    it.todo("knows who enrolled upcoming week")
    it.todo("emits markdown thanks for participating")
    it.todo("emits markdown badges earned this week")
    it.todo("records session time as zulu time")

    //todo this in a module, maybe
    describe("knows session times", () => {
        it("knows morning session at 10 mdt as 16z", () => {
            expect(morningSession().getUTCHours()).toBe(16)
        })
        it("knows afternoon session at 1:30 mdt as 1930z", () => {
            expect(afternoonSession().getUTCHours()).toBe(19)
        })
        it.todo("parses *Thu 3-aug/am* as a morning session of that day")

        it.todo("ignores weekday of *Thu 3-aug/am*")
    })

    function morningSession(): Date { return new Date(Date.parse("3 Aug 2023 10:: MDT")) }
    function afternoonSession(): Date { return new Date(Date.parse("3 Aug 2023 1:30:PM MDT")) }


    // or older
    const cohort_1: Cohort = {
        nth: 1,
        start: "2-Aug", people: [
            "Kasturi",
            { who: "Swetha", participatedIn: [1] },
            { who: "Payal", participatedIn: [1, 3], enrolledIn: [6], pronounced: "pie-all" }]
    }

    const cohort_2: Cohort = {
        nth: 1, start: "2-Aug", people: [
            { who: "Radhakrishna", participatedIn: [2], enrolledIn: [4, 5], nick: "Radha", city: "Tampa" },
            "Bryce",
            { who: "Keerthi", participatedIn: [3], enrolledIn: [6], nick: "Kitty", city: "Bhubaneswar" },
            { who: "Saikat", participatedIn: [1, 3], nick: "Sai" },]
    }


    /*   psa 03
       PSA. Enrollment for TDD coaching is open. Book a time.  5 of 7 enrolled.
    
            I will linger after today's standup to assist as needed.
    
        
    
        */


    let cohort1 = {
        start: "2-Aug",
        people: ["Kasturi", { Swetha: { enrolled: true } }, { Payal: { enrolled: true } }]
    }




    let cohort2 = {
        start: "2-Aug",
        people: [{ Radha: { enrolled: true } }, "Bryce", { Moningi: { enrolled: true } }, { Saikat: { enrolled: true } }]
    }

    // cohorts
    /* PSA.
       Somak entrusted us with an investment of 5 hours/person/sprint 
       in TDD Coaching over the next 10 sprints, 
       organized into small learning cohorts. 

       Open enrollment for TDD coaching sessions begins Wednesday for cohorts 1 and 2

       Here is a strawman proposal for review (first 2 pages summarize: the rest is tl;dr)
       
       I'll be around after sprint planning to discuss.
       */
    let cohortTu1 = { start: "2-Aug", people: ["Kasturi", "Swetha", "Payal"] }
    let cohortTu2 = { start: "2-Aug", people: ["Radna", "Bryce", "Moningi", "Saikat"] }

})
