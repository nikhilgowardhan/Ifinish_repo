import classes from "./EventComponent.module.css";
import image from "../../../images/banner_01.jpg";


import images_01 from "../../../images/banner_01.jpg";
import images_02 from "../../../images/banner_02.jpg";
import images_03 from "../../../images/banner_03.jpg";
import images_04 from "../../../images/banner_04.jpg";
import images_05 from "../../../images/banner_05.jpg";
import images_06 from "../../../images/banner_06.jpg";
import images_07 from "../../../images/banner_07.jpg";
import images_08 from "../../../images/banner_08.jpg";
import images_09 from "../../../images/banner_09.jpg";
import images_10 from "../../../images/banner_10.jpg";
import images_11 from "../../../images/banner_11.jpg";
import images_12 from "../../../images/banner_12.jpg";
import images_13 from "../../../images/banner_13.jpg";
import images_14 from "../../../images/banner_14.jpg";

// const Images = [
//   images_01,
//   images_02,
//   images_03,
//   images_04,
//   images_05,
//   images_06,
//   images_07,
//   images_08,
//   images_09,
//   images_10,
//   images_11,
//   images_12,
//   images_13,
//   images_14,
// ];

const EVENTDATA = [
  { 
    id:1,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_01,
    footer_text : "CLOSED"
  },
  { 
    id:2,
    title :"Shaheed Diwas Run - Run for the Brave", 
    para: "Organised By <br/> Sports Zone Events <br> ANYWHERE ",
    image : images_02,
    footer_text : "REGISTER"
  },
  { 
    id:3,
    title :"Twin City 10K Run 2024 - Run for Women Empowerment(2nd ...", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_03,
    footer_text : "REGISTER"
  },
  { 
    id:4,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_04,
    footer_text : "REGISTER"
  },
  { 
    id:5,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_05,
    footer_text : "REGISTER"
  },
  { 
    id:6,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_06,
    footer_text : "REGISTER"
  },
  { 
    id:7,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_07,
    footer_text : "Closed"
  },
  { 
    id:8,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_08,
    footer_text : "REGISTER"
  },
  { 
    id:9,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_09,
    footer_text : "REGISTER"
  },
  { 
    id:10,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_10,
    footer_text : "REGISTER"
  },
  { 
    id:11,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_11,
    footer_text : "REGISTER"
  },
  { 
    id:12,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_12,
    footer_text : "REGISTER"
  },
  { 
    id:13,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_13,
    footer_text : "REGISTER"
  },
  { 
    id:14,
    title :" Alwal Runners Club  Season 2  2024", 
    para: "Organised By <br/> Alwal Runners Club 2nd Anniversary Run <br> Aranya Resort- By Mrugavani, Beside Shamirpet Deer ",
    image : images_14,
    footer_text : "REGISTER"
  },
 ]








export default function EventComponent() {
  return (
    <div className={classes.event_container}>


    {
      EVENTDATA.map(eventItem=>(

        <div className={classes.cardItem}>
        <div className="card m-3">
        <div className="row g-0">
          <div className="col-4">
            <img
              src={eventItem.image}
              style={{ height: "100%" }}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-8">
            <div className="card-header bg-transparent">{eventItem.title} </div>
            <div lassName="card-body">
              <p className="card-text">
                <p className={classes.bodytext}>
                  {eventItem.para}
                </p>
              </p>
            </div>
            <div className="card-footer bg-transparent">
              <div className="row">
                <div className="col-9">{eventItem.footer_text}</div>
                <div className="col-3 border-start"><i className="bi bi-share-fill"></i></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

      ))
    }
      
    </div>
  );
}
