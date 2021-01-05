const {gql, ApolloServer} = require("apollo-server")


const produtos = [
    {
        id: 1,
        nome: 'Notebook',
        valor: 12000.32

    },
    {
        id: 2,
        nome: 'TV',
        valor: 14000.32

    },
    
]
const usuarios = [
    {
        id:1,
        nome:'Graphql',
        salario: 1234.5,
        idade: 23,
        ativo: true
    },
    {
        id:2,
        nome:'React',
        salario: 61234.5,
        idade: 5,
        ativo: false
    },
    
]
const typeDefs = gql`

    type Produto {
        id: ID
        nome: String
        valor: Float
    }

    type Usuario {
        idade: Int
        salario: Float 
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String!]!
    }
    type Query{
        usuarios:[Usuario]
        produtos: [Produto]
    }
`
const resolvers = {
    Query:{
        usuarios(){
            return usuarios
        },
        produtos(){
            return produtos
        }
        // idade(){
        //     return 18
        // },
        // salario(){
        //     return 1500.20
        // },
        // nome(){
        //     return "Grapql"
        // },
        // ativo(){
        //     return true
        // },
        // id(){
        //     return 123456
        // },
        // tecnologias(){
        //     return ['Graphql', 'React', 'css']
        // }
    }
};
const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()