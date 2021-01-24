import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import codLogo from "../img/cod-logo.png"
import Button from '@material-ui/core/Button';
import twitch from "../img/twitch.png";
import BasicTextFields from "../textField";
import GroupSizesColors from "../platform";
import RecipeReviewCard from "../news";
import EnhancedTable from "../leaderboard";
import EnhancedTable1 from "../topAchievers";
import useApplicationData from "../hooks/useApplicationData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor:"#191d24"
  },
  paper: {
    margin:0,
    // padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    textAlign: 'center',
    height: 500,
    display: "flex",
    justifyContent: "space-evenly",
    // alignItems: "center",

  },
  shoot: {
    background: '#a970ff',
    borderRadius: 3,
    border: 0,
    color: "#fff",
    fontWeight: 'bold',
    fontSize:'18px',
    fontFamily:'Lucidatypewriter, monospace',
    width: '300px',
    height: 45,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

  },
  label: {
    textTransform: 'capitalize',
  },
  img: {
    height: 40,
    width: 45,
    paddingLeft: 10,
    
  },
  gameId: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "flex-start",
    alignItems:"center",

  },
  title: {
    fontSize: 30,
    color:"#dea01e",
    marginTop: "5%",
    marginLeft: "1%"
    
  },
  title1: {
    fontSize: 30,
    color:"#dea01e",
    marginLeft: "1%"
    
  }
}));


export default function Home() {
  const classes = useStyles();

  const {
    state,
    setState,
    setGamerData,
  } = useApplicationData();

  // setting gamer tag from text Field Input
  function setName(event) {

    setState(prev => ({
      ...prev,
      name: event.target.value
    }))
  }
  // setting state of Platform
  function setPlatform(platform) {
    setState(prev => ({
      ...prev,
      platform
    }))
  }
  

  

  return (
    <div className={classes.root}>
      <Grid container spacing={0} >
        {/* <Grid item xs={12} style={{height:300}
        }>
          <Paper className={classes.paper} > */}
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around", width:"100%"}}>
          
            <img src={codLogo} style={{height: 200, width: 420,}} alt=""/>
          
          <div style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
          <div>
            <h1 style={{color:"#dea01e", marginTop: 25}}>
              Enter Your Modern Warfare Gamer ID
            </h1>
          </div>
          <div style={{display: "flex", marginTop:"20px"}}>
            <div className={classes.gameId}>
              {/* platform component */}
              <GroupSizesColors onClick={setPlatform}/>
              {/* textfield component */}
              <BasicTextFields 
                value={state.name}
                onChange={setName}
                onClick={setGamerData}
              />
            </div>
            
            <div style={{display: "flex", alignItems:"center", justifyContent:"space-between"}}>
              <p style={{color:"white", marginRight: "40px"}}>OR</p>
              <Button className={classes.shoot} href= "http://localhost:8080/auth/twitch/callback">
                Twitch Login
                <img className={classes.img} src={twitch} alt="" />
              </Button>
            </div>
        </div>
        </div>
          
       
    </div>
          <div style={{width:"100%"}}>
            <p className={classes.title}>Leaderboard</p>
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", marginTop:"3%"}}>
              <EnhancedTable/>
              <EnhancedTable1/>
            </div>
            
          </div>
          
          <div style={{width:"100%", marginBottom:"3%"}}>
            <p className={classes.title1}>Blogs & Videos</p>
            <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", marginTop:"3%"}}>
              <RecipeReviewCard 
                url="https://youtu.be/hi7DrHz6g9c"
                title='Call of Duty: Warzone Supposedly Has a New "Broken" OP Gun'
                avatar="RS"
                subheader="By Mike Hume"
                link="https://www.washingtonpost.com/video-games/tips/best-cold-war-loadouts-warzone/"
                
                text="Beyond a slew of bugs that allowed players to turn invisible or infinitely heal themselves outside of “Warzone’s” shrinking gas circle, the integration of “Call of Duty: Black Ops Cold War’s” weaponry created a number of questions about the effectiveness of attachments (which are unique to “Cold War” guns) and how they stacked up against traditional “Warzone” loadouts based off “Call of Duty: Modern Warfare’s” guns. Then people discovered the DMR-14. The emphasis on the DMR meant few players were scrutinizing the other new weapons. And while some, like the Mac-10 submachine gun and the Diamatti burst pistol, became secondary weapons for DMR users, few were paying attention to “Cold War’s” other possibilities. Now that the DMR has (mercifully) been nerfed and the meta has rebalanced, there are still a lot of questions about what “Cold War” guns are best. We’re here to provide some answers."
              />
              <RecipeReviewCard
                url='https://www.youtube.com/watch?v=nEJD_q21vCM'
                title="FaZe Swagg reveals a gun better than DMR-14 in Warzone"
                avatar="MT"
                subheader="By Lloyd Coombes "
                link="https://www.gamesradar.com/best-call-of-duty-warzone-guns/"
                text="The best Warzone guns have seen a boost recently, with the integration of Black Ops Cold War into Call of Duty Warzone. This influx of new weapons means there is a slew to choose from for practically any playstyle, including the existing ones from Call of Duty Modern Warfare.
                While there are a ton of guns at your disposal, there are a handful that stand above the rest, which is where this guide to the Warzone best guns comes in. If you want to compete with skilled players, you’ll need to use top-tier weapons and loadouts that are ideal in all situations. From snipers to SMGs, and even light machine guns, these are the best guns in Warzone."
              />
            </div>
              
          </div>
      </Grid>
      
    </div>
  );
}





