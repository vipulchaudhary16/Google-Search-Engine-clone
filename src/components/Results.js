import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import ResultContext from "../context/ResultContext";
import Loading from "./Loading";

const Results = () => {
  const context = useContext(ResultContext);
  const { getResults, results, searchTerm, setSearchTerm, loading } = context;
  console.log(context);
  const location = useLocation();

  let rawData = {
    "currentPage": 1,
    "keyword": "vipul,haudhary",
    "organic": [
      {
        "domain": "hi-in.facebook.com",
        "linkType": "LANDING",
        "position": 1,
        "snippet": "Vipul R Chaudhary और आपके अन्य परिचितों से जुड़ने के लिए Facebook में शामिल हों. Facebook लोगों को साझा ...",
        "title": "अन्य लोगों के नाम Vipul R Chaudhary",
        "url": "https://hi-in.facebook.com/rana.haudhary"
      },
      {
        "domain": "ne-np.fbjs.facebook.com",
        "linkType": "LANDING",
        "position": 2,
        "snippet": "Vipul R Chaudhary फेसबुकमा छ । Join Facebook to connect with Vipul R Chaudhary and others you may know. फेसबुकले मानिसहरुलाई ...",
        "title": "Vipul R Chaudhary | Facebook",
        "url": "https://ne-np.fbjs.facebook.com/rana.haudhary/photos"
      },
      {
        "domain": "www.researchgate.net",
        "linkType": "LANDING",
        "position": 3,
        "snippet": "Apr 13, 2021 — Shubham Chaudhary, Vipul Sharma, Akshay Khandelwal. Department of Electronics and Communication,. SRM Institute of Science and Technology, ...",
        "title": "Smart Training of Alex Net using Fluorescein Angiography ...",
        "url": "https://www.researchgate.net/publication/350789673_Smart_Training_of_Alex_Net_using_Fluorescein_Angiography_Fundus_Images_Implementing_Selective_Data_Sampling"
      },
      {
        "domain": "www.researchgate.net",
        "linkType": "LANDING",
        "position": 4,
        "snippet": "Jul 28, 2021 — Authors: Vipul Chaudhary at Sardar Vallabhbhai Patel University of Agriculture and Technology. Vipul Chaudhary.",
        "title": "Evaluation of the functional properties of bael powder using ...",
        "url": "https://www.researchgate.net/publication/353274413_Evaluation_of_the_functional_properties_of_bael_powder_using_different_drying_methods"
      },
      {
        "domain": "www.instagram.com",
        "linkType": "LANDING",
        "position": 5,
        "snippet": "Photo shared by Jitesh Pandey Vipul on April 28, 2019 tagging @pankaj_thakur5, @ ... Photo shared by M🅰️Y🅰️nK ©️hauDhaRY   on October 07, 2019 ...",
        "title": "#nawaabo hashtag on Instagram • Photos and Videos",
        "url": "https://www.instagram.com/explore/tags/nAwAaBo/"
      },
      {
        "domain": "www.readcube.com",
        "linkType": "LANDING",
        "position": 6,
        "snippet": "Vipul K. Dabhi. 1. , Sanjay Chaudhary. 2. 1. I.T. Department, Dharmsinh Desai University, Nadiad, Gujarat, INDIA. 2. DA-IICT, Gandhinagar, Gujarat, INDIA.",
        "title": "Theories and Applications (BIC-TA 2012), Volume 1",
        "url": "https://www.readcube.com/articles/10.1007%2F978-81-322-1038-2_33"
      },
      {
        "domain": "nss.gov.in",
        "linkType": "LANDING",
        "position": 7,
        "snippet": "Sarasiya Vipul Mashabhai. Sarasiya Mashabhai. Gujarat ... 987 426874 CHAUDHARY DILIPBHAI DARGABHAI ... Vikrambhai Nagabhai haudhary.183 pages",
        "title": "S. No. ID Full Name Father's Name State District 1 423232",
        "url": "https://nss.gov.in/sites/default/files/NYPF%202019%20Digital%20Screening%20Result.pdf"
      },
      {
        "domain": "nitkkr.ac.in",
        "linkType": "LANDING",
        "position": 8,
        "snippet": "VIPUL. SATYENDRA SINGH. TUSHAR ('HAUDHARY. ITISIJ PANDEY. AMIT KUMAR. ABHINAV SANKAR .-. F Name. SURENDRA KUMAR. BRIJ LAL VERMA. RAJPAL. SUBBA I,AL YADAV.4 pages",
        "title": "$t\"*' - NIT Kurukshetra",
        "url": "https://nitkkr.ac.in/docs/Nov.%20Dec.2019%20Result%20of%20B.Tech.%205th%20Semester%20PIE%2012032020.pdf"
      },
      {
        "domain": "almashines.s3.dualstack.ap-southeast-1.amazonaws.com",
        "linkType": "LANDING",
        "position": 9,
        "snippet": "34 Rajinder Chaudhary. Not available ... 308 Vipul Kashyap vip****shyapirs@gmail.com. 1986. ERA0287. 309 Virender Singh ... arv****haudhary@hotmail.com.",
        "title": "STATUS OF LIFE TIME ERA MEMBERS ON THE WEBSITE",
        "url": "https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/media/files/453_1618422581_885ffd7b74fe0ac303541bd4c155e874.pdf"
      }
    ],
    "pagination": [
      {
        "page": 1,
        "path": ""
      },
      {
        "page": 2,
        "path": "/search?q=vipul,haudhary&gl=us&hl=en&ei=loSMYZzmB4u0ggeZ8bC4BA&start=10&sa=N&ved=2ahUKEwicie-Qpo_0AhULmuAKHZk4DEcQ8tMDegQIARA5"
      },
      {
        "page": 3,
        "path": "/search?q=vipul,haudhary&gl=us&hl=en&ei=loSMYZzmB4u0ggeZ8bC4BA&start=20&sa=N&ved=2ahUKEwicie-Qpo_0AhULmuAKHZk4DEcQ8tMDegQIARA7"
      },
      {
        "page": 4,
        "path": "/search?q=vipul,haudhary&gl=us&hl=en&ei=loSMYZzmB4u0ggeZ8bC4BA&start=30&sa=N&ved=2ahUKEwicie-Qpo_0AhULmuAKHZk4DEcQ8tMDegQIARA9"
      },
      {
        "page": 5,
        "path": "/search?q=vipul,haudhary&gl=us&hl=en&ei=loSMYZzmB4u0ggeZ8bC4BA&start=40&sa=N&ved=2ahUKEwicie-Qpo_0AhULmuAKHZk4DEcQ8tMDegQIARA_"
      },
      {
        "page": 6,
        "path": "/search?q=vipul,haudhary&gl=us&hl=en&ei=loSMYZzmB4u0ggeZ8bC4BA&start=50&sa=N&ved=2ahUKEwicie-Qpo_0AhULmuAKHZk4DEcQ8tMDegQIARBB"
      },
      {
        "page": 7,
        "path": "/search?q=vipul,haudhary&gl=us&hl=en&ei=loSMYZzmB4u0ggeZ8bC4BA&start=60&sa=N&ved=2ahUKEwicie-Qpo_0AhULmuAKHZk4DEcQ8tMDegQIARBD"
      },
      {
        "page": 8,
        "path": "/search?q=vipul,haudhary&gl=us&hl=en&ei=loSMYZzmB4u0ggeZ8bC4BA&start=70&sa=N&ved=2ahUKEwicie-Qpo_0AhULmuAKHZk4DEcQ8tMDegQIARBF"
      },
      {
        "page": 9,
        "path": "/search?q=vipul,haudhary&gl=us&hl=en&ei=loSMYZzmB4u0ggeZ8bC4BA&start=80&sa=N&ved=2ahUKEwicie-Qpo_0AhULmuAKHZk4DEcQ8tMDegQIARBH"
      },
      {
        "page": 10,
        "path": "/search?q=vipul,haudhary&gl=us&hl=en&ei=loSMYZzmB4u0ggeZ8bC4BA&start=90&sa=N&ved=2ahUKEwicie-Qpo_0AhULmuAKHZk4DEcQ8tMDegQIARBJ"
      }
    ],
    "relatedKeywords": [],
    "totalResults": 4860,
    "timeTaken": 0.61
  }

  useEffect(() => {
    getResults(searchTerm);
  }, [searchTerm , location.pathname]);

  console.log("searchTerm is " + searchTerm);

  // if(!loading) return  <Loading/>

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {rawData.organic.map((data) => (
            <div key={data.url} className="md:w-2/5 w-full">
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 mb-1">
                  {data.title}
                </p>
              </a>
              <p>
                  <span className="d-block">{data.domain} Says,</span>
                  <br/>
                {data.snippet.length > 300
                  ? data.snippet.substring(0, 300) + "............"
                  : data.snippet}
              </p>
            </div>
          ))}
        </div>
      );
    case "/images":
      return " ";
    case "/videos":
      return " ";
    case "/videos":
      return " ";

    default:
      break;
  }
};

export default Results;
