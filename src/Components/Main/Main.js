import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import moment from "moment"
import Button from "@material-ui/core/Button";
import { animated } from 'react-spring';
import useBoop from '../../hooks/UseBoop.js';

import {
    TouchableHighlight,
    Text,
} from 'react-native';
import './Main.css'


function Card({text, onPress, className}) {
    const [style, trigger] = useBoop({ x: 2 });
    return (
      <animated.button className={className} style={style} onMouseEnter={trigger}>
        <TouchableHighlight style={{display: 'flex', justifyContent: 'center', width: '100%', height: '100%'}} underlayColor='none' onPress={onPress}>
            <Text>{text}</Text>
        </TouchableHighlight>
      </animated.button>
    );
}

class ConnectedMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventDate: moment.duration().add({days:0,hours:0,minutes:5,seconds:55}),
            secs:0,
            mins:0,
            numClicks: 0,
            numMatches: 0,
            matchesFound:[],
            cardClicked:"",
            cardsInArrangement: [],
            card1: "card1",card2: "card2",card3: "card3",card4: "card4",card5: "card5",card6: "card6",card7: "card7",card8: "card8",card9: "card9",card10: "card10",card11: "card11",card12: "card12",card13: "card13",card14: "card14",card15: "card15",card16: "card16",card17: "card17",card18: "card18",
            focusCard1: false, focusCard2: false, focusCard3: false, focusCard4: false, focusCard5: false, focusCard6: false, focusCard7: false, focusCard8: false, focusCard9: false, focusCard10: false, focusCard11: false, focusCard12: false, focusCard13: false, focusCard14: false, focusCard15: false, focusCard16: false, focusCard17: false, focusCard18: false,
            cardIsMatched1: false, cardIsMatched2: false, cardIsMatched3: false, cardIsMatched4: false, cardIsMatched5: false, cardIsMatched6: false, cardIsMatched7: false, cardIsMatched8: false, cardIsMatched9: false, cardIsMatched10: false, cardIsMatched11: false, cardIsMatched12: false, cardIsMatched13: false, cardIsMatched14: false, cardIsMatched15: false, cardIsMatched16: false, cardIsMatched17: false, cardIsMatched18: false,
            hiddenValuecard1: "", hiddenValuecard2: "", hiddenValuecard3: "", hiddenValuecard4: "", hiddenValuecard5: "", hiddenValuecard6: "", hiddenValuecard7: "", hiddenValuecard8: "", hiddenValuecard9: "",hiddenValuecard10: "", hiddenValuecard11: "", hiddenValuecard12: "", hiddenValuecard13: "", hiddenValuecard14: "", hiddenValuecard15: "", hiddenValuecard16: "", hiddenValuecard17: "", hiddenValuecard18: "",
            cards: {
                "abia": "umahia",
                "adamawa": "lafia",
                "akwaibom": "uyo",
                "anambra": "awka",
                "bauchi": "bauchi",
                "bayelsa": "yenogoa",
                "benue": "makurdi",
                "cross-river": "calabar",
                "delta": "asaba",
                "ebonyi": "abakiliki",
                "edo": "benin city",
                "ekiti": "ado ekiti",
                "enugu": "enugu",
                "gombe": "gombe",
                "imo": "owerri",
                "jigawa": "dutse",
                "kaduna": "kaduna",
                "kano": "kano",
                "katsina": "katsina",
            }
        };
    }

    updateTimer=()=>{
        const x = setInterval(()=>{
          let { eventDate} = this.state

          if(eventDate <=0){
            this.setState({
              count:0,
              eventDate: moment.duration().add({days:0,hours:0,minutes:5,seconds:55}),
              secs:0,
              mins:0,
            })
            clearInterval(x)
          }else {
            eventDate = eventDate.subtract(1,"s")
            const secs = eventDate.seconds()
            const mins = eventDate.minutes()
            this.setState({
              secs,
              mins,
              eventDate,
              showTimer: true
            })
          }
        },1000)
    }

    componentDidMount(){
        this.setCards()
        this.updateTimer()
    }

    onPress(cardnum){
        this.setState({numClicks: this.state.numClicks + 1})
        if(this.state.cardClicked != ""){
            this.showCard(cardnum)
            this.focusOnCard(cardnum)
            let prevCardClickedNum = this.state.cardsInArrangement.indexOf(this.state.cardClicked)

            if(this.state.cards[this.state.cardClicked] == this.state.cardsInArrangement[cardnum] ||
                this.getStateByCapital(this.state.cardClicked) == this.state.cardsInArrangement[cardnum])
            {
                this.styleMatchedCards(cardnum, prevCardClickedNum)
                this.setState({
                    matchesFound: this.state.matchesFound.concat([cardnum, prevCardClickedNum]),
                    numMatches: this.state.numMatches + 1
                },() => {
                    if(this.state.numMatches == 9){
                        this.setState({gameOver: true})
                    }
                })

            }else{
                setTimeout(() => {
                    this.hideCards(cardnum, prevCardClickedNum)
                    this.unFocusOnCard(cardnum)
                    this.unFocusOnCard(prevCardClickedNum)
                },1000)
            }

            this.setState({cardClicked: ""})
        }else{
            this.focusOnCard(cardnum)
            this.setState({cardClicked: this.state.cardsInArrangement[cardnum]})
            this.showCard(cardnum)
        }
    }

    styleMatchedCards(card1Num, card2Num){
        switch (card1Num){
            case 1:
                this.setState({cardIsMatched1: true})
                break;
            case 2:
                this.setState({cardIsMatched2: true})
                break;
            case 3:
                this.setState({cardIsMatched3: true})
                break;
            case 4:
                this.setState({cardIsMatched4: true})
                break;
            case 5:
                this.setState({cardIsMatched5: true})
                break;
            case 6:
                this.setState({cardIsMatched6: true})
                break;
            case 7:
                this.setState({cardIsMatched7: true})
                break;
            case 8:
                this.setState({cardIsMatched8: true})
                break;
            case 9:
                this.setState({cardIsMatched9: true})
                break;
            case 10:
                this.setState({cardIsMatched10: true})
                break;
            case 11:
                this.setState({cardIsMatched11: true})
                break;
            case 12:
                this.setState({cardIsMatched12: true})
                break;
            case 13:
                this.setState({cardIsMatched13: true})
                break;
            case 14:
                this.setState({cardIsMatched14: true})
                break;
            case 15:
                this.setState({cardIsMatched15: true})
                break;
            case 16:
                this.setState({cardIsMatched16: true})
                break;
            case 17:
                this.setState({cardIsMatched17: true})
                break;
            case 18:
                this.setState({cardIsMatched18: true})
                break;
        }
        switch (card2Num){
            case 1:
                this.setState({cardIsMatched1: true})
                break;
            case 2:
                this.setState({cardIsMatched2: true})
                break;
            case 3:
                this.setState({cardIsMatched3: true})
                break;
            case 4:
                this.setState({cardIsMatched4: true})
                break;
            case 5:
                this.setState({cardIsMatched5: true})
                break;
            case 6:
                this.setState({cardIsMatched6: true})
                break;
            case 7:
                this.setState({cardIsMatched7: true})
                break;
            case 8:
                this.setState({cardIsMatched8: true})
                break;
            case 9:
                this.setState({cardIsMatched9: true})
                break;
            case 10:
                this.setState({cardIsMatched10: true})
                break;
            case 11:
                this.setState({cardIsMatched11: true})
                break;
            case 12:
                this.setState({cardIsMatched12: true})
                break;
            case 13:
                this.setState({cardIsMatched13: true})
                break;
            case 14:
                this.setState({cardIsMatched14: true})
                break;
            case 15:
                this.setState({cardIsMatched15: true})
                break;
            case 16:
                this.setState({cardIsMatched16: true})
                break;
            case 17:
                this.setState({cardIsMatched17: true})
                break;
            case 18:
                this.setState({cardIsMatched18: true})
                break;
        }
    }

    unFocusOnCard(cardnum){
        switch (cardnum){
            case 1:
                this.setState({focusCard1: false})
                break;
            case 2:
                this.setState({focusCard2: false})
                break;
            case 3:
                this.setState({focusCard3: false})
                break;
            case 4:
                this.setState({focusCard4: false})
                break;
            case 5:
                this.setState({focusCard5: false})
                break;
            case 6:
                this.setState({focusCard6: false})
                break;
            case 7:
                this.setState({focusCard7: false})
                break;
            case 8:
                this.setState({focusCard8: false})
                break;
            case 9:
                this.setState({focusCard9: false})
                break;
            case 10:
                this.setState({focusCard10: false})
                break;
            case 11:
                this.setState({focusCard11: false})
                break;
            case 12:
                this.setState({focusCard12: false})
                break;
            case 13:
                this.setState({focusCard13: false})
                break;
            case 14:
                this.setState({focusCard14: false})
                break;
            case 15:
                this.setState({focusCard15: false})
                break;
            case 16:
                this.setState({focusCard16: false})
                break;
            case 17:
                this.setState({focusCard17: false})
                break;
            case 18:
                this.setState({focusCard18: false})
                break;
        }
    }

    focusOnCard(cardnum){
        switch (cardnum){
            case 1:
                this.setState({focusCard1: true})
                break;
            case 2:
                this.setState({focusCard2: true})
                break;
            case 3:
                this.setState({focusCard3: true})
                break;
            case 4:
                this.setState({focusCard4: true})
                break;
            case 5:
                this.setState({focusCard5: true})
                break;
            case 6:
                this.setState({focusCard6: true})
                break;
            case 7:
                this.setState({focusCard7: true})
                break;
            case 8:
                this.setState({focusCard8: true})
                break;
            case 9:
                this.setState({focusCard9: true})
                break;
            case 10:
                this.setState({focusCard10: true})
                break;
            case 11:
                this.setState({focusCard11: true})
                break;
            case 12:
                this.setState({focusCard12: true})
                break;
            case 13:
                this.setState({focusCard13: true})
                break;
            case 14:
                this.setState({focusCard14: true})
                break;
            case 15:
                this.setState({focusCard15: true})
                break;
            case 16:
                this.setState({focusCard16: true})
                break;
            case 17:
                this.setState({focusCard17: true})
                break;
            case 18:
                this.setState({focusCard18: true})
                break;
        }
    }

    hideCards(card1Num, card2Num){
        if(!this.state.matchesFound.includes(card1Num)){
            switch (card1Num){
                case 1:
                    this.setState({card1: "card1"})
                    break;
                case 2:
                    this.setState({card2: "card2"})
                    break;
                case 3:
                    this.setState({card3: "card3"})
                    break;
                case 4:
                    this.setState({card4: "card4"})
                    break;
                case 5:
                    this.setState({card5: "card5"})
                    break;
                case 6:
                    this.setState({card6: "card6"})
                    break;
                case 7:
                    this.setState({card7: "card7"})
                    break;
                case 8:
                    this.setState({card8: "card8"})
                    break;
                case 9:
                    this.setState({card9: "card9"})
                    break;
                case 10:
                    this.setState({card10: "card10"})
                    break;
                case 11:
                    this.setState({card11: "card11"})
                    break;
                case 12:
                    this.setState({card12: "card12"})
                    break;
                case 13:
                    this.setState({card13: "card13"})
                    break;
                case 14:
                    this.setState({card14: "card14"})
                    break;
                case 15:
                    this.setState({card15: "card15"})
                    break;
                case 16:
                    this.setState({card16: "card16"})
                    break;
                case 17:
                    this.setState({card17: "card17"})
                    break;
                case 18:
                    this.setState({card18: "card18"})
                    break;
            }
        }
        if(!this.state.matchesFound.includes(card2Num)){
            switch (card2Num){
                case 1:
                    this.setState({card1: "card1"})
                    break;
                case 2:
                    this.setState({card2: "card2"})
                    break;
                case 3:
                    this.setState({card3: "card3"})
                    break;
                case 4:
                    this.setState({card4: "card4"})
                    break;
                case 5:
                    this.setState({card5: "card5"})
                    break;
                case 6:
                    this.setState({card6: "card6"})
                    break;
                case 7:
                    this.setState({card7: "card7"})
                    break;
                case 8:
                    this.setState({card8: "card8"})
                    break;
                case 9:
                    this.setState({card9: "card9"})
                    break;
                case 10:
                    this.setState({card10: "card10"})
                    break;
                case 11:
                    this.setState({card11: "card11"})
                    break;
                case 12:
                    this.setState({card12: "card12"})
                    break;
                case 13:
                    this.setState({card13: "card13"})
                    break;
                case 14:
                    this.setState({card14: "card14"})
                    break;
                case 15:
                    this.setState({card15: "card15"})
                    break;
                case 16:
                    this.setState({card16: "card16"})
                    break;
                case 17:
                    this.setState({card17: "card17"})
                    break;
                case 18:
                    this.setState({card18: "card18"})
                    break;
            }
        }
    }

    getStateByCapital(value) {
        return Object.keys(this.state.cards).find(key => this.state.cards[key] === value);
    }

    setCards(){
        let states = Object.keys(this.state.cards)
        let capitals = Object.values(this.state.cards)

        this.setState({cardsInArrangement: [states[0], states[1], states[2], states[3], states[4], states[5], states[6], states[7], states[8], capitals[0], capitals[1], capitals[2], capitals[3], capitals[4], capitals[5], capitals[6], capitals[7], capitals[8]]})
        this.setState({hiddenValuecard1: states[0], hiddenValuecard2: states[1], hiddenValuecard3: states[2], hiddenValuecard4: states[3], hiddenValuecard5: states[4], hiddenValuecard6: states[5], hiddenValuecard7: states[6], hiddenValuecard8: states[7], hiddenValuecard9: states[8]})
        this.setState({hiddenValuecard10: capitals[0], hiddenValuecard11: capitals[1], hiddenValuecard12: capitals[2], hiddenValuecard13: capitals[3], hiddenValuecard14: capitals[4], hiddenValuecard15: capitals[5], hiddenValuecard16: capitals[6], hiddenValuecard17: capitals[7], hiddenValuecard18: capitals[8]})
    }

    showCard(cardnum){
        switch (cardnum){
            case 1:
                this.setState({card1: this.state.hiddenValuecard1})
                break;
            case 2:
                this.setState({card2: this.state.hiddenValuecard2})
                break;
            case 3:
                this.setState({card3: this.state.hiddenValuecard3})
                break;
            case 4:
                this.setState({card4: this.state.hiddenValuecard4})
                break;
            case 5:
                this.setState({card5: this.state.hiddenValuecard5})
                break;
            case 6:
                this.setState({card6: this.state.hiddenValuecard6})
                break;
            case 7:
                this.setState({card7: this.state.hiddenValuecard7})
                break;
            case 8:
                this.setState({card8: this.state.hiddenValuecard8})
                break;
            case 9:
                this.setState({card9: this.state.hiddenValuecard9})
                break;
            case 10:
                this.setState({card10: this.state.hiddenValuecard10})
                break;
            case 11:
                this.setState({card11: this.state.hiddenValuecard11})
                break;
            case 12:
                this.setState({card12: this.state.hiddenValuecard12})
                break;
            case 13:
                this.setState({card13: this.state.hiddenValuecard13})
                break;
            case 14:
                this.setState({card14: this.state.hiddenValuecard14})
                break;
            case 15:
                this.setState({card15: this.state.hiddenValuecard15})
                break;
            case 16:
                this.setState({card16: this.state.hiddenValuecard16})
                break;
            case 17:
                this.setState({card17: this.state.hiddenValuecard17})
                break;
            case 18:
                this.setState({card18: this.state.hiddenValuecard18})
                break;
        }
    }

    restartGame(){
        this.setState({
            eventDate: moment.duration().add({days:0,hours:0,minutes:5,seconds:55}),
            secs:0,
            mins:0,
            numClicks: 0,
            numMatches: 0,
            matchesFound:[],
            cardClicked:"",
            card1: "card1",card2: "card2",card3: "card3",card4: "card4",card5: "card5",card6: "card6",card7: "card7",card8: "card8",card9: "card9",card10: "card10",card11: "card11",card12: "card12",card13: "card13",card14: "card14",card15: "card15",card16: "card16",card17: "card17",card18: "card18",
            focusCard1: false, focusCard2: false, focusCard3: false, focusCard4: false, focusCard5: false, focusCard6: false, focusCard7: false, focusCard8: false, focusCard9: false, focusCard10: false, focusCard11: false, focusCard12: false, focusCard13: false, focusCard14: false, focusCard15: false, focusCard16: false, focusCard17: false, focusCard18: false,
            cardIsMatched1: false, cardIsMatched2: false, cardIsMatched3: false, cardIsMatched4: false, cardIsMatched5: false, cardIsMatched6: false, cardIsMatched7: false, cardIsMatched8: false, cardIsMatched9: false, cardIsMatched10: false, cardIsMatched11: false, cardIsMatched12: false, cardIsMatched13: false, cardIsMatched14: false, cardIsMatched15: false, cardIsMatched16: false, cardIsMatched17: false, cardIsMatched18: false,
        })
    }

    render() {
        if(this.state.gameOver){
            return (
                <div className="Main-gameStats">
                    <Text>Game Over!!!</Text>
                    <Text>Total Clicks: {this.state.numClicks}</Text>
                    <Text>Game Duration: {this.state.numMatches}</Text>
                    <Text>Game Duration: {this.state.gameDuration}</Text>
                </div>
            )
        }
        return (
            <div className="Main">
                <div className="Main-menu">
                    <Text>{`${this.state.mins} ${this.state.secs}`}</Text>
                    <Text>Clicks: {this.state.numClicks}</Text>
                    <Text>Matches: {this.state.numMatches}</Text>
                    <Button
                        color="primary"
                        onClick={() => {
                            this.restartGame();
                        }}
                    >
                        Restart Game
                    </Button>
                </div>
                <div className="Main-area-container">
                    <Card text={this.state.card1} onPress={() => this.onPress(1)} className={"Card " + (this.state.focusCard1 ? "Card-focus":"") + (this.state.cardIsMatched1 ? " Card-matched":"")} />
                    <Card text={this.state.card2} onPress={() => this.onPress(2)} className={"Card " + (this.state.focusCard2 ? "Card-focus":"") + (this.state.cardIsMatched2 ? " Card-matched":"")} />
                    <Card text={this.state.card3} onPress={() => this.onPress(3)} className={"Card " + (this.state.focusCard3 ? "Card-focus":"") + (this.state.cardIsMatched3 ? " Card-matched":"")} />
                    <Card text={this.state.card4} onPress={() => this.onPress(4)} className={"Card " + (this.state.focusCard4 ? "Card-focus":"") + (this.state.cardIsMatched4 ? " Card-matched":"")} />
                    <Card text={this.state.card5} onPress={() => this.onPress(5)} className={"Card " + (this.state.focusCard5 ? "Card-focus":"") + (this.state.cardIsMatched5 ? " Card-matched":"")} />
                    <Card text={this.state.card6} onPress={() => this.onPress(6)} className={"Card " + (this.state.focusCard6 ? "Card-focus":"") + (this.state.cardIsMatched6 ? " Card-matched":"")} />
                    <Card text={this.state.card7} onPress={() => this.onPress(7)} className={"Card " + (this.state.focusCard7 ? "Card-focus":"") + (this.state.cardIsMatched7 ? " Card-matched":"")} />
                    <Card text={this.state.card8} onPress={() => this.onPress(8)} className={"Card " + (this.state.focusCard8 ? "Card-focus":"") + (this.state.cardIsMatched8 ? " Card-matched":"")} />
                    <Card text={this.state.card9} onPress={() => this.onPress(9)} className={"Card " + (this.state.focusCard9 ? "Card-focus":"") + (this.state.cardIsMatched9 ? " Card-matched":"")} />
                    <Card text={this.state.card10} onPress={() => this.onPress(10)} className={"Card " + (this.state.focusCard10 ? "Card-focus":"") + (this.state.cardIsMatched10 ? " Card-matched":"")} />
                    <Card text={this.state.card11} onPress={() => this.onPress(11)} className={"Card " + (this.state.focusCard11 ? "Card-focus":"") + (this.state.cardIsMatched11 ? " Card-matched":"")} />
                    <Card text={this.state.card12} onPress={() => this.onPress(12)} className={"Card " + (this.state.focusCard12 ? "Card-focus":"") + (this.state.cardIsMatched12 ? " Card-matched":"")} />
                    <Card text={this.state.card13} onPress={() => this.onPress(13)} className={"Card " + (this.state.focusCard13 ? "Card-focus":"") + (this.state.cardIsMatched13 ? " Card-matched":"")} />
                    <Card text={this.state.card14} onPress={() => this.onPress(14)} className={"Card " + (this.state.focusCard14 ? "Card-focus":"") + (this.state.cardIsMatched14 ? " Card-matched":"")} />
                    <Card text={this.state.card15} onPress={() => this.onPress(15)} className={"Card " + (this.state.focusCard15 ? "Card-focus":"") + (this.state.cardIsMatched15 ? " Card-matched":"")} />
                    <Card text={this.state.card16} onPress={() => this.onPress(16)} className={"Card " + (this.state.focusCard16 ? "Card-focus":"") + (this.state.cardIsMatched16 ? " Card-matched":"")} />
                    <Card text={this.state.card17} onPress={() => this.onPress(17)} className={"Card " + (this.state.focusCard17 ? "Card-focus":"") + (this.state.cardIsMatched17 ? " Card-matched":"")} />
                    <Card text={this.state.card18} onPress={() => this.onPress(18)} className={"Card " + (this.state.focusCard18 ? "Card-focus":"") + (this.state.cardIsMatched18 ? " Card-matched":"")} />
                </div>

            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.loggedInUser,
    };
};

const Main = withRouter(connect(mapStateToProps)(ConnectedMain));
export default Main;