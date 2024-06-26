import { useEffect, useState } from "react";

import Templates from "@/app/(data)/Templates";
import { TemplateCard } from "./template-card";

export interface TEMPLATE {
  name: string,
  desc: string,
  icon: string,
  category: string,
  slug: string,
  aiPrompt: string,
  form?: FORM[],
};

export interface FORM {
  label: string,
  field: string,
  name: string,
  required?:boolean,
}

export const TemplateListSection = ({userSearchInput}: any) => {

  const [templateList, setTemplatelist] = useState(Templates);

  useEffect(()=> {
    if(userSearchInput) {
      const filterData = Templates.filter(item => 
        item.name.toLocaleLowerCase().includes(userSearchInput.toLocaleLowerCase())
      );
      setTemplatelist(filterData);
    } else {
      setTemplatelist(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
        {templateList.map((item: TEMPLATE, index: number) => (
          <div key={index}>
            <TemplateCard {...item} />
          </div>
        ))}
    </div>
  );
};
