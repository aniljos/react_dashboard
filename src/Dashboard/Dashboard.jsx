import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Widget from './Widget';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        //   marginLeft: 70,
        //   marginRight:30,
        marginTop: 30,
    },
    paper: {
        height: 105,
        width: 140,
    },
    widget: {
        height: 105,
        width: 140,
    }
}));

const allWidgets = [
    Widget, Widget, Widget, Widget, Widget,
    Widget, Widget, Widget, Widget, Widget,
    Widget, Widget, Widget, Widget, Widget
]
Object.defineProperty(Array.prototype, 'chunk1', {
    value: function (chunkSize) {
        var R = [];
        for (var i = 0; i < this.length; i += chunkSize)
            R.push(this.slice(i, i + chunkSize));
        return R;
    }
});

function Dashboard() {


    const [widgets, setWidgets] = useState(allWidgets);


    useEffect(() => {



    }, []);

    // function splitArray(array, chunkSize) {
    //     var R = [];
    //     for (var i = 0; i < array.length; i += chunkSize)
    //     {
    //         const r = array.slice(i, i + chunkSize);
    //         R.push(r);
    //         console.log(i, chunkSize, r);
    //     }

    //     return R;
    // }

    var perChunk = 5
    var results = widgets.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])


    const onWidgetClicked = (index) => {
        console.log("onWidgetClicked: ", index);
    }

    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={4}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    {results[0].map((WidgetComponent, index) => (
                        <Grid key={index} item>
                            <WidgetComponent mode={2}  onChange={() => onWidgetClicked(index)}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    {results[2].map((WidgetComponent, index) => (
                        <Grid key={index} item>        
                            <WidgetComponent mode={2} onChange={() => onWidgetClicked(index)}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    {results[2].map((WidgetComponent, index) => (
                        <Grid key={index} item>
                            <WidgetComponent mode={2} onChange={() => onWidgetClicked(index)}/>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Dashboard;