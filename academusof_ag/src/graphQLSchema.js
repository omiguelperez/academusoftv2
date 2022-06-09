import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';
import { mergeSchemas } from './utilities';


import {
	courseMutations,
	courseQueries,
	courseTypeDef
} from './MS/course/typeDefs';
import {
	studentMutations,
	studentQueries,
	studentTypeDef
} from './MS/student/typeDefs';
import {
	ValidadorQueries,
	ValidadorTypeDef
} from './MS/ag/typeDefs';
import {
	authMutations,
	AuthQueries,
	AuthTypeDef
} from './MS/Auth/typeDefs';
import courseResolvers from './MS/course/resolvers';
import studentResolvers from './MS/student/resolvers';
import ValidadorResolvers from './MS/ag/resolvers';
import AuthResolvers from './MS/Auth/resolvers';
// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		courseTypeDef,
		studentTypeDef,
		ValidadorTypeDef,
		AuthTypeDef
		
	],
	[
		courseQueries,
		studentQueries,
		ValidadorQueries,
		AuthQueries
	],
	[
		courseMutations,
		studentMutations,
		authMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		courseResolvers,
		studentResolvers,
		ValidadorResolvers,
		AuthResolvers
	)
});




