import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './common/App/App';

import PageHome         from './pages/PageHome/PageHome';

import PageStandard     from './pages/PageStandard/PageStandard';

import PageExhi         from './pages/PageExhi/PageExhi';
import PageExhiYear     from './pages/PageExhiYear/PageExhiYear';

import PageEvent        from './pages/PageEvent/PageEvent';
import PageArtist       from './pages/PageArtist/PageArtist';
import PageCollection   from './pages/PageCollection/PageCollection';
import PageText         from './pages/PageText/PageText';
import PageNotFound     from './pages/PageNotFound/PageNotFound';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PageHome} />
        <Route path="/p/:pageName"              component={PageStandard}   />

        <Route path="/exhi/:exhiId/:exhiSlug"   component={PageExhi}       />
        <Route path="/year/:year"               component={PageExhiYear}   />

        <Route path="/event/:eventId"           component={PageEvent}      />
        <Route path="/artist/:artistId"         component={PageArtist}     />
        <Route path="/c/:collectionId"          component={PageCollection} />
        <Route path="/t/:textId"                component={PageText}       />
        <Route path="*"                         component={PageNotFound}   />
    </Route>
);
