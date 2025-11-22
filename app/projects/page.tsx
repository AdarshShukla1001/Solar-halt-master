"use client";

import { redirect } from "next/navigation";

export default function ProjectsPage() {
  // Redirect any access to /projects to the new gallery page
  redirect("/gallery");
  return null;
}