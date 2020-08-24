import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  AvatarContainer:{
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: "center",
  },
});

class Footer extends React.Component {
  render() {
    function Copyright() {
      return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://www.prismalink.co.id/">
            PT Prismalink International
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }
        return (
            <main>
                {/* Footer */}
                <footer className={this.props.classes.footer}>
                  <Typography variant="h6" align="center" gutterBottom>
                    Prismalink Team
                  </Typography>
                  <div className={this.props.classes.AvatarContainer}>
                    <Avatar alt="Taylor Swift" src={require("../static/images/developer/dev_01.jpg")} />
                    <Avatar alt="Travis Howard" src={require("../static/images/developer/dev_02.jpg")} />
                    <Avatar alt="Billie Eilish" src={require("../static/images/developer/dev_03.jpg")} />
                  </div>
                  <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                  </Typography>
                  <Copyright />
                </footer>
                {/* End footer */}
            </main>
        );
    }
}

export default withStyles(useStyles)(Footer);
