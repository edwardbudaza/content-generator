"use client";

import { useState } from "react";

import { SearchSection } from "./_components/search-section";
import { TemplateListSection } from "./_components/template-list-section";

function DashboardPage() {
  const [userSearchInput, setUserSearchInput] = useState<string>("");

  return (
    <div>
      {/* Search Section */}
      <SearchSection 
        onSearchInput={(value:string) => setUserSearchInput(value)}
      />

      {/* Template List Section  */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default DashboardPage;