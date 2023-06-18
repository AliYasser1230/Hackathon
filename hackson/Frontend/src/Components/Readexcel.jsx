import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import axios from 'axios'


function ReadExcel() {

  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }

  const addData = async(e)=>{
    e.preventDefault();
    
    data.map(async (info)=>{
      
        try{
          await axios.post("http://localhost:5050/adddata",{FirstName:info.FirstName, LastName:info.LastName, StudentID:info.StudentID, StudentGPA:info.StudentGPA, UKGPA:info.UKGPA, StudentMajor:info.StudentMajor, Password:info.Password})
          .then(()=>{console.log("Success!")});
        }catch(error)
        {
          console.log(error.response.data);
        }
        console.log(info.FirstName);
    })
  }

  useEffect(()=>{
    console.log(data);
  },[]);

  return (
    <div className="App">

      <input 
        type="file" 
        accept=".xlsx, .xls" 
        onChange={handleFileUpload} 
      />

      {data.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={addData}>Add to db</button>
      <br /><br />
      ... webstylepress ...
    </div>
  );
}

export default ReadExcel;