import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter } from 'react-router-dom'
import { NavLink, Route } from 'react-router-dom'
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Switch } from 'react-router';
import ClassFeedBack from './ClassFeedBack';
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from '../component/MainFeaturedPost';
import FeaturedPost from '../component/FeaturedPost';
import Sidebar from '../component/Sidebar';
import { getPost } from '../axio'
import { useQuery } from "react-query";
import {featuredPosts, mainFeaturedPosts} from '../data/mainPage';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    //const {data = {}, isFetching} = useQuery('getPost', getPost(postID))
    //if (isFetching) return <CircularProgress />;
    return (<>
        <MainFeaturedPost posts={mainFeaturedPosts} sx={{ px: 3 }} />
        <Grid container spacing={4}>
            <Grid item xs={12} md={9}>
                <h2 style={{ textAlign: 'Center' }}>最新文章</h2>
                {featuredPosts?.map((post) => (<FeaturedPost key={post.title} post={post} />))}
            </Grid>
            <Grid item xs={12} md={3}>
                <Sidebar/>
            </Grid>
        </Grid>
    </>);
};