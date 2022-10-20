import { Box, Button, CardActions, Card, CardContent } from "@mui/material";
var React = require('react');

const styles = {
    card: {
        // Provide some spacing between cards
        margin: 16,

        // Use flex layout with column direction for components in the card
        // (CardContent and CardActions)
        display: "flex",
        flexDirection: "column",

        // Justify the content so that CardContent will always be at the top of the card,
        // and CardActions will be at the bottom
        justifyContent: "center"
    },
    githubButton: {
        backgroundColor: "orange"
    },
    cardTitle: {
        fontSize: "3em",
        color: "red",
        textShadow: "1 1 1 black",
        width: "100%",
        textAlign: "center",
        marginBottom: "15px"
    },
    secondaryHeader: {
        fontSize: "1.625em",
        color: "orange",
        textShadow: "1 1 1 black",
        width: "100%",
        textAlign: "center",
        marginBottom: "5px"
    },
    cardContent: {
        justifyContent: "center"
    },
    afterUnderlineContent: {
        fontSize: "1em",
        color: "black",
        textShadow: "1 1 1 black",
        width: "100%",
        textAlign: "center",
        marginBottom: "10px"
    }
}

export default class HomePage extends React.Component {

    render() {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <Card className='invitationCard' sx={{ minWidth: 275, m: 2, height: '100%' }} >
                    <CardContent style={styles.cardContent}>

                        <h1 style={styles.cardTitle} className="halloweenFont bloodBeat"> A Crystal Lake Halloween </h1>

                        <div style={styles.secondaryHeader}><u>Who will be present 📋</u></div>
                        <div style={styles.afterUnderlineContent}>
                            <span><u>7/15 Confirmed RSVPs</u></span><br />
                            <span>Brett & Julie</span><br />
                            <span>Martin</span><br />
                            <span>Michael & Erika</span><br />
                            <span>Brent & Cristy</span><br />
                        </div>

                        <div style={styles.secondaryHeader}><u>Where is it 🗺️</u></div>
                        <div style={styles.afterUnderlineContent}>1177 Central Park Drive, Crystal Lake</div>

                        <div style={styles.secondaryHeader}><u>When is it ⏰</u></div>
                        <div style={styles.afterUnderlineContent}>October 29th 12:00PM - 11:00PM</div>

                        <div style={styles.secondaryHeader}><u>What's planned 🤔</u></div>
                        <div style={styles.afterUnderlineContent}>
                            <ul>
                                <li>Costume Party, so bring a costume 👻</li>
                                <li>Themed appitizers and deep dish pizza.</li>
                                <li>Costume Contest</li>
                                <li>Mini Pumpkin Carving</li>
                                <li>Halloween themed games</li>
                            </ul>
                        </div>

                        <div style={styles.secondaryHeader}><u>Questions ❓</u></div>
                        <div style={styles.afterUnderlineContent}>Email me at brett@brettcarney.com</div>


                    </CardContent>

                    <CardActions>
                        <Button className="jackoButton"
                            variant="contained"
                            href="/rsvp"
                            target="_self">
                            RSVP
                        </Button>
                    </CardActions>

                </Card>
            </Box>
        )
    }
}