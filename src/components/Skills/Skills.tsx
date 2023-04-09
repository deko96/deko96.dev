import { FC } from "react";
import { ComponentsData } from "../../types";
import "./Skills.css";

export const Skills: FC<ComponentsData["skills"]> = ({ title, data }) => {
  return (
    <section className="skills">
      <h2 className="uppercase">{title}</h2>
      <div className="items">
        {data.map((skill) => {
          return (
            <div className="item" key={skill}>
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
};
