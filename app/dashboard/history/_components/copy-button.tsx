"use client";

import { Button } from "@/components/ui/button";

export const CopyButton = ({aiResponse}: any) => {
  return (
    <div>
        <Button
            variant="ghost"
            className="text-primary"
            onClick={() => navigator.clipboard.writeText(aiResponse)}
        >
            Copy
        </Button>
    </div>
  )
}
