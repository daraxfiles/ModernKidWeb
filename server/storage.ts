import { randomUUID } from "crypto";
import type {
  Project,
  InsertProject,
  Contact,
  InsertContact,
  ShowcaseProject,
  InsertShowcaseProject,
} from "@shared/schema";

export interface IStorage {
  createProject(project: InsertProject): Promise<Project>;
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;

  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  createShowcaseProject(project: InsertShowcaseProject): Promise<ShowcaseProject>;
  getShowcaseProjects(): Promise<ShowcaseProject[]>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private contacts: Map<string, Contact>;
  private showcaseProjects: Map<string, ShowcaseProject>;

  constructor() {
    this.projects = new Map();
    this.contacts = new Map();
    this.showcaseProjects = new Map();

    this.initializeSampleShowcaseProjects();
  }

  private initializeSampleShowcaseProjects() {
    const sampleProjects: InsertShowcaseProject[] = [
      {
        title: "The Truth About School Lunch",
        creator: "Team Alpha",
        projectType: "video_essay",
        issueTheme: "Health & Nutrition",
        description: "An investigation into school lunch nutrition and what students really think about cafeteria food.",
      },
      {
        title: "Climate Change in Our Town",
        creator: "Green Team",
        projectType: "podcast",
        issueTheme: "Environment",
        description: "A podcast series interviewing local experts about how climate change affects our community.",
      },
      {
        title: "A Day in the Life of a Teacher",
        creator: "The Storytellers",
        projectType: "photo_story",
        issueTheme: "Education",
        description: "A visual journey following our favorite teachers through their busy days.",
      },
      {
        title: "Stop Cyberbullying Now",
        creator: "Digital Defenders",
        projectType: "meme_ad",
        issueTheme: "Online Safety",
        description: "A series of advertisements promoting kindness online and ways to combat cyberbullying.",
      },
      {
        title: "Local History Uncovered",
        creator: "History Hunters",
        projectType: "digital_story",
        issueTheme: "Community",
        description: "An interactive story about the hidden history of landmarks in our neighborhood.",
      },
      {
        title: "Social Media & Mental Health",
        creator: "Mind Matters",
        projectType: "infographic",
        issueTheme: "Mental Health",
        description: "Visual data showing how social media affects teen mental health and tips for healthy usage.",
      },
    ];

    sampleProjects.forEach((project, index) => {
      const id = `sample-${index + 1}`;
      this.showcaseProjects.set(id, {
        ...project,
        id,
        featured: index % 2 === 0,
      });
    });
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      submittedAt: new Date().toISOString(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createShowcaseProject(insertProject: InsertShowcaseProject): Promise<ShowcaseProject> {
    const id = randomUUID();
    const project: ShowcaseProject = {
      ...insertProject,
      id,
      featured: false,
    };
    this.showcaseProjects.set(id, project);
    return project;
  }

  async getShowcaseProjects(): Promise<ShowcaseProject[]> {
    return Array.from(this.showcaseProjects.values());
  }
}

export const storage = new MemStorage();
