import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import "../assets/css/track.scss";

const history = [
  {
    no: "01",
    name: "Education",
    list: [
      {
        year: 2017,
        till: 2020,
        title: "MAN 2 Yogyakarta",
        keyword: "Saintek/Science",
        grade: [],
      },
      {
        year: 2020,
        till: 2024,
        title: "Amikom University Yogyakarta",
        keyword: "Associate's degree",
        grade: [
          {
            add: "3.67",
          },
        ],
      },
    ],
  },
  {
    no: "02",
    name: "Experience",
    list: [
      {
        year: "Jan 2020",
        till: "Jul 2021",
        title: "Assistant Professor Graphic Design",
        keyword: "Amikom University Yogyakarta",
        grade: [
          {
            add: "Helping students who have difficulty practicing using Adobe Illustrator, Adobe Photoshop, and Adobe InDesign",
          },
          {
            add: "Assist the lecturer with explaining the materials if the lecturer is unable to attend",
          },
        ],
      },
      {
        year: "Sep 2022",
        till: "Dec 2022",
        title: "Intern UI Design",
        keyword: "Sevenpion",
        grade: [
          {
            add: "Collaborated with frontend and backend developer team to offer feedback",
          },
          {
            add: "Redesign e-commerce UI website",
          },
          {
            add: "Built several company profile websites",
          },
          {
            add: "Designed 4 - 5 types of digital invitations",
          },
          {
            add: "Create codable designs.",
          },
        ],
      },
    ],
  },
];
function Track() {
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? "track active" : "track close"}>
      {history.map((edu, i) => {
        return (
          <div key={i} className="track-main">
            <div className="track-title">
            <div>
              <h2>{edu.no}</h2>
              <h1>{edu.name}</h1>
            </div>
              <i onClick={() => setOpen(!open)}>
                <BsPlusCircle className="icon" />
              </i>
            </div>
            <div className= "track-content">
              {edu.list.map((hand, i) => (
                <div key={i} className="trk-main">
                  <span className="trk-line"></span>
                  <div className="trk-content">
                    <p>
                      {hand.year} - {hand.till}
                    </p>
                    <h1>{hand.title}</h1>
                    <h2>{hand.keyword}</h2>
                    {hand.grade?.map((li, i) => (
                      <div key={i}>
                        <li>{li.add}</li>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Track;
