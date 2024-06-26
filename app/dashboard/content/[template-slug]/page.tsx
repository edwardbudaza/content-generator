"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";

import { Button } from "@/components/ui/button";
import templates from "@/app/(data)/Templates"
import { FormSection } from "../_components/form-section"
import { OutputSection } from "../_components/output-section"
import { TEMPLATE } from "../../_components/template-list-section"



interface PROPS {
  params: {
    'template-slug':string
  }
}
const CreateNewContentPage = (props: PROPS ) => {

  const selectedTemplate:TEMPLATE | undefined = templates?.find((item) => item.slug === props.params["template-slug"]);
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const SelectedPrompt=selectedTemplate?.aiPrompt;
    const FinalAIPrompt=JSON.stringify(formData) + ", " + SelectedPrompt;
    const result = await chatSession.sendMessage(FinalAIPrompt); 

    setAiOutput(result?.response.text());
    await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
    setLoading(false);

  };

  const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
        const result=await db.insert(AIOutput).values({
            formData:formData,
            templateSlug:slug,
            aiResponse:aiResp,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/yyyy'),
        });

        console.log(result);
    }
    
  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button><ArrowLeft /> Back</Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* FormatSecxtion */}
        <FormSection 
          selectedTemplate={selectedTemplate}
          userFormInput={(v:any) => GenerateAIContent(v)}
          loading={loading}
        />

        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContentPage