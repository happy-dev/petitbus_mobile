// Custom libs
import Dimensions from 'Dimensions';

// Custom styles
import SC from './constants.js';// Style Constants


// Getting viewport dimensions
var {height, width} = Dimensions.get('window');


// Speech Bubble style
const SB = {
  speechbubble : {
    position:         'absolute',
    bottom:           20,
    left:             20,
    right:            20,
    flex:             1,
    width:            width - 2*20,
    overflow:         'visible',
  },
  speakerStyle : {
    backgroundColor:  'transparent', 
  },
  speakerTextStyle : {
    marginLeft:       40,
    color:            SC.backgroundBlue,
  },
  speechBubbleStyle : {
    borderRadius:     100,
    paddingLeft:      30,
    paddingRight:     50,
    paddingTop:       20,
    paddingBottom:    20,
    width:            width - 2*20,
    backgroundColor:  SC.backgroundBlue, 
  },
  speechBubbleTextStyle : {
    backgroundColor:  'transparent',
  },
  typeWriterStyle : {
    color:  'white',
  },
  nextStyle : {
    position:         'absolute',
    right:            10,
    top:              20,
    bottom:           20,
    width:            30,
    height:           30,
  },
};

export default SB;
