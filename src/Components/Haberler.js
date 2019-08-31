import React from 'react';

const Haberler = ({match}) =>
    <h1>Haberler: { match.params.id }</h1>;

export default Haberler;