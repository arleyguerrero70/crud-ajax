import perfomer from '/librery/request.js'

export class ToDo {
    static async all(){
        let todos = await perfomer({
            type: "listAll"
        })
        return todos.map( todoJSON => new ToDo(todoJSON))
    }

    constructor(args){
        this.userId = args.userId
        this.title = args.title
        this.completed = args.completed
        this.id= args.id
    }
}