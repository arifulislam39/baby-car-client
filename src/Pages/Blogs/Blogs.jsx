import Head from "../../HeadTitle/Head";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto w-full mb-10 bg-cyan-50 p-10">
      <Head title="BLOGS"></Head>

      <div>
        <div className="">
          <h1 className="font-bold mt-10 text-4xl">Blog Questions:</h1>
          <hr className="border-zinc-950" />

          <h3 className="font-bold text-2xl mt-5">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>
          <p>
            <span className="font-bold">Access Token : </span> <br /> An Access
            Token is a string that a client use to make request to the resource
            server.Access token allows for access to different APIs and
            protected resources.
            <br />
            <span className="font-bold"> Refresh Token :</span> <br /> An
            Refresh Token is a string that client can use to get a new access
            token without the users interaction.
            <br />
            A refresh token must not allow the client to gain any access beyond
            the scope of the original grant. The refresh token exists to enable
            authorization servers to use short lifetimes for access tokens
            without needing to involve the user when the token expires.
            <br />
            <br />
            <span className="font-bold">How They work? : </span>
            <br />
            1.Client login with their username and password. <br />
            2.Server creates a token for the client. <br />
            3.Server sends a token to the client . <br />
            4. Client stores the token on LocalStorage or browser
            cookie(HTTPOnly). <br />
            5.Then client makes a request a copy of the token is send to the
            server for authorization. <br />
            6. Server verify the token before giving authorization. <br />
            7.Server responds to the clients request. <br />
            <br />
            <br />
            <span className="font-bold">Where we can stores ? :</span>
            We can stores them in 1. LocalStorage or 2. Browser
            cookie(HTTPOnly).
          </p>

          <h3 className="font-bold text-2xl mt-5">
            2. Compare SQL and NoSQL databases?
          </h3>
          <p>
            <span className="font-bold">SQL</span>
            1. RELATIONAL DATABASE MANAGEMENT SYSTEM. <br />
            2. These databases have fixed or static or predefined schema. <br />
            3. These databases are not suited for hierarchical data storage.{" "}
            <br />
            4. These databases are best suited for complex queries. <br />
            5. Vertically Scalable. <br />
            6. Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc..
            <br />
            <br />
            <span className="font-bold">NoSQL</span>
            1. Non-relational or distributed database system. <br />
            2. They have a dynamic schema. <br />
            3. These databases are best suited for hierarchical data storage.{" "}
            <br />
            4. These databases are not so good for complex queries. <br />
            5. Horizontally scalable. <br />
            6. Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc..
          </p>

          <h3 className="font-bold text-2xl mt-5">
            3. What is express js? What is Nest JS?
          </h3>
          <p>
            <span className="font-bold">Express JS : </span>
            Express is a Node.js web application framework that provides a wide
            range of functionality for constructing web and mobile applications.
            It is a layer built on top of Node that aids in the management of
            servers and routes.
            <br />
            <br />
            <span className="font-bold">Nest JS : </span>
            NestJS is a Node.js framework for building server-side applications.
            It is based on TypeScript and JavaScript. This framework is inspired
            by Angular, so most of what find in Angular can also be found in
            Nest, including providers, middleware, components, and services. It
            is safe to say that Nest can be easily learned by Angular developers
            for any type of project.
          </p>
          <h3 className="font-bold text-2xl mt-5">
            4. What is MongoDB aggregate and how does it work?
          </h3>
          <p>
            <span className="font-bold">MongoDB Aggregation : </span>
            MongoDB Aggregation uses an aggregate() method to perform the
            aggregation operations. Basically, this aggregation operation
            practices data records and provides calculated results. The
            aggregation operations assemble values from various documents
            together and are able to execute a range of operations, such as
            average, sum, maximum, minimum, etc., on the assembled data to
            provide only a result. A corresponding of MongoDB Aggregation in SQL
            is count(*) and with the group by. MongoDB Aggregation is identical
            to the aggregate function provided in SQL.
            <br />
            <br />
            <span className="font-bold"> It works</span>
            This MongoDB Aggregation uses the Pipeline concept in the UNIX
            command, where the pipeline defines the possibility to perform an
            operation on few inputs and apply the output resulted as the input
            for the succeeding command, and it follows the same. MongoDB
            supports this idea in the aggregation framework. Here, the operators
            come in three ranges such as stages, expressions, and accumulators.
            <br />
            There is a group of possible stages and every of those is considered
            as a group of documents as an input and generates a resulting group
            of documents otherwise, the last JSON document at the completion of
            the pipeline. This will then, in turn, be implemented for the
            succeeding stage and likewise. Some possible stages determined in
            the aggregation framework are as follows: <br /> <br />
             1. $match: It is a
            filtering operation and therefore this can decrease the number of
            documents that are given as input to the succeeding stage. <br />
             2.
            $project: It is applied to choose few particular fields from a
            collection. <br /> 3. $group: It performs the concrete aggregation that we
            are discussing overhead. <br /> 4. $sort: It helps to sort the documents. <br />
            5. $limit: It limits the sum of documents to look at, provided by
            the specific number beginning from the existing positions. <br /> 6. $skip:
            It helps to make skipping possible forwardly in the list of
            documents for a provided sum of documents. <br /> 7. $unwind: It is
            operated to unwind documents which are using arrays. While applying
            an array, the data element is a form of pre-joined and then this
            operation will be uncompleted with this to include distinct
            documents another time. Hence, with the help of this stage, we can
            increase the sum of documents for the succeeding stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
