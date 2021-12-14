import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
    }
  }
`;

function Home() {
  const { loading, error, data } = useQuery(GET_MOVIES);
  console.log(loading, error, data);
  if (loading) {
    return 'Loading...';
  }
  if (data && data.movies) {
    return (
      <div>
        {data.movies.map((dat) => {
          return (
            <div key={dat.id}>
              <Link to={`/${dat.id}`}>
                <img alt={'cover'} src={dat.medium_cover_image} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
