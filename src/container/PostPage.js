import { useParams } from "react-router";
import Grid from '@material-ui/core/Grid';
import Sidebar from '../component/Sidebar';
import Markdown from 'markdown-to-jsx';
import PostAttributes from '../data/posts/PostAttribute'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import marked from "marked";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
const useStyles = makeStyles((theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
}));
function MarkdownListItem(props) {
    const classes = useStyles();
    return (
      <li className={classes.listItem}>
        <Typography component="span" {...props} />
      </li>
    );
  }
const options = {
    forceBlock:false,
    overrides: {
      h1: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: 'h4',
          sx: {textAlign: 'center'}
        },
      },
      h2: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h6' },
      },
      h3: {
        component: Typography,
        props: { gutterBottom: true, variant: 'h7' },
      },
      h4: {
        component: Typography,
        props: {
          gutterBottom: true,
          variant: 'caption',
          paragraph: true,
        },
      },
      p: {
        component: Typography,
        props: { 
            paragraph: true,
            sx: {textAlign: 'center'} },
        
      },
      a: { component: Link },
      li: {
        component: MarkdownListItem,
      },
    },
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    const {postID} = useParams();
    const [mdContent, setMdContent] = useState("");
    
    useEffect(()=>{
        // const reader = new FileReader();
        // reader.onload = async (e) => { 
        //     const text = (e.target.result)
        //     console.log(text)
        //     alert(text)
        //   };
        //   reader.readAsText('')
        // console.log('useeffect')
        fetch("https://raw.githubusercontent.com/UT0903/UT0903.github.io/master/_posts/2020-09-24-web-knowledge.md")
        .then((res)=>{
            return res.text()
        })
        .then((text)=>{
            //console.log('text', text)
            setMdContent(text)
        })
    }, [])
    
    console.log('mdContent',mdContent)
    return (<Grid container spacing={4}>
        <Grid item xs={12} md={9} sx={{paddingLeft: '100px'}}>
            <Markdown options={options}>{mdContent}</Markdown>
        </Grid>
        <Grid item xs={12} md={3}>
            <Sidebar/>
        </Grid>
    </Grid>);
}