<h1>Project Name: Movie Portal - Backend</h1>

<h2>Purpose:</h2>
    <p>
        This repository contains the backend of the <strong>Movie Portal</strong>, a web application that allows users to manage movies, add movies, update movies and add to favorite list operations. The backend is built using Node.js, Express, and MongoDB, with RESTful APIs for seamless integration with the frontend.
    </p>

<h2>Key features of the project:</h2>
    <ul>
        <li>
            <strong>Movie Management</strong>
            <ul>
                <li>Add, update, and delete movie details.</li>
                <li>Retrieve all movies.</li>
                <li>Access the highest rated movies with sorting and limit options.</li>
                <li>Delete specific movie by id</li>
                <li>Retrieve users favorite movie by user email.</li>
            </ul>
        </li>
        <li>
            <strong>User Authentication Integration</strong>
            <ul>
                <li>View website reviews and movie ratings.</li>
                <li>Create and manage personalized watchlists.</li>         
                <li>Routes designed to integrate with user authentication for personalized data retrieval.</li>         
            </ul>
        </li>
        <li>
            <strong>Search and Filtering</strong>
            <ul>
                <li>Powerful search options by title</li>
                <li>Filter movies by title or retrieve users favorite movies based on email.</li>
            </ul>
        </li>
        <li>
            <strong>Database Operations</strong>
            <ul>
                <li>Optimized MongoDB queries with upsert and sorting capabilities.</li>
                <li>Ensure efficient data handling and avoid duplicate entries with query checks</li>
            </ul>
        </li>
    </ul>

<h2>API Endpoints: </h2>

<ul>
        <li>
            <strong>Movie portal Routes</strong>
            <ul>
                <li>_GET_ /all-movies - Fetch all movie records.</li>
                <li>_GET_ /featured-movies - Fetch the high rated movies (limited to 6).</li>
                <li>_POST_ /add-movie - Add a new movie.</li>
                <li>_PUT_ /add-movie - update a new movie by id.</li>  
                <li>_DELETE_ /all-movies/:id - Delete a specific movie by ID.</li>   
                <li>_POST_ /my-favorites/:email - Fetch all movies for a user by email.</li>          
            </ul>
        </li>
        <li>
            <strong>NPM Packages Used</strong>
            <ul>
                <li>_express_ - Web framework for building RESTful APIs.</li>
                <li>_cors_ - Enable Cross-Origin Resource Sharing.</li>
                <li>_dotenv_ - Manage environment variables.</li>
                <li>_mongodb_ - MongoDB client for database operations.</li>
            </ul>
        </li>
    </ul>
