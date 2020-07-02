import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MaximizeIcon from '@material-ui/icons/Maximize';
import MinimizeIcon from '@material-ui/icons/Minimize';

const useStyles = makeStyles(theme => ({

        root: props => ({
            width: props.mode ===1 ? 275: 175,
            height: props.mode ===1 ? 305: 105,

        }),
        avatar: {
            backgroundColor: red[500],
        },
        title: {
            fontSize: 14
        },
        subtitle: {
            fontSize: 12
        },
        footer: {
            fontSize: 12
        }
    
}));




function Widget(props) {


    const classes = useStyles(props);
    const hideContent = props.mode === 2; 

    const handleExpandClick = () => {
        if(props.onExpand){
             props.onExpand()
        }
    };

    const handleMinimizeClick = () => {
        if(props.onMinimize){
            props.onMinimize()
       }
    }

    const Icon = () => {
        if(props.mode === 2){
            return (
                <IconButton onClick={handleExpandClick}>
                        <MaximizeIcon />
                    </IconButton>
            )
        }
        else{
            return (
                <IconButton onClick={handleMinimizeClick}>
                        <MinimizeIcon />
                    </IconButton>
            );
        }
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardHeader
                subheader="The Title-1"
                action={Icon()}>
            </CardHeader>
            <CardContent hidden={hideContent}>
                <Typography className={classes.title} color="primary" gutterBottom>
                    The Title 1
                </Typography>
                <Typography color="textPrimary" className={classes.subtitle} gutterBottom>
                    {new Date().toDateString()}
                    
                </Typography>
                
                <Typography variant="body2" color="secondary" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit.
        </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="caption" className={classes.footer}>
                    The Footer {props.data}
          </Typography>
            </CardActions>

        </Card>
    );

}

export default Widget;