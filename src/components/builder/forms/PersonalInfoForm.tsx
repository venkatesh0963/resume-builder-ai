"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import { useResumeStore } from "@/store/useResumeStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const personalInfoSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  jobTitle: z.string().optional(),
  email: z.string().email({ message: "Invalid email" }).or(z.literal("")).optional(),
  phone: z.string().optional(),
  location: z.string().optional(),
  website: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
});

type PersonalInfoValues = z.infer<typeof personalInfoSchema>;

export function PersonalInfoForm() {
  const { resumeData, setPersonalInfo } = useResumeStore();
  const personalInfo = resumeData.personalInfo;

  const { register, watch, formState: { errors } } = useForm<PersonalInfoValues>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: personalInfo,
  });

  useEffect(() => {
    const subscription = watch((value) => {
      setPersonalInfo(value as any);
    });
    return () => subscription.unsubscribe();
  }, [watch, setPersonalInfo]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // Create canvas to resize image
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("root");
        
        // Target max size 400x400
        const MAX_SIZE = 400;
        let width = img.width;
        let height = img.height;
        
        if (width > height && width > MAX_SIZE) {
          height *= MAX_SIZE / width;
          width = MAX_SIZE;
        } else if (height > MAX_SIZE) {
          width *= MAX_SIZE / height;
          height = MAX_SIZE;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx2 = canvas.getContext("2d");
        ctx2?.drawImage(img, 0, 0, width, height);
        
        // Export to base64 jpeg
        const base64 = canvas.toDataURL("image/jpeg", 0.8);
        setPersonalInfo({ photo: base64 });
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <form className="space-y-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-20 h-20 rounded-full border-2 border-slate-200 bg-slate-100 flex items-center justify-center overflow-hidden shrink-0">
          {personalInfo.photo ? (
            <img src={personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs text-slate-400 text-center px-2">No Photo</span>
          )}
        </div>
        <div className="space-y-2 flex-1">
          <Label htmlFor="photo">Profile Photo</Label>
          <div className="flex gap-2">
            <Input 
              id="photo" 
              type="file" 
              accept="image/*" 
              className="file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 flex-1"
              onChange={handlePhotoUpload}
            />
            {personalInfo.photo && (
              <button
                type="button"
                onClick={() => setPersonalInfo({ photo: undefined })}
                className="px-3 py-1 text-xs text-red-600 bg-red-50 hover:bg-red-100 rounded-md font-medium transition-colors"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="John" {...register("firstName")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Doe" {...register("lastName")} />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="jobTitle">Job Title</Label>
          <Input id="jobTitle" placeholder="Senior Frontend Engineer" {...register("jobTitle")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="john@example.com" {...register("email")} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+1 (555) 000-0000" {...register("phone")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location (City, State)</Label>
          <Input id="location" placeholder="San Francisco, CA" {...register("location")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="website">Website / Portfolio</Label>
          <Input id="website" placeholder="https://johndoe.com" {...register("website")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn URL</Label>
          <Input id="linkedin" placeholder="linkedin.com/in/johndoe" {...register("linkedin")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="github">GitHub URL</Label>
          <Input id="github" placeholder="github.com/johndoe" {...register("github")} />
        </div>
      </div>
    </form>
  );
}
