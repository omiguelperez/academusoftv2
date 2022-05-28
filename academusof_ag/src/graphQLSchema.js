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
import courseResolvers from './MS/course/resolvers';
import studentResolvers from './MS/student/resolvers';
// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		courseTypeDef,
		studentTypeDef
	],
	[
		courseQueries,
		studentQueries
	],
	[
		courseMutations,
		studentMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		courseResolvers,
		studentResolvers
	)
});




