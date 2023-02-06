import {GraphQLClient, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function comments (req,res) {

    const graphqlClient = new GraphQLClient(graphqlAPI,{
        headers:{
            authorization:`Bearer ${graphcmsToken}`
        }
    });

    const query1 = gql`
        mutation PostComment($name: String!, $email: String!, $comment:String!, $slug:String!){
            createComment(data:{name:$name, email:$email, comment:$comment, post:{connect:{slug:$slug}}}){
                id
            }
        }
    `; 

    const query2 = gql`
        mutation PublishComment($id: ID!){
            publishComment(where:{id:$id}, to:PUBLISHED){
                comment
                createdAt
                name
            }
        }
    `;
    try{
        let result = await graphqlClient.request(query1,req.body);
        result = await graphqlClient.request(query2,result.createComment)
        return res.status(200).send(result.publishComment);
    }
    catch(error){
        return res.status(500).send(error);
    }
    
}   