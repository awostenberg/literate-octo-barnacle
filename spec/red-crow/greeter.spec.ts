describe("greets by name", () => {
    type Name = {name:string,nick?:string}
    const names:Name[] = [{name:"Swetha"}, {name:"Saikat",nick:"Sai"}]

    function nick2(names:Name[],legalName: string) {
        const nameRecord = names.find(item => item.name===legalName)
        return (nameRecord && nameRecord.nick)?nameRecord.nick:legalName
    }

    function curryNick2(db:Name[]): (s:string)=>string {
        return function(who:string):string {return nick2(db,who)}


    }

    const nick33 = (who:string) => curryNick2(names)
    function nick(legalName:string) {return nick2(names,legalName)}

    function greeter(who: string): string { return `Hello, ${nick(who)}` }
    it("greets by name if listed", () => {
        expect(greeter("Swetha")).toBe("Hello, Swetha")
    })

    it("greets by nickname if known", () => {
        expect(greeter("Saikat")).toBe("Hello, Sai")
    })

    it("greets by name if unlisted", () => {
        expect(greeter("Bob")).toBe("Hello, Bob")
    })
})