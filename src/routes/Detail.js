import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';

const GET_MOVIE = gql`
  query getById($id: Int!) {
    movie(id: 38509) {
      title
      medium_cover_image
      description_intro
    }
  }
`;

function Detail() {
  const { id } = useParams();
  console.log(parseInt(id));
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { id: 38509 },
  });
  console.log(error);
  if (loading) {
    return 'loading';
  }
  if (data && data.movie) {
    return data.movie.title;
  } else {
    return 'nothing';
  }
}

export default Detail;
