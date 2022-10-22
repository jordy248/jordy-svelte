import { resolveGraphqlOptions } from "apollo-server-core";
import { GraphQLFloat, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { sortUserPlugins } from "vite";

import { graphQLData } from "./data.js";

export const createSchema = async () => {
	// You can substitute this with any way you want to build your schema
	// (that's why this is in an async function -- for libraries like TypeGraphQL)

	const UserType = new GraphQLObjectType({
		name: "User",
		description: "User Type",
		fields: () => ({
			id: { type: GraphQLInt },
			firstname: { type: GraphQLString },
			lastname: { type: GraphQLString },
			email: { type: GraphQLString },
			website: { type: GraphQLString },
			linkedin: { type: GraphQLString },
			github: { type: GraphQLString },
			jobs: { type: new GraphQLList(JobType) },
			education: { type: new GraphQLList(EducationType) },
			skills: { type: Skills },
		}),
	});

	const JobType = new GraphQLObjectType({
		name: "Job",
		description: "Job Type",
		fields: () => ({
			company: { type: CompanyType },
			positions: { type: new GraphQLList(PositionType) },
		}),
	});

	const CompanyType = new GraphQLObjectType({
		name: "Company",
		description: "Company Type",
		fields: () => ({
			name: { type: GraphQLString },
			industry: { type: GraphQLString },
			address: { type: AddressType },
		}),
	});

	const AddressType = new GraphQLObjectType({
		name: "Address",
		description: "Address Type",
		fields: () => ({
			streetNumber: { type: GraphQLInt },
			streetName: { type: GraphQLString },
			city: { type: GraphQLString },
			state: { type: GraphQLString },
			postalCode: { type: GraphQLInt },
			country: { type: GraphQLString },
		}),
	});

	const PositionType = new GraphQLObjectType({
		name: "Position",
		description: "Position Type",
		fields: () => ({
			title: { type: GraphQLString },
			startDate: { type: GraphQLString },
			endDate: { type: GraphQLString },
		}),
	});

	const EducationType = new GraphQLObjectType({
		name: "Education",
		description: "Education Type",
		fields: () => ({
			school: { type: GraphQLString },
			degree: { type: GraphQLString },
			field: { type: GraphQLString },
			dateReceived: { type: GraphQLString },
		}),
	});

	const Skills = new GraphQLObjectType({
		name: "Skills",
		description: "Skills Type",
		fields: () => ({
			web: { type: new GraphQLList(SkillType) },
			analytics: { type: new GraphQLList(SkillType) },
			marketing: { type: new GraphQLList(SkillType) },
			tooling: { type: new GraphQLList(SkillType) },
			other: { type: new GraphQLList(SkillType) },
		}),
	});

	const SkillType = new GraphQLObjectType({
		name: "Skill",
		description: "Skill Type",
		fields: () => ({
			name: { type: GraphQLString },
			yearsExperience: { type: GraphQLFloat },
		}),
	});

	return new GraphQLSchema({
		query: new GraphQLObjectType({
			name: "Query",
			description: "The main entrypoint to our API",
			fields: {
				double: {
					args: {
						number: { description: "The number to multiply", type: GraphQLInt },
					},
					description: "Get the number, times two",
					type: GraphQLInt,
					resolve(_source, { number }, { authorization }) {
						// Do what you want with authorization
						return number * 2;
					},
				},
				user: {
					args: {
						id: { description: "The user ID to search for", type: GraphQLInt}
					},
					description: "Returns the users",
					type: new GraphQLList(UserType),
					resolve(_source, { id }, { authorization }) {
						if (!id) return graphQLData;
						
						const users = graphQLData.filter(user => {
							return user.id === id
						});
						return users;
					}
				}
			},
		}),
	});

		// // users (query)
	// const users = {
	// 	// type: new GraphQLList(UserType),
	// 	type: UserType,
	// 	args: { id: { type: GraphQLInt } },
	// 	//@ts-ignore
	// 	async resolve(parent, args) {
	// 		return dat;
	// 	},
	// };

	// const QueryType = new GraphQLObjectType({
	// 	name: "QueryType",
	// 	description: "Queries",
	// 	fields: { users },
	// });

	// return new GraphQLSchema({
	// 	query: QueryType,
	// });
};


export const defaultQuery = `# Try out our API with a query like this:

query {
	user {
	  id
	  firstname
	  lastname
	  jobs {
		company {
		  name
		  industry
		  address {
			city
			state
		  }
		}
		positions {
		  title
		  startDate
		  endDate
		}
	  }
	  education {
		school
		degree
		field
		dateReceived
	  }
	  skills {
		web
		analytics
		marketing
		tooling
	  }
	}
  }
`;
