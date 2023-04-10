import { RefObject } from "react";

export type GenericComponent<D = any> = {
  title: "string";
  data: D;
};

export type ContactType =
  | "email"
  | "phone"
  | "location"
  | "linkedIn"
  | "github"
  | "website";

export type Contact = {
  type: ContactType;
  text: string;
  href?: string;
};

export type HeaderProps = {
  headline: string;
  title: string;
  subtitle: string;
  contacts: Contact[];
};

export type WorkExperience = {
  title: string;
  company: {
    name: string;
    url?: string;
  };
  startDate: string;
  endDate?: string;
};

export type Workshop = {
  title: string;
  date: string;
  description: string;
};

export type Project = Omit<WorkExperience, "company"> & {
  description: string;
};

export type Language = {
  language: string;
  proficiency: string;
};

export type ComponentsData = {
  header: HeaderProps;
  workExperience: GenericComponent<WorkExperience[]>;
  workshops: GenericComponent<Workshop[]>;
  skills: GenericComponent<string[]>;
  projects: GenericComponent<Project[]>;
  languages: GenericComponent<Language[]>;
};

export type DownloadPDFButtonProps = {
  contentRef: RefObject<HTMLElement>;
};
