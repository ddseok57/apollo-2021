import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';

const GET_MOVIE = gql`
  query getById($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      description_intro
    }
  }
`;

function Detail() {
  const { id } = useParams();
  console.log(parseInt(id));
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
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
