const { projects, clients } = require('../sampleData.js');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList } = require('graphql');

//Mongoose models
const Project = require('../models/Project.js');
const Client = require('../models/Client.js');

//project type
const ProjectType = new GraphQLObjectType({
    name:"Project",
    fields:() => ({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        description:{type:GraphQLString},
        status:{type:GraphQLString},
        client:{
            type:ClientType,
            resolve(parent,args){
                return Client.findById(parent.clientId);
            }
        }
    })
});

//client type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    }) 
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        clients:{
            type:new GraphQLList(ClientType),
            resolve(parent,args){
                return Client.find();
            }
        },
        client:{
            type:ClientType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Client.findById(args.id);
            }
        },
        projects:{
            type:new GraphQLList(ProjectType),
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Project.find();
            }
        },
        projects:{
            type:ProjectType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Project.findById(args.id);
            }
        }
    }
});





module.exports = new GraphQLSchema({
    query:RootQuery,
});