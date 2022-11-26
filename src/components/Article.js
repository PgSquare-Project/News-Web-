import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Articles from '../Pages/Articles';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0,0,0,0.3)",
        backgroundColor: "#fafafa",
        height: 600,
        padding: "20px",
        margin: "20px",
        borderRadius: "30px",
    },
    media: {
        height: 300,
    }
});

export default function Article({ article }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className={classes.card} id={article.id}>
                <CardMedia className={classes.media} component="img"
                    src={article.multimedia?.[0]?.url ?
                        `https://nytimes.com/${article.multimedia[0].url}` :
                        'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'} alt="news-img" />
                <CardContent>
                    <Typography color="primary" variant="h6">
                        <a href={article.web_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                            {article.headline.main}</a>
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                        {article.byline.original}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {article.snippet}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

Article.prototype = {
    article: PropTypes.object.isRequired,
}