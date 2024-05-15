import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    
    <div>
         <h3 className="text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200 mt-5 mx-10">
        About.
      </h3>
    <Container className="flex items-center justify-center py-20">
        
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="font-bold">
            <section className="mb-5">
            In the realm of sports media in Bangladesh, both offline and online platforms are highly active, especially in the domains of cricket and football. Because cricket and football are immensely popular, people are keen to read any news related to these sports. Is there any dedicated media outlet for coverage on Daba (Arm Wrestling)?
            </section>

            <section className="mb-5">
            In this context, there seems to be no definitive solution. In recent days, the Bangladesh Arm Wrestling Federation and some prominent arm wrestling clubs are tirelessly working from their positions. We see the results of their efforts in the participation of Bangladeshi arm wrestlers in international tournaments and their achievements. However, apart from important matters, is there any dedicated media outlet for publishing such news?
            </section>
            <section className="mb-5">
            Furthermore, if we talk about another pressing issue, it is the lack of content written in Bengali regarding arm wrestling. Almost everyone knows about arm wrestling, yet there is a scarcity of Bengali content on its history, books, or papers related to arm wrestling. Whatever existed previously might have failed to meet the demand of that time or has been lost. The global phenomenon of arm wrestling development has not sufficiently penetrated Bangladesh. What exists is sporadic and scattered.


            </section>

            <section className="mb-5">
            Right here lies the relevance of DabaPath. They aspire to gradually turn their modest role in publishing articles, news, or significant papers related to arm wrestling in Bengali into a substantial solution. They want their 'modest role' to slowly evolve into something extraordinary. They seek to be a one-stop solution for anything related to arm wrestling in Bengali.
            </section>

            <section className="mb-5">
            Their ambition or dream regarding DabaPath is immense. Fueled by strong enthusiasm, they have set specific goals for the next five years. What they need now is time, courage, and cooperation.
            </section>

            <section className="mb-5">
            They already have the first two—time and courage. But they desire 'cooperation' from their readers/viewers. This cooperation can be in the form of mental, social, financial, or moral support—a simple wish for success!
            </section>

      </h2>
      
      </div>
    </Container>
    </div>
  );
};

export default SuccessPage;