import jsPDF from "jspdf";
import "jspdf-autotable";
import './App.css'

function App() {
  var data = {
    id: "Dress ID - K047-S2",
    1: {
      "Shoulder Size": "21",
		"Shoulder Width": "21",
		"Breast Circum": "2121",
		"Breast Size": "21",
		"Hip": "21",
		"Waist": "21",
		"Neck F": "21",
		"Neck B": "21",
		"Full Length": "21",
		"Side Slit": "21",
		"Arm Hole": "21",
		"Arm Length": "21,21,12",
		"Arm Circum": "21,421,12",
		"Ankle": "31,12,23",
		"Pant Length": "12,42,23"
    },
    2: {
      "Tuck Point": "43",
      "Tuck Side": "23",
    },
    3: {
      Pocket: true,
    },
    4: {
      "Dart": "None",
      "Neck Type": "Collar Neck",
      "Pant Style": "Parallel Elastic|Belt",
      "Piping": "Piping-Only Neck",
      "Lining": "With Lining"
    },
  };

  const handleDownloadPDF = () => {
    console.log("download started.");

    var doc = new jsPDF();
    doc.setFont(undefined, "bold").setFontSize(18).text(data["id"], 75, 10);
    // doc.line(65, 15, 145, 15);

    doc.setFont(undefined , "bold").setFontSize(16).text("Title 1" , 15,20);
    
    doc.autoTable({
      head: [["Shoulder Size", "Shoulder Width","Breast Circum","Breast Size","Hip" ]],
      body: [[data["1"]["Shoulder Size"], data["1"]["Shoulder Width"] , data["1"]["Breast Circum"] , data["1"]["Breast Size"] , data["1"]["Hip"] ]],
    } 
    );

    doc.autoTable({
      head: [["Waist","Neck F" , "Neck B" , "Full Length" ,"Side Slit" ]],
      body: [[data["1"]["Waist"] , data["1"]["Neck F"] , data["1"]["Neck B"] , data["1"]["Full Length"] , data["1"]["Side Slit"] ]],
    });

    doc.autoTable({
      head: [["Arm Hole"  , "Arm Length" , "Arm Circum" , "Ankle" , "Pant Length"]],
      body: [[data["1"]["Arm Hole"] , data["1"]["Arm Length"] , data["1"]["Arm Circum"] , data["1"]["Ankle"] , data["1"]["Pant Length"] ]],
    });

    doc.setFont(undefined , "bold").setFontSize(16).text("Title 2" ,15,80);
    doc.autoTable({
      head: [["Tuck Point", "Tuck Side"]],
      body: [[data["2"]["Tuck Point"], data["2"]["Tuck Side"]]],
    });

    doc.setFont(undefined , "bold").setFontSize(16).text("Title 3" ,15,100);
    doc.autoTable({
      head: [["Pocket"]],
      body: [[data["3"]["Pocket"]]],
    });

    doc.setFont(undefined , "bold").setFontSize(16).text("Title 4" ,15,122);
    doc.autoTable({
      head: [["Dart", "Neck Type" , "Pant Style" , "Piping" ,"Lining" ]],
      body: [[data["4"]["Dart"], data["4"]["Neck Type"] ,  data["4"]["Pant Style"] ,  data["4"]["Piping"]  ,  data["4"]["Lining"]  ]],
    });

    doc.save(generateRandomAlphaNum(6));
    console.log("download completed.");
  };

  function generateRandomAlphaNum(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substring(2));
    return  rdmString.substring(0, len)+".pdf";

}

  return (
    <div className="App">
      <header className="App-header"> 
      <button style={{backgroundColor:'white' , padding:'20px' , fontSize:'20px' , borderRadius:'5px' , border:'1px solid #282c34' , fontWeight:'bold' , cursor:'pointer' , color:'#282c34'}} onClick={() => handleDownloadPDF()}>Download PDF</button>
      </header> 
    </div>
  );
}

export default App;
