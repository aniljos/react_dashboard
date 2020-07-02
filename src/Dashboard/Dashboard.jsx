import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import Widget3 from './Widget3';
import Widget4 from './Widget4';





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

// const allWidgets = [
//     Widget1, Widget2, Widget3, Widget4, Widget3,
//     Widget1, Widget2, Widget4, Widget3, Widget2,
//     Widget3, Widget2, Widget1, Widget4, Widget2
// ]
const allWidgets = [
    Widget1, Widget2, Widget3, Widget4
];


function Dashboard() {


    const [widgets, setWidgets] = useState(allWidgets);
    const [expanded, setExpanded] = useState(false);
    const ActiveWidget = useRef(null);

    useEffect(() => {



    }, []);



    var perChunk = 5
    var results = widgets.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push({ index, item })

        return resultArray
    }, [])
    console.log("results", results);

    const onWidgetExapndedClicked = (index) => {
        console.log("onWidgetClicked: ", index);
        const widgetsCopy = [...widgets];
        if (ActiveWidget.current !== null) {
            widgetsCopy.push(ActiveWidget.current);
        }
        const activeWidget = widgets[index];
        ActiveWidget.current = activeWidget
        widgetsCopy.splice(index, 1);
        setWidgets(widgetsCopy);
        setExpanded(true);

    }
    const onWidgetMinimize = () => {

        const widgetsCopy = [...widgets];
        if (ActiveWidget.current !== null) {
            widgetsCopy.push(ActiveWidget.current);
            ActiveWidget.current = null;
            setWidgets(widgetsCopy);
            setExpanded(false);
        }
    }

    const classes = useStyles();

    if (!expanded) {
        return (
            <Grid container className={classes.root} spacing={4}>
                <Grid item xs={12}>

                    {results.map((resultsItem, resultsIndex) => {

                        return (
                            <Grid key={resultsIndex} container justify="center" spacing={3}>
                                {resultsItem.map((component, index) => {

                                    const WidgetComponent = component.item;
                                    return (
                                        <Grid key={index} item>
                                            <WidgetComponent mode={2}
                                                onExpand={() => onWidgetExapndedClicked(component.index)} />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        );
                    })}

                </Grid>

            </Grid>
        );
    }
    else {
        return (
            <Grid container className={classes.root} justify="center" spacing={4}>
                <Grid item xs={4} >
                    {ActiveWidget.current !== null ?
                        <ActiveWidget.current mode={1} onMinimize={onWidgetMinimize} /> : null}
                </Grid>
                <Grid item xs={6}>
                    <Grid container justify="center" spacing={3}>
                        {widgets.map((WidgetComponent, index) => (
                            <Grid key={index} item>
                                <WidgetComponent mode={2} onExpand={() => onWidgetExapndedClicked(index)} />
                            </Grid>
                        ))}
                    </Grid>

                </Grid>

            </Grid>
        )
    }

}

export default Dashboard;