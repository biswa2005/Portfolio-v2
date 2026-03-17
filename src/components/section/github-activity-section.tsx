"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GithubContributions() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">GitHub Contributions</h2>

      <div className="border rounded-xl p-6 overflow-x-auto">
        <GitHubCalendar
          username="biswa2005"
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          blockSize={10}
          blockMargin={4}
          fontSize={12}
        />
      </div>
    </section>
  );
}
