import {scaleLinear, scaleBand, extent, line, symbol, csv } from "d3";
import { useState } from 'react';
import suicideRate from './suicide-rate.json';
import mentalFacilities from './mental-facilities.json';
import mentalDisorderUS from './mental-disorder-US.json';
import census from './census2000.json';
function App() {

  const [count, setCount] = useState(0)

  const charWidth = 500;
  const charHeight = 500;
  const circleScale = scaleLinear().domain([0,90000000]).range([0,250]);
  let teenagerMale1900 = 0;
  let teenagerFemale1900 = 0;
  let adultMale1900 = 0;
  let adultFemale1900 = 0;
  let teenagerMale2000 = 0;
  let teenagerFemale2000 = 0;
  let adultMale2000 = 0;
  let adultFemale2000 = 0;
  let elderMale1900 = 0;
  let elderFemale1900 = 0;
  let elderMale2000 = 0;
  let elderFemale2000 = 0;
  console.log(census.length);
  census.map((data) => {
    if(data.Age < 20 && data.Year == "1900" && data.Sex == "1") {
        teenagerMale1900 += parseInt(data.People);
        
    }
    if(data.Age < 20 && data.Year == "1900" && data.Sex == "2"){
        teenagerFemale1900 += parseInt(data.People);
    }

    if(data.Age > 60 && data.Year == "1900" && data.Sex =="1") {
      elderMale1900 += parseInt(data.People);
    }
    if(data.Age > 60 && data.Year == "1900" && data.Sex =="2") {
      elderFemale1900 += parseInt(data.People);
    }
    if(data.Age>= 20 && data.Age <=60 && data.Year=="1900" && data.Sex =="1"){
      adultMale1900 += parseInt(data.People);
    }
    if(data.Age >=20 && data.Age <=60 && data.Year=="1900" && data.Sex =="2") {
      adultFemale1900 += parseInt(data.People);
    }
    if(data.Age < 20 && data.Year == "2000" && data.Sex == "1") {
      teenagerMale2000 += parseInt(data.People);
    }
    if(data.Age < 20 && data.Year == "2000" && data.Sex == "2"){
        teenagerFemale2000 += parseInt(data.People);
    }
    if(data.Age > 60 && data.Year == "2000" && data.Sex =="1") {
      elderMale2000 += parseInt(data.People);
    }
    if(data.Age > 60 && data.Year == "2000" && data.Sex =="2") {
      elderFemale2000+= parseInt(data.People);
    }
    if(data.Age>= 20 && data.Age <=60 && data.Year=="2000" && data.Sex =="1"){
      adultMale2000 += parseInt(data.People);
    }
    if(data.Age >=20 && data.Age <=60 && data.Year=="2000" && data.Sex =="2") {
      adultFemale2000 += parseInt(data.People);
    }
  });

  return (
  <div className="App">
    <h1>The change of the popluation of US teenager, adults and elders from 1900 to 2000</h1>
    <svg width={charWidth} height={charHeight} style={{border: "1px solid pink"}}>
    <line x1={charWidth/2} y1="0" x2={charWidth/2} y2={charHeight} stroke= "black" strokeWidth={1}/>

    <circle cx={circleScale(teenagerMale1900)+250} cy={100} r = "3" fill="red"/>
    <text x={circleScale(teenagerMale1900)+250} y= "90" fontSize={12}>{teenagerMale1900}</text>
    <line x1="250" y1="100" x2={circleScale(teenagerMale1900)+250} y2="100" stroke="grey" strokeWidth="3"/>
    <circle cx={circleScale(teenagerMale2000)+250} cy={120} r = "3" fill="red"/>
    <text x={circleScale(teenagerMale2000)+250} y= "110" fontSize={12}>{teenagerMale2000}</text>
    <line x1="250" y1="120" x2={circleScale(teenagerMale2000)+250} y2="120" stroke="blue" strokeWidth="3"/>
    <circle cx={250-circleScale(teenagerFemale1900)} cy={100} r = "3" fill="red"/>
    <text x={250-circleScale(teenagerFemale1900)} y= "90" fontSize={12}>{teenagerFemale1900}</text>
    <line x1="250" y1="100" x2={250-circleScale(teenagerFemale1900)} y2="100" stroke="grey" strokeWidth="3"/>
    <circle cx={250-circleScale(teenagerFemale2000)} cy={120} r = "3" fill="red"/>
    <text x={250-circleScale(teenagerFemale2000)} y= "110" fontSize={12}>{teenagerFemale2000}</text>
    <line x1="250" y1="120" x2={250-circleScale(teenagerFemale2000)} y2="120" stroke="blue" strokeWidth="3"/>
    <circle cx={circleScale(adultMale1900)+250} cy={240} r = "3" fill="red"/>
    <text x={circleScale(adultMale1900)+250} y= "230" fontSize={12}>{adultMale1900}</text>
    <line x1="250" y1="240" x2={circleScale(adultMale1900)+250} y2="240" stroke="grey" strokeWidth="3"/>
    <circle cx={circleScale(adultMale2000)+250} cy={260} r = "3" fill="red"/>
    <text x={circleScale(adultMale2000)+250-50} y= "250" fontSize={12}>{adultMale2000}</text>
    <line x1="250" y1="260" x2={circleScale(adultMale2000)+250} y2="260" stroke="blue" strokeWidth="3"/>
    <circle cx={250-circleScale(adultFemale1900)} cy={240} r = "3" fill="red"/>
    <text x={250-circleScale(adultFemale1900)} y= "230" fontSize={12}>{adultFemale1900}</text>
    <line x1="250" y1="240" x2={250-circleScale(adultFemale1900)} y2="240" stroke="grey" strokeWidth="3"/>
    <circle cx={250-circleScale(adultFemale2000)} cy={260} r = "3" fill="red"/>
    <text x={250-circleScale(adultFemale2000)} y= "250" fontSize={12}>{adultFemale2000}</text>
    <line x1="250" y1="260" x2={250-circleScale(adultFemale2000)} y2="260" stroke="blue" strokeWidth="3"/>
    <circle cx={circleScale(elderMale1900)+250} cy={380} r = "3" fill="red"/>
    <text x={circleScale(elderMale1900)+250} y= "370" fontSize={12}>{elderMale1900}</text>
    <line x1="250" y1="380" x2={circleScale(elderMale1900)+250} y2="380" stroke="grey" strokeWidth="3"/>
    <circle cx={circleScale(elderMale2000)+250} cy={400} r = "3" fill="red"/>
    <text x={circleScale(elderMale2000)+250} y= "390" fontSize={12}>{elderMale2000}</text>
    <line x1="250" y1="400" x2={circleScale(elderMale2000)+250} y2="400" stroke="blue" strokeWidth="3"/>
    <circle cx={250-circleScale(elderFemale1900)} cy={380} r = "3" fill="red"/>
    <text x={250-circleScale(elderFemale1900)-50} y= "370" fontSize={12}>{elderFemale1900}</text>
    <line x1="250" y1="380" x2={250-circleScale(elderFemale1900)} y2="380" stroke="grey" strokeWidth="3"/>
    <circle cx={250-circleScale(elderFemale2000)} cy={400} r = "3" fill="red"/>
    <text x={250-circleScale(elderFemale2000)} y= "390" fontSize={12}>{elderFemale2000}</text>
    <line x1="250" y1="400" x2={250-circleScale(elderFemale2000)} y2="400" stroke="blue" strokeWidth="3"/>
    <text x="375" y="20" fontSize={12}>
      Male
      </text>
    <text x="125" y="20" fontSize={12}>Female</text>
    <text x="195" y="140" fontSize={12} fontWeight="bold">Teenager(younger than 20)</text>
    <text x="200" y="280" fontSize={12} fontWeight="bold">Adult(between 20 to 60)</text>
    <text x="200" y="420" fontSize={12} fontWeight="bold">Elder(older than 60)</text>
    <line x1="400" y1="450" x2="440" y2="450" stroke="grey" strokeWidth="3"/>
    <text x="440" y="450" fontSize={12} fontWeight="bold">1900</text>
    <line x1= "400" y1="470" x2="440" y2="470" stroke="blue" strokeWidth="3"/>
    <text x="440" y="470" fontSize={12} fontWeight="bold">2000</text>
      );
    {/*
    <circle cx="50" cy="50" r="5" fill="black" stroke="red" strokeWidth="2"/>
    <line x1={50} y1={30} x2={50} y2={20} stroke="green" strokeWidth={10}/>
    {[10,30,50,70,100,240,280].map((d, i) => {
      console.log("i is" + i + " d is" + d);
      return (
      <circle cx={circleScale(d)} cy={circleScale(d)} fill={`rgb(${d*50},0,0)`} r="3"/>);
      })}
    {[10,20,30,40].map((d, i) => {
      return <rect transform={'rotate(-30)'} x={30+i*20} y={200} width={10} height={10} fill={`rgb(${0},${255},${0})`}/>
    })}
    */}
    
    </svg>
    <div style={{width: '600px', textAlign: 'center'}}>
  <h3>Write-up about my data visualization</h3>
  <p> The dataset of this chart is the census data provided by the assignment.  For this data, my question is how did US population change in different ages and differnet genders. My visualization of census data is a spine chart because "it can compare two contrasting components like gender"(Reference from visual vocabulary poster). The data of women
    will be showned on the left while the data of male will be showned on the right which helps us make contrast between the population of women and man in different ages. The data transformation I made is to regard people whose age is less than 20 as teenager group, whose 
    age is between 20 to 60 as adults group and whose age is older than 60 as elders group, and I add the population together by each group. By doing this, I reduce the rows that will be showned on the graph from 76(the length of the json file) to 6 rows.
    As the book "science of visual data communication" mentioned, "any extraneous demands on working memory due to the design of visualizations should be avoided." Instead of letting viewers see all the population in different ages, Making them only remember 3 groups of people can definitely avoid
    consuming their wroking memory. Also, I made two differnet contrast colors to represent the data of 1900 and data of 2000. For my question, actually the biggest comparision we put on first is the differnece of population of 1900 to population of 2000. "When multiple groups compete for comparison, that
competition tends to be won by groups that are different or brighter in color, largest in size, or presented at the top or left of a display"(Reference from science of visual data communication) Thus, I use difference of color to represent the biggest comparison in my chart so that it can guide the viewer to the most important comparison.
It is very clear to see the difference of length of grey line and blue line which also means the growth of population in different age and gender from 1900 to 2000. Also, I use blue to represent 2000 year because the data of recent year seems more close and useful to us. Thus, I use a more brighter color to hightlight the data in 2000 year.
    </p>
    <p>
      One of a story I want to tell from this chart is that US has the trend of aging population and might face the challenge of aging population in the future 20-40 years. We can easily see that the increase of adult from 1900 to 2000 are much bigger than the increase of teenagers or the increase of the elders, especially female. The female population becomes huge in 2000 and they have the hugest growth of population in adults and elder group. The population of adults becomes the main population in US.
      In 1900, the population of teenagers are closed to the population of adults. However, in 2000, the population of adults are like the double of the teenagers' population. Imagine after 20 or 40 years, when the adults become older, most of these population will become elder population in my chart. This will make US lack of adults but have a lot of elders. In conclusion,
      the increase of population of adults are incredible big and US might face aging population in 20-40years.
    </p>
    <p>Even though I used provided dataset in this assignment, I have started doing a lot of research on mental health dataset. So for the remainder of this quarter, I will focus on creating data visualization for psychological related and mental health dataset. </p>
    </div>
  </div>

  );
}

export default App;
