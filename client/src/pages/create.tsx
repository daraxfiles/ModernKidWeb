import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Lightbulb,
  FileText,
  Users,
  Video,
  Scissors,
  MessageSquare,
  Share2,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Plus,
  X,
  Mic,
  Image,
  PenTool,
  Megaphone,
  Star,
  Save,
  Loader2,
} from "lucide-react";
import type { ProjectType, InsertProject } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";

const steps = [
  { id: 1, title: "Conceptualize", icon: Lightbulb, description: "Choose your project type and idea" },
  { id: 2, title: "Story & Script", icon: FileText, description: "Write your story and script" },
  { id: 3, title: "Plan & Collaborate", icon: Users, description: "Build your team and tasks" },
  { id: 4, title: "Produce", icon: Video, description: "Record and create content" },
  { id: 5, title: "Edit", icon: Scissors, description: "Polish your project" },
  { id: 6, title: "Review", icon: MessageSquare, description: "Get feedback and reflect" },
  { id: 7, title: "Share", icon: Share2, description: "Showcase your work" },
];

const projectTypes: { value: ProjectType; label: string; icon: typeof Video; desc: string }[] = [
  { value: "video_essay", label: "Video Essay", icon: Video, desc: "Tell a story through video" },
  { value: "podcast", label: "Podcast", icon: Mic, desc: "Share your voice" },
  { value: "photo_story", label: "Photo Story", icon: Image, desc: "Visual narratives" },
  { value: "digital_story", label: "Digital Story", icon: PenTool, desc: "Interactive storytelling" },
  { value: "infographic", label: "Infographic", icon: Lightbulb, desc: "Data visualization" },
  { value: "meme_ad", label: "Advertisement", icon: Megaphone, desc: "Persuasive media" },
];

const exampleIdeas = [
  "How social media affects our mental health",
  "Climate change in our local community",
  "The importance of recycling at school",
  "Cyberbullying and how to stop it",
  "Hidden history of our neighborhood",
];

const defaultTasks = [
  "Finalize script",
  "Gather props/materials",
  "Choose filming location",
  "Test recording equipment",
  "Create backup plan",
];

const teamRoles = [
  "Director",
  "Camera Operator",
  "Actor/Host",
  "Editor",
  "Writer",
  "Sound Designer",
  "Researcher",
];

export default function Create() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  const saveMutation = useMutation({
    mutationFn: async (projectData: Partial<InsertProject>) => {
      const response = await apiRequest("POST", "/api/projects", projectData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/projects"] });
      queryClient.invalidateQueries({ queryKey: ["/api/showcase"] });
      setIsSaved(true);
      toast({
        title: "Project Saved!",
        description: "Your progress has been saved successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Save Failed",
        description: "Could not save your project. Please try again.",
        variant: "destructive",
      });
    },
  });

  const [project, setProject] = useState<Partial<InsertProject>>({
    projectType: undefined,
    topic: "",
    audience: "",
    purpose: undefined,
    synopsis: "",
    script: "",
    storyboard: [
      { scene: 1, description: "" },
      { scene: 2, description: "" },
      { scene: 3, description: "" },
    ],
    teamMembers: [],
    tasks: defaultTasks.map((t) => ({ task: t, completed: false })),
    editingNotes: "",
    reflection: { proudOf: "", improve: "" },
    peerReview: { storyClarity: 3, soundQuality: 3, teamwork: 3, comments: "" },
    projectLink: "",
    projectDescription: "",
  });

  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("");
  const [newTask, setNewTask] = useState("");

  const updateProject = (updates: Partial<InsertProject>) => {
    setProject((prev) => ({ ...prev, ...updates }));
  };

  const addTeamMember = () => {
    if (newMemberName && newMemberRole) {
      updateProject({
        teamMembers: [...(project.teamMembers || []), { name: newMemberName, role: newMemberRole }],
      });
      setNewMemberName("");
      setNewMemberRole("");
    }
  };

  const removeTeamMember = (index: number) => {
    updateProject({
      teamMembers: project.teamMembers?.filter((_, i) => i !== index),
    });
  };

  const addTask = () => {
    if (newTask) {
      updateProject({
        tasks: [...(project.tasks || []), { task: newTask, completed: false }],
      });
      setNewTask("");
    }
  };

  const toggleTask = (index: number) => {
    const newTasks = [...(project.tasks || [])];
    newTasks[index].completed = !newTasks[index].completed;
    updateProject({ tasks: newTasks });
  };

  const removeTask = (index: number) => {
    updateProject({
      tasks: project.tasks?.filter((_, i) => i !== index),
    });
  };

  const updateStoryboard = (scene: number, description: string) => {
    const newStoryboard = [...(project.storyboard || [])];
    const index = newStoryboard.findIndex((s) => s.scene === scene);
    if (index >= 0) {
      newStoryboard[index].description = description;
    }
    updateProject({ storyboard: newStoryboard });
  };

  const addStoryboardScene = () => {
    const nextScene = (project.storyboard?.length || 0) + 1;
    updateProject({
      storyboard: [...(project.storyboard || []), { scene: nextScene, description: "" }],
    });
  };

  const progress = (currentStep / steps.length) * 100;

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return project.projectType && project.topic && project.audience && project.purpose;
      default:
        return true;
    }
  };

  const handleSave = () => {
    saveMutation.mutate(project);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Choose Your Project Type</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectTypes.map((type) => (
                  <Card
                    key={type.value}
                    className={`cursor-pointer transition-all hover-elevate ${
                      project.projectType === type.value
                        ? "ring-2 ring-primary bg-primary/5"
                        : ""
                    }`}
                    onClick={() => updateProject({ projectType: type.value })}
                    data-testid={`card-project-type-${type.value}`}
                  >
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${
                        project.projectType === type.value
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }`}>
                        <type.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{type.label}</p>
                        <p className="text-sm text-muted-foreground">{type.desc}</p>
                      </div>
                      {project.projectType === type.value && (
                        <CheckCircle className="h-5 w-5 text-primary ml-auto shrink-0" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="topic">Topic / Idea</Label>
                <Input
                  id="topic"
                  placeholder="What societal issue do you want to address?"
                  value={project.topic}
                  onChange={(e) => updateProject({ topic: e.target.value })}
                  className="mt-1.5"
                  data-testid="input-topic"
                />
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground mb-2">Need inspiration? Try one of these:</p>
                  <div className="flex flex-wrap gap-2">
                    {exampleIdeas.map((idea, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="cursor-pointer hover:bg-secondary"
                        onClick={() => updateProject({ topic: idea })}
                      >
                        {idea}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="audience">Who is your audience?</Label>
                <Input
                  id="audience"
                  placeholder="e.g., My classmates, Parents, Community members"
                  value={project.audience}
                  onChange={(e) => updateProject({ audience: e.target.value })}
                  className="mt-1.5"
                  data-testid="input-audience"
                />
              </div>

              <div>
                <Label>What is your purpose?</Label>
                <RadioGroup
                  value={project.purpose}
                  onValueChange={(value) => updateProject({ purpose: value as "inform" | "entertain" | "persuade" })}
                  className="mt-2 flex flex-wrap gap-4"
                >
                  {[
                    { value: "inform", label: "Inform", desc: "Share facts and information" },
                    { value: "entertain", label: "Entertain", desc: "Engage and delight" },
                    { value: "persuade", label: "Persuade", desc: "Change minds or behavior" },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={option.value} data-testid={`radio-${option.value}`} />
                      <Label htmlFor={option.value} className="font-normal cursor-pointer">
                        <span className="font-medium">{option.label}</span>
                        <span className="text-muted-foreground"> - {option.desc}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <Label htmlFor="synopsis">Synopsis</Label>
              <p className="text-sm text-muted-foreground mb-2">What happens in your story? Write a brief summary.</p>
              <Textarea
                id="synopsis"
                placeholder="In my video, I will explore how... The main message is..."
                value={project.synopsis}
                onChange={(e) => updateProject({ synopsis: e.target.value })}
                className="min-h-[120px]"
                data-testid="textarea-synopsis"
              />
            </div>

            <div>
              <Label htmlFor="script">Script / Dialogue</Label>
              <p className="text-sm text-muted-foreground mb-2">Write your narration, dialogue, or talking points.</p>
              <Textarea
                id="script"
                placeholder="[INTRO]
Hello everyone, today we're going to talk about...

[MAIN POINTS]
First, let me explain...

[CONCLUSION]
In summary..."
                value={project.script}
                onChange={(e) => updateProject({ script: e.target.value })}
                className="min-h-[200px] font-mono text-sm"
                data-testid="textarea-script"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <Label>Storyboard</Label>
                  <p className="text-sm text-muted-foreground">Plan your scenes visually.</p>
                </div>
                <Button variant="outline" size="sm" onClick={addStoryboardScene} data-testid="button-add-scene">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Scene
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.storyboard?.map((scene) => (
                  <Card key={scene.scene} className="bg-secondary/30 border-dashed">
                    <CardContent className="p-4">
                      <div className="h-20 bg-muted rounded-md flex items-center justify-center mb-3">
                        <span className="text-muted-foreground text-sm">Scene {scene.scene}</span>
                      </div>
                      <Textarea
                        placeholder="Describe what happens in this scene..."
                        value={scene.description}
                        onChange={(e) => updateStoryboard(scene.scene, e.target.value)}
                        className="min-h-[80px] text-sm"
                        data-testid={`textarea-scene-${scene.scene}`}
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  Writing Tips
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Keep sentences short and clear</li>
                  <li>Use everyday language your audience understands</li>
                  <li>Include a strong opening to grab attention</li>
                  <li>End with a clear call to action or takeaway</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <Label>Team Members</Label>
                  <p className="text-sm text-muted-foreground">Add your team and assign roles.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <Input
                  placeholder="Name"
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                  className="flex-1"
                  data-testid="input-member-name"
                />
                <Select value={newMemberRole} onValueChange={setNewMemberRole}>
                  <SelectTrigger className="w-full sm:w-40" data-testid="select-member-role">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    {teamRoles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={addTeamMember} disabled={!newMemberName || !newMemberRole} data-testid="button-add-member">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                {project.teamMembers?.map((member, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                        {member.name[0]}
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeTeamMember(i)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {project.teamMembers?.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No team members added yet. Add yourself and your teammates!
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <Label>Task Checklist</Label>
                  <p className="text-sm text-muted-foreground">Track what needs to be done.</p>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Add a task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTask()}
                  data-testid="input-new-task"
                />
                <Button onClick={addTask} disabled={!newTask} data-testid="button-add-task">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                {project.tasks?.map((task, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(i)}
                      data-testid={`checkbox-task-${i}`}
                    />
                    <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                      {task.task}
                    </span>
                    <Button variant="ghost" size="icon" className="ml-auto" onClick={() => removeTask(i)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-4">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4 text-accent" />
                  Teamwork Tips
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Listen to everyone's ideas respectfully</li>
                  <li>Give constructive feedback, not criticism</li>
                  <li>Share responsibilities fairly</li>
                  <li>Communicate clearly and often</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  Equipment Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { item: "Phone or tablet for recording", tip: "Make sure it's charged!" },
                    { item: "External microphone (optional)", tip: "For clearer audio" },
                    { item: "Tripod or stable surface", tip: "Avoid shaky footage" },
                    { item: "Good lighting", tip: "Natural light works great" },
                    { item: "Quiet recording space", tip: "Minimize background noise" },
                    { item: "Props and materials", tip: "Gather everything you need" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                      <Checkbox data-testid={`checkbox-equipment-${i}`} />
                      <div>
                        <p className="font-medium">{item.item}</p>
                        <p className="text-sm text-muted-foreground">{item.tip}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recording Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-medium mb-2">Framing a Shot</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Rule of thirds: Don't center everything</li>
                      <li>Leave headroom above the subject</li>
                      <li>Keep the camera steady</li>
                      <li>Use landscape orientation for video</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-medium mb-2">Recording Audio</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Get close to the microphone</li>
                      <li>Speak clearly and at a steady pace</li>
                      <li>Reduce background noise</li>
                      <li>Do a test recording first</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-chart-3/10 border-chart-3/20">
              <CardContent className="p-4">
                <h4 className="font-medium mb-2">Keep Clips Short and Focused</h4>
                <p className="text-sm text-muted-foreground">
                  Record shorter clips (10-30 seconds) rather than one long take. This makes editing much easier and lets you redo specific parts without starting over.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Editing Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "CapCut", desc: "Free video editor with effects", level: "Easy" },
                    { name: "iMovie", desc: "Apple's free editor", level: "Easy" },
                    { name: "Clipchamp", desc: "Microsoft's online editor", level: "Easy" },
                    { name: "Canva", desc: "Great for images/graphics", level: "Easy" },
                  ].map((tool, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Scissors className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{tool.name}</p>
                        <p className="text-sm text-muted-foreground">{tool.desc}</p>
                      </div>
                      <Badge variant="secondary">{tool.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Editing Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "Import all clips and organize them",
                    "Cut out mistakes and awkward pauses",
                    "Add titles and text overlays",
                    "Add transitions between scenes",
                    "Add background music (if allowed)",
                    "Check audio levels are consistent",
                    "Add credits at the end",
                    "Export final version",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50">
                      <Checkbox data-testid={`checkbox-editing-${i}`} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div>
              <Label htmlFor="editing-notes">Editing Notes</Label>
              <p className="text-sm text-muted-foreground mb-2">Keep track of changes you've made or need to make.</p>
              <Textarea
                id="editing-notes"
                placeholder="e.g., Need to re-record audio for scene 2, Add more B-roll footage..."
                value={project.editingNotes}
                onChange={(e) => updateProject({ editingNotes: e.target.value })}
                className="min-h-[120px]"
                data-testid="textarea-editing-notes"
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Self-Reflection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="proud">What are you most proud of?</Label>
                  <Textarea
                    id="proud"
                    placeholder="I'm proud of how we..."
                    value={project.reflection?.proudOf}
                    onChange={(e) =>
                      updateProject({
                        reflection: { ...project.reflection!, proudOf: e.target.value },
                      })
                    }
                    className="mt-1.5 min-h-[100px]"
                    data-testid="textarea-proud"
                  />
                </div>
                <div>
                  <Label htmlFor="improve">What would you improve next time?</Label>
                  <Textarea
                    id="improve"
                    placeholder="Next time, I would..."
                    value={project.reflection?.improve}
                    onChange={(e) =>
                      updateProject({
                        reflection: { ...project.reflection!, improve: e.target.value },
                      })
                    }
                    className="mt-1.5 min-h-[100px]"
                    data-testid="textarea-improve"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Peer Review</CardTitle>
                <p className="text-sm text-muted-foreground">Rate your project (or have a friend rate it!)</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { key: "storyClarity", label: "Story Clarity", desc: "Is the message clear?" },
                  { key: "soundQuality", label: "Sound Quality", desc: "Can you hear everything clearly?" },
                  { key: "teamwork", label: "Teamwork", desc: "How well did the team work together?" },
                ].map((item) => (
                  <div key={item.key}>
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <Label>{item.label}</Label>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() =>
                              updateProject({
                                peerReview: {
                                  ...project.peerReview!,
                                  [item.key]: star,
                                },
                              })
                            }
                            className="focus:outline-none"
                            data-testid={`button-star-${item.key}-${star}`}
                          >
                            <Star
                              className={`h-6 w-6 ${
                                star <= (project.peerReview?.[item.key as keyof typeof project.peerReview] as number || 0)
                                  ? "fill-chart-3 text-chart-3"
                                  : "text-muted-foreground"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                <div>
                  <Label htmlFor="comments">Additional Comments</Label>
                  <Textarea
                    id="comments"
                    placeholder="What worked well? What could be better?"
                    value={project.peerReview?.comments}
                    onChange={(e) =>
                      updateProject({
                        peerReview: { ...project.peerReview!, comments: e.target.value },
                      })
                    }
                    className="mt-1.5 min-h-[100px]"
                    data-testid="textarea-peer-comments"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 7:
        return (
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-primary/10 via-chart-2/10 to-chart-3/10 dark:from-primary/20 dark:via-chart-2/20 dark:to-chart-3/20">
              <CardContent className="p-8 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're Almost There!</h3>
                <p className="text-muted-foreground">
                  Share your completed project with the world.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div>
                <Label htmlFor="project-link">Project Link</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Paste a link to your final project (YouTube, Google Drive, etc.)
                </p>
                <Input
                  id="project-link"
                  placeholder="https://..."
                  value={project.projectLink}
                  onChange={(e) => updateProject({ projectLink: e.target.value })}
                  data-testid="input-project-link"
                />
              </div>

              <div>
                <Label htmlFor="project-description">Project Description</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Write a brief description for the showcase gallery.
                </p>
                <Textarea
                  id="project-description"
                  placeholder="This project explores... We created it because..."
                  value={project.projectDescription}
                  onChange={(e) => updateProject({ projectDescription: e.target.value })}
                  className="min-h-[120px]"
                  data-testid="textarea-project-description"
                />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Project Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Project Type</p>
                    <p className="font-medium">
                      {projectTypes.find((t) => t.value === project.projectType)?.label || "Not selected"}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Purpose</p>
                    <p className="font-medium capitalize">{project.purpose || "Not selected"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Topic</p>
                    <p className="font-medium">{project.topic || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Team Size</p>
                    <p className="font-medium">{project.teamMembers?.length || 0} members</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              className="w-full gap-2" 
              size="lg" 
              onClick={handleSave} 
              disabled={saveMutation.isPending}
              data-testid="button-submit-project"
            >
              {saveMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : isSaved ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Submitted! Submit Again?
                </>
              ) : (
                <>
                  <Share2 className="h-4 w-4" />
                  Submit to Showcase
                </>
              )}
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              Interactive Workspace
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Create Your Media Project
            </h1>
            <p className="text-lg text-muted-foreground">
              Follow the steps below to plan, create, and share your project.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-muted-foreground">
                Step {currentStep} of {steps.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(step.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  currentStep === step.id
                    ? "bg-primary text-primary-foreground"
                    : step.id < currentStep
                    ? "bg-secondary text-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
                data-testid={`button-step-${step.id}`}
              >
                {step.id < currentStep ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <step.icon className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">{step.title}</span>
              </button>
            ))}
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {(() => {
                  const CurrentStepIcon = steps[currentStep - 1].icon;
                  return <CurrentStepIcon className="h-5 w-5 text-primary" />;
                })()}
                Step {currentStep}: {steps[currentStep - 1].title}
              </CardTitle>
              <p className="text-muted-foreground">{steps[currentStep - 1].description}</p>
            </CardHeader>
            <CardContent>{renderStep()}</CardContent>
          </Card>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
              data-testid="button-previous"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <Button 
              variant="ghost" 
              onClick={handleSave} 
              disabled={saveMutation.isPending}
              data-testid="button-save"
            >
              {saveMutation.isPending ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              {saveMutation.isPending ? "Saving..." : "Save Progress"}
            </Button>

            <Button
              onClick={() => setCurrentStep((prev) => Math.min(steps.length, prev + 1))}
              disabled={currentStep === steps.length || !canProceed()}
              data-testid="button-next"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
