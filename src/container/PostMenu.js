import FeaturedPost from '../component/FeaturedPost';
import Grid from '@material-ui/core/Grid';
import Sidebar from '../component/Sidebar';
import {featuredPosts} from '../data/mainPage';
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return (<Grid container spacing={4}>
    <Grid item xs={12} md={9}>
        <h2 style={{ textAlign: 'Center', paddingTop:'50px' }}>熱門文章</h2>
        {featuredPosts?.map((post) => (<FeaturedPost key={post.title} post={post} />))}
        <h2 style={{ textAlign: 'Center', paddingTop:'50px' }}>最新文章</h2>
        {featuredPosts?.map((post) => (<FeaturedPost key={post.title} post={post} />))}
    </Grid>
    <Grid item xs={12} md={3}>
        <Sidebar/>
    </Grid>
</Grid>);
}