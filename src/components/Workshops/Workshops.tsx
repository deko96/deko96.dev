import { FC } from "react";
import { ComponentsData } from "../../types";
import moment from "moment";
import "./Workshops.css";

export const Workshops: FC<ComponentsData["workshops"]> = ({ title, data }) => {
  return (
    <section className="workshops">
      <h2 className="uppercase">{title}</h2>
      <div className="items">
        {data.map(({ title, date, description }) => {
          return (
            <div className="item" key={title + date}>
              <h6>
                {title} (<span>{moment(date).format("YYYY")})</span>
              </h6>
              <p className="text-secondary">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
