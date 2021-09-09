//The App.js will display emojies that match the input text

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//object that store emojies as values and there name as keys
const emoji = {laugh:"😀", laughter:"😂", blessed:"😇", confused:"🙄", confusing:"😟", angry:"😠", angered:"😡", sad:"😞", sader:"😔", chilled:"🥶", skull:"💀", skullbone:"☠️", devilhappy:"😈", devilsad:"👿", cute:"🥺", cry:"😭", happy:"🙂", smile:"😊", lovable:"🥰", loved:"😍"};


//Exporting function defines UI
function App() {
  return (  
  <div class="form-outline" >
  <label class="form-label" for="Search_box">Search Emoji</label>
  <input type="text" id="Serch_box" placeholder="Enter an Emoji Name to View " onInput={()=>Search(document.getElementById("Serch_box").value)} className="form-control form-control-lg" />
    <div id ="Display_area" class="alert alert-dark" role="alert">
    </div>
  </div>
  );
}


//called from App on each characher input to the text box
//search through object to find match with content in text box 
//display the matchig emojies in the display area
function Search(Current_Textbox_Value){
  let emoji_list=""

  //Search through the object that stored the emojies for match with emoji name and text that entered in the input text box
  for (const [key, value] of Object.entries(emoji)) {
    
      if (key.startsWith(Current_Textbox_Value.toLowerCase())){
        emoji_list=emoji_list+value;
      }

  }

  document.getElementById("Display_area").innerHTML = emoji_list ; // Display matichig list of emojies

  if (Current_Textbox_Value===""){
    document.getElementById("Display_area").innerHTML = ""

  }
  }


export default App;