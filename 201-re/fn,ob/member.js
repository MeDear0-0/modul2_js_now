class Membership{
    static autoId = 1

    constructor(){
        this.members = [{memberId: Membership.autoId++, memberName:name}]
    }
    
    findMemberId(id) {
        return this.members.findIndex({memberId: id})
    
    }
    findMemberName(name) {
        this.members.findIndex((Memname) => {
            Memname.name.toLowerCase() === name.toLowerCase()
        })
    }
    subscribe(name) {
        
    }
    unsubscribe(id) {

    }
}

// const mem = new Membership(1,'gg')
const mem1 = new Membership([1,'ff'])
console.log(mem1)