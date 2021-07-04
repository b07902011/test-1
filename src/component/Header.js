import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useLocation } from 'react-router-dom'

function Header({ data, onLogin, onLogout }) {
  const siteTitle = "UT's Blog | 個人部落格"
  const sections = [
    { title: '首頁', url: '/' },
    { title: '台大修課心得', url: '/classFeedBack' },
    { title: 'NTU作業死線產生器', url: '/todolist'},
    { title: 'NTU課程成績分佈查詢', url: '/search'},
    { title: '我的文章', url: '/post'}
  ];
  const location = useLocation();
  console.log(location)
  return (
    <React.Fragment>
      
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {/* <Button size="small">Subscribe</Button> */}
        
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {siteTitle}
        </Typography>
        {data===null?
          (<><Typography variant="outlined" style={{fontSize:"13px", backgroundColor:"rgba(0, 0, 0, 0)", marginRight:"10px"}} gutterBottom>
          尚未登入
          </Typography>
          <Button variant="outlined" size="small" onClick={onLogin}>
            登入
          </Button></>):
          (<><Typography variant="outlined" style={{fontSize:"13px", backgroundColor:"rgba(0, 0, 0, 0)", marginRight:"10px"}} gutterBottom>
          {data.account}已登入
          </Typography>
          <Button variant="outlined" size="small" onClick={onLogout}>
            登出
          </Button></>)
        }
      </Toolbar>
      
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-around', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 1 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Header;
